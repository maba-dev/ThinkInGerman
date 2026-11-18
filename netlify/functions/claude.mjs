// Netlify Function: serves /api/claude with the shared handler in server/claude.mjs.
import { handleClaude } from "../../server/claude.mjs";

export default (req) => handleClaude(req, process.env);

export const config = { path: "/api/claude" };
