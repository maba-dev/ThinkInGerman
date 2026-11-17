# Mettre Denk auf Deutsch en ligne sur Netlify

Le site est statique (`index.html`, `app.js`, `data/`). Les fonctions qui utilisent Claude passent par une fonction serveur, [netlify/functions/claude.mjs](netlify/functions/claude.mjs), disponible à l'adresse `/api/claude`. Ces fonctions sont les exercices en plus, les histoires créées, les podcasts et le chat. La clé API reste sur le serveur : le navigateur ne la voit jamais.

## 1. Obtenir une clé API Claude

1. Crée un compte sur https://console.anthropic.com et ajoute un peu de crédit (Billing).
2. Va dans **API Keys** et crée une clé (elle commence par `sk-ant-`). Ne la mets jamais dans le code ni sur GitHub.
3. Dans **Limits**, fixe une limite de dépense mensuelle, par exemple 10 $. C'est une sécurité si quelqu'un abusait du site.

## 2. Déployer

1. Pousse le dépôt sur GitHub (`git push`).
2. Sur https://app.netlify.com : **Add new site → Import an existing project → GitHub →** choisis `ThinkInGerman`.
3. Laisse **Build command** vide. Le **Publish directory** est déjà réglé par `netlify.toml`. Netlify installe tout seul le SDK listé dans `package.json`.
4. Dans **Site configuration → Environment variables**, ajoute :

| Variable | Valeur | Obligatoire |
|---|---|---|
| `ANTHROPIC_API_KEY` | ta clé `sk-ant-…` | oui |
| `SITE_ACCESS_CODE` | un code de ton choix, par exemple `think-2026` | fortement conseillé |
| `CLAUDE_MODEL` | autre modèle que `claude-opus-5-5` | non |
| `CLAUDE_EFFORT` | `low` (par défaut), `medium` ou `high` | non |

5. Relance un déploiement (**Deploys → Trigger deploy**) pour que les variables soient prises en compte.

## 3. Vérifier

- Ouvre `https://ton-site.netlify.app/api/claude` : tu dois voir `{"ok":true,...}`.
- Sur le site, va dans Grammaire → un point → **Créer 8 exercices**. La première fois, le site te demande le code d'accès, puis il le retient.

## Tester en local (optionnel)

```bash
npm install
echo "ANTHROPIC_API_KEY=sk-ant-..." > .env   # .env est ignoré par git
npx netlify dev                               # http://localhost:8888
```

## Bon à savoir

- **Coût indicatif avec `claude-opus-5-5`** : environ 3 centimes pour 8 exercices ou une histoire, 9 centimes pour un podcast, moins d'un centime par message de chat. Une utilisation quotidienne revient à quelques euros par mois. Tu le vois dans la Console, onglet Usage.
- **Limite de 60 secondes par requête sur Netlify** : c'est pour ça que le site écrit les podcasts en deux moitiés quand il tourne sur Netlify.
- **Sans `SITE_ACCESS_CODE`**, n'importe qui ayant l'adresse du site peut utiliser ton crédit.
- **Voix et micro** : la voix Claude et la reconnaissance vocale n'existent que dans claude.ai. Sur Netlify, le site utilise la voix du navigateur (accent UK ou US), et les boutons micro sont masqués.
