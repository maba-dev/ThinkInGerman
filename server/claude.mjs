// The site's own bridge to the Claude API, shared by Cloudflare (server/worker.mjs) and Netlify (netlify/functions/claude.mjs).
// The browser never sees the API key: it calls /api/claude, and this handler calls Claude.
//
// Environment variables (Cloudflare > Settings > Variables and Secrets, or Netlify > Environment variables):
//   ANTHROPIC_API_KEY   required — your key from console.anthropic.com
//   SITE_ACCESS_CODE    strongly recommended — a code the visitor must type once, so strangers can't spend your credit
//   CLAUDE_MODEL        optional — defaults to claude-opus-5-5
//   CLAUDE_EFFORT       optional — low | medium | high (default low: fast answers, well under Netlify's 60 s limit)
import Anthropic from "@anthropic-ai/sdk";

const EFFORTS = new Set(["low", "medium", "high"]);
const MAX_BODY_CHARS = 200_000;
const MAX_TURNS = 80;

const fail = (status, code, message) => Response.json({ code, message }, { status });

// Accepts the same input as the claude.ai page capability: a prompt string, or
// user/assistant turns that start and end with a user turn.
function toMessages(input) {
  if (typeof input === "string") return input.trim() ? [{ role: "user", content: input }] : null;
  if (!Array.isArray(input) || !input.length || input.length > MAX_TURNS) return null;
  const out = [];
  for (const turn of input) {
    if (!turn || (turn.role !== "user" && turn.role !== "assistant") || typeof turn.content !== "string" || !turn.content.trim()) return null;
    const last = out[out.length - 1];
    if (last && last.role === turn.role) last.content += "\n\n" + turn.content; // merge consecutive turns of the same role
    else out.push({ role: turn.role, content: turn.content });
  }
  return out[0].role === "user" && out[out.length - 1].role === "user" ? out : null;
}

function errorCode(err) {
  if (err instanceof Anthropic.APIUserAbortError) return "cancelled";
  if (err instanceof Anthropic.RateLimitError) return "rate_limited";
  if (err instanceof Anthropic.AuthenticationError || err instanceof Anthropic.PermissionDeniedError) return "sampling_disabled";
  if (err instanceof Anthropic.BadRequestError) return "invalid_request";
  return "upstream_error";
}

// `env` holds the variables above: process.env on Netlify, the Worker's env on Cloudflare.
export async function handleClaude(req, env) {
  if (req.method === "GET") {
    if (!env.ANTHROPIC_API_KEY) return fail(503, "sampling_disabled", "ANTHROPIC_API_KEY is not set on the server.");
    return Response.json({ ok: true, accessCode: Boolean(env.SITE_ACCESS_CODE) });
  }
  if (req.method !== "POST") return fail(405, "invalid_request", "Use POST.");

  if (!env.ANTHROPIC_API_KEY) return fail(503, "sampling_disabled", "ANTHROPIC_API_KEY is not set on the server.");
  const code = env.SITE_ACCESS_CODE;
  if (code && req.headers.get("x-access-code") !== code) return fail(401, "access_code", "Wrong or missing access code.");

  const raw = await req.text();
  if (raw.length > MAX_BODY_CHARS) return fail(413, "prompt_too_large", "Request too large.");
  let payload;
  try { payload = JSON.parse(raw); } catch { return fail(400, "invalid_request", "Body must be JSON."); }
  const messages = toMessages(payload.input);
  if (!messages) return fail(400, "invalid_request", "input must be a prompt, or turns that start and end with a user turn.");
  const effort = EFFORTS.has(payload.effort) ? payload.effort : (EFFORTS.has(env.CLAUDE_EFFORT) ? env.CLAUDE_EFFORT : "low");

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const stream = client.beta.messages.stream({
    model: env.CLAUDE_MODEL || "claude-opus-5-5",
    max_tokens: 12000,
    // If a safety classifier declines, the API retries on a fallback model inside the same call.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort },
    system: "You write content for a German-learning website used by a French-speaking adult. Follow the requested output format exactly.",
    messages,
  });

  // Stream the answer to the browser as NDJSON: {"t": "..."} chunks, then {"done": true} or {"error": "..."}.
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      const send = (obj) => controller.enqueue(encoder.encode(JSON.stringify(obj) + "\n"));
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") send({ t: event.delta.text });
        }
        const message = await stream.finalMessage();
        if (message.stop_reason === "refusal") send({ error: "refused" });
        else send({ done: true, truncated: message.stop_reason === "max_tokens" });
      } catch (err) {
        console.error("Claude request failed:", err);
        send({ error: errorCode(err) });
      }
      controller.close();
    },
    cancel() { stream.abort(); },
  });
  return new Response(body, { headers: { "content-type": "application/x-ndjson; charset=utf-8", "cache-control": "no-store" } });
}
