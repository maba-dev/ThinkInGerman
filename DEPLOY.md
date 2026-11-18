# Mettre Denk auf Deutsch en ligne (Cloudflare ou Netlify)

Le site est statique (`index.html`, `app.js`, `data/`, `cours/`). Les fonctions qui utilisent l'IA passent par une petite fonction serveur disponible à l'adresse `/api/claude` : le chat « Parler avec l'IA », les exercices en plus, les histoires créées et la réécriture de podcasts. Aucune clé n'est jamais envoyée au navigateur.

Le code de cette fonction est dans [server/claude.mjs](server/claude.mjs). Elle choisit l'IA toute seule :

| Situation | IA utilisée | Coût |
|---|---|---|
| `ANTHROPIC_API_KEY` est enregistrée | Claude (`claude-opus-5-5`) | payant, à l'usage (meilleure qualité) |
| pas de clé, site sur **Cloudflare** | Cloudflare Workers AI (`mistral-small-3.1-24b-instruct`) | **gratuit** jusqu'à 10 000 « neurons » par jour |
| pas de clé, site sur Netlify | aucune : les fonctions IA sont masquées | — |

Fichiers par hébergeur :
- **Cloudflare** : [server/worker.mjs](server/worker.mjs), configuré par [wrangler.jsonc](wrangler.jsonc). La ligne `"ai": { "binding": "AI" }` active l'IA gratuite. Le fichier `.assetsignore` empêche de publier les fichiers privés.
- **Netlify** : [netlify/functions/claude.mjs](netlify/functions/claude.mjs), configuré par [netlify.toml](netlify.toml). Claude seulement.

## 1. Déployer sur Cloudflare (actuel : thinkingermanofmaba.cherif-ba.workers.dev)

1. Le Worker `thinkingermanofmaba` est relié au dépôt GitHub : chaque `git push` sur `main` le redéploie. Le nom dans `wrangler.jsonc` doit rester celui du Worker.
2. **Rien d'autre à faire pour l'IA gratuite** : elle marche dès le déploiement.
3. Conseillé : dans **Workers & Pages → thinkingermanofmaba → Settings → Variables and Secrets → Add**, ajoute en type **Secret** `SITE_ACCESS_CODE` (un code de ton choix, par exemple `denk-2026`). Sans code, n'importe qui ayant l'adresse peut épuiser ton quota gratuit du jour.
4. Dans **Settings → Domains & Routes**, vérifie que `workers.dev` est sur **Enabled**.

Variables possibles (toutes facultatives) :

| Variable | Rôle |
|---|---|
| `SITE_ACCESS_CODE` | code demandé une fois au visiteur (fortement conseillé) |
| `ANTHROPIC_API_KEY` | ta clé `sk-ant-…` : le site passe alors sur Claude (payant) |
| `CLAUDE_MODEL`, `CLAUDE_EFFORT` | réglages de Claude (`low` par défaut) |
| `WORKERS_AI_MODEL` | autre modèle gratuit, par exemple `@cf/meta/llama-3.3-70b-instruct-fp8-fast` |

## 2. Déployer sur Netlify (autre possibilité, Claude seulement)

1. Sur https://app.netlify.com : **Add new site → Import an existing project → GitHub →** choisis `ThinkInGerman`. Laisse **Build command** vide.
2. Dans **Site configuration → Environment variables**, ajoute `ANTHROPIC_API_KEY` (clé créée sur https://console.anthropic.com, avec une limite de dépense dans **Limits**) et `SITE_ACCESS_CODE`.
3. Relance un déploiement (**Deploys → Trigger deploy**).

## 3. Vérifier

- Ouvre `https://<ton-site>/api/claude` : tu dois voir `{"ok":true,"provider":"workers-ai",...}` (ou `"claude"` si une clé est enregistrée).
- Sur le site, va dans **Parler avec l'IA**, ou dans Grammaire → un point → **Créer 8 exercices**. Si tu as mis un code d'accès, le site te le demande la première fois, puis il le retient.

## Bon à savoir

- **Quota gratuit de Workers AI** : 10 000 neurons par jour, remis à zéro à minuit UTC (1 h du matin à Paris en hiver, 2 h en été). Avec Mistral Small, cela représente à peu près 100 à 150 messages de chat, ou 50 à 60 séries d'exercices par jour. Quand il est épuisé, le site l'indique et l'IA revient la nuit suivante : rien n'est facturé sur le plan gratuit. Ta consommation est visible dans **AI → Workers AI** du tableau de bord.
- **Qualité** : le modèle gratuit converse bien, mais il est moins fiable que Claude pour corriger les fautes, surtout en allemand. Garde un œil critique sur les corrections.
- **Plan gratuit Cloudflare** : chaque requête a droit à 10 ms de calcul. L'IA gratuite ne pose pas de problème (le serveur transmet la réponse sans la retraiter). Avec Claude, si les longues générations échouent avec « Exceeded CPU time » dans l'onglet **Observability**, passe au plan **Workers Paid** (5 $/mois).
- **Coût indicatif avec Claude** : environ 3 centimes pour 8 exercices ou une histoire, 9 centimes pour un podcast, moins d'un centime par message de chat.
- **Voix et micro** : la voix Claude et la reconnaissance vocale n'existent que dans claude.ai. Ailleurs, le site utilise la voix allemande du navigateur, et les boutons micro sont masqués.

## Tester en local (optionnel)

```bash
npm install
npx wrangler login          # l'IA gratuite passe par ton compte Cloudflare, même en local
npx wrangler dev            # http://localhost:8787
```
