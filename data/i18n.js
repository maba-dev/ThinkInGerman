/* Language of the explanations: "fr" (French speakers) or "en" (English speakers).
   The saved choice wins (menu button, stored in settings), otherwise the browser's language.
   English texts live in data/en_ui.js (interface) and data/en_*.js (content), keyed by the French text. */
window.DATA = window.DATA || {};
DATA.LANG = (function () {
  try { var s = JSON.parse(localStorage.getItem("dad:settings") || "{}"); if (s.lang === "fr" || s.lang === "en") return s.lang; } catch (e) { /* storage blocked */ }
  return /^fr/i.test(navigator.language || "") ? "fr" : "en";
})();
DATA.I18N = DATA.I18N || {};
DATA.addI18n = function (map) { for (var k in map) DATA.I18N[k] = map[k]; };
document.documentElement.lang = DATA.LANG;
/* The English texts are only downloaded when English is on (they run right after this file, before app.js). */
if (DATA.LANG === "en") document.write('<script src="data/en_ui.js"><\/script><script src="data/en_content.js"><\/script>');
