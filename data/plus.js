window.DATA = window.DATA || {};
/* Loaders for the "plus" content: 50 grammar points and 50 vocabulary themes per level.
   Grammar text format (one block per point):
     @ id | rank | title | emoji
     idea text (one line)
     F: label = forms            (table rows, several)
     E: emoji | German sentence  (examples, several)
     T: French calque || German  (the trap)
     Q: question || option | *correct option | option   (quiz, several)
   Points are sorted by `rank` inside each level; existing points get their rank from GRANK. */
(function () {
  const ORDER = ["A1", "A2", "B1", "B2", "C1"];
  const GRANK = {
    "sein-haben": 3, "praesens": 4, "artikel": 6, "verb-position": 9, "akkusativ": 15, "negation": 18, "modalverben": 24, "trennbare-verben": 31,
    "perfekt": 3, "dativ": 6, "wechselpraepositionen": 12, "possessiv": 9, "weil-dass": 20, "komparativ": 25, "praeteritum-basis": 5, "reflexiv": 16,
    "adjektivdeklination": 3, "praeteritum": 1, "konjunktiv2": 12, "passiv": 18, "relativsaetze": 23, "verben-praepositionen": 7, "wenn-als-obwohl": 28, "futur": 33,
    "plusquamperfekt": 1, "konjunktiv2-vergangenheit": 4, "passiv-modal": 8, "genitiv": 12, "indirekte-rede": 16, "konnektoren": 21, "nominalisierung": 26, "infinitivsaetze": 30,
    "partizipialattribute": 2, "modal-subjektiv": 7, "passiversatz": 12, "nomen-verb": 17, "als-ob": 22, "konzessiv": 26, "futur2": 30, "satzstellung": 35
  };
  const rank = g => (g.rank != null ? g.rank : (GRANK[g.id] != null ? GRANK[g.id] : 99));
  const sortGrammar = () => {
    if (!DATA.grammar) return;
    const idx = new Map(DATA.grammar.map((g, i) => [g, i]));
    DATA.grammar.sort((a, b) => ORDER.indexOf(a.lvl) - ORDER.indexOf(b.lvl) || rank(a) - rank(b) || idx.get(a) - idx.get(b));
  };
  DATA.addGrammar = (lvl, raw) => {
    const have = new Set(DATA.grammar.map(g => g.id));
    for (const block of raw.split(/\n(?=@ )/)) {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      if (!lines.length || !lines[0].startsWith("@ ")) continue;
      const [id, r, title, pic] = lines[0].slice(2).split("|").map(s => s.trim());
      if (have.has(id)) continue;
      const g = { id, lvl, rank: +r, title, pic, idea: "", form: [], ex: [], trap: ["", ""], quiz: [] };
      for (const l of lines.slice(1)) {
        const m = l.match(/^([FETQ]):\s*(.*)$/);
        if (!m) { g.idea += (g.idea ? " " : "") + l; continue; }
        const [, k, v] = m;
        if (k === "F") { const i = v.indexOf("="); g.form.push([v.slice(0, i).trim(), v.slice(i + 1).trim()]); }
        else if (k === "E") { const i = v.indexOf("|"); g.ex.push([v.slice(0, i).trim(), v.slice(i + 1).trim()]); }
        else if (k === "T") g.trap = v.split("||").map(s => s.trim());
        else if (k === "Q") {
          const [q, opts] = v.split("||");
          const o = opts.split("|").map(s => s.trim());
          g.quiz.push({ q: q.trim(), o: o.map(s => s.replace(/^\*/, "")), a: o.findIndex(s => s.startsWith("*")) });
        }
      }
      DATA.grammar.push(g); have.add(id);
    }
    sortGrammar();
  };
  sortGrammar();

  /* Vocabulary themes. Text format:
       # id | Theme name | emoji
       emoji | word (with article) | IPA | example sentence | plural
     Words already present anywhere in the dictionary are skipped. */
  const norm = s => s.toLowerCase().normalize("NFC").trim();
  DATA.addThemes = (lvl, raw) => {
    const seen = new Set(DATA.vocab.flatMap(t => t.words.map(w => norm(w[1]))));
    let cur = null;
    for (const line of raw.split("\n").map(l => l.trim()).filter(Boolean)) {
      if (line.startsWith("# ")) {
        const [id, name, e] = line.slice(2).split("|").map(s => s.trim());
        cur = { id: lvl.toLowerCase() + "-" + id, name, e };
        continue;
      }
      if (!cur) continue;
      const [pic, word, ipa, ex, pl] = line.split("|").map(s => (s || "").trim());
      if (!word || seen.has(norm(word))) continue;
      seen.add(norm(word));
      DATA.addWords(cur.id, cur.name, cur.e, [[pic, word, ipa, lvl, ex, pl || ""]]);
    }
  };
})();
