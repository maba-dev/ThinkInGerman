/* Installable app (PWA): registers the service worker and offers "add to home screen" on phones.
   Does nothing inside an iframe (e.g. the claude.ai artifact). */
(function () {
  let framed = false;
  try { framed = window.self !== window.top; } catch (e) { framed = true; }
  if (framed) return;
  const secure = location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(location.hostname);
  if ("serviceWorker" in navigator && secure) {
    window.addEventListener("load", () => { navigator.serviceWorker.register("sw.js").catch(() => {}); });
  }
  const KEY = "dad:pwa-hint";
  const seen = () => { try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; } };
  const remember = () => { try { localStorage.setItem(KEY, "1"); } catch (e) { /* storage blocked */ } };
  const installed = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  const phone = window.matchMedia("(max-width: 860px)").matches;
  if (installed || !phone || seen()) return;

  function banner(text, actionLabel, onAction) {
    if (document.getElementById("pwa-bar")) return;
    const bar = document.createElement("div");
    bar.id = "pwa-bar";
    bar.className = "pwa-bar";
    bar.innerHTML = '<img src="icons/icon-192.png" alt="" width="40" height="40"><p></p>'
      + (actionLabel ? '<button class="btn primary" type="button"></button>' : "")
      + '<button class="icon-btn" type="button" aria-label="Fermer">✕</button>';
    bar.querySelector("p").textContent = text;
    if (actionLabel) {
      const b = bar.querySelector(".btn");
      b.textContent = actionLabel;
      b.addEventListener("click", () => { onAction(); bar.remove(); });
    }
    bar.querySelector(".icon-btn").addEventListener("click", () => { remember(); bar.remove(); });
    document.body.appendChild(bar);
  }

  let deferred = null;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferred = e;
    banner("Installe l'appli : une icône sur ton écran d'accueil, même hors connexion.", "Installer", async () => {
      deferred.prompt();
      try { await deferred.userChoice; } catch (err) { /* ignore */ }
      remember();
      deferred = null;
    });
  });
  window.addEventListener("appinstalled", () => { remember(); const b = document.getElementById("pwa-bar"); if (b) b.remove(); });

  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (ios) {
    window.addEventListener("load", () => setTimeout(() => {
      banner("Pour installer l'appli : touche le bouton Partager ⬆️ de Safari, puis « Sur l'écran d'accueil ».", "", null);
    }, 2500));
  }
})();
