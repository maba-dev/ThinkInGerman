/* Denk auf Deutsch — app logic. Data lives in data/*.js (window.DATA). */
(() => {
"use strict";
const D = window.DATA;

/* ---------- language of the explanations: French or English (data/i18n.js picks it, the menu button switches it) ----------
   Tx("texte") or Tx`texte ${x}` returns the English version from DATA.I18N_UI when English is on, else the French text.
   Data strings (grammar, chunks, phonetics…) are translated once at start from DATA.I18N. */
const LANG = D.LANG === "en" ? "en" : "fr", EN = LANG === "en";
const UI_EN = EN ? D.I18N_UI || {} : {};
function Tx(s, ...v) {
  if (typeof s === "string") return EN && UI_EN[s] != null ? UI_EN[s] : s;
  const t = EN ? UI_EN[s.reduce((a, q, i) => a + (i ? "{" + (i - 1) + "}" : "") + q, "")] : null;
  return t != null ? t.replace(/\{(\d+)\}/g, (m, i) => v[+i]) : s.reduce((a, q, i) => a + (i ? v[i - 1] : "") + q, "");
}
if (EN && D.I18N) (function tr(o) {
  for (const k in o) {
    if (k === "I18N" || k === "I18N_UI" || k === "podScripts" || k === "id") continue;
    const v = o[k];
    if (typeof v === "string") { const t = D.I18N[v]; if (t != null) o[k] = t; }
    else if (v && typeof v === "object") tr(v);
  }
})(D);
const NATIVE = EN ? "English" : "French";
/* Phonetic chart colours: how hard each German sound is for an English speaker (2 = doesn't exist, 1 = close, 0 = same). */
if (EN && D.ipa) {
  const HARD_EN = { "ɪ": 0, "ʊ": 0, "œ": 2, "ə": 0, "ɐ": 1, "eː": 1, "oː": 1, "yː": 2, "øː": 2, "ɔʏ̯": 0, "ʁ": 2, "h": 0, "ʃ": 0, "ŋ": 0, "v": 0, "f": 0, "z": 0, "ʔ": 1, "p · t · k": 0 };
  Object.values(D.ipa).forEach(list => list.forEach(x => { if (HARD_EN[x.s] != null) x.hard = HARD_EN[x.s]; }));
}
if (EN) {
  document.querySelectorAll("[data-en]").forEach(el => { el.innerHTML = el.dataset.en; });
  document.querySelectorAll("[data-en-label]").forEach(el => { el.setAttribute("aria-label", el.dataset.enLabel); if (el.title) el.title = el.dataset.enLabel; });
}
{ const b = document.getElementById("lang-btn"); if (b) { b.textContent = EN ? "🇫🇷 Français" : "🇬🇧 English"; b.title = EN ? "Afficher les explications en français" : "Show the explanations in English"; b.lang = EN ? "fr" : "en"; } }

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const dayIndex = Math.floor(Date.now() / 864e5);
const norm = s => String(s).toLowerCase().normalize("NFC").replace(/[’']/g, "'").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim();
const ARTICLES = ["der", "die", "das"];
const PLURAL_ONLY = new Set(["die Nudeln", "die Kopfschmerzen", "die Kopfhörer", "die Daten", "die Schulden", "die Ersparnisse", "die Studiengebühren", "die Grundrechte", "die fossilen Brennstoffe", "die Nebenkosten"]);
/* Colour the article of a German noun: der (blue), die (red), das (green), plural-only (grey). */
function artHtml(word) {
  const m = String(word).match(/^(der|die|das) (.+)$/);
  if (!m) return esc(word);
  const cls = PLURAL_ONLY.has(word) ? "pl" : m[1];
  return `<span class="art ${cls}" title="${cls === "pl" ? Tx("pluriel") : m[1] === "der" ? Tx("masculin") : m[1] === "die" ? Tx("féminin") : Tx("neutre")}">${m[1]}</span> ${esc(m[2])}`;
}

const IC = {
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M18.5 6.5a8 8 0 0 1 0 11"/></svg>',
  slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 10.5a2.5 2.5 0 0 1 0 3"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>'
};
const sayBtn = (t, label = Tx("Écouter")) => `<button class="icon-btn" data-act="say" data-t="${esc(t)}" aria-label="${label}" title="${label}">${IC.speaker}</button>`;
const slowBtn = t => Tx`<button class="icon-btn" data-act="say" data-slow="1" data-t="${esc(t)}" aria-label="Écouter lentement" title="Écouter lentement">${IC.slow}</button>`;
const micBtn = t => Tx`<button class="icon-btn mic" data-act="mic" data-t="${esc(t)}" aria-label="Dis-le (reconnaissance vocale)" title="Dis-le : prononce le mot">${IC.mic}</button>`;
const starBtn = id => `<button class="icon-btn${known.has(id) ? " on" : ""}" data-act="known" data-id="${esc(id)}" aria-pressed="${known.has(id)}" aria-label="Je connais" title="Je connais">${IC.star}</button>`;
const lvlTag = l => `<span class="lvl ${l}">${l}</span>`;

/* ---------------- storage (per browser) ---------------- */
const store = {
  get(k, d) { try { const v = localStorage.getItem("dad:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("dad:" + k, JSON.stringify(v)); } catch (e) { /* storage blocked */ } }
};
const known = new Set(store.get("known", []));
const settings = Object.assign({ engine: "", rate: 1, immersion: true }, store.get("settings", {}));
const saveSettings = () => store.set("settings", settings);
function toggleKnown(id) {
  known.has(id) ? known.delete(id) : known.add(id);
  store.set("known", [...known]);
  renderNav();
}
const countKnown = prefix => [...known].filter(k => k.startsWith(prefix)).length;

/* ---------------- toast & popover ---------------- */
let toastTimer;
function toast(msg, ms = 3200) {
  const t = $("#toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, ms);
}
function openPop(html) { const p = $("#pop"); p.innerHTML = html; p.hidden = false; }
function closePop() { $("#pop").hidden = true; }

/* ---------------- audio: Claude voice or browser voice ---------------- */
const Audio = {
  tts: null, ttsDenied: false, voices: [], current: null, lineHandler: null,
  async init() {
    if ("speechSynthesis" in window) {
      const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^de([-_]|$)/i.test(v.lang)); buildEngineSelect(); };
      load(); speechSynthesis.onvoiceschanged = load;
    }
    buildEngineSelect();
    if (window.claude && typeof window.claude.use === "function") {
      try {
        const t = await window.claude.use("tts");
        if (t) {
          this.tts = t;
          t.onState(({ state }) => this.setSpeaking(state !== "idle"));
          t.onLine(({ id }) => { if (this.lineHandler) this.lineHandler(id); });
          if (t.setRate) t.setRate(settings.rate).catch(() => {});
          buildEngineSelect();
        }
      } catch (e) { /* no tts here */ }
    }
  },
  engine() {
    const e = settings.engine;
    if (e === "claude") return this.tts ? "claude" : (this.ttsDenied ? "none" : this.browserDefault());
    if (e === "de" || e === "at" || e === "ch") return e;
    return this.tts ? "claude" : this.browserDefault();
  },
  browserDefault() { return "speechSynthesis" in window ? "de" : "none"; },
  voiceFor(accent, alt) {
    const re = accent === "at" ? /de[-_]AT/i : accent === "ch" ? /de[-_]CH/i : /de[-_]DE/i;
    const list = this.voices.filter(v => re.test(v.lang));
    const main = list.find(v => /natural|neural|online|google/i.test(v.name)) || list[0] || this.voices[0] || null;
    if (!alt) return main;
    return list.find(v => v !== main) || this.voices.find(v => v !== main && !re.test(v.lang)) || main;
  },
  paused: false,
  pause() {
    if (this.engine() === "claude" && this.tts) this.tts.pause().catch(() => {});
    else if ("speechSynthesis" in window) speechSynthesis.pause();
    this.paused = true;
  },
  resume() {
    if (this.engine() === "claude" && this.tts) this.tts.resume().catch(() => {});
    else if ("speechSynthesis" in window) speechSynthesis.resume();
    this.paused = false;
  },
  /* lines: string | [{text, id}] ; opts: {rate, onLine(id), onEnd()} */
  speak(lines, opts = {}) {
    const arr = typeof lines === "string" ? [{ text: lines }] : lines;
    const rate = opts.rate || settings.rate;
    const token = {}; this.current = token;
    const onLine = opts.onLine || null;
    let ended = false;
    const finish = () => { if (ended) return; ended = true; if (onLine) onLine(null); if (opts.onEnd) opts.onEnd(); };
    const eng = this.engine();
    if (eng === "none") { toast(Tx("Aucune voix disponible : choisis une voix du navigateur dans les réglages audio.")); return; }
    this.paused = false;
    if (eng === "claude") {
      this.lineHandler = id => { if (this.current === token && onLine) onLine(id); };
      const VO = { A: "buttery", B: "airy" };
      const batches = [];
      for (let k = 0; k < arr.length; k += 90) batches.push(arr.slice(k, k + 90));
      const run = bi => {
        const lines = batches[bi].map(l => Object.assign({ text: l.text, language: "de" }, l.id ? { id: l.id } : {}, VO[l.voice] ? { voice: VO[l.voice] } : {}));
        (bi === 0 ? this.tts.speak(lines, { rate, language: "de" }) : this.tts.add(lines, { rate, language: "de" }))
          .then(() => { if (this.current === token && bi + 1 < batches.length) run(bi + 1); else finish(); })
          .catch(err => { finish(); if (err && err.code !== "stopped") this.handleError(err.code); });
      };
      run(0);
      return;
    }
    speechSynthesis.cancel();
    const v = this.voiceFor(eng), vB = this.voiceFor(eng, true);
    let i = 0;
    const next = () => {
      if (this.current !== token) { finish(); return; }
      if (i >= arr.length) { this.setSpeaking(false); finish(); return; }
      const l = arr[i++];
      const u = new SpeechSynthesisUtterance(l.text);
      const vv = l.voice === "B" ? vB : v;
      if (vv) { u.voice = vv; u.lang = vv.lang; } else { u.lang = ({ at: Tx("de-AT"), ch: Tx("de-CH") })[eng] || Tx("de-DE"); }
      if (l.voice && (!vB || vB === v)) u.pitch = l.voice === "B" ? 0.7 : 1.2; /* one voice only: Lena higher, Jonas lower */
      u.rate = rate;
      u.onstart = () => { if (this.current === token && onLine) onLine(l.id); };
      u.onend = next; u.onerror = next;
      speechSynthesis.speak(u);
    };
    this.setSpeaking(true);
    setTimeout(next, 30);
  },
  stop() {
    this.current = null;
    if (this.tts) this.tts.stop().catch(() => {});
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    this.setSpeaking(false);
  },
  setSpeaking(b) { $("#nowplaying").hidden = !b; },
  handleError(code) {
    if (code === "not_granted" || code === "unavailable") {
      this.tts = null; this.ttsDenied = true; buildEngineSelect();
      toast(Tx("La voix naturelle est coupée pour cette page. Tu peux choisir une voix du navigateur dans les réglages audio."), 5000);
    } else if (code === "rate_limited") toast(Tx("Beaucoup d'écoutes avec la voix naturelle : réessaie dans un moment, ou passe sur la voix du navigateur."), 5000);
    else if (code === "no_gesture") toast(Tx("Clique encore une fois pour écouter."));
    else if (code === "busy") toast(Tx("Le micro est actif : attends la fin de l'écoute."));
    else toast(Tx("L'audio n'a pas pu être lu. Réessaie."));
  }
};
function buildEngineSelect() {
  const sel = $("#set-engine"); if (!sel) return;
  const opts = [];
  if (Audio.tts) opts.push(["claude", Tx("Voix IA (naturelle)")]);
  if ("speechSynthesis" in window) { opts.push(["de", Tx("Navigateur — Allemagne")]); opts.push(["at", Tx("Navigateur — Autriche")]); opts.push(["ch", Tx("Navigateur — Suisse")]); }
  if (!opts.length) opts.push(["", Tx("Aucune voix disponible")]);
  const cur = Audio.engine();
  sel.innerHTML = opts.map(([v, l]) => `<option value="${v}"${v === cur ? " selected" : ""}>${l}</option>`).join("");
}

/* ---------------- dictation: say it, the page checks it ---------------- */
const Mic = {
  d: null, target: "", heard: "", timer: null,
  async init() {
    if (!(window.claude && typeof window.claude.use === "function")) return;
    try { this.d = await window.claude.use("dictation"); } catch (e) { this.d = null; }
    if (!this.d) return;
    document.body.classList.add("has-mic");
    this.d.onPartial(({ text }) => {
      if (this.mode === "chat") { const p = $("#chat-partial"); if (p) p.textContent = text || Tx("Je t'écoute…"); return; }
      if (text) this.render(this.heard + " " + text, true);
    });
    this.d.onFinal(({ text }) => {
      if (this.mode === "chat") { const i = $("#chat-in"); if (i) i.value = i.value ? i.value + text : text.trimStart(); return; }
      this.heard = (this.heard + text).trim(); this.render(this.heard, false); if (this.matches()) this.d.stop().catch(() => {});
    });
    this.d.onState(({ state, reason }) => {
      if (this.mode === "chat") {
        const b = $("#chat-mic"), p = $("#chat-partial");
        if (b) b.classList.toggle("on", state !== "idle");
        if (p) p.textContent = state === "idle" ? "" : (state === "listening" ? Tx("Je t'écoute… parle en allemand, puis touche le micro pour arrêter.") : "…");
        return;
      }
      if (state === "idle") { clearTimeout(this.timer); this.result(reason); }
    });
  },
  mode: "check",
  fail(err) {
    const c = err && err.code;
    if (c === "not_granted") { toast(Tx("Micro refusé pour cette page. Tu peux le réactiver dans le menu Permissions de l'artifact."), 5000); document.body.classList.remove("has-mic"); }
    else if (c === "unavailable") { toast(Tx("Reconnaissance vocale indisponible ici.")); document.body.classList.remove("has-mic"); }
    else if (c === "dismissed") toast(Tx("Autorise le micro pour pouvoir parler."));
    else if (c === "rate_limited") toast(Tx("Trop d'essais d'un coup, attends quelques secondes."));
    else if (c === "busy") toast(Tx("Attends la fin de la lecture audio."));
    else if (c !== "stopped") toast(Tx("Le micro n'a pas démarré. Réessaie."));
  },
  startChat() {
    if (!this.d) { toast(Tx("La reconnaissance vocale marche dans Chrome ou Edge, sur claude.ai.")); return; }
    if (this.d.active()) { this.d.stop().catch(() => {}); return; }
    this.mode = "chat";
    Audio.stop();
    this.d.start({ language: "de" }).catch(err => this.fail(err));
  },
  start(target) {
    if (!this.d) { toast(Tx("La reconnaissance vocale marche dans Chrome ou Edge, sur claude.ai.")); return; }
    this.mode = "check";
    Audio.stop();
    this.target = target.split(" / ")[0].replace(/\(.*?\)/g, "").trim();
    this.heard = "";
    const box = $("#listening");
    box.hidden = false;
    box.innerHTML = Tx`<div class="row"><span class="pulse"></span><b>Je t'écoute… dis :</b> <span>${esc(this.target)}</span></div><div class="heard" id="heard">…</div><div class="row"><button class="btn" data-act="mic-stop">Terminer</button></div>`;
    this.d.start({ language: "de" }).catch(err => { this.fail(err); $("#listening").hidden = true; });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.d.stop().catch(() => {}), 5000);
  },
  matches() {
    const want = norm(this.target).split(" ").filter(w => !ARTICLES.includes(w));
    const got = norm(this.heard).split(" ");
    return want.length > 0 && want.every(w => got.includes(w));
  },
  render(text, partial) { const h = $("#heard"); if (h) { h.textContent = text || "…"; h.style.opacity = partial ? .6 : 1; } },
  result(reason) {
    const box = $("#listening"); if (box.hidden) return;
    if (!this.heard) {
      box.innerHTML = Tx`<b>Je n'ai rien entendu.</b><span class="muted small">Rapproche-toi du micro et parle clairement.</span><div class="row"><button class="btn primary" data-act="mic" data-t="${esc(this.target)}">Réessayer</button><button class="btn ghost" data-act="mic-close">Fermer</button></div>`;
      return;
    }
    const ok = this.matches();
    box.innerHTML = ok
      ? Tx`<b style="color:var(--good)">Compris ! On a bien entendu « ${esc(this.heard)} ».</b><div class="row"><button class="btn" data-act="say" data-t="${esc(this.target)}">${IC.speaker} Comparer avec le modèle</button><button class="btn ghost" data-act="mic-close">Fermer</button></div>`
      : Tx`<b style="color:var(--bad)">On a entendu « ${esc(this.heard)} », pas « ${esc(this.target)} ».</b><span class="muted small">Écoute le modèle, puis réessaie en exagérant le son.</span><div class="row"><button class="btn" data-act="say" data-t="${esc(this.target)}">${IC.speaker} Modèle</button><button class="btn primary" data-act="mic" data-t="${esc(this.target)}">Réessayer</button><button class="btn ghost" data-act="mic-close">Fermer</button></div>`;
  }
};

/* ---------------- level ---------------- */
const curLvl = () => (LEVELS.includes(settings.level) ? settings.level : null);
const LVINFO = id => D.levels.find(l => l.id === id);
const NEXT_LVL = l => LEVELS[LEVELS.indexOf(l) + 1] || null;
function setLevel(l) {
  if (!LEVELS.includes(l)) return;
  settings.level = l; saveSettings();
  Object.keys(pqs).forEach(k => delete pqs[k]);
  Object.assign(state, { cf: null, pf: null, flash: null, dictI: 0, chunkCat: "all", chunkLimit: 60, pvCat: "all", pvPart: "", practice: {}, practiceSpec: {} });
}

/* ---------------- navigation ---------------- */
const vocabAll = D.vocab.flatMap(t => t.words.map(w => ({ e: w[0], w: w[1], ipa: w[2], lvl: w[3], ex: w[4], pl: w[5] || "", theme: t.id })));
const lvlVocab = (L = curLvl()) => vocabAll.filter(x => x.lvl === L);
const genStories = () => store.get("gstories", []);
function progress(L) {
  const k = (arr, pre, key) => arr.filter(x => known.has(pre + key(x))).length;
  const v = lvlVocab(L), g = D.grammar.filter(x => x.lvl === L), s = D.stories.filter(x => x.lvl === L), c = D.chunks.filter(x => x.lvl === L),
    p = D.phrasal.filter(x => x.lvl === L), l = D.pron.filter(x => x.lvl === L), e = D.podcasts.filter(x => x.lvl === L), d = D.dictation[L].map((t, i) => i);
  return {
    vocab: [k(v, "v:", x => x.w), v.length], grammar: [k(g, "g:", x => x.id), g.length], stories: [k(s, "s:", x => x.id), s.length],
    chunks: [k(c, "c:", x => x.n), c.length], phrasal: [k(p, "p:", x => x.pv), p.length], phonetics: [k(l, "l:", x => x.id), l.length],
    audio: [k(d, "d:" + L + ":", x => x), d.length], podcasts: [k(e, "e:", x => x.id), e.length]
  };
}
const overall = pr => { const r = Object.values(pr).map(([a, b]) => (b ? a / b : 0)); return Math.round(r.reduce((x, y) => x + y, 0) / r.length * 100); };
const MODULES = [
  ["vocab", Tx("Vocabulaire"), "🖼️", L => Tx`${lvlVocab(L).length} mots en images, quiz « écoute → image » et « image → mot »`],
  ["grammar", Tx("Grammaire"), "🧩", L => Tx`${D.grammar.filter(x => x.lvl === L).length} points avec ligne du temps, piège du francophone et quiz`],
  ["stories", Tx("Mini-histoires"), "📖", L => Tx`${D.stories.filter(x => x.lvl === L).length} histoires illustrées + des histoires illimitées écrites par IA`],
  ["chunks", "Chunks", "💬", L => Tx`${D.chunks.filter(x => x.lvl === L).length} blocs tout faits, classés par situation`],
  ["phrasal", Tx("Verbes séparables"), "🔗", L => Tx`${D.phrasal.filter(x => x.lvl === L).length} verbes séparables (aufstehen, anrufen…) et la logique des préfixes`],
  ["phonetics", Tx("Phonétique"), "👄", L => Tx`${D.pron.filter(x => x.lvl === L).length} leçons de prononciation, alphabet phonétique, paires minimales`],
  ["audio", Tx("Écoute & dictée"), "🎧", L => Tx`${D.dictation[L].length} dictées, shadowing et écoute en images`],
  ["podcasts", "Podcasts", "🎙️", L => Tx`${D.podcasts.filter(x => x.lvl === L).length} épisodes de 15 minutes`],
  ["chat", Tx("Parler avec l'IA"), "🗣️", () => Tx("Conversation à ton niveau, corrigée, à l'écrit ou au micro")]
];
const MODULE_IDS = MODULES.map(m => m[0]);
let currentBase = "home";
function renderNav() {
  const L = curLvl(); const pr = L ? progress(L) : null;
  $("#lvl-switch").innerHTML = LEVELS.map(l => Tx`<button class="lvl-btn" style="--lc:var(--${l.toLowerCase()})" data-act="set-level" data-l="${l}" aria-pressed="${l === L}" title="Passer au niveau ${l}">${l}</button>`).join("");
  const a = (id, label, small) => `<a href="#${id}"${id === currentBase ? ' aria-current="page"' : ""}>${label}<small>${small || ""}</small></a>`;
  let html = a("home", L ? Tx`Mon parcours ${L}` : Tx("Choisir mon niveau"), L ? overall(pr) + " %" : "");
  if (L) html += Tx`<span class="nav-sep">Modules ${L}</span>` + MODULES.map(([id, label]) => a(id, label, pr[id] ? `${pr[id][0]}/${pr[id][1]}` : "")).join("");
  html += Tx`<span class="nav-sep">Général</span>` + a("cours", Tx("Cours PDF"), `${countKnown("j:")}/180`) + a("levels", Tx("Test & niveaux")) + a("tips", Tx("Conseils"));
  $("#nav").innerHTML = html;
}

/* ---------------- generic MCQ ---------------- */
const quizzes = {};
function mcq(key, items, onDone) {
  quizzes[key] = { items, answers: {}, onDone };
  return `<div class="qblock" id="q-${key}">${items.map((it, i) => `
    <div class="q"><b>${i + 1}. ${esc(it.q)}</b>
      <div class="opts">${it.o.map((o, j) => `<button data-act="mcq" data-k="${key}" data-i="${i}" data-o="${j}">${esc(o)}</button>`).join("")}</div>
      ${it.why ? `<p class="why small" id="why-${key}-${i}" hidden>${esc(it.why)}</p>` : ""}
    </div>`).join("")}<div class="pq-msg" id="qr-${key}" aria-live="polite"></div></div>`;
}
function mcqPick(b) {
  const { k, i, o } = b.dataset; const qz = quizzes[k]; if (!qz || qz.answers[i] != null) return;
  const it = qz.items[i]; const right = +o === it.a;
  qz.answers[i] = right;
  $$(`button[data-k="${k}"][data-i="${i}"]`).forEach((x, j) => { x.disabled = true; if (j === it.a) x.classList.add("right"); });
  if (!right) b.classList.add("wrong");
  const w = document.getElementById(`why-${k}-${i}`); if (w) w.hidden = false;
  if (Object.keys(qz.answers).length === qz.items.length) {
    const score = Object.values(qz.answers).filter(Boolean).length;
    const msg = qz.onDone ? qz.onDone(score, qz.items.length, qz.answers) : null;
    $("#qr-" + k).innerHTML = msg || Tx`Score : ${score} / ${qz.items.length}${score === qz.items.length ? Tx(" — parfait !") : ""}`;
  }
}

/* ---------------- picture quiz (hear → tap the picture) ---------------- */
const pqs = {};
function pqNew(key, pool, mode = "word", extra) {
  const prev = pqs[key];
  const target = pick(pool.filter(x => !prev || x !== prev.target)) || pick(pool);
  let others = shuffle(pool.filter(x => x.e !== target.e)).slice(0, 3);
  if (others.length < 3 && extra) others = others.concat(shuffle(extra.filter(x => x.e !== target.e && !others.some(o => o.e === x.e))).slice(0, 3 - others.length));
  pqs[key] = { pool, extra, mode, target, opts: shuffle([target, ...others]), done: false, score: prev ? prev.score : 0, total: prev ? prev.total : 0 };
}
function pqHtml(key) {
  const s = pqs[key]; const txt = s.mode === "word" ? s.target.w : s.target.ex;
  return Tx`<div class="pq" id="pq-${key}">
    <div class="toolbar"><div class="row"><button class="btn primary" data-act="pq-play" data-k="${key}">${IC.speaker} ${s.mode === "word" ? Tx("Écouter le mot") : Tx("Écouter la phrase")}</button>${slowBtn(txt)}</div><span class="score">${s.score} / ${s.total}</span></div>
    <div class="pq-opts">${s.opts.map((o, i) => `<button class="pic" data-act="pq-pick" data-k="${key}" data-i="${i}" aria-label="Image ${i + 1}">${o.e}</button>`).join("")}</div>
    <div class="row"><div class="pq-msg" id="pqm-${key}" aria-live="polite"></div><button class="btn" data-act="pq-next" data-k="${key}"${s.done ? "" : " hidden"}>Suivant →</button></div>
  </div>`;
}
function pqRefresh(key) { const el = $("#pq-" + key); if (el) el.outerHTML = pqHtml(key); }
function pqPlay(key) { const s = pqs[key]; Audio.speak(s.mode === "word" ? s.target.w : s.target.ex); }
function pqPick(b) {
  const key = b.dataset.k; const s = pqs[key]; if (s.done) return;
  const o = s.opts[+b.dataset.i]; const ok = o === s.target;
  if (!ok) { b.classList.add("wrong"); b.disabled = true; $("#pqm-" + key).textContent = Tx("Pas celle-là — réécoute."); s.miss = true; return; }
  s.done = true; s.total++; if (!s.miss) s.score++; s.miss = false;
  b.classList.add("right");
  $("#pqm-" + key).innerHTML = `<span style="color:var(--good)">${esc(s.target.w)}</span> <span class="ipa">${esc(s.target.ipa || "")}</span>`;
  $(`#pq-${key} .score`).textContent = `${s.score} / ${s.total}`;
  $(`#pq-${key} [data-act="pq-next"]`).hidden = false;
  Audio.speak(s.target.w);
}

/* ---------------- unlimited practice written by Claude ---------------- */
const PRACTICE_KIND = {
  vocab: "Practise these German words. Mix three kinds of items: a natural German sentence with ___ where one word fits; a simple German definition and the matching word; the correct article (der / die / das) or plural of a noun.",
  grammar: "Mix three kinds of items: a German gap-fill sentence with ___; 'Welcher Satz ist richtig?'; 'Welcher Satz hat einen Fehler?'. Include at least two items that target typical " + NATIVE + "-speaker mistakes (word order, cases, gender, prepositions).",
  chunks: Tx("Each item is a short situation or a two-line German dialogue with ___ where one of these chunks fits naturally. The 3 options are chunks from the list."),
  phrasal: "Each item is a natural German sentence with one or two gaps (___) where one of these separable verbs fits, conjugated, with the prefix at the end when needed, e.g. 'Ich ___ jeden Tag um 7 Uhr ___.' Each option shows the full form, e.g. 'stehe … auf'."
};
function practiceHtml(key, kind, topic, material) {
  state.practiceSpec[key] = { kind, topic, material };
  const p = state.practice[key];
  let inner;
  if (!SAMPLE) inner = SAMPLE_STATE === "pending" ? Tx('<p class="muted small">Connexion…</p>') : Tx('<p class="muted small">Pour créer ces exercices, ouvre le site depuis claude.ai, ou depuis sa version en ligne configurée avec l\'IA.</p>');
  else if (p === "loading") inner = Tx`<div class="row"><span class="muted">Préparation de 8 exercices à ton niveau… (10 à 30 secondes)</span><button class="btn ghost" data-act="practice-stop" data-k="${key}">Arrêter</button></div>`;
  else if (p && p.items) inner = mcq(`pr-${key}-${p.v}`, p.items, (score, n) => Tx`Score : ${score} / ${n}. ${score >= n - 1 ? Tx("Excellent !") : Tx("Lis les explications, puis génère une nouvelle série.")}`) + Tx`<button class="btn" data-act="practice-gen" data-k="${key}" style="align-self:flex-start">8 nouveaux exercices</button>`;
  else inner = Tx`<button class="btn primary" data-act="practice-gen" data-k="${key}" style="align-self:flex-start">Créer 8 exercices</button>`;
  return Tx`<section class="panel practice" id="pr-${key}"><div><span class="eyebrow">Entraînement illimité · ${curLvl() || ""}</span><h2>Exercices en plus</h2><p class="muted small">Tu peux créer de nouveaux exercices générés par IA en cliquant sur ce bouton.</p></div>${inner}</section>`;
}
function refreshPractice(key) {
  const el = $("#pr-" + key), sp = state.practiceSpec[key];
  if (el && sp) el.outerHTML = practiceHtml(key, sp.kind, sp.topic, sp.material);
}
function practiceGen(key) {
  const sp = state.practiceSpec[key]; if (!SAMPLE || !sp || state.practice[key] === "loading") return;
  const L = curLvl() || "B1";
  const ctl = new AbortController(); state.practiceCtl[key] = ctl; state.practice[key] = "loading"; refreshPractice(key);
  const prompt = `Create 8 multiple-choice German exercises for a ${NATIVE}-speaking learner at CEFR level ${L}.
Module: ${sp.kind}.${sp.topic ? ` Topic: ${sp.topic}.` : ""}
${sp.material ? `Material to practise:\n${sp.material}\n` : ""}${PRACTICE_KIND[sp.kind]}
Rules: German exactly at level ${L} (Hochdeutsch); natural, varied contexts (daily life in Germany or Austria, travel, work, tech); exactly 3 options and exactly one correct answer; vary the position of the correct answer; questions, options and explanations are all in German; never use ${NATIVE}.
Reply with only a JSON array of 8 objects like {"q": "Frage oder Satz mit ___", "o": ["Option", "Option", "Option"], "a": 0, "why": "eine kurze Erklärung in einfachem Deutsch, max. 20 Wörter"}.`;
  SAMPLE.json(prompt, { signal: ctl.signal, cache: false })
    .then(arr => {
      const items = (Array.isArray(arr) ? arr : []).filter(x => x && typeof x.q === "string" && Array.isArray(x.o) && x.o.length === 3 && Number.isInteger(x.a) && x.a >= 0 && x.a < 3)
        .map(x => ({ q: x.q, o: x.o.map(String), a: x.a, why: typeof x.why === "string" ? x.why : "" }));
      state.practice[key] = items.length ? { items, v: Date.now() } : null;
      if (!items.length) toast(Tx("Les exercices n'ont pas pu être créés. Réessaie."));
      refreshPractice(key);
    })
    .catch(e => { state.practice[key] = null; if (e.code !== "cancelled") { markDenied(e.code); toast(sampleErr(e.code), 5000); } refreshPractice(key); });
}

/* ================= PAGES ================= */
const state = { chunkCat: "all", chunkLimit: 60, chunkQ: "", chunkMode: "list", pvCat: "all", pvPart: "", pvQ: "", pvMode: "list", vocabTab: "learn", audioTab: "picture", phonTab: "lessons", ipaSel: null, pairSet: "i", dictI: 0, flash: null, practice: {}, practiceSpec: {}, practiceCtl: {}, storyTheme: "surprise" };
const lvlCol = l => `var(--${l.toLowerCase()})`;

function thesisCard() {
  return Tx`<div class="thesis" aria-label="Le principe">
      <span class="fr-word">pomme</span><span class="arrow">→</span><span class="pic">🍎</span><span class="arrow arrow2">→</span>
      <span class="en"><b>${artHtml("der Apfel")}</b><span class="ipa">/ˈapfl̩/</span><span class="row">${sayBtn("der Apfel")}${micBtn("der Apfel")}</span></span>
      <p class="thesis-cap">On saute l'étape « pomme ». L'image remplace la traduction : 🍎 → der Apfel, directement, avec son article en couleur.</p>
    </div>`;
}
function pagePicker() {
  const res = store.get("placement", null);
  return Tx`<section class="hero">
    <div style="display:flex;flex-direction:column;gap:16px">
      <span class="eyebrow">Denk auf Deutsch · A1 → C1</span>
      <h1>Choisis ton <em>niveau</em>.</h1>
      <p class="lead">Le site s'adapte à toi : vocabulaire, grammaire, histoires, chunks, verbes séparables, phonétique, écoute, podcasts et conversation, tout est préparé pour ton niveau. Et rien n'est traduit : chaque mot a une image, chaque phrase a un son.</p>
      <p>Tu ne sais pas ? <a href="#levels">Fais le test express (15 questions, 3 minutes)</a>.</p>
    </div>
    ${thesisCard()}
  </section>
  <div class="pick-grid">${D.levels.map(l => `<button class="pick" style="--lc:${lvlCol(l.id)}" data-act="set-level" data-l="${l.id}">
      <span class="pick-band"><b>${l.id}</b><span>${l.fr}</span></span>
      <span class="pick-body"><span>${esc(l.can[0])}</span><span>${esc(l.can[1])}</span><span class="muted small">${l.hours} · ${l.words}</span>${res === l.id ? Tx('<span class="chip">Résultat de ton test</span>') : ""}</span>
    </button>`).join("")}</div>
  <p class="muted small">Tu pourras changer de niveau à tout moment avec les boutons A1 → C1 du menu.</p>`;
}
function pageHome() {
  const L = curLvl(); if (!L) return pagePicker();
  const info = LVINFO(L), pr = progress(L), pct = overall(pr), nxt = NEXT_LVL(L);
  const lv = lvlVocab(L), cs = D.chunks.filter(x => x.lvl === L), ps = D.phrasal.filter(x => x.lvl === L);
  const w = lv[dayIndex % lv.length], c = cs[dayIndex % cs.length], p = ps[dayIndex % ps.length];
  const key = "home-" + L; if (!pqs[key]) pqNew(key, lv);
  const g1 = D.grammar.find(x => x.lvl === L && !known.has("g:" + x.id)), s1 = D.stories.find(x => x.lvl === L && !known.has("s:" + x.id)), e1 = D.podcasts.find(x => x.lvl === L && !known.has("e:" + x.id));
  const j1 = COURS_LV.includes(L) && D.cours.days.find(d => !known.has("j:" + d[0]));
  const steps = [g1 && ["grammar-" + g1.id, Tx("Grammaire"), g1.title], s1 && ["stories-" + s1.id, "Histoire", s1.title], e1 && ["podcasts-" + e1.id, "Podcast", e1.title], j1 && ["cours", Tx("Cours PDF"), "Tag " + j1[0]]].filter(Boolean);
  return Tx`
  <section class="lvl-hero" style="--lc:${lvlCol(L)}">
    <div class="lvl-hero-band"><b>${L}</b><span>${esc(info.name)}</span></div>
    <div class="lvl-hero-body">
      <span class="eyebrow">Mon parcours · niveau ${info.fr.toLowerCase()}</span>
      <h1>Niveau ${L} : <em>${pct} %</em> du parcours</h1>
      <div class="progress big"><i style="width:${pct}%"></i></div>
      <p class="muted">À ce niveau, tu apprends à : ${info.can.slice(0, 2).map(x => esc(x.charAt(0).toLowerCase() + x.slice(1))).join(" ; ")}.</p>
      ${steps.length ? Tx`<div class="row"><span class="eyebrow">Continuer</span>${steps.map(([h, k, t]) => `<a class="btn${h.startsWith("grammar") ? " primary" : ""}" href="#${h}">${k} : ${esc(t)}</a>`).join("")}</div>` : ""}
    </div>
  </section>

  <section style="display:flex;flex-direction:column;gap:12px">
    <h2>Les modules du niveau ${L}</h2>
    <div class="modgrid">${MODULES.map(([id, label, e, desc]) => { const v = pr[id]; const r = v && v[1] ? Math.round(v[0] / v[1] * 100) : null; return `<a class="tile mod" href="#${id}"><div class="tile-top"><span class="pic" style="font-size:1.9rem">${e}</span>${v ? `<span class="small muted">${v[0]} / ${v[1]}</span>` : ""}</div><h3>${label}</h3><p class="muted small">${desc(L)}</p>${r !== null ? `<div class="progress"><i style="width:${r}%"></i></div>` : ""}</a>`; }).join("")}</div>
  </section>

  <section style="display:flex;flex-direction:column;gap:12px">
    <h2>Aujourd'hui en ${L}</h2>
    <div class="today">
      <div class="tile"><span class="eyebrow">Mot du jour</span><div class="tile-top"><span class="pic big">${w.e}</span></div><h3>${artHtml(w.w)} <span class="ipa small">${esc(w.ipa)}</span></h3>${w.pl ? `<span class="plural">Pl. ${esc(w.pl)}</span>` : ""}<p class="example muted">${esc(w.ex)}</p><div class="row">${sayBtn(w.w)}${sayBtn(w.ex, Tx("Écouter la phrase"))}${micBtn(w.w)}${starBtn("v:" + w.w)}</div></div>
      <div class="tile"><span class="eyebrow">Chunk du jour</span><div class="tile-top"><span class="pic big">${D.chunkCats[c.c].emoji}</span></div><h3>${esc(c.chunk)}</h3><p class="example muted">${esc(c.ex)}</p><div class="row">${sayBtn(c.chunk)}${sayBtn(c.ex, Tx("Écouter l'exemple"))}${starBtn("c:" + c.n)}</div></div>
      <div class="tile"><span class="eyebrow">Verbe séparable du jour</span><div class="tile-top"><span class="pic big">${p.e}</span></div><h3>${esc(p.pv)}</h3><p class="small">${esc(p.mean)}</p><p class="example muted">${esc(p.ex)}</p><div class="row">${sayBtn(p.pv)}${sayBtn(p.ex, Tx("Écouter l'exemple"))}${starBtn("p:" + p.pv)}</div></div>
    </div>
  </section>

  <section class="panel">
    <div><h2>Écoute, touche l'image</h2><p class="muted">Les mots du niveau ${L}, sans français : tu entends un mot, tu trouves l'image. 2 minutes par jour créent le réflexe.</p></div>
    ${pqHtml(key)}
  </section>

  ${nxt ? Tx`<section class="panel"><h3>Et après ?</h3><p class="muted">Quand tu dépasses environ 70 % du parcours ${L} et que les histoires et podcasts te semblent faciles, passe au niveau ${nxt}. Garde le ${L} pour réviser.</p><button class="btn${pct >= 70 ? " primary" : ""}" data-act="set-level" data-l="${nxt}" style="align-self:flex-start">Passer au niveau ${nxt}</button></section>` : Tx`<section class="panel"><h3>Niveau le plus haut du site</h3><p class="muted">Au C1, le plus efficace est l'exposition massive : podcasts, conversations avec l'IA sur des sujets complexes, articles et séries en VO.</p></section>`}`;
}

function pageLevels() {
  const res = store.get("placement", null), L = curLvl();
  const count = (arr, l) => arr.filter(x => x.lvl === l).length;
  return Tx`
  <header class="page-head"><span class="eyebrow">Cadre européen (CECRL)</span><h1>Test & niveaux</h1><p>Ce que tu sais faire à chaque niveau, ce qu'il faut travailler, et ce que le site te propose. Les heures sont les estimations de Cambridge (cumulées, avec un cours guidé).</p></header>
  <section class="panel">
    <div><h2>Test de niveau express</h2><p class="muted">15 questions, de A1 à C1. Réponds sans réfléchir trop longtemps.${res ? Tx` Dernier résultat : <b>${res}</b>.` : ""}</p></div>
    ${mcq("placement", D.placement, (score, n, answers) => {
      const byLvl = {}; D.placement.forEach((it, i) => { byLvl[it.l] = (byLvl[it.l] || 0) + (answers[i] ? 1 : 0); });
      let lvl = "A1"; for (const l of LEVELS) { if ((byLvl[l] || 0) >= 2) lvl = l; else break; }
      if (score <= 2) lvl = "A1";
      store.set("placement", lvl);
      return Tx`Score : ${score} / ${n}. Niveau estimé : <span class="lvl ${lvl}">${lvl}</span>. <button class="btn primary" data-act="set-level" data-l="${lvl}" data-go="home">Commencer le parcours ${lvl}</button>`;
    })}
  </section>
  <section style="display:flex;flex-direction:column;gap:14px">
    ${D.levels.map(l => Tx`
    <article class="panel lvcard" id="lv-${l.id}">
      <div class="band" style="background:${lvlCol(l.id)}"><b>${l.id}</b><span>${esc(l.name)}</span><span>${l.fr} · ${l.hours} · ${l.words}</span></div>
      <div class="body">
        <div><span class="eyebrow">Tu sais…</span><ul>${l.can.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div><span class="eyebrow">À travailler</span><ul>${l.focus.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <p class="links small muted">${lvlVocab(l.id).length} mots · ${count(D.grammar, l.id)} points de grammaire · ${count(D.stories, l.id)} histoires · ${count(D.chunks, l.id)} chunks · ${count(D.phrasal, l.id)} verbes séparables · ${count(D.pron, l.id)} leçons de phonétique · ${D.dictation[l.id].length} dictées · ${count(D.podcasts, l.id)} podcasts</p>
        <div class="links">${L === l.id ? Tx('<span class="chip" aria-pressed="true">Ton niveau actuel</span><a class="btn" href="#home">Ouvrir mon parcours</a>') : Tx`<button class="btn primary" data-act="set-level" data-l="${l.id}" data-go="home">Choisir le niveau ${l.id}</button>`}</div>
      </div>
    </article>`).join("")}
  </section>`;
}

const pageHead = (eyebrow, title, text) => `<header class="page-head"><div class="row"><span class="lvl ${curLvl()}">${curLvl()}</span><span class="eyebrow">${eyebrow}</span></div><h1>${title}</h1>${text ? `<p>${text}</p>` : ""}</header>`;

/* ---------- audio ---------- */
function pageAudio() {
  const L = curLvl();
  const tabs = [["picture", Tx("Écoute & image")], ["dictation", Tx("Dictée")], ["shadow", "Shadowing"], ["res", Tx("Ressources")]];
  let body = "";
  if (state.audioTab === "picture") {
    const key = "audio-" + L;
    if (!pqs[key]) pqNew(key, lvlVocab(L), "sentence");
    body = Tx`<div class="panel"><div><h3>Écoute la phrase, trouve l'image</h3><p class="muted">Tu entends une phrase complète du niveau ${L}. Trouve l'image du mot important. Tu comprends le sens global sans traduire, comme dans la vraie vie.</p></div>${pqHtml(key)}</div>`;
  } else if (state.audioTab === "dictation") {
    const list = D.dictation[L]; const i = state.dictI % list.length; const s = list[i];
    body = Tx`<div class="panel"><div><h3>Dictée ${L}</h3><p class="muted">Écoute (autant de fois que tu veux), écris ce que tu entends, puis vérifie. Une dictée sans faute est cochée. Excellent pour entendre les petits mots que les natifs avalent.</p></div>
      <div class="dots">${list.map((x, k) => Tx`<button class="dot${known.has("d:" + L + ":" + k) ? " done" : ""}${k === i ? " cur" : ""}" data-act="dict-go" data-i="${k}" aria-label="Dictée ${k + 1}">${k + 1}</button>`).join("")}</div>
      <div class="row"><button class="btn primary" data-act="say" data-t="${esc(s)}">${IC.speaker} Écouter</button><button class="btn" data-act="say" data-slow="1" data-t="${esc(s)}">${IC.slow} Lentement</button></div>
      <label for="dict-in" class="eyebrow">Ce que tu entends</label>
      <input class="dict-input" id="dict-in" autocomplete="off" spellcheck="false" placeholder="Tape la phrase…">
      <div class="row"><button class="btn" data-act="dict-check">Vérifier</button><button class="btn ghost" data-act="dict-next">Dictée suivante →</button></div>
      <div id="dict-res" class="diff" aria-live="polite"></div></div>`;
  } else if (state.audioTab === "shadow") {
    const list = D.shadowing.map((sh, si) => [sh, si]).filter(([sh]) => sh.lvl === L);
    body = Tx`<div class="panel"><div><h3>Shadowing ${L}</h3><p class="muted">Lance une ligne et parle EN MÊME TEMPS que la voix, comme son ombre. Commence en vitesse lente, puis normale. Tu copies le rythme et la mélodie, et tu n'as pas le temps de traduire.</p></div></div>
      ${list.map(([sh, si]) => Tx`<div class="panel"><div class="toolbar"><h3>${esc(sh.title)}</h3><div class="row"><button class="btn primary" data-act="shadow-all" data-s="${si}">${IC.speaker} Tout lire</button><button class="btn" data-act="shadow-all" data-s="${si}" data-slow="1">${IC.slow} Lent</button></div></div>
        <div class="lines">${sh.lines.map((ln, li) => `<div class="line" id="sh-${si}-${li}">${sayBtn(ln)}${slowBtn(ln)}<span>${esc(ln)}</span></div>`).join("")}</div></div>`).join("")}`;
  } else {
    body = Tx`<div class="reslist">${D.resources.map(r => `<a class="tile" href="${r.url}" target="_blank" rel="noopener"><div class="tile-top"><span class="pic big">${r.e}</span><span class="chip">${r.lvl}</span></div><h3>${esc(r.name)}</h3><p class="muted small">${esc(r.what)}</p></a>`).join("")}</div>
      <p class="muted small">Ces sites s'ouvrent dans un nouvel onglet. Astuce : écoute toujours avec les sous-titres ou la transcription en allemand, jamais en français.</p>`;
  }
  return `${pageHead(Tx("Compréhension orale"), Tx("Écoute & dictée"), Tx("Tout le texte du site peut être écouté : touche l'icône haut-parleur. Change la voix (UK, US) et la vitesse dans les réglages audio. Pour l'écoute longue, va dans Podcasts."))}
  <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${state.audioTab === id}" data-act="audio-tab" data-t="${id}">${l}</button>`).join("")}</div>${body}`;
}
function lcsDiff(target, typed) {
  const a = target.split(/\s+/), A = a.map(norm), B = norm(typed).split(" ").filter(Boolean);
  const m = A.length, n = B.length, L = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) L[i][j] = A[i] === B[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ok = new Array(m).fill(false); let i = 0, j = 0;
  while (i < m && j < n) { if (A[i] === B[j]) { ok[i] = true; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
  return { html: a.map((w, k) => `<span class="${ok[k] ? "ok" : "miss"}">${esc(w)}</span>`).join(" "), score: ok.filter(Boolean).length, total: m };
}

/* ---------- stories ---------- */
const STORY_GUIDE = {
  A1: "Each paragraph has 2 to 4 very short sentences (30 to 40 words). Present tense only, verb in second position, only the 600 most common German words.",
  A2: "Each paragraph has 40 to 60 words. A story mostly in the Perfekt (plus war / hatte), common words, short sentences, a few weil / dass clauses.",
  B1: "Each paragraph has 60 to 80 words. Natural narrative German in the Präteritum, some relative clauses and separable verbs.",
  B2: "Each paragraph has 80 to 100 words. Rich vocabulary, a few idioms, varied structures (Konjunktiv II, passive) and some dialogue.",
  C1: "Each paragraph has 90 to 120 words. Sophisticated, idiomatic, nuanced German with complex structures, subtle humour or emotion."
};
const STORY_THEMES = [["surprise", Tx("Surprise-moi")], ["travel", Tx("Voyage")], ["work", Tx("Travail & tech")], ["friendship", Tx("Amitié & famille")], ["mystery", Tx("Mystère")], ["funny", Tx("Drôle")], ["abroad", Tx("Vivre à l'étranger")]];
let storyGen = null;
function storyGenerate() {
  const L = curLvl(); if (!SAMPLE || storyGen || !L) return;
  const theme = STORY_THEMES.find(t => t[0] === state.storyTheme) || STORY_THEMES[0];
  const ctl = new AbortController(); storyGen = { ctl }; rerender();
  const prompt = `Write an original short illustrated story in German (Hochdeutsch) for a ${NATIVE}-speaking adult learner, CEFR level ${L}.
${STORY_GUIDE[L]}
Theme: ${theme[0] === "surprise" ? "any engaging everyday theme of your choice" : theme[0]}. It can take place in Germany, Austria or Switzerland. Give it a small twist or a human moment. Never use ${NATIVE}.
Reply with only a JSON object:
{"title": "kurzer Titel", "e": "one emoji for the cover",
 "scenes": [6 objects {"e": "2 or 3 emojis that illustrate the scene", "t": "the paragraph in German"}],
 "gloss": {"German word or expression exactly as written in the text": ["one emoji", "einfache deutsche Erklärung, max. 12 Wörter"]},
 "questions": [3 objects {"q": "Verständnisfrage auf Deutsch", "o": ["Option", "Option", "Option"], "a": 0}]}
The gloss has 4 to 6 entries: useful words for level ${L} that appear in the text.`;
  SAMPLE.json(prompt, { signal: ctl.signal, cache: false })
    .then(r => {
      storyGen = null;
      const scenes = (r && Array.isArray(r.scenes) ? r.scenes : []).filter(s => s && typeof s.t === "string").map(s => ({ e: String(s.e || "📖"), t: s.t }));
      const text = scenes.map(s => s.t).join(" ");
      const gloss = {}; Object.entries((r && r.gloss) || {}).forEach(([k, v]) => { if (Array.isArray(v) && new RegExp(`(?<![\\p{L}])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\p{L}])`, "iu").test(text)) gloss[k] = [String(v[0] || "💬"), String(v[1] || "")]; });
      const questions = (r && Array.isArray(r.questions) ? r.questions : []).filter(x => x && Array.isArray(x.o) && x.o.length === 3 && Number.isInteger(x.a) && x.a >= 0 && x.a < 3).map(x => ({ q: String(x.q), o: x.o.map(String), a: x.a }));
      if (scenes.length < 3) { toast(Tx("L'histoire n'a pas pu être écrite correctement. Réessaie.")); rerender(); return; }
      const s = { id: "g" + Date.now().toString(36), lvl: L, title: String(r.title || "A new story"), e: String(r.e || "📖"), scenes, gloss, questions, gen: true };
      const list = genStories(); list.unshift(s); store.set("gstories", list.slice(0, 60));
      location.hash = "#stories-" + s.id;
    })
    .catch(e => { storyGen = null; if (e.code !== "cancelled") { markDenied(e.code); toast(sampleErr(e.code), 5000); } rerender(); });
}
function pageStories(sub) {
  const L = curLvl();
  if (sub) { const s = D.stories.find(x => x.id === sub) || genStories().find(x => x.id === sub); if (s) return storyView(s); }
  const list = D.stories.filter(s => s.lvl === L), gen = genStories().filter(s => s.lvl === L);
  const tile = s => Tx`<a class="tile" href="#stories-${s.id}"><div class="tile-top"><span class="pic story-cover">${esc(s.e)}</span>${s.gen ? Tx('<span class="chip">Écrite par IA</span>') : ""}</div><h3>${esc(s.title)}</h3><p class="pic" style="font-size:1.4rem;letter-spacing:4px">${s.scenes.map(x => [...x.e][0] || "").join("")}</p><p class="muted small">${s.scenes.length} scènes · ${s.questions.length} questions${known.has("s:" + s.id) ? Tx(" · lue ✓") : ""}</p></a>`;
  let genPanel;
  if (!SAMPLE) genPanel = SAMPLE_STATE === "pending" ? Tx('<p class="muted small">Connexion…</p>') : Tx('<p class="muted small">Pour créer des histoires illimitées, ouvre le site depuis claude.ai, ou depuis sa version en ligne configurée avec l\'IA.</p>');
  else if (storyGen) genPanel = Tx`<div class="row"><span class="muted">Écriture de ton histoire de niveau ${L}… (20 à 60 secondes)</span><button class="btn ghost" data-act="story-stop">Arrêter</button></div>`;
  else genPanel = Tx`<div class="chips">${STORY_THEMES.map(([id, l]) => `<button class="chip" data-act="story-theme" data-t="${id}" aria-pressed="${state.storyTheme === id}">${l}</button>`).join("")}</div><button class="btn primary" data-act="story-gen" style="align-self:flex-start">Créer une nouvelle histoire ${L}</button>`;
  return Tx`${pageHead(Tx("Lecture"), Tx("Mini-histoires"), Tx`Des histoires courtes en images, écrites pour le niveau ${L}, avec l'audio. Les mots difficiles sont expliqués par une image et de l'allemand simple, jamais par une traduction. Relis la même histoire plusieurs jours de suite.`)}
  <div class="grid wide">${list.map(tile).join("")}</div>
  <section class="panel"><div><span class="eyebrow">Lecture illimitée</span><h2>Une nouvelle histoire à ton niveau</h2><p class="muted small">Tu peux créer une histoire inédite de niveau ${L} écrite par IA, avec images, mots expliqués et questions, en cliquant sur ce bouton. Elle reste enregistrée dans ce navigateur.</p></div>${genPanel}</section>
  ${gen.length ? Tx`<h2>Tes histoires créées (${gen.length})</h2><div class="grid wide">${gen.map(tile).join("")}</div>` : ""}`;
}
function glossify(text, gloss) {
  let html = esc(text);
  const keys = Object.keys(gloss).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const re = new RegExp(`(?<![\\p{L}])(${esc(k).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?![\\p{L}])`, "iu");
    html = html.replace(re, `<button class="gl" data-act="gloss" data-k="${esc(k)}">$1</button>`);
  }
  return html;
}
let currentStory = null;
function storyView(s) {
  currentStory = s;
  return Tx`<a class="btn ghost back" href="#stories">← Histoires ${esc(s.lvl)}</a>
  <header class="page-head"><div class="row">${lvlTag(s.lvl)}<span class="pic" style="font-size:2rem">${esc(s.e)}</span>${s.gen ? Tx('<span class="chip">Écrite par IA</span>') : ""}</div><h1>${esc(s.title)}</h1><p>Écoute une première fois sans lire, en regardant seulement les images. Puis écoute en lisant. Les mots surlignés : touche-les pour voir leur image.</p>
  <div class="row"><button class="btn primary" data-act="story-play">${IC.speaker} Écouter toute l'histoire</button><button class="btn" data-act="story-play" data-slow="1">${IC.slow} Version lente</button></div></header>
  <div class="reader">${s.scenes.map((sc, i) => `<div class="scene" id="sc${i}"><div class="strip pic" aria-hidden="true">${esc(sc.e)}</div><div><p class="txt">${glossify(sc.t, s.gloss)}</p><div class="tools">${sayBtn(sc.t, Tx("Écouter ce passage"))}${slowBtn(sc.t)}</div></div></div>`).join("")}</div>
  ${s.questions.length ? Tx`<section class="panel" style="max-width:760px"><h2>Hast du alles verstanden?</h2>${mcq("story-" + s.id, s.questions, (score, n) => {
    if (score >= n - 1 && !known.has("s:" + s.id)) toggleKnown("s:" + s.id);
    return Tx`Score : ${score} / ${n}. ${score >= n - 1 ? Tx("Histoire marquée comme lue ✓") : Tx("Relis l'histoire et réessaie demain.")}`;
  })}</section>` : ""}
  ${Object.keys(s.gloss).length ? Tx`<section class="panel" style="max-width:760px"><h3>Mots de l'histoire</h3><div class="wordrow">${Object.entries(s.gloss).map(([k, [e, def]]) => `<span class="wordpill" title="${esc(def)}"><span class="pic">${esc(e)}</span>${esc(k)}${sayBtn(k)}</span>`).join("")}</div></section>` : ""}
  ${s.gen ? Tx`<button class="btn ghost" data-act="story-del" data-id="${esc(s.id)}" style="align-self:flex-start">Supprimer cette histoire</button>` : ""}`;
}

/* ---------- vocabulary ---------- */
function pageVocab(sub) {
  const L = curLvl();
  const theme = D.vocab.find(t => t.id === sub);
  if (theme) return vocabTheme(theme);
  const lv = lvlVocab(L);
  const themes = D.vocab.map(t => [t, lv.filter(x => x.theme === t.id)]).filter(([, ws]) => ws.length);
  const key = "vall-" + L; if (!pqs[key]) pqNew(key, lv);
  const unknown = lv.filter(x => !known.has("v:" + x.w));
  return Tx`${pageHead(Tx("Dictionnaire en images"), Tx("Vocabulaire"), Tx`${lv.length} mots du niveau ${L} en ${themes.length} thèmes. Une image, un son, une phrase : jamais de traduction. Chaque thème a deux quiz pour ancrer le lien image → mot.`)}
  <div class="grid themes">${themes.map(([t, ws]) => { const n = ws.filter(x => known.has("v:" + x.w)).length; return `<a class="tile" href="#vocab-${t.id}"><div class="tile-top"><span class="pic big">${t.e}</span><span class="muted small">${n}/${ws.length}</span></div><h3>${esc(t.name)}</h3><p class="pic" style="font-size:1.3rem;letter-spacing:3px">${ws.slice(0, 6).map(w => w.e).join("")}</p><div class="progress"><i style="width:${Math.round(n / ws.length * 100)}%"></i></div></a>`; }).join("")}</div>
  <section class="panel"><div><h2>Quiz du niveau ${L}</h2><p class="muted">Les ${lv.length} mots mélangés : écoute, touche l'image.</p></div>${pqHtml(key)}</section>
  ${practiceHtml("vocab-" + L, "vocab", "", shuffle(unknown.length >= 12 ? unknown : lv).slice(0, 16).map(x => `${x.w} — ${x.ex}`).join("\n"))}`;
}
function vocabTheme(t) {
  const L = curLvl();
  let words = vocabAll.filter(x => x.theme === t.id && x.lvl === L);
  if (!words.length) words = vocabAll.filter(x => x.theme === t.id);
  const tabs = [["learn", Tx("Découvrir")], ["listen", Tx("Quiz : écoute → image")], ["write", Tx("Quiz : image → mot")]];
  let body = "";
  if (state.vocabTab === "learn") {
    body = `<div class="grid tight">${words.map(x => Tx`<div class="tile wcard${known.has("v:" + x.w) ? " known" : ""}">${lvlTag(x.lvl)}<span class="pic">${x.e}</span><span class="word" lang="de">${artHtml(x.w)}</span>${x.pl ? `<span class="plural">Pl. ${esc(x.pl)}</span>` : ""}<span class="ipa small">${esc(x.ipa)}</span><span class="ex">${esc(x.ex)}</span><div class="acts">${sayBtn(x.w)}${sayBtn(x.ex, Tx("Écouter la phrase"))}${micBtn(x.w)}${starBtn("v:" + x.w)}</div></div>`).join("")}</div>`;
  } else if (state.vocabTab === "listen") {
    const key = "v-" + t.id + "-" + L; if (!pqs[key]) pqNew(key, words, "word", lvlVocab(L));
    body = `<div class="panel">${pqHtml(key)}</div>`;
  } else {
    if (!state.flash || state.flash.theme !== t.id + L) state.flash = { theme: t.id + L, order: shuffle(words), i: 0, ok: 0 };
    const f = state.flash; const x = f.order[f.i % f.order.length];
    body = Tx`<div class="panel flash"><div class="flash-card"><span class="pic" style="font-size:5rem">${x.e}</span><p class="muted">Quel est ce mot ? Écris-le${document.body.classList.contains("has-mic") ? Tx(" ou dis-le") : ""}${/^(der|die|das) /.test(x.w) ? Tx(", avec son article (der, die ou das)") : ""}.</p>
      <input class="dict-input" id="vw-in" style="max-width:320px;text-align:center" autocomplete="off" spellcheck="false" placeholder="…">
      <div class="row" style="justify-content:center"><button class="btn primary" data-act="vw-check">Vérifier</button>${micBtn(x.w)}<button class="btn ghost" data-act="vw-show">Voir la réponse</button></div>
      <div id="vw-res" class="pq-msg" aria-live="polite"></div>
      <span class="score muted">${f.i % f.order.length + 1} / ${f.order.length} · bonnes réponses : ${f.ok}</span></div></div>`;
  }
  return Tx`<a class="btn ghost back" href="#vocab">← Vocabulaire ${L}</a>
  <header class="page-head"><div class="row"><span class="pic" style="font-size:2.2rem">${t.e}</span><h1>${esc(t.name)}</h1><span class="lvl ${L}">${L}</span></div><p>${words.length} mots. Touche le haut-parleur pour entendre le mot, puis la phrase. Le micro vérifie ta prononciation. L'étoile = « je connais ».</p></header>
  <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${state.vocabTab === id}" data-act="vocab-tab" data-t="${id}">${l}</button>`).join("")}</div>${body}
  ${practiceHtml("vt-" + t.id + "-" + L, "vocab", t.name, words.map(x => `${x.w} — ${x.ex}`).join("\n"))}`;
}

/* ---------- chunks ---------- */
function pageChunks() {
  const L = curLvl();
  const q = norm(state.chunkQ);
  const inLvl = c => c.lvl === L;
  const list = D.chunks.filter(c => inLvl(c) && (state.chunkCat === "all" || c.c === +state.chunkCat) && (!q || norm(c.chunk + " " + c.ex + " " + c.fr).includes(q)));
  const catCount = i => D.chunks.filter(c => inLvl(c) && c.c === i).length;
  const frHtml = c => settings.immersion ? Tx`<button class="fr-peek" data-act="peek" data-fr="${esc(c.fr)}">voir en français</button>` : `<span class="fr">≈ ${esc(c.fr)}</span>`;
  let body;
  if (state.chunkMode === "flash") {
    const pool = list.length ? list : D.chunks.filter(inLvl);
    const cfKey = [L, state.chunkCat, q].join("|");
    if (!state.cf || state.cf.key !== cfKey) state.cf = { key: cfKey, c: pick(pool), shown: false };
    const c = state.cf.c; const core = c.chunk.replace(/[.,!?…]+$/, "");
    const re = new RegExp(core.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
    const prompt = re.test(c.ex) ? esc(c.ex).replace(new RegExp(esc(core).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), '<span class="blank">&nbsp;</span>') : Tx`${D.chunkCats[c.c].emoji} ${esc(D.chunkCats[c.c].name)}<br><span class="muted small">Indice : ${esc(core.split(" ").map(w => w[0] + "…").join(" "))}</span>`;
    body = Tx`<div class="flash"><div class="flash-card"><span class="eyebrow">${D.chunkCats[c.c].emoji} ${esc(D.chunkCats[c.c].name)}</span><p class="q">${prompt}</p>
      ${state.cf.shown ? `<p class="a">${esc(c.chunk)}</p><p class="example muted">${esc(c.ex)}</p><div class="row" style="justify-content:center">${sayBtn(c.ex)}${starBtn("c:" + c.n)}</div>` : Tx`<p class="muted small">Dis le chunk à voix haute en moins de 2 secondes, puis vérifie.</p>`}
      <div class="row" style="justify-content:center">${state.cf.shown ? "" : Tx`<button class="btn primary" data-act="cf-show">Voir le chunk</button>`}<button class="btn" data-act="cf-next">Suivant →</button></div></div></div>`;
  } else {
    body = Tx`<p class="muted small">${list.length} chunks${list.length > state.chunkLimit ? Tx` · ${state.chunkLimit} affichés` : ""}</p><div class="grid wide">${list.slice(0, state.chunkLimit).map(c => `<div class="tile ccard${known.has("c:" + c.n) ? " known" : ""}"><div class="tile-top"><span class="pic" style="font-size:1.8rem">${D.chunkCats[c.c].emoji}</span></div><span class="chunk">${esc(c.chunk)}</span><span class="example muted">${esc(c.ex)}</span><div class="acts">${sayBtn(c.chunk)}${sayBtn(c.ex, Tx("Écouter l'exemple"))}${starBtn("c:" + c.n)}${frHtml(c)}</div></div>`).join("") || Tx('<p class="empty">Aucun chunk ne correspond.</p>')}</div>${list.length > state.chunkLimit ? Tx`<button class="btn" data-act="chunk-more" style="align-self:center">Voir 60 de plus (${list.length - state.chunkLimit} restants)</button>` : ""}`;
  }
  const pool = (list.length >= 8 ? list : D.chunks.filter(inLvl)).filter(c => !known.has("c:" + c.n));
  return Tx`${pageHead(Tx("Blocs tout faits"), "Chunks", Tx`${D.chunks.filter(inLvl).length} blocs du niveau ${L}, classés par situation. Les natifs ne construisent pas leurs phrases mot à mot : ils sortent des blocs tout prêts. Apprends-les comme un seul mot, à voix haute, d'un seul souffle.`)}
  <div class="toolbar"><input class="search" id="chunk-q" type="search" placeholder="Chercher un chunk…" value="${esc(state.chunkQ)}" aria-label="Chercher un chunk">
    <div class="chips"><button class="chip" data-act="chunk-mode" data-m="list" aria-pressed="${state.chunkMode === "list"}">Liste</button><button class="chip" data-act="chunk-mode" data-m="flash" aria-pressed="${state.chunkMode === "flash"}">Révision (cartes)</button></div></div>
  <div class="chips scroll" aria-label="Situation"><button class="chip" data-act="chunk-cat" data-c="all" aria-pressed="${state.chunkCat === "all"}">Toutes les situations</button>${D.chunkCats.map((c, i) => [c, i, catCount(i)]).filter(x => x[2] > 0).map(([c, i, k]) => `<button class="chip" data-act="chunk-cat" data-c="${i}" aria-pressed="${state.chunkCat === String(i)}"><span class="pic">${c.emoji}</span> ${esc(c.name)} <span class="muted">${k}</span></button>`).join("")}</div>
  <div id="chunk-body" style="display:flex;flex-direction:column;gap:12px">${body}</div>
  ${practiceHtml("chunks-" + L + "-" + state.chunkCat, "chunks", state.chunkCat === "all" ? "" : D.chunkCats[+state.chunkCat].name, shuffle(pool.length >= 8 ? pool : D.chunks.filter(inLvl)).slice(0, 24).map(c => c.chunk).join("\n"))}`;
}

/* ---------- phrasal verbs ---------- */
const PARTICLES = [
  ["auf", "up", "öffnen · nach oben · beginnen"], ["ab", "down", "weg · nach unten · Ende"], ["an", "on", "Kontakt · Beginn · anmachen"],
  ["aus", "out", "nach draußen · Ende · ausmachen"], ["ein", "in", "nach innen · hinein"], ["zurück", "back", "wieder zurück"],
  ["weg", "away", "weg · Distanz"], ["mit", "with", "zusammen mit jemandem"], ["vor", "fwd", "nach vorne · vorher"], ["zu", "close", "schließen · in Richtung"]
];
function head(x, y, a) { return `<polygon class="dg-head" points="0,0 -11,-6.5 -11,6.5" transform="translate(${x} ${y}) rotate(${a})"/>`; }
function diagram(p) {
  const g = '<line class="dg-ground" x1="14" y1="88" x2="126" y2="88"/>';
  const d = {
    up: `${g}<circle class="dg-ball" cx="70" cy="76" r="9"/><path class="dg-arrow" d="M70 64 V22"/>${head(70, 14, -90)}`,
    down: `${g}<circle class="dg-ball" cx="70" cy="16" r="9"/><path class="dg-arrow" d="M70 30 V70"/>${head(70, 78, 90)}`,
    out: `<rect class="dg-box" x="12" y="24" width="64" height="58" rx="6"/><circle class="dg-ball" cx="40" cy="53" r="9"/><path class="dg-arrow" d="M54 53 H118"/>${head(127, 53, 0)}`,
    in: `<rect class="dg-box" x="64" y="24" width="64" height="58" rx="6"/><path class="dg-arrow" d="M10 53 H86"/>${head(94, 53, 0)}<circle class="dg-ball" cx="108" cy="53" r="9"/>`,
    off: `<line class="dg-ground" x1="14" y1="70" x2="86" y2="70"/><path class="dg-arrow" d="M64 58 Q92 46 110 26"/>${head(116, 18, -52)}<circle class="dg-ball" cx="52" cy="60" r="9" opacity=".35"/>`,
    on: `<line class="dg-ground" x1="10" y1="72" x2="130" y2="72"/><circle class="dg-ball" cx="40" cy="62" r="9"/><path class="dg-arrow" d="M58 50 H112"/>${head(121, 50, 0)}`,
    over: `<rect class="dg-box" x="52" y="54" width="36" height="34" rx="4"/><path class="dg-arrow" d="M20 84 Q70 -10 116 76"/>${head(120, 84, 70)}<circle class="dg-ball" cx="20" cy="84" r="7"/>`,
    back: `<path class="dg-arrow" d="M22 34 H96 A20 20 0 0 1 96 74 H40"/>${head(31, 74, 180)}<circle class="dg-ball" cx="22" cy="34" r="8"/>`,
    away: `<circle class="dg-ball" cx="22" cy="53" r="9"/><path class="dg-arrow" d="M38 53 H110" stroke-dasharray="10 7"/>${head(122, 53, 0)}<circle class="dg-ball" cx="128" cy="53" r="3" opacity=".4"/>`,
    with: `<circle class="dg-ball" cx="44" cy="64" r="10"/><circle class="dg-ball" cx="96" cy="64" r="10" opacity=".55"/><path class="dg-arrow" d="M44 46 Q70 14 92 40"/>${head(96, 47, 60)}`,
    fwd: `<line class="dg-ground" x1="14" y1="80" x2="126" y2="80"/><circle class="dg-ball" cx="28" cy="68" r="9"/><path class="dg-arrow" d="M44 68 H112"/>${head(121, 68, 0)}<line class="dg-ground" x1="126" y1="56" x2="126" y2="80"/>`,
    close: `<line class="dg-ground" x1="70" y1="14" x2="70" y2="86"/><path class="dg-arrow" d="M16 34 H56"/>${head(64, 34, 0)}<path class="dg-arrow" d="M124 66 H84"/>${head(76, 66, 180)}`
  }[p] || "";
  return `<svg viewBox="0 0 140 100" aria-hidden="true">${d}</svg>`;
}
function pagePhrasal() {
  const L = curLvl();
  const q = norm(state.pvQ);
  const atL = D.phrasal.filter(p => p.lvl === L);
  const parts = PARTICLES.filter(([p]) => atL.some(x => x.part === p || (p === "in" && x.part === "into")));
  const list = atL.filter(p => (state.pvCat === "all" || p.c === +state.pvCat) && (!state.pvPart || p.part === state.pvPart || (state.pvPart === "in" && p.part === "into")) && (!q || norm(p.pv + " " + p.mean + " " + p.ex).includes(q)));
  let body;
  if (state.pvMode === "flash") {
    const pool = list.length ? list : atL;
    const key = [L, state.pvCat, state.pvPart, q].join("|");
    if (!state.pf || state.pf.key !== key) state.pf = { key, p: pick(pool), shown: false };
    const p = state.pf.p;
    body = Tx`<div class="flash"><div class="flash-card"><span class="pic" style="font-size:4rem">${p.e}</span><p class="q">${esc(p.mean)}</p>
      ${state.pf.shown ? `<p class="a">${esc(p.pv)}</p><p class="example muted">${esc(p.ex)}</p><div class="row" style="justify-content:center">${sayBtn(p.ex)}${starBtn("p:" + p.pv)}</div>` : Tx('<p class="muted small">Quel verbe séparable ? Dis-le, puis vérifie.</p>')}
      <div class="row" style="justify-content:center">${state.pf.shown ? "" : Tx('<button class="btn primary" data-act="pf-show">Voir la réponse</button>')}<button class="btn" data-act="pf-next">Suivant →</button></div></div></div>`;
  } else {
    body = Tx`<p class="muted small">${list.length} verbes séparables</p><div class="grid wide">${list.map(p => `<div class="tile ccard${known.has("p:" + p.pv) ? " known" : ""}"><div class="tile-top"><span class="pic" style="font-size:2.2rem">${p.e}</span><span class="type">${esc(p.type)}</span></div><span class="chunk">${esc(p.pv)}</span><span class="small">${esc(p.mean)}</span><span class="example muted">${esc(p.ex)}</span><div class="acts">${sayBtn(p.pv)}${sayBtn(p.ex, Tx("Écouter l'exemple"))}${starBtn("p:" + p.pv)}</div></div>`).join("") || Tx('<p class="empty">Aucun verbe séparable ne correspond.</p>')}</div>`;
  }
  const cats = D.pvCats.map((c, i) => [c, i, atL.filter(p => p.c === i).length]).filter(x => x[2] > 0);
  return Tx`${pageHead(Tx("Préfixe + verbe"), Tx("Verbes séparables"), Tx`${atL.length} verbes séparables du niveau ${L}, expliqués en allemand simple. Au présent, le préfixe part à la fin de la phrase : Ich stehe um 7 Uhr auf. Ne les traduis pas : regarde ce que fait le préfixe, il a souvent la même logique.`)}
  ${parts.length ? Tx`<section class="panel"><div><h2>La logique des préfixes</h2><p class="muted">Touche un préfixe pour voir ses verbes. L'accent tombe toujours sur le préfixe : <b>AUF</b>stehen, <b>AN</b>rufen, <b>EIN</b>kaufen.</p></div>
    <div class="particles">${parts.map(([p, dg, idea]) => `<button class="particle" data-act="pv-part" data-p="${p}" aria-pressed="${state.pvPart === p}">${diagram(dg)}<b>${p.toUpperCase()}-</b><span class="small muted">${idea}</span></button>`).join("")}</div>
    <div class="table-wrap"><table class="form-table"><tr><td>Présent</td><td>Ich rufe dich morgen <b>an</b>.</td></tr><tr><td>Avec un modal</td><td>Ich will dich morgen <b>anrufen</b>.</td></tr><tr><td>Perfekt</td><td>Ich habe dich <b>an<u>ge</u>rufen</b>. (ge au milieu)</td></tr><tr><td>zu + infinitif</td><td>Vergiss nicht, mich <b>an<u>zu</u>rufen</b>.</td></tr><tr><td>Subordonnée</td><td>…, weil ich früh <b>aufstehe</b>. (réuni à la fin)</td></tr></table></div>
  </section>` : ""}
  <div class="toolbar"><input class="search" id="pv-q" type="search" placeholder="Chercher (ex. auf, Termin)…" value="${esc(state.pvQ)}" aria-label="Chercher un verbe séparable">
    <div class="chips"><button class="chip" data-act="pv-mode" data-m="list" aria-pressed="${state.pvMode === "list"}">Liste</button><button class="chip" data-act="pv-mode" data-m="flash" aria-pressed="${state.pvMode === "flash"}">Révision (cartes)</button></div></div>
  ${cats.length > 1 ? Tx`<div class="chips scroll"><button class="chip" data-act="pv-cat" data-c="all" aria-pressed="${state.pvCat === "all"}">Toutes les situations</button>${cats.map(([c, i, k]) => `<button class="chip" data-act="pv-cat" data-c="${i}" aria-pressed="${state.pvCat === String(i)}"><span class="pic">${c.emoji}</span> ${esc(c.name)} <span class="muted">${k}</span></button>`).join("")}</div>` : ""}
  <div id="pv-body" style="display:flex;flex-direction:column;gap:12px">${body}</div>
  ${practiceHtml("pv-" + L, "phrasal", "", shuffle(atL).slice(0, 20).map(p => `${p.pv} — ${p.mean}`).join("\n"))}`;
}

/* ---------- grammar ---------- */
function timeline(tl) {
  const X = p => (30 + p * 5.4).toFixed(1);
  let s = `<svg viewBox="0 0 600 132" role="img" aria-label="${esc(tl.label)}">
    <line class="tl-line" x1="20" y1="64" x2="572" y2="64"/><polygon points="0,0 -12,-7 -12,7" transform="translate(584 64)" style="fill:var(--ink)"/>
    <text class="tl-txt" x="20" y="34">PAST</text><text class="tl-txt" x="584" y="34" text-anchor="end">FUTURE</text>
    <line class="tl-now" x1="${X(60)}" y1="24" x2="${X(60)}" y2="98"/><text class="tl-now-txt" x="${X(60)}" y="17" text-anchor="middle">NOW</text>`;
  for (const m of tl.marks) {
    if (m.k === "point") s += `<circle class="tl-point" cx="${X(m.x)}" cy="64" r="8"/>`;
    else if (m.k === "range") s += `<rect class="tl-range" x="${X(m.a)}" y="53" width="${(X(m.b) - X(m.a)).toFixed(1)}" height="22" rx="7"/>`;
    else if (m.k === "repeat") { for (let p = m.a; p <= m.b; p += 7) { const x = +X(p); s += `<path class="tl-x" d="M${x - 5} ${59} L${x + 5} ${69} M${x + 5} ${59} L${x - 5} ${69}"/>`; } }
    else if (m.k === "arrow") s += `<path class="dg-arrow" d="M${X(m.a)} 44 H${(+X(m.b) - 10).toFixed(1)}"/>${head(+X(m.b), 44, 0)}`;
    else if (m.k === "ghost") s += `<circle class="tl-ghost" cx="${X(m.x)}" cy="64" r="13"/><text class="tl-ghost-q" x="${X(m.x)}" y="69" text-anchor="middle">?</text>`;
  }
  s += `<text class="tl-label" x="300" y="124" text-anchor="middle">${esc(tl.label)}</text></svg>`;
  return `<div class="timeline">${s}</div>`;
}
function pageGrammar(sub) {
  const L = curLvl();
  if (sub) { const g = D.grammar.find(x => x.id === sub); if (g) return grammarView(g); }
  const list = D.grammar.filter(g => g.lvl === L);
  return `${pageHead("Structure", Tx("Grammaire"), Tx`${list.length} points de grammaire du niveau ${L}, à faire dans l'ordre. Chaque temps a sa ligne du temps : tu VOIS quand l'action se passe au lieu de chercher l'équivalent français. Pour chaque point : le piège typique des francophones, un quiz, et des exercices illimités.`)}
  <ol class="glist">${list.map((g, i) => `<li><a class="tile gitem${known.has("g:" + g.id) ? " known" : ""}" href="#grammar-${g.id}"><span class="gnum">${i + 1}</span><span class="pic" style="font-size:2rem">${g.pic}</span><span class="gtxt"><b>${esc(g.title)}</b><span class="muted small">${g.tl ? Tx("Ligne du temps · ") : ""}quiz${known.has("g:" + g.id) ? Tx(" · validé ✓") : ""}</span></span></a></li>`).join("")}</ol>`;
}
function grammarView(g) {
  const same = D.grammar.filter(x => x.lvl === g.lvl); const idx = same.indexOf(g); const nxt = same[idx + 1];
  return Tx`<a class="btn ghost back" href="#grammar">← Grammaire ${g.lvl}</a>
  <header class="page-head"><div class="gtop"><span class="pic">${g.pic}</span><div>${lvlTag(g.lvl)} <span class="muted small">Point ${idx + 1} / ${same.length}</span><h1>${esc(g.title)}</h1></div></div></header>
  ${g.tl ? Tx`<section class="panel"><span class="eyebrow">Quand ?</span>${timeline(g.tl)}</section>` : ""}
  <section class="panel"><span class="eyebrow">L'idée</span><p style="font-size:1.08rem;max-width:68ch">${esc(g.idea)}</p>
    <div class="table-wrap"><table class="form-table">${g.form.map(r => `<tr><td>${esc(r[0])}</td><td>${r.slice(1).map(esc).join(" · ")}</td></tr>`).join("")}</table></div></section>
  <section class="panel"><span class="eyebrow">En images</span><div class="exs">${g.ex.map(([e, t]) => `<div class="exline"><span class="pic">${e}</span><span class="t">${esc(t)}</span>${sayBtn(t)}</div>`).join("")}</div></section>
  <section class="panel"><span class="eyebrow">Le piège du francophone</span><div class="trap"><div class="no"><small>Calque du français</small><span>${esc(g.trap[0])}</span></div><div class="yes"><small>En allemand</small>${esc(g.trap[1])}</div></div></section>
  <section class="panel"><h2>Teste dich!</h2>${mcq("g-" + g.id, g.quiz, (score, n) => {
    if (score === n && !known.has("g:" + g.id)) toggleKnown("g:" + g.id);
    return Tx`Score : ${score} / ${n}. ${score === n ? Tx("Point validé ✓") : Tx("Relis l'idée et le piège, puis fais les exercices en plus ci-dessous.")}`;
  })}</section>
  ${practiceHtml("gr-" + g.id, "grammar", g.title + " — " + g.idea, g.form.map(r => r.join(": ")).join("\n"))}
  ${nxt ? Tx`<a class="btn" href="#grammar-${nxt.id}" style="align-self:flex-end">Point suivant : ${esc(nxt.title)} →</a>` : Tx`<a class="btn" href="#grammar" style="align-self:flex-end">Tous les points ${g.lvl} →</a>`}`;
}

/* ---------- phonetics ---------- */
function pagePhonetics() {
  const L = curLvl();
  const tabs = [["lessons", Tx`Leçons ${L}`], ["chart", Tx("Alphabet phonétique (API)")], ["pairs", Tx("Paires minimales")]];
  let body = "";
  if (state.phonTab === "lessons") {
    const list = D.pron.filter(l => l.lvl === L);
    body = Tx`<p class="muted">Les leçons de prononciation du niveau ${L}. Écoute chaque exemple à vitesse normale, puis lente, et répète à voix haute. Touche l'étoile quand tu as travaillé une leçon.</p>
    ${list.map((l, i) => `<details class="panel" ${i === 0 ? "open" : ""}><summary class="row" style="cursor:pointer;list-style:none"><span class="pic" style="font-size:1.6rem">${l.e}</span><h3 style="flex:1">${esc(l.title)}</h3>${starBtn("l:" + l.id)}</summary>
      <p style="max-width:70ch">${esc(l.body)}</p>
      <div class="lines">${l.ex.map(([t, note]) => `<div class="line">${sayBtn(t)}${slowBtn(t)}<span style="flex:1;min-width:0">${esc(t)}${note ? ` <span class="muted small">— ${esc(note)}</span>` : ""}</span></div>`).join("")}</div>
      ${l.quiz ? mcq("pron-" + l.id, l.quiz) : ""}</details>`).join("")}
    <p class="muted small">Les leçons des autres niveaux restent utiles en révision : change de niveau avec les boutons du menu.</p>`;
  } else if (state.phonTab === "chart") {
    const groups = [["short", Tx("Voyelles courtes")], ["long", Tx("Voyelles longues")], ["diph", Tx("Diphtongues (2 sons qui glissent)")], ["cons", "Consonnes"]];
    const all = Object.values(D.ipa).flat(); const sel = all.find(x => x.s === state.ipaSel);
    body = Tx`<div class="legend"><span><i style="background:var(--bad)"></i>N'existe pas en français</span><span><i style="background:var(--spark)"></i>Proche, mais différent</span><span><i style="background:var(--line)"></i>Comme en français</span></div>
    ${sel ? `<section class="panel" id="ipa-detail"><div class="ipa-detail"><span class="sym">/${esc(sel.s)}/</span><div style="display:flex;flex-direction:column;gap:10px"><p>${esc(sel.tip)}</p><div class="wordrow">${sel.w.map(([e, w]) => `<span class="wordpill"><span class="pic">${e}</span>${esc(w)}${sayBtn(w)}${micBtn(w)}</span>`).join("")}</div><div>${sayBtn(sel.w.map(x => x[1]).join(", "), Tx("Écouter tous les mots"))}</div></div></div></section>` : Tx('<p class="muted">Touche un symbole pour voir comment le prononcer et l\'écouter dans des mots.</p>')}
    ${groups.map(([k, label]) => `<section class="ipa-group"><h3>${label}</h3><div class="ipa-grid">${D.ipa[k].map(x => `<button class="ipa-cell h${x.hard}" data-act="ipa" data-s="${esc(x.s)}" aria-pressed="${state.ipaSel === x.s}"><b>${esc(x.s)}</b><span class="pic">${x.w[0][0]}</span><small>${esc(x.w[0][1])}</small></button>`).join("")}</div></section>`).join("")}`;
  } else {
    const set = D.pairs.find(p => p.id === state.pairSet) || D.pairs[0];
    if (!state.pg || state.pg.set !== set.id) state.pg = { set: set.id, score: 0, total: 0 };
    if (!state.pg.cur) { const it = pick(set.items); state.pg.cur = { it, side: Math.random() < .5 ? 0 : 1, done: false }; }
    const { it, done } = state.pg.cur;
    body = Tx`<div class="panel"><div><h3>Entends-tu la différence ?</h3><p class="muted">Tu entends UN des deux mots. Touche la bonne image. Ces paires sont celles que les francophones confondent le plus, à tous les niveaux.</p></div>
      <div class="chips">${D.pairs.map(p => `<button class="chip" data-act="pair-set" data-s="${p.id}" aria-pressed="${p.id === set.id}"><span class="ipa" style="color:inherit">${esc(p.label)}</span></button>`).join("")}</div>
      <p class="small muted">Astuce : ${esc(set.hint)}</p>
      <div class="toolbar"><div class="row"><button class="btn primary" data-act="pair-play">${IC.speaker} Écouter</button><button class="btn" data-act="pair-play" data-slow="1">${IC.slow} Lentement</button></div><span class="score">${state.pg.score} / ${state.pg.total}</span></div>
      <div class="pair-opts">${[0, 1].map(k => `<button data-act="pair-pick" data-k="${k}" id="pair-${k}"><span class="pic">${it[k * 2]}</span><b>${done ? esc(it[k * 2 + 1]) : "?"}</b></button>`).join("")}</div>
      <div class="row"><div class="pq-msg" id="pair-msg" aria-live="polite"></div>${done ? Tx('<button class="btn" data-act="pair-next">Suivant →</button>') : ""}</div>
      ${done ? `<div class="row">${[0, 1].map(k => `<span class="wordpill"><span class="pic">${it[k * 2]}</span>${esc(it[k * 2 + 1])}${sayBtn(it[k * 2 + 1])}${micBtn(it[k * 2 + 1])}</span>`).join("")}</div>` : ""}
    </div>
    <div class="panel"><h3>Toutes les paires de cette série</h3><div class="lines">${set.items.map(x => `<div class="line"><span class="pic">${x[0]}</span>${esc(x[1])}${sayBtn(x[1])}<span class="muted">vs</span><span class="pic">${x[2]}</span>${esc(x[3])}${sayBtn(x[3])}${sayBtn(x[1] + ", " + x[3], Tx("Écouter les deux"))}</div>`).join("")}</div></div>`;
  }
  return `${pageHead("Prononciation", Tx("Phonétique"), Tx`Les leçons de prononciation du niveau ${L}, plus l'alphabet phonétique international (API) et les paires minimales, utiles à tous les niveaux.${document.body.classList.contains("has-mic") ? Tx(" Le bouton micro vérifie si on comprend ton mot.") : ""}`)}
  <div class="tabs" role="tablist">${tabs.map(([id, l]) => `<button role="tab" aria-selected="${state.phonTab === id}" data-act="phon-tab" data-t="${id}">${l}</button>`).join("")}</div>${body}`;
}

/* ---------- cours PDF : programme de 180 jours, A1 → B2 ---------- */
const COURS_LV = ["A1", "A2", "B1", "B2"];
const COURS_PHASE = { A1: Tx("Les bases, de zéro"), A2: Tx("Se débrouiller au quotidien"), B1: Tx("Devenir autonome"), B2: Tx("Maîtrise, vie professionnelle et examens blancs") };
const COURS_DOCS = [
  ["README.pdf", "📘", Tx("Guide du programme"), Tx("La méthode et le planning des 180 jours. À lire en entier le jour 1.")],
  ["Fehlerprotokoll.pdf", "📝", Tx("Journal d'erreurs"), Tx("Note chaque erreur et sa correction. C'est l'outil le plus important.")],
  ["Progress_Tracker.pdf", "📈", Tx("Suivi des progrès"), Tx("Tes scores, tes examens blancs et tes bilans de fin de phase.")],
  ["Chunks.pdf", "💬", Tx("Les 200 chunks"), Tx("Les blocs tout faits de l'A1 au B2, introduits 1 ou 2 par jour.")],
  ["Suivi_Programme.xlsx", "✅", Tx("Tableau de suivi (Excel)"), Tx("À cocher chaque soir, bloc par bloc, avec un tableau de bord.")]
];
const coursDays = () => D.cours.days.map(([n, lvl, wk, theme, title, exam]) => ({ n, lvl, wk, theme, title, exam: !!exam, file: "D" + String(n).padStart(3, "0") + ".pdf" }));
const coursSize = f => { const k = ((EN && D.cours.kbEn) || D.cours.kb)[f]; return !k ? "" : k >= 1024 ? (k / 1024).toFixed(1).replace(".", EN ? "." : ",") + (EN ? " MB" : " Mo") : k + (EN ? " KB" : " Ko"); };
/* English mode: the course files come from cours/en/ (same names, translated for English speakers) */
const coursHref = h => EN && D.cours.kbEn ? h.replace(/href="cours\//g, 'href="cours/en/') : h;
const coursLinks = (f, label = "") => coursHref(Tx`<a class="btn" href="cours/${f}" target="_blank" rel="noopener"${label ? ` aria-label="Ouvrir ${label}"` : ""}>Ouvrir</a><a class="btn ghost" href="cours/${f}" download="${f}"${label ? Tx` aria-label="Télécharger ${label}"` : ""}>Télécharger</a>`);
const coursDoneBtn = d => { const on = known.has("j:" + d.n); return `<button class="btn done-btn" data-act="cours-done" data-n="${d.n}" aria-pressed="${on}">${on ? Tx("Fait ✓") : Tx("Marquer fait")}</button>`; };
function pageCours(sub) {
  const days = coursDays(), done = days.filter(d => known.has("j:" + d.n)).length, next = days.find(d => !known.has("j:" + d.n));
  const cur = curLvl(), want = (sub || "").toUpperCase();
  if (COURS_LV.includes(want)) state.coursLvl = want;
  const L = state.coursLvl || (done && next ? next.lvl : COURS_LV.includes(cur) ? cur : next ? next.lvl : "B2");
  const list = days.filter(d => d.lvl === L), ldone = list.filter(d => known.has("j:" + d.n)).length;
  const weeks = [...new Set(list.map(d => d.wk))];
  const tag = d => d.exam ? Tx('<span class="chip">Examen blanc</span>') : /Wiederholung|Bilan|Test/.test(d.title) ? Tx('<span class="chip">Révision</span>') : "";
  const row = d => Tx`<li class="tile cday${known.has("j:" + d.n) ? " known" : ""}${next && next.n === d.n ? " next" : ""}" id="tag-${d.n}"><span class="cnum">${d.n}</span><div class="gtxt"><b lang="de">${esc(d.title)}</b><span class="small muted">${esc(d.theme)} · ${coursSize(d.file)}</span>${tag(d)}</div><div class="acts">${coursLinks(d.file, Tx("le jour ") + d.n)}${coursDoneBtn(d)}</div></li>`;
  return Tx`<header class="page-head"><span class="eyebrow">Programme structuré · A1 → B2</span><h1>Cours PDF : 180 jours, de zéro au B2</h1>
    <p>Un PDF par jour, environ 4 heures de travail, dans l'ordre. Chaque jour contient un échauffement, les verbes et les chunks du jour, la grammaire, le vocabulaire, la lecture, l'écoute, l'expression orale et écrite, une histoire, puis les corrections. Le programme se termine par des examens blancs du Goethe-Zertifikat B2.</p></header>
  ${cur === "C1" ? Tx('<p class="panel small">Le programme PDF s\'arrête au B2 : il n\'y a pas de jours C1. Pour le C1, utilise les modules du site.</p>') : ""}
  <section class="lvl-hero" style="--lc:${lvlCol(next ? next.lvl : "B2")}">
    <div class="lvl-hero-band"><b>${next ? next.n : "180"}</b><span>${next ? Tx("jour suivant") : Tx("terminé")}</span></div>
    <div class="lvl-hero-body">
      <span class="eyebrow">Mon avancement · ${done} / 180 jours faits</span>
      <div class="progress big"><i style="width:${Math.round(done / 180 * 100)}%"></i></div>
      ${next ? Tx`<h2 lang="de">Tag ${next.n} : ${esc(next.title)}</h2><p class="muted small">${lvlTag(next.lvl)} Semaine ${next.wk} · ${esc(next.theme)}</p><div class="row">${coursLinks(next.file)}${coursDoneBtn(next)}</div>`
        : Tx`<h2>Les 180 jours sont faits. Bravo !</h2><p class="muted">Passe l'examen B2, puis continue avec les modules C1 du site.</p>`}
    </div>
  </section>
  <section class="panel"><h2>Comment t'en servir</h2><ol class="csteps">
    <li><b>Jour 1 :</b> lis le guide du programme en entier et prépare ton journal d'erreurs (documents ci-dessous).</li>
    <li><b>Un PDF par jour, dans l'ordre.</b> Ouvre-le à l'écran ou télécharge-le pour l'imprimer.</li>
    <li><b>Le soir, clique sur « Marquer fait ».</b> Le site retient où tu en es et t'affiche le jour suivant.</li>
    <li><b>Tous les 7 jours, c'est la révision.</b> Ne saute jamais ces jours-là : c'est là que tout se fixe.</li>
    <li><b>En retard ? Décale, ne saute pas.</b> Mieux vaut finir au jour 195 avec des bases solides.</li>
    <li><b>Complète avec le site, au même niveau :</b> podcasts, vocabulaire en images et conversation.</li>
  </ol></section>
  <section style="display:flex;flex-direction:column;gap:12px"><h2>Documents d'accompagnement</h2>
    <div class="grid">${COURS_DOCS.map(([f, e, t, p]) => `<div class="tile"><div class="tile-top"><span class="pic" style="font-size:1.9rem">${e}</span><span class="small muted">${coursSize(f)}</span></div><h3>${t}</h3><p class="muted small">${p}</p><div class="row">${f.endsWith(".pdf") ? coursLinks(f, t) : coursHref(Tx`<a class="btn" href="cours/${f}" download="${f}">Télécharger</a>`)}</div></div>`).join("")}</div>
  </section>
  <section style="display:flex;flex-direction:column;gap:14px"><h2>Les jours, niveau par niveau</h2>
    <div class="pick-grid">${COURS_LV.map(l => { const ds = days.filter(d => d.lvl === l), k = ds.filter(d => known.has("j:" + d.n)).length; return Tx`<button class="tile cpick" style="--lc:${lvlCol(l)}" data-act="cours-lvl" data-l="${l}" aria-pressed="${l === L}"><span class="tile-top">${lvlTag(l)}<span class="small muted">${k} / ${ds.length}</span></span><b>Jours ${ds[0].n} à ${ds[ds.length - 1].n}</b><span class="small muted">${COURS_PHASE[l]}</span><span class="progress"><i style="width:${Math.round(k / ds.length * 100)}%"></i></span></button>`; }).join("")}</div>
    <p class="muted">${lvlTag(L)} ${list.length} jours · ${ldone} faits${L === "B2" ? Tx(" · les jours 169 à 180 sont des examens blancs") : ""}</p>
    ${weeks.map(w => Tx`<div class="cweek"><h3>Semaine ${w}</h3><ul class="clist">${list.filter(d => d.wk === w).map(row).join("")}</ul></div>`).join("")}
  </section>`;
}

/* ---------- tips ---------- */
function pageTips() {
  return Tx`<header class="page-head"><span class="eyebrow">Méthode</span><h1>Conseils pour arrêter de traduire</h1><p>Traduire, c'est normal au début : ton cerveau s'appuie sur ce qu'il connaît. Ces ${D.tips.length} habitudes créent peu à peu un chemin direct vers l'allemand. Choisis-en deux cette semaine, pas douze.</p></header>
  <div class="grid wide">${D.tips.map(t => Tx`<article class="tile tip"><span class="pic">${t.e}</span><h3>${esc(t.title)}</h3><p>${esc(t.body)}</p><p class="how"><b>Concrètement :</b> ${esc(t.how)}</p></article>`).join("")}</div>
  <section class="panel"><h2>Ta routine de 30 minutes, dans ton niveau</h2><div class="table-wrap"><table class="form-table">
    <tr><td>5 min</td><td>Vocabulaire : un thème, puis le quiz « écoute → image »</td></tr>
    <tr><td>5 min</td><td>2 chunks + 3 verbes séparables, à voix haute, avec une phrase vraie sur ta vie</td></tr>
    <tr><td>10 min</td><td>Grammaire (un point, puis exercices en plus) ou une mini-histoire</td></tr>
    <tr><td>5 min</td><td>Une dictée ou une leçon de phonétique</td></tr>
    <tr><td>5 min</td><td>Parler avec l'IA, ou 15 minutes de podcast pendant les transports</td></tr>
  </table></div></section>`;
}

/* ================= CLAUDE (sample): podcasts + chat ================= */
let SAMPLE = null, SAMPLE_STATE = "pending";
const PERM_CODES = ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"];
function markDenied(code) { if (PERM_CODES.includes(code)) { SAMPLE = null; SAMPLE_STATE = "denied"; } }
function sampleErr(code) {
  return ({
    not_granted: Tx("Tu n'as pas autorisé ce site à créer du contenu. Tu peux changer ça dans le menu Permissions de l'artifact."),
    sampling_disabled: Tx("Cette fonction n'est pas disponible pour ce compte."),
    rate_limited: Tx("Limite d'utilisation atteinte pour l'instant. Réessaie dans un moment."),
    daily_quota: Tx("Le quota gratuit d'IA du jour est épuisé. Il se recharge chaque nuit (1 h du matin, heure de Paris, en hiver ; 2 h en été)."),
    session_expired: Tx("Reconnecte-toi à claude.ai, puis réessaie."),
    refused: Tx("Cette demande a été refusée. Reformule ton message."),
    empty_completion: Tx("La réponse est vide. Réessaie."),
    prompt_too_large: Tx("La conversation est trop longue : commence une nouvelle conversation."),
    access_code: Tx("Code d'accès manquant ou incorrect. Réessaie : le site te le redemandera."),
    invalid_json: Tx("La réponse était mal formée. Réessaie.")
  })[code] || Tx("La connexion a échoué. Réessaie.");
}
function sampleUnavailable(what) {
  if (SAMPLE_STATE === "pending") return Tx`<div class="panel"><p class="muted">Connexion…</p></div>`;
  return Tx`<div class="panel"><h3>${what} n'est pas disponible ici</h3><p class="muted">Ouvre ce site depuis claude.ai, ou depuis sa version en ligne (Cloudflare ou Netlify) configurée avec l'IA. ${SAMPLE_STATE === "denied" ? Tx("L'accès a été refusé pour cette page.") : ""}</p></div>`;
}

/* Outside claude.ai (on Cloudflare or Netlify), Claude is reached through the site's own function /api/claude,
   which keeps the API key on the server. Same interface as the claude.ai capability: sample(input, opts) and sample.json(). */
const API_URL = "/api/claude";
function parseJsonLoose(text) {
  const tries = [text, (text.match(/```(?:json)?\s*([\s\S]*?)```/) || [])[1]];
  const a = text.search(/[[{]/), b = Math.max(text.lastIndexOf("}"), text.lastIndexOf("]"));
  if (a >= 0 && b > a) tries.push(text.slice(a, b + 1));
  for (const t of tries) { if (!t) continue; try { return JSON.parse(t); } catch (e) { /* next */ } }
  return undefined;
}
/* One line of the server's answer. Claude: NDJSON {"t"} / {"done"} / {"error"}.
   Free Cloudflare Workers AI: Server-Sent Events "data: {...}", passed through untouched by the server. */
function readLine(line) {
  line = line.trim();
  if (!line.startsWith("data:")) return line.startsWith("{") ? JSON.parse(line) : null;
  const d = line.slice(5).trim();
  if (d === "[DONE]") return { done: true };
  let o; try { o = JSON.parse(d); } catch (e) { return null; }
  if (o.error) return { error: "upstream_error" };
  const t = typeof o.response === "string" ? o.response : (o.choices && o.choices[0] && o.choices[0].delta && o.choices[0].delta.content) || "";
  return t ? { t } : null;
}
function makeServerSample() {
  const post = (input, opts) => fetch(API_URL, {
    method: "POST", signal: opts.signal,
    headers: { "content-type": "application/json", "x-access-code": store.get("accessCode", "") },
    body: JSON.stringify({ input, effort: opts.effort })
  });
  const call = async (input, opts = {}) => {
    let res;
    try {
      res = await post(input, opts);
      if (res.status === 401) {
        const code = window.prompt(Tx("Code d'accès du site (donné par la personne qui l'a mis en ligne) :"));
        if (!code) throw { code: "access_code", message: "No access code" };
        store.set("accessCode", code.trim());
        res = await post(input, opts);
      }
    } catch (e) {
      if (e && e.code) throw e;
      throw { code: opts.signal && opts.signal.aborted ? "cancelled" : "upstream_error", message: String(e) };
    }
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      if (res.status === 401) store.set("accessCode", "");
      throw { code: j.code || "upstream_error", message: j.message || res.statusText };
    }
    const reader = res.body.getReader(), dec = new TextDecoder();
    let buf = "", text = "", truncated = false;
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        let i;
        while ((i = buf.indexOf("\n")) >= 0) {
          const line = buf.slice(0, i); buf = buf.slice(i + 1);
          if (!line.trim()) continue;
          const m = readLine(line);
          if (!m) continue;
          if (m.t) { text += m.t; if (opts.onText) opts.onText({ text, delta: m.t }); }
          else if (m.error) throw { code: m.error, message: m.error, text };
          else if (m.done) truncated = !!m.truncated;
        }
      }
    } catch (e) {
      if (opts.signal && opts.signal.aborted) throw { code: "cancelled", message: "cancelled", text };
      throw e && e.code ? e : { code: "upstream_error", message: String(e), text };
    }
    if (!text.trim()) throw { code: "empty_completion", message: "Empty answer" };
    return { text, truncated };
  };
  const sample = (input, opts) => call(input, opts);
  sample.json = async (input, opts) => {
    const { text } = await call(input, opts);
    const v = parseJsonLoose(text);
    if (v === undefined) throw { code: "invalid_json", message: "No JSON in the answer", text };
    return v;
  };
  sample.backend = "server";
  return sample;
}
async function findServerSample() {
  if (!/^https?:$/.test(location.protocol)) return null;
  try { const r = await fetch(API_URL, { method: "GET" }); return r.ok ? makeServerSample() : null; } catch (e) { return null; }
}

/* ---------- podcasts ---------- */
const POD_GUIDE = {
  A1: { words: 1500, wpm: 105, guide: "Very slow, very simple German. Short main clauses of 4 to 8 words, verb in second position. Only the 600 most common words. Present tense and modal verbs. Repeat the key words many times. When a new word appears, explain it right away with simple German or an example." },
  A2: { words: 1700, wpm: 115, guide: "Simple German and short sentences, about the 1,200 most common words. Perfekt for the past, weil / dass clauses, comparatives. Repeat and rephrase key ideas. Explain any less common word right away." },
  B1: { words: 1900, wpm: 125, guide: "Clear, natural German at a relaxed pace: everyday vocabulary, separable verbs, common idioms explained in context, Präteritum and Konjunktiv II where natural." },
  B2: { words: 2100, wpm: 140, guide: Tx("Natural conversational German at normal speed: idioms, nuanced opinions, connectors (zwar … aber, je … desto), passive and indirect speech where natural. Now and then, explain an advanced expression.") },
  C1: { words: 2200, wpm: 150, guide: "Sophisticated, idiomatic German between educated native speakers: nuance, irony, abstract vocabulary, complex structures (participial attributes, nominal style). Rich but clear." }
};
const HOST = { A: "Lena", B: "Jonas" };
function podPrompt(ep) {
  const g = POD_GUIDE[ep.lvl];
  return `Write the full script of episode ${ep.n} of "Denk auf Deutsch", a German-learning podcast for ${NATIVE} speakers. CEFR level: ${ep.lvl}.
Title: "${ep.title}". Focus: ${ep.focus}.
Hosts: Lena (line prefix "A:"), who lives in Berlin, and Jonas (line prefix "B:"), who comes from Vienna and sometimes uses an Austrian word (and explains it). They are two friendly hosts having a real conversation, not giving a lecture. They share personal anecdotes, ask each other questions and react naturally. They say "du" to each other.
Length: about ${g.words} words of dialogue, which is about 15 minutes of audio. The length matters: do not stop early.
Language: the whole script is in German (Hochdeutsch). ${g.guide}
Never use ${NATIVE}. Explain meanings with simple German, examples and descriptions, so the listener learns to think in German.
Structure: a warm welcome and the topic; a main conversation with a concrete story and real-life examples (the listener is a ${EN ? "" : "French "}software developer who wants to work at a coding school in Berlin, Wolfsburg, Heilbronn or Vienna; use this when it fits); a segment called "Wörter des Tages" where the hosts explain 6 useful words or expressions from the episode with examples (nouns always with their article); a short recap; a goodbye that invites the listener to answer the quiz.
Each turn is 1 to 5 sentences. Between 50 and 90 turns.

Output format: plain text, one item per line, no headings, no Markdown, nothing else:
A: <what Lena says>
B: <what Jonas says>
(all the dialogue lines, in order)
VOCAB: <German word or expression, nouns with der/die/das> | <einfache deutsche Erklärung> | <one emoji>
(exactly 6 VOCAB lines: the words of the day)
QUIZ: <Frage zur Folge auf Deutsch> | <Option 1> | <Option 2> | <Option 3> | <number of the correct option, 1 to 3>
(exactly 5 QUIZ lines)`;
}
function parsePod(text) {
  const lines = [], vocab = [], quiz = [];
  for (const raw of text.split("\n")) {
    const l = raw.trim().replace(/^[*_]+|[*_]+$/g, "");
    let m;
    if ((m = l.match(/^(A|B|Lena|Jonas)\s*:\s*(.+)$/))) lines.push({ s: m[1] === "Lena" ? "A" : m[1] === "Jonas" ? "B" : m[1], t: m[2].trim() });
    else if ((m = l.match(/^VOCAB\s*:\s*(.+)$/i))) { const p = m[1].split("|").map(x => x.trim()); if (p[0]) vocab.push({ w: p[0], d: p[1] || "", e: p[2] || "💬" }); }
    else if ((m = l.match(/^QUIZ\s*:\s*(.+)$/i))) { const p = m[1].split("|").map(x => x.trim()); const a = parseInt(p[4], 10) - 1; if (p.length >= 5 && a >= 0 && a < 3) quiz.push({ q: p[0], o: p.slice(1, 4), a }); }
  }
  return { lines, vocab, quiz };
}
const wordCount = lines => lines.reduce((a, l) => a + l.t.split(/\s+/).filter(Boolean).length, 0);
let podGen = null;
/* Fixed episodes (data/pod_*.js) are part of the site and need no AI; the others are written by AI once and kept in the browser. */
const POD_FIXED = {};
function podFixed(id) {
  const t = (window.DATA && DATA.podScripts || {})[id];
  if (!t) return null;
  return POD_FIXED[id] || (POD_FIXED[id] = parsePod(t));
}
function podData(id) { return podFixed(id) || store.get("pod:" + id, null); }
function podReady(id) { if (podFixed(id)) return true; try { return localStorage.getItem("dad:pod:" + id) != null; } catch (e) { return false; } }
function podGenerate(ep) {
  if (!SAMPLE || podGen) return;
  const ctl = new AbortController();
  podGen = { id: ep.id, ctl, text: "" };
  rerender();
  const run = SAMPLE.backend === "server"
    ? podGenerateInTwoParts(ep, ctl)
    : SAMPLE(podPrompt(ep), { signal: ctl.signal, cache: false, onText: ({ text }) => { podGen.text = text; podLive(ep); } });
  run
    .then(({ text, truncated }) => {
      podGen = null;
      const d = parsePod(text);
      if (d.lines.length < 10) toast(Tx("L'épisode n'a pas pu être écrit correctement. Réessaie."), 5000);
      else {
        store.set("pod:" + ep.id, d);
        if (!store.get("pod:" + ep.id, null)) toast(Tx("Le navigateur n'a pas pu enregistrer l'épisode (stockage plein ou bloqué)."), 6000);
        if (truncated) toast(Tx("L'épisode est un peu plus court que prévu."));
      }
      if (currentBase === "podcasts") rerender();
    })
    .catch(e => {
      podGen = null;
      if (e.code !== "cancelled") { markDenied(e.code); toast(sampleErr(e.code), 6000); }
      if (currentBase === "podcasts") rerender();
    });
}
/* On a server with a 60-second limit per request (Netlify), the episode is written in two halves. */
async function podGenerateInTwoParts(ep, ctl) {
  const half = Math.round(POD_GUIDE[ep.lvl].words / 2);
  const base = podPrompt(ep);
  const p1 = await SAMPLE(Tx`${base}\n\nIMPORTANT: write only the FIRST HALF of the episode now: the welcome and the first part of the main conversation, about ${half} words, 25 to 45 turns. Stop in the middle of the conversation. No goodbye, no VOCAB lines, no QUIZ lines.`,
    { signal: ctl.signal, onText: ({ text }) => { podGen.text = text; podLive(ep); } });
  const first = p1.text.trim();
  const p2 = await SAMPLE(Tx`${base}\n\nThe first half of the script is already written:\n\n${first}\n\nNow write ONLY the SECOND HALF, continuing naturally from the last line (do not repeat anything): the rest of the main conversation, the "Wörter des Tages" segment, the recap and the goodbye, about ${half} words. Then the 6 VOCAB lines and the 5 QUIZ lines.`,
    { signal: ctl.signal, onText: ({ text }) => { podGen.text = first + "\n" + text; podLive(ep); } });
  return { text: first + "\n" + p2.text, truncated: p2.truncated };
}
function podLive(ep) {
  const box = $("#pod-live"); if (!box || !podGen) return;
  const d = parsePod(podGen.text); const words = wordCount(d.lines); const target = POD_GUIDE[ep.lvl].words;
  $("#pod-prog").style.width = Math.min(100, Math.round(words / target * 100)) + "%";
  $("#pod-count").textContent = d.lines.length ? Tx`${words} / ~${target} mots écrits` : Tx("Préparation de l'épisode…");
  box.innerHTML = d.lines.slice(-5).map(l => `<div class="line"><span class="spk ${l.s}">${HOST[l.s]}</span><span class="t">${esc(l.t)}</span></div>`).join("");
}
function podPlay(ep, from) {
  const d = podData(ep.id); if (!d) return;
  const clear = () => $$(".transcript .line.playing").forEach(x => x.classList.remove("playing"));
  Audio.speak(d.lines.slice(from).map((l, i) => ({ text: l.t, id: "pl-" + (from + i), voice: l.s })), {
    onLine: id => { clear(); if (id) { const el = document.getElementById(id); if (el) { el.classList.add("playing"); el.scrollIntoView({ block: "nearest", behavior: "smooth" }); } } },
    onEnd: () => { clear(); const b = $("#pod-pause"); if (b) b.textContent = Tx("Pause"); }
  });
  const b = $("#pod-pause"); if (b) b.textContent = Tx("Pause");
}
function pagePodcasts(sub) {
  if (sub) { const ep = D.podcasts.find(x => x.id === sub); if (ep) return podcastView(ep); }
  const L = curLvl();
  const list = D.podcasts.filter(p => p.lvl === L);
  return `${pageHead(Tx("Écoute longue"), "Podcasts", Tx`${list.length} épisodes d'environ 15 minutes pour le niveau ${L}. Lena (Berlin) et Jonas (Vienne) discutent d'un sujet de la vie réelle, à ton niveau, sans jamais traduire. Chaque épisode a sa transcription, ses 6 mots du jour et un quiz. Les épisodes marqués « Prêt à écouter » font partie du site : pas besoin d'IA. Les autres sont écrits par IA la première fois que tu les ouvres (environ une minute), puis ils restent enregistrés dans ce navigateur.`)}
  <div class="grid">${list.map(p => { const ready = podReady(p.id); return Tx`<a class="tile" href="#podcasts-${p.id}"><div class="tile-top"><span class="eyebrow">Épisode ${p.n}</span>${lvlTag(p.lvl)}</div><h3>${esc(p.title)}</h3><p class="muted small">${esc(p.focus)}</p><p class="small">${known.has("e:" + p.id) ? Tx("Écouté ✓") : ready ? Tx("Prêt à écouter") : Tx('<span class="muted">À créer</span>')}</p></a>`; }).join("")}</div>`;
}
function podcastView(ep) {
  const d = podData(ep.id), fixed = !!podFixed(ep.id);
  const g = POD_GUIDE[ep.lvl];
  const idx = D.podcasts.indexOf(ep), nxt = D.podcasts[idx + 1] && D.podcasts[idx + 1].lvl === ep.lvl ? D.podcasts[idx + 1] : null;
  let body;
  if (!d) {
    if (podGen && podGen.id === ep.id) {
      setTimeout(() => podLive(ep), 0);
      body = Tx`<section class="panel"><div class="toolbar"><h3>Écriture de l'épisode…</h3><button class="btn" data-act="pod-cancel">Arrêter</button></div>
        <div class="progress"><i id="pod-prog" style="width:0%"></i></div><p class="muted small" id="pod-count">Préparation de l'épisode… (les premières lignes arrivent après quelques secondes)</p>
        <div class="lines live transcript" id="pod-live"></div></section>`;
    } else if (podGen) {
      body = Tx`<section class="panel"><p>Un autre épisode est en cours d'écriture. Attends qu'il soit fini.</p><a class="btn" href="#podcasts-${podGen.id}">Voir l'épisode en cours</a></section>`;
    } else if (!SAMPLE) {
      body = sampleUnavailable(Tx("La création d'épisodes"));
    } else {
      body = Tx`<section class="panel"><h3>Cet épisode n'existe pas encore</h3><p class="muted">Un dialogue d'environ ${g.words} mots adapté au niveau ${ep.lvl} va être écrit, avec 6 mots du jour et 5 questions. Ça prend environ une minute, ensuite l'épisode reste dans ce navigateur.</p>
        <button class="btn primary" data-act="pod-gen" data-id="${ep.id}" style="align-self:flex-start">Créer l'épisode</button></section>`;
    }
  } else {
    const words = wordCount(d.lines);
    const mins = Math.round(words / (g.wpm * settings.rate));
    body = Tx`<section class="panel"><div class="toolbar"><div class="row">
        <button class="btn primary" data-act="pod-play" data-id="${ep.id}" data-from="0">${IC.speaker} Écouter l'épisode</button>
        <button class="btn" id="pod-pause" data-act="pod-pause">Pause</button>
        <button class="btn ghost" data-act="pod-stop">Stop</button></div>
        <span class="muted small">≈ ${mins} min à la vitesse choisie · ${words} mots</span></div>
        <label class="switch" style="justify-content:flex-start;gap:12px">Cacher le texte (écouter d'abord sans lire) <input type="checkbox" id="pod-hide"${state.podHide ? " checked" : ""}></label>
        ${ep.lvl === "A1" || ep.lvl === "A2" ? Tx('<p class="small muted">Conseil : choisis la vitesse « Posée » dans les réglages audio pour la première écoute.</p>') : ""}
      </section>
      <section class="panel"><h2>Transcription</h2><p class="muted small">Touche le haut-parleur d'une ligne pour reprendre l'écoute à partir de là.</p>
        <div class="lines transcript${state.podHide ? " hide" : ""}" id="pod-tr">${d.lines.map((l, i) => Tx`<div class="line" id="pl-${i}"><button class="icon-btn" data-act="pod-play" data-id="${ep.id}" data-from="${i}" aria-label="Écouter à partir d'ici" title="Écouter à partir d'ici">${IC.speaker}</button><span class="spk ${l.s}">${HOST[l.s]}</span><span class="t">${esc(l.t)}</span></div>`).join("")}</div></section>
      ${d.vocab.length ? Tx`<section class="panel"><h2>Wörter des Tages</h2><div class="exs">${d.vocab.map(v => `<div class="exline"><span class="pic">${esc(v.e)}</span><span class="t"><b>${artHtml(v.w)}</b> — ${esc(v.d)}</span>${sayBtn(v.w)}${starBtn("w:" + v.w.toLowerCase())}</div>`).join("")}</div></section>` : ""}
      ${d.quiz.length ? Tx`<section class="panel"><h2>Quiz</h2>${mcq("pod-" + ep.id, d.quiz, (score, n) => {
        if (score >= n - 1 && !known.has("e:" + ep.id)) toggleKnown("e:" + ep.id);
        return Tx`Score : ${score} / ${n}. ${score >= n - 1 ? Tx("Épisode marqué comme écouté ✓") : Tx("Réécoute l'épisode (avec le texte cette fois) et réessaie.")}`;
      })}</section>` : ""}
      ${fixed ? "" : Tx`<button class="btn ghost" data-act="pod-regen" data-id="${ep.id}" style="align-self:flex-start">Réécrire cet épisode</button>`}`;
  }
  return Tx`<a class="btn ghost back" href="#podcasts">← Podcasts ${ep.lvl}</a>
  <header class="page-head"><div class="row">${lvlTag(ep.lvl)}<span class="eyebrow">Épisode ${ep.n} / 100</span></div><h1>${esc(ep.title)}</h1><p>${esc(ep.focus)}</p></header>
  ${body}
  ${nxt ? Tx`<a class="btn" href="#podcasts-${nxt.id}" style="align-self:flex-end">Épisode suivant : ${esc(nxt.title)} →</a>` : ""}`;
}

/* ---------- chat ---------- */
const SCENARIOS = [
  { id: "free", name: Tx("Conversation libre"), role: Tx("a friendly German-speaking friend in Berlin who chats with the learner about their life, interests, work and plans. Use du") },
  { id: "interview", name: Tx("Entretien d'embauche (42)"), role: "an interviewer hiring for a developer or pedagogy staff position at a 42 network campus in Germany or Austria (Berlin, Wolfsburg, Heilbronn or Vienna). Use Sie. Ask typical interview questions one at a time (Vorstellung, projects, teamwork, a failure, motivation, the learner's questions), follow up on their answers, and stay professional but warm" },
  { id: "amt", name: Tx("À l'Amt (Anmeldung)"), role: "a clerk at a Berlin Bürgeramt. Use Sie. The learner wants to register their address (Anmeldung). Ask for the documents (Reisepass, Wohnungsgeberbestätigung), ask them to spell their name, and at some point create a small bureaucratic problem they must solve politely" },
  { id: "wg", name: Tx("Visiter une WG"), role: Tx("a young person showing a free room in their shared flat (WG) in Berlin. Use du. Ask the learner about themselves, explain the house rules, the rent and the Nebenkosten, and answer their questions") },
  { id: "smalltalk", name: Tx("Pause café au travail"), role: Tx("a new colleague during a coffee break, making small talk about the weekend, the city, work and hobbies. Use du") },
  { id: "cafe", name: Tx("Au café / à la boulangerie"), role: Tx("a friendly staff member in a Viennese café or a German bakery. Use Sie. Take the order, answer questions, make a little small talk, and at some point handle a small problem (no more Brezeln, a wrong bill)") },
  { id: "project", name: Tx("Présenter un projet"), role: "a curious non-technical manager who asks the learner to explain one of their coding projects simply: what it does, how it works, the hardest part, what they learnt. Use Sie" },
  { id: "debate", name: Tx("Débat"), role: Tx("a friendly debate partner. Choose a light topic (Homeoffice, social media, AI, city vs countryside, Tempolimit auf der Autobahn), take the side opposite to the learner, and challenge their arguments politely. Use du") },
  { id: "teacher", name: Tx("Question au prof"), role: Tx("a patient German teacher who answers the learner's questions about grammar (cases, word order, genders), vocabulary and pronunciation with simple explanations and many examples, then gives a tiny exercise. Use du") }
];
const CHAT_LVL = {
  A1: "very short, very simple German sentences; only basic, common words; present tense; verb in second position",
  A2: "short, simple German sentences with common words; Perfekt for the past",
  B1: "clear everyday German with some separable verbs and common expressions",
  B2: "natural German with idioms, connectors and some subordinate clauses",
  C1: "fully natural, idiomatic German with nuance"
};
const chat = Object.assign({ sc: "free", msgs: [] }, store.get("chat", {}));
delete chat.lvl;
Object.defineProperty(chat, "lvl", { get: () => curLvl() || "B1", enumerable: false });
if (settings.chatFix === undefined) settings.chatFix = true;
if (settings.chatVoice === undefined) settings.chatVoice = true;
let chatCtl = null, chatErr = null, chatSugg = null;
const saveChat = () => store.set("chat", { sc: chat.sc, msgs: chat.msgs.slice(-60) });
function chatRules() {
  const sc = SCENARIOS.find(s => s.id === chat.sc) || SCENARIOS[0];
  return `You are a German conversation partner on a learning website. The learner is a ${NATIVE} speaker, CEFR level ${chat.lvl}. Their main difficulty is that they translate from ${NATIVE} in their head, so help them think directly in German.
Your role: ${sc.role}.
Rules:
- Stay in your role and keep the conversation going. Reply in 1 to 4 sentences, then ask one question.
- Language level: ${CHAT_LVL[chat.lvl]}.
- Write only in German (Hochdeutsch). If the learner writes in ${NATIVE} or mixes languages, reply in simple German and give them a model sentence to say instead.
- If the learner seems stuck, offer two simple ways to answer.
- Plain text only: no Markdown, no emojis, no bullet lists in your reply.
${settings.chatFix ? '- After your reply, if the learner\'s LAST message contains mistakes (grammar, case, gender, word order, word choice, ' + NATIVE + ' calques), add a line "### CORRECTIONS" followed by up to 3 lines like "- falsche Wörter → bessere Wörter (sehr kurze Erklärung auf einfachem Deutsch)". Only real mistakes. If there are none, write nothing after your reply.' : "- Do not correct the learner's mistakes."}`;
}
function parseChat(text) {
  const parts = text.split(/\n?\s*#{2,3}\s*CORRECTIONS?\s*:?\s*\n?/i);
  const fixes = (parts[1] || "").split("\n").map(x => x.replace(/^\s*[-•*]\s*/, "").trim()).filter(Boolean).slice(0, 3);
  return { reply: parts[0].trim(), fixes };
}
function chatAsk() {
  if (!SAMPLE || chatCtl) return;
  const ctl = new AbortController(); chatCtl = ctl; chatErr = null; chatSugg = null;
  const userIdx = chat.msgs.length && chat.msgs[chat.msgs.length - 1].r === "u" ? chat.msgs.length - 1 : -1;
  const turns = chat.msgs.slice(-30).map(m => ({ role: m.r === "u" ? "user" : "assistant", content: m.t }));
  const input = [{ role: "user", content: chatRules() + (chat.msgs.length ? "" : "\n\nStart now: greet the learner and open the conversation for this scenario with one question.") }, ...turns];
  if (input[input.length - 1].role !== "user") input.push({ role: "user", content: "(Continue the conversation.)" });
  renderChatLog();
  SAMPLE(input, { cache: false, modelTier: "quick", signal: ctl.signal, onText: ({ text }) => { const el = $("#chat-stream"); if (el) { el.classList.remove("thinking"); el.textContent = parseChat(text).reply; } } })
    .then(({ text }) => {
      chatCtl = null;
      const { reply, fixes } = parseChat(text);
      if (userIdx >= 0 && settings.chatFix) chat.msgs[userIdx].fixes = fixes;
      chat.msgs.push({ r: "a", t: reply }); saveChat(); renderChatLog();
      if (settings.chatVoice) Audio.speak(reply);
    })
    .catch(e => {
      chatCtl = null;
      if (e.code === "cancelled") { if (e.text && parseChat(e.text).reply) { chat.msgs.push({ r: "a", t: parseChat(e.text).reply + " …" }); saveChat(); } }
      else { markDenied(e.code); chatErr = e.code; }
      if (currentBase === "chat") { if (SAMPLE_STATE === "denied") rerender(); else renderChatLog(); }
    });
}
function chatSend(text) {
  text = (text || "").trim(); if (!text || chatCtl) return;
  chat.msgs.push({ r: "u", t: text }); saveChat();
  const i = $("#chat-in"); if (i) i.value = "";
  chatAsk();
}
function chatSubmit() {
  if (Mic.d && Mic.mode === "chat" && Mic.d.active()) { Mic.d.stop().catch(() => {}).then(() => chatSend($("#chat-in").value)); return; }
  chatSend($("#chat-in").value);
}
function chatSuggest() {
  if (!SAMPLE || chatCtl) return;
  const last = chat.msgs.slice(-6).map(m => (m.r === "u" ? "Learner: " : "Partner: ") + m.t).join("\n");
  chatSugg = "loading"; renderChatLog();
  SAMPLE.json(`A ${NATIVE}-speaking learner of German (CEFR ${chat.lvl}) is in this conversation:\n\n${last}\n\nSuggest 3 different short replies in German (at most 15 words each) the learner could say next, natural and at their level. Reply with only a JSON array of 3 strings.`, { modelTier: "quick", cache: false })
    .then(arr => { chatSugg = Array.isArray(arr) ? arr.map(String).slice(0, 3) : null; renderChatLog(); })
    .catch(e => { chatSugg = null; markDenied(e.code); toast(sampleErr(e.code)); renderChatLog(); });
}
function chatBubble(m) {
  if (m.r === "u") {
    const fx = m.fixes ? (m.fixes.length ? `<div class="fixes"><b>Pour dire plus naturellement :</b>${m.fixes.map(f => `<div>${esc(f)}</div>`).join("")}</div>` : Tx`<div class="fixes ok">✓ Aucune erreur</div>`) : "";
    return `<div class="msg me"><div class="bub">${esc(m.t)}</div>${fx}</div>`;
  }
  return `<div class="msg ai"><div class="bub">${esc(m.t)}</div><div class="row">${sayBtn(m.t)}${slowBtn(m.t)}</div></div>`;
}
function renderChatLog() {
  const log = $("#chat-log"); if (!log) return;
  let html = chat.msgs.map(chatBubble).join("");
  if (chatCtl) html += `<div class="msg ai"><div class="bub thinking" id="chat-stream">…</div></div>`;
  if (!chat.msgs.length && !chatCtl) html += Tx`<div class="empty">Choisis un scénario, puis lance la conversation. Ton partenaire IA parle en premier.<br><br><button class="btn primary" data-act="chat-start">Commencer la conversation</button></div>`;
  if (chatErr) html += Tx`<div class="fixes" style="align-self:center"><b>${esc(sampleErr(chatErr))}</b><button class="btn" data-act="chat-retry" style="align-self:flex-start">Réessayer</button></div>`;
  log.innerHTML = html;
  log.scrollTop = log.scrollHeight;
  const send = $("#chat-send"); if (send) { send.textContent = chatCtl ? Tx("Stop") : Tx("Envoyer"); send.dataset.act = chatCtl ? "chat-stop" : "chat-send"; }
  const sg = $("#chat-sugg");
  if (sg) sg.innerHTML = chatSugg === "loading" ? Tx('<span class="muted small">Je cherche des idées…</span>') : chatSugg ? chatSugg.map(s => `<button class="chip" data-act="chat-use" data-t="${esc(s)}">${esc(s)}</button>`).join("") : "";
}
function pageChat() {
  if (!SAMPLE) return Tx`<header class="page-head"><span class="eyebrow">Conversation</span><h1>Parler avec l'IA</h1></header>${sampleUnavailable("Le chat")}`;
  setTimeout(renderChatLog, 0);
  const quick = ["Kannst du das einfacher sagen?", "Wie bitte? Kannst du das wiederholen?", "Was bedeutet dieses Wort?", "Wie sagt man das auf Deutsch?"];
  return Tx`${pageHead("Conversation", Tx("Parler avec l'IA"), Tx`Un partenaire de conversation qui parle au niveau ${chat.lvl}. Écris ou parle au micro, en allemand. Tes erreurs sont corrigées sous ton message, sans traduction.`)}
  <div class="chat-wrap">
    <div class="chips">${SCENARIOS.map(s => `<button class="chip" data-act="chat-sc" data-s="${s.id}" aria-pressed="${chat.sc === s.id}">${esc(s.name)}</button>`).join("")}</div>
    <div class="toolbar"><span class="muted small">Le niveau de langue suit ton niveau (${chat.lvl}).</span>
      <div class="row"><label class="switch" style="gap:8px">Corrections <input type="checkbox" id="chat-fix"${settings.chatFix ? " checked" : ""}></label><label class="switch" style="gap:8px">Réponses à voix haute <input type="checkbox" id="chat-voice"${settings.chatVoice ? " checked" : ""}></label><button class="btn ghost" data-act="chat-new">Nouvelle conversation</button></div></div>
    <div class="chat-log" id="chat-log" aria-live="polite"></div>
    <div class="chips">${quick.map(q => `<button class="chip" data-act="chat-quick" data-t="${esc(q)}">${esc(q)}</button>`).join("")}<button class="chip" data-act="chat-sugg">Je ne sais pas quoi dire</button></div>
    <div class="chips" id="chat-sugg"></div>
    <p class="small muted" id="chat-partial" aria-live="polite"></p>
    <div class="chat-input"><textarea id="chat-in" rows="2" placeholder="Schreib auf Deutsch… (Entrée pour envoyer, Maj+Entrée pour aller à la ligne)" aria-label="Ton message"></textarea>
      <button class="icon-btn mic" id="chat-mic" data-act="chat-mic" aria-label="Parler au micro" title="Parler au micro">${IC.mic}</button>
      <button class="btn primary" id="chat-send" data-act="chat-send">Envoyer</button></div>
  </div>`;
}

/* ================= ROUTER ================= */
const PAGES = { home: pageHome, levels: pageLevels, audio: pageAudio, podcasts: pagePodcasts, chat: pageChat, stories: pageStories, vocab: pageVocab, chunks: pageChunks, phrasal: pagePhrasal, grammar: pageGrammar, phonetics: pagePhonetics, tips: pageTips, cours: pageCours };
function render(keepScroll) {
  const h = (location.hash || "#home").slice(1);
  const i = h.indexOf("-");
  const base = i < 0 ? h : h.slice(0, i);
  let sub = i < 0 ? "" : h.slice(i + 1);
  if (sub.startsWith("lvl-")) { setLevel(sub.slice(4)); sub = ""; }
  const fn = PAGES[base] || pageHome;
  currentBase = PAGES[base] ? base : "home";
  const y = window.scrollY;
  const html = !curLvl() && MODULE_IDS.includes(currentBase) && !sub ? pagePicker() : fn(sub);
  $("#main").innerHTML = `<div class="page">${html}</div>`;
  renderNav();
  if (!keepScroll) window.scrollTo(0, 0); else window.scrollTo(0, y);
}
function rerender() { render(true); }
window.addEventListener("hashchange", () => { Audio.stop(); closePop(); state.flash = null; Object.values(state.practiceCtl).forEach(c => c.abort()); state.practiceCtl = {}; state.practice = {}; render(false); });

/* ================= ACTIONS ================= */
const ACTS = {
  say: b => Audio.speak(b.dataset.t, b.dataset.slow ? { rate: 0.7 } : {}),
  mic: b => Mic.start(b.dataset.t),
  "mic-stop": () => { if (Mic.d) Mic.d.stop().catch(() => {}); },
  "mic-close": () => { $("#listening").hidden = true; },
  known: b => { const id = b.dataset.id; toggleKnown(id); const on = known.has(id); $$(`[data-act="known"][data-id="${CSS.escape(id)}"]`).forEach(x => { x.classList.toggle("on", on); x.setAttribute("aria-pressed", on); const card = x.closest(".wcard, .ccard"); if (card) card.classList.toggle("known", on); }); },
  peek: b => { b.outerHTML = `<span class="fr">≈ ${esc(b.dataset.fr)}</span>`; },
  mcq: b => mcqPick(b),
  "pq-play": b => pqPlay(b.dataset.k),
  "pq-pick": b => pqPick(b),
  "pq-next": b => { const k = b.dataset.k; pqNew(k, pqs[k].pool, pqs[k].mode); pqRefresh(k); pqPlay(k); },
  gloss: b => { const s = currentStory; const [e, def] = s.gloss[b.dataset.k]; openPop(Tx`<span class="pic">${e}</span><div><b>${esc(b.dataset.k)}</b><p class="small">${esc(def)}</p></div><div class="row">${sayBtn(b.dataset.k)}<button class="icon-btn" data-act="pop-close" aria-label="Fermer">✕</button></div>`); Audio.speak(b.dataset.k); },
  "pop-close": () => closePop(),
  "story-play": b => {
    const s = currentStory; const clear = () => $$(".scene.playing").forEach(x => x.classList.remove("playing"));
    Audio.speak(s.scenes.map((sc, i) => ({ text: sc.t, id: "sc" + i })), { rate: b.dataset.slow ? 0.75 : undefined, onLine: id => { clear(); if (id) { const el = document.getElementById(id); if (el) { el.classList.add("playing"); el.scrollIntoView({ block: "nearest", behavior: "smooth" }); } } }, onEnd: clear });
  },
  "set-level": b => {
    setLevel(b.dataset.l); toast(Tx`Niveau ${b.dataset.l} : tous les modules sont maintenant à ce niveau.`);
    const h = location.hash.slice(1); const base = h.split("-")[0];
    if (b.dataset.go === "home" || !h || base === "home" || base === "levels") { if (location.hash === "#home") rerender(); else location.hash = "#home"; }
    else if (h.includes("-") && base !== "vocab") location.hash = "#" + base;
    else rerender();
  },
  "practice-gen": b => practiceGen(b.dataset.k),
  "practice-stop": b => { const c = state.practiceCtl[b.dataset.k]; if (c) c.abort(); },
  "story-gen": () => storyGenerate(),
  "story-stop": () => { if (storyGen) storyGen.ctl.abort(); },
  "story-theme": b => { state.storyTheme = b.dataset.t; $$('[data-act="story-theme"]').forEach(x => x.setAttribute("aria-pressed", x.dataset.t === state.storyTheme)); },
  "story-del": b => { store.set("gstories", genStories().filter(s => s.id !== b.dataset.id)); location.hash = "#stories"; },
  "dict-go": b => { state.dictI = +b.dataset.i; rerender(); },
  "audio-tab": b => { state.audioTab = b.dataset.t; Audio.stop(); rerender(); },
  "dict-next": () => { state.dictI++; rerender(); },
  "dict-check": () => {
    const L = curLvl(); const list = D.dictation[L]; const i = state.dictI % list.length;
    const r = lcsDiff(list[i], $("#dict-in").value); const ok = r.score === r.total;
    if (ok && !known.has("d:" + L + ":" + i)) { toggleKnown("d:" + L + ":" + i); const dot = $(`.dot[data-i="${i}"]`); if (dot) dot.classList.add("done"); }
    $("#dict-res").innerHTML = Tx`<p style="font-size:1.1rem">${r.html}</p><p class="muted small">${r.score} / ${r.total} mots. ${ok ? Tx("Sans faute : dictée cochée ✓") : Tx("En rouge : ce qui manque ou diffère. Réécoute et corrige.")}</p>`;
  },
  "shadow-all": b => { const si = +b.dataset.s; const sh = D.shadowing[si]; const clear = () => $$(".line.playing").forEach(x => x.classList.remove("playing")); Audio.speak(sh.lines.map((t, li) => ({ text: t, id: `sh-${si}-${li}` })), { rate: b.dataset.slow ? 0.75 : undefined, onLine: id => { clear(); if (id) { const el = document.getElementById(id); if (el) el.classList.add("playing"); } }, onEnd: clear }); },
  "vocab-tab": b => { state.vocabTab = b.dataset.t; state.flash = null; rerender(); },
  "vw-check": () => { const f = state.flash; const x = f.order[f.i % f.order.length]; const typed = norm($("#vw-in").value), want = norm(x.w.split(" / ")[0].replace(/\(.*?\)/g, "")); const ok = typed === want; const r = $("#vw-res"); if (!ok && /^(der|die|das) /.test(x.w) && typed === want.replace(/^(der|die|das) /, "")) { r.innerHTML = Tx`<span style="color:var(--spark)">Presque ! N'oublie pas l'article : ${artHtml(x.w)}</span>`; return; } if (ok) { if (!f.answered) f.ok++; f.answered = true; r.innerHTML = Tx`<span style="color:var(--good)">Oui : ${artHtml(x.w)}</span> <span class="ipa">${esc(x.ipa)}</span> <button class="btn" data-act="vw-next">Suivant →</button>`; Audio.speak(x.w); } else { f.answered = true; r.innerHTML = Tx`<span style="color:var(--bad)">Pas tout à fait.</span> <button class="btn ghost" data-act="vw-show">Voir la réponse</button>`; } },
  "vw-show": () => { const f = state.flash; const x = f.order[f.i % f.order.length]; f.answered = true; $("#vw-res").innerHTML = Tx`${esc(x.w)} <span class="ipa">${esc(x.ipa)}</span> <button class="btn" data-act="vw-next">Suivant →</button>`; Audio.speak(x.w); },
  "vw-next": () => { state.flash.i++; state.flash.answered = false; rerender(); setTimeout(() => { const i = $("#vw-in"); if (i) i.focus(); }, 0); },
  "chunk-cat": b => { state.chunkCat = b.dataset.c; state.chunkLimit = 60; rerender(); },
  "chunk-more": () => { state.chunkLimit += 60; rerender(); },
  "chunk-mode": b => { state.chunkMode = b.dataset.m; rerender(); },
  "cf-show": () => { state.cf.shown = true; rerender(); Audio.speak(state.cf.c.chunk); },
  "cf-next": () => { state.cf = null; rerender(); },
  "pv-cat": b => { state.pvCat = b.dataset.c; rerender(); },
  "pv-part": b => { state.pvPart = state.pvPart === b.dataset.p ? "" : b.dataset.p; rerender(); },
  "pv-mode": b => { state.pvMode = b.dataset.m; rerender(); },
  "pf-show": () => { state.pf.shown = true; rerender(); Audio.speak(state.pf.p.pv); },
  "pf-next": () => { state.pf = null; rerender(); },
  "phon-tab": b => { state.phonTab = b.dataset.t; Audio.stop(); rerender(); },
  ipa: b => { state.ipaSel = b.dataset.s; rerender(); const d = $("#ipa-detail"); if (d) d.scrollIntoView({ block: "nearest", behavior: "smooth" }); const x = Object.values(D.ipa).flat().find(y => y.s === b.dataset.s); if (x) Audio.speak(x.w.map(w => w[1]).join(", ")); },
  "pair-set": b => { state.pairSet = b.dataset.s; state.pg = null; rerender(); },
  "pair-play": b => { const c = state.pg.cur; Audio.speak(c.it[c.side * 2 + 1], b.dataset.slow ? { rate: 0.7 } : {}); },
  "pair-pick": b => { const c = state.pg.cur; if (c.done) return; const k = +b.dataset.k; c.done = true; state.pg.total++; const ok = k === c.side; if (ok) state.pg.score++; rerender(); $("#pair-" + c.side).classList.add("right"); if (!ok) $("#pair-" + k).classList.add("wrong"); $("#pair-msg").innerHTML = ok ? Tx`<span style="color:var(--good)">Bravo : « ${esc(c.it[c.side * 2 + 1])} »</span>` : Tx`<span style="color:var(--bad)">C'était « ${esc(c.it[c.side * 2 + 1])} ». Réécoute les deux.</span>`; },
  "pod-gen": b => { const ep = D.podcasts.find(x => x.id === b.dataset.id); if (ep) podGenerate(ep); },
  "pod-regen": b => { const ep = D.podcasts.find(x => x.id === b.dataset.id); if (!ep || !SAMPLE) { toast(Tx("La réécriture n'est pas disponible ici (ouvre le site sur claude.ai).")); return; } Audio.stop(); podGenerate(ep); },
  "pod-cancel": () => { if (podGen) podGen.ctl.abort(); },
  "pod-play": b => { const ep = D.podcasts.find(x => x.id === b.dataset.id); if (ep) podPlay(ep, +b.dataset.from || 0); },
  "pod-pause": b => { if (Audio.paused) { Audio.resume(); b.textContent = Tx("Pause"); } else { Audio.pause(); b.textContent = Tx("Reprendre"); } },
  "pod-stop": () => Audio.stop(),
  "chat-start": () => chatAsk(),
  "chat-retry": () => { chatErr = null; chatAsk(); },
  "chat-send": () => chatSubmit(),
  "chat-stop": () => { if (chatCtl) chatCtl.abort(); },
  "chat-quick": b => chatSend(b.dataset.t),
  "chat-use": b => { const i = $("#chat-in"); i.value = b.dataset.t; i.focus(); },
  "chat-sugg": () => chatSuggest(),
  "chat-mic": () => Mic.startChat(),
  "chat-new": () => { if (chatCtl) chatCtl.abort(); chat.msgs = []; chatErr = null; chatSugg = null; saveChat(); renderChatLog(); },
  "chat-sc": b => { if (chatCtl) chatCtl.abort(); chat.sc = b.dataset.s; chat.msgs = []; chatErr = null; chatSugg = null; saveChat(); rerender(); chatAsk(); },
  "cours-lvl": b => { state.coursLvl = b.dataset.l; rerender(); },
  "cours-done": b => { const n = +b.dataset.n; toggleKnown("j:" + n); if (known.has("j:" + n)) toast(n === 180 ? Tx("Les 180 jours sont faits. Bravo !") : Tx`Jour ${n} fait. À demain pour le jour ${n + 1} !`); rerender(); },
  "set-lang": () => { settings.lang = EN ? "fr" : "en"; saveSettings(); location.reload(); },
  "pair-next": () => { state.pg.cur = null; rerender(); const c = state.pg.cur; Audio.speak(c.it[c.side * 2 + 1]); }
};
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if (!b) { if (!$("#pop").hidden && !e.target.closest("#pop")) closePop(); return; }
  const fn = ACTS[b.dataset.act]; if (fn) { e.preventDefault(); fn(b, e); }
});
document.addEventListener("input", e => {
  if (e.target.id === "chunk-q") { state.chunkQ = e.target.value; state.chunkLimit = 60; const pos = e.target.selectionStart; rerender(); const i = $("#chunk-q"); i.focus(); i.setSelectionRange(pos, pos); }
  if (e.target.id === "pv-q") { state.pvQ = e.target.value; const pos = e.target.selectionStart; rerender(); const i = $("#pv-q"); i.focus(); i.setSelectionRange(pos, pos); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !$("#pop").hidden) { e.preventDefault(); closePop(); }
  if (e.key === "Enter" && e.target.id === "dict-in") ACTS["dict-check"]();
  if (e.key === "Enter" && e.target.id === "vw-in") ACTS["vw-check"]();
  if (e.key === "Enter" && !e.shiftKey && e.target.id === "chat-in") { e.preventDefault(); chatSubmit(); }
});
document.addEventListener("change", e => {
  if (e.target.id === "pod-hide") { state.podHide = e.target.checked; const t = $("#pod-tr"); if (t) t.classList.toggle("hide", state.podHide); }
  if (e.target.id === "chat-fix") { settings.chatFix = e.target.checked; saveSettings(); }
  if (e.target.id === "chat-voice") { settings.chatVoice = e.target.checked; saveSettings(); }
});
$("#stop-btn").addEventListener("click", () => Audio.stop());
$("#gear").addEventListener("click", () => $("#settings").classList.toggle("open"));
$("#set-engine").addEventListener("change", e => { settings.engine = e.target.value; saveSettings(); });
$("#set-rate").value = String(settings.rate);
$("#set-rate").addEventListener("change", e => { settings.rate = +e.target.value; saveSettings(); if (Audio.tts && Audio.tts.setRate) Audio.tts.setRate(settings.rate).catch(() => {}); });
$("#set-immersion").checked = settings.immersion;
$("#set-immersion").addEventListener("change", e => { settings.immersion = e.target.checked; saveSettings(); rerender(); });

render(false);
Audio.init();
Mic.init().then(() => { if (Mic.d && (currentBase === "phonetics" || currentBase === "vocab")) rerender(); });
(async () => {
  if (window.claude && typeof window.claude.use === "function") { try { SAMPLE = await window.claude.use("sample"); } catch (e) { SAMPLE = null; } }
  else SAMPLE = await findServerSample();
  SAMPLE_STATE = SAMPLE ? "ok" : "none";
  if (["podcasts", "chat", "stories", "vocab", "grammar", "chunks", "phrasal"].includes(currentBase)) rerender();
})();
})();
