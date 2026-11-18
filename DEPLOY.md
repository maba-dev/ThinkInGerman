# Mettre Denk auf Deutsch en ligne (Cloudflare ou Netlify)

Le site est statique (`index.html`, `app.js`, `data/`). Les fonctions qui utilisent Claude passent par une petite fonction serveur disponible à l'adresse `/api/claude`. Ces fonctions sont les exercices en plus, les histoires créées, les podcasts et le chat. La clé API reste sur le serveur : le navigateur ne la voit jamais.

Le code de cette fonction est dans [server/claude.mjs](server/claude.mjs). Il sert aux deux hébergeurs :
- **Cloudflare** : [server/worker.mjs](server/worker.mjs), configuré par [wrangler.jsonc](wrangler.jsonc). Le fichier `.assetsignore` empêche de publier les fichiers privés.
- **Netlify** : [netlify/functions/claude.mjs](netlify/functions/claude.mjs), configuré par [netlify.toml](netlify.toml).

## 1. Obtenir une clé API Claude

1. Crée un compte sur https://console.anthropic.com et ajoute un peu de crédit (Billing).
2. Va dans **API Keys** et crée une clé (elle commence par `sk-ant-`). Ne la mets jamais dans le code ni sur GitHub.
3. Dans **Limits**, fixe une limite de dépense mensuelle, par exemple 10 $. C'est une sécurité si quelqu'un abusait du site.

## 2a. Déployer sur Cloudflare (actuel : thinkingermanofmaba.cherif-ba.workers.dev)

1. Le Worker `thinkingermanofmaba` est relié au dépôt GitHub : chaque `git push` sur `main` le redéploie. Le nom dans `wrangler.jsonc` doit rester celui du Worker.
2. Dans le tableau de bord Cloudflare : **Workers & Pages → thinkingermanofmaba → Settings → Variables and Secrets → Add**. Ajoute, en type **Secret** :

| Variable | Valeur | Obligatoire |
|---|---|---|
| `ANTHROPIC_API_KEY` | ta clé `sk-ant-…` | oui |
| `SITE_ACCESS_CODE` | un code de ton choix, par exemple `denk-2026` | fortement conseillé |
| `CLAUDE_MODEL` | autre modèle que `claude-opus-5-5` | non |
| `CLAUDE_EFFORT` | `low` (par défaut), `medium` ou `high` | non |

3. Clique sur **Deploy** pour enregistrer les secrets. Ils s'appliquent tout de suite et restent en place lors des prochains déploiements.
4. Dans **Settings → Domains & Routes**, vérifie que `workers.dev` est sur **Enabled**.

## 2b. Déployer sur Netlify (autre possibilité)

1. Sur https://app.netlify.com : **Add new site → Import an existing project → GitHub →** choisis `ThinkInGerman`.
2. Laisse **Build command** vide. Le **Publish directory** est déjà réglé par `netlify.toml`. Netlify installe tout seul le SDK listé dans `package.json`.
3. Dans **Site configuration → Environment variables**, ajoute les mêmes variables que dans le tableau ci-dessus.
4. Relance un déploiement (**Deploys → Trigger deploy**) pour que les variables soient prises en compte.

## 3. Vérifier

- Ouvre `https://<ton-site>/api/claude` : tu dois voir `{"ok":true,...}`. Si tu vois `ANTHROPIC_API_KEY is not set`, la clé n'est pas encore enregistrée.
- Sur le site, va dans Grammaire → un point → **Créer 8 exercices**. La première fois, le site te demande le code d'accès, puis il le retient.

## Tester en local (optionnel)

```bash
npm install
# Cloudflare
printf 'ANTHROPIC_API_KEY=sk-ant-...\nSITE_ACCESS_CODE=test\n' > .dev.vars   # ignoré par git
npx wrangler dev                                                          # http://localhost:8787
# Netlify
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env                                # ignoré par git
npx netlify dev                                                           # http://localhost:8888
```

## Bon à savoir

- **Coût indicatif avec `claude-opus-5-5`** : environ 3 centimes pour 8 exercices ou une histoire, 9 centimes pour un podcast, moins d'un centime par message de chat. Une utilisation quotidienne revient à quelques euros par mois. Tu le vois dans la Console, onglet Usage.
- **Plan gratuit Cloudflare** : chaque requête n'a droit qu'à 10 ms de calcul. L'attente de la réponse de Claude ne compte pas, mais la lecture du flux de texte, si. Si les longues générations (podcasts) échouent et que l'onglet **Observability** du Worker affiche « Exceeded CPU time », passe au plan **Workers Paid** (5 $/mois).
- **Limite de 60 secondes par requête sur Netlify** : c'est pour ça que le site écrit les podcasts en deux moitiés hors de claude.ai.
- **Sans `SITE_ACCESS_CODE`**, n'importe qui ayant l'adresse du site peut utiliser ton crédit.
- **Voix et micro** : la voix Claude et la reconnaissance vocale n'existent que dans claude.ai. Ailleurs, le site utilise la voix allemande du navigateur, et les boutons micro sont masqués.
