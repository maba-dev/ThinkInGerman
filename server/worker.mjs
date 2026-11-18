// Cloudflare Worker: serves /api/claude with the shared handler, and every other path from the static files.
import { handleClaude } from "./claude.mjs";

export default {
  async fetch(req, env) {
    const { pathname } = new URL(req.url);
    if (pathname === "/api/claude") return handleClaude(req, env);
    if (pathname.startsWith("/api/")) return Response.json({ code: "not_found", message: "Not found." }, { status: 404 });
    return env.ASSETS.fetch(req);
  },
};
