window.DATA = window.DATA || {};

/* CEFR levels (GER). Hours = rough cumulative guided learning hours for a French speaker. */
DATA.levels = [
  { id: "A1", name: "Anfänger", fr: "Découverte", hours: "≈ 100–150 h", words: "≈ 650 mots",
    can: ["Te présenter et présenter quelqu'un", "Commander au café, acheter un billet, demander ton chemin", "Comprendre des phrases simples si on parle lentement", "Remplir un formulaire simple (nom, adresse, date de naissance)"],
    focus: ["sein & haben, présent, verbe en position 2", "der / die / das, accusatif, nicht / kein", "Verbes de modalité, verbes séparables", "Sons : ü, ö, ch, W = v, Z = ts"] },
  { id: "A2", name: "Grundlagen", fr: "Survie", hours: "≈ 200–300 h", words: "≈ 1 300 mots",
    can: ["Parler de ta routine, ta famille, ton travail", "Raconter ton week-end au Perfekt", "Te débrouiller à l'Amt, chez le médecin, avec le propriétaire", "Écrire un message ou un e-mail simple"],
    focus: ["Perfekt, datif, prépositions Wo? / Wohin?", "weil / dass (verbe à la fin), comparatif", "Verbes pronominaux, war / hatte / konnte", "Sons : voyelles longues/brèves, R vocalique, ei / ie"] },
  { id: "B1", name: "Mittelstufe", fr: "Seuil", hours: "≈ 350–500 h", words: "≈ 2 400 mots",
    can: ["Te débrouiller seul dans la vie quotidienne en Allemagne ou en Autriche", "Raconter une expérience, un projet, un rêve", "Donner ton avis et le justifier", "Suivre une conversation claire sur un sujet connu"],
    focus: ["Déclinaison de l'adjectif, prétérit, Konjunktiv II", "Passif, relatives, verbes + préposition", "wenn / als / obwohl, futur et supposition", "Accent tonique, coup de glotte, mélodie"] },
  { id: "B2", name: "Selbstständig", fr: "Indépendant", hours: "≈ 550–650 h", words: "≈ 4 000 mots",
    can: ["Passer un entretien d'embauche en allemand", "Discuter avec des germanophones sans effort pour eux", "Comprendre les infos, les séries, les articles", "Argumenter : avantages, inconvénients, nuances (Goethe B2)"],
    focus: ["Plus-que-parfait, Konjunktiv II passé, discours indirect", "Génitif, passif avec modal, style nominal", "Connecteurs doubles, zu / um … zu", "Comprendre l'allemand parlé rapide"] },
  { id: "C1", name: "Fachkundig", fr: "Autonome", hours: "≈ 750–900 h", words: "≈ 8 000 mots",
    can: ["T'exprimer spontanément et couramment, sans chercher tes mots", "Utiliser l'allemand au travail : réunions, présentations, écrits", "Comprendre des textes longs et exigeants, et l'implicite", "Écrire des textes clairs, structurés, au registre adapté"],
    focus: ["Participes en attribut, modaux subjectifs", "Équivalents du passif, expressions nom + verbe", "als ob, nuances de concession, ordre des mots", "Intonation, particules modales, rythme d'un exposé"] }
];

/* Tips to stop translating (German edition). */
DATA.tips = [
  { e: "🎨", title: "Le nom, l'article et la couleur", body: "Le genre allemand ne se devine pas depuis le français (la lune = der Mond). Apprends chaque nom AVEC son article et sa couleur : der en bleu, die en rouge, das en vert. Visualise l'objet dans sa couleur : le cerveau retient l'image, pas la traduction.", how: "Dans le vocabulaire, dis toujours « der Apfel », jamais « Apfel » tout seul." },
  { e: "🖼️", title: "Image d'abord, mot ensuite", body: "N'écris jamais la traduction à côté d'un mot. Associe-le à une image, un geste, une situation. Tu crées un lien direct image → allemand, sans passer par le français.", how: "Fais chaque jour le quiz « écoute → image » de ton niveau." },
  { e: "📖", title: "Un dictionnaire allemand-allemand", body: "Dès le A2, utilise un dictionnaire monolingue : DWDS, Duden ou le dictionnaire Langenscheidt « Deutsch als Fremdsprache ». Les définitions simples t'apprennent à expliquer en allemand.", how: "Ajoute dwds.de à tes favoris." },
  { e: "🧱", title: "Des blocs, pas des mots", body: "« Ich freue mich auf… », « Es kommt darauf an », « Mir ist kalt » : un chunk contient déjà le bon cas et le bon ordre des mots. Tu n'as rien à construire, donc rien à traduire.", how: "2 chunks par jour, à voix haute, avec une phrase vraie sur ta vie." },
  { e: "🔚", title: "Pense « verbe à la fin »", body: "La plus grande différence avec le français : la parenthèse verbale (Ich habe gestern … gearbeitet) et le verbe à la fin des subordonnées. Ne construis pas en français : entraîne-toi avec des phrases modèles jusqu'à ce que l'ordre devienne naturel.", how: "Répète 5 phrases avec weil et dass chaque jour pendant une semaine." },
  { e: "🗣️", title: "Le Selbstgespräch", body: "Commente ce que tu fais, en allemand, dans ta tête : « Ich mache Kaffee. Wo ist mein Schlüssel? Ich muss in fünf Minuten los. » C'est l'exercice le plus efficace pour PENSER en allemand.", how: "5 minutes par jour : sous la douche, en marchant, en cuisinant." },
  { e: "🔁", title: "Le shadowing", body: "Écoute une phrase et répète-la EN MÊME TEMPS que l'audio. Tu imites la mélodie, le coup de glotte et le R vocalique sans avoir le temps de traduire. Commence lentement, puis à vitesse normale.", how: "Onglet Écoute & dictée → Shadowing." },
  { e: "🧩", title: "Contourne le mot qui manque", body: "Il te manque un mot ? Décris-le : « Das ist so ein Ding, mit dem man… », « So etwas wie… ». C'est une compétence évaluée au Goethe B2, et les germanophones adorent les mots composés : invente-en un, on te comprendra souvent (Kaffeemaschinenreiniger !).", how: "Jeu : décris 5 objets de ta pièce sans dire leur nom." },
  { e: "⏱️", title: "La règle des 2 secondes", body: "Si tu cherches un mot plus de 2 secondes, utilise un chunk pour gagner du temps (« Wie soll ich sagen? », « Moment mal… ») puis reformule plus simplement. Viser la phrase parfaite pousse à traduire.", how: "Révise la catégorie « Gagner du temps » des chunks B1." },
  { e: "📺", title: "Immersion passive", body: "Passe ton téléphone et tes applis en allemand. Regarde les séries en VO avec sous-titres ALLEMANDS (Dark, Babylon Berlin, Der Tatortreiniger) et écoute Easy German, Nicos Weg ou les « Nachrichten in einfacher Sprache ».", how: "Change la langue de ton téléphone aujourd'hui." },
  { e: "📓", title: "Le journal de 5 lignes", body: "Chaque soir, écris 5 lignes en allemand sur ta journée, directement en allemand. Si un mot manque, contourne-le, puis vérifie dans le DWDS.", how: "Réutilise 1 verbe séparable et 1 chunk du jour." },
  { e: "💤", title: "Peu mais tous les jours", body: "20 minutes par jour battent 3 heures le dimanche. La mémoire fonctionne par répétitions espacées : revois un mot après 1, 3, 7 et 30 jours. Marque ce que tu connais (⭐) pour suivre tes progrès.", how: "Fixe une heure fixe, par exemple 20 min avant le petit-déjeuner." }
];

/* Listening: dictations (10 per level) and shadowing scripts (2 per level). */
DATA.dictation = {
  A1: ["Ich heiße Malik und komme aus Frankreich.", "Ich wohne in einer kleinen Wohnung in Berlin.", "Der Bus kommt in fünf Minuten.", "Ich trinke gern Kaffee mit Milch.", "Am Wochenende gehe ich in den Park.", "Wie viel kostet die Fahrkarte?", "Meine Schwester hat zwei Kinder.", "Heute ist es kalt und es regnet.", "Ich stehe jeden Tag um sieben Uhr auf.", "Kannst du mich morgen anrufen?"],
  A2: ["Letztes Wochenende bin ich nach Hamburg gefahren.", "Ich muss mich beim Bürgeramt anmelden.", "Wir haben gestern Abend Pizza gegessen.", "Ich lerne Deutsch, weil ich in Wien arbeiten möchte.", "Die Wohnung ist größer als meine alte Wohnung.", "Kannst du mir bitte helfen? Ich finde meinen Schlüssel nicht.", "Am Montag habe ich einen Termin beim Arzt.", "Ich freue mich schon auf den Urlaub.", "Das Buch liegt auf dem Tisch in der Küche.", "Als Kind war ich oft bei meiner Oma."],
  B1: ["Wenn ich mehr Zeit hätte, würde ich ein Instrument lernen.", "Die Wohnung, die wir besichtigt haben, war leider zu teuer.", "Obwohl es geregnet hat, sind wir wandern gegangen.", "Das Formular muss bis Freitag ausgefüllt werden.", "Ich warte schon seit einer halben Stunde auf den Zug.", "Er hat mir erzählt, dass er nach Österreich umziehen will.", "Als ich in Berlin ankam, sprach ich kaum ein Wort Deutsch.", "Könnten Sie mir bitte sagen, wo das Bürgeramt ist?", "Ich interessiere mich sehr für künstliche Intelligenz.", "Wir haben uns entschieden, eine größere Wohnung zu suchen."],
  B2: ["Nachdem er die Prüfung bestanden hatte, fuhr er in den Urlaub.", "Wenn ich das gewusst hätte, wäre ich früher gekommen.", "Wegen des Streiks fallen heute fast alle Züge aus.", "Der Vertrag muss von beiden Seiten unterschrieben werden.", "Je länger ich in Deutschland lebe, desto besser verstehe ich die Kultur.", "Die Ministerin sagte, die Lage sei unter Kontrolle.", "Ich spare jeden Monat, um mir eine eigene Wohnung leisten zu können.", "Trotz der hohen Mieten ziehen immer mehr Menschen in die Städte.", "Sie ist nicht nur Entwicklerin, sondern auch eine hervorragende Lehrerin.", "Der Bewerber, mit dem wir gestern gesprochen haben, hat uns überzeugt."],
  C1: ["Die seit Jahren steigenden Mieten stellen viele Familien vor große Probleme.", "Der Minister soll von den Plänen schon lange gewusst haben.", "Das Problem lässt sich nicht ohne Weiteres lösen.", "Hätte ich die Risiken gekannt, hätte ich dem Projekt nie zugestimmt.", "Es bleibt abzuwarten, ob die Reform tatsächlich Wirkung zeigt.", "Ungeachtet der Kritik hielt die Regierung an ihrem Kurs fest.", "Die Unterlagen sind bis spätestens Ende des Monats einzureichen.", "Er tat so, als hätte er von der ganzen Sache nichts gewusst.", "Wir müssen bald eine Entscheidung treffen, die alle Beteiligten mittragen können.", "Nicht zuletzt spielt die Digitalisierung eine entscheidende Rolle."]
};

DATA.shadowing = [
  { lvl: "A1", title: "Hallo, ich bin neu hier", lines: ["Hallo! Ich heiße Malik.", "Ich komme aus Frankreich.", "Ich wohne jetzt in Berlin.", "Ich bin Entwickler.", "Freut mich!"] },
  { lvl: "A1", title: "Beim Bäcker", lines: ["Guten Morgen!", "Ich hätte gern zwei Brötchen.", "Und einen Kaffee, bitte.", "Was kostet das?", "Danke, schönen Tag noch!"] },
  { lvl: "A2", title: "Mein Wochenende", lines: ["Am Samstag bin ich spät aufgestanden.", "Dann habe ich mit Freunden gefrühstückt.", "Am Nachmittag sind wir in den Park gegangen.", "Am Sonntag habe ich gekocht und gelesen.", "Und du? Was hast du am Wochenende gemacht?"] },
  { lvl: "A2", title: "Beim Arzt", lines: ["Guten Tag, ich habe einen Termin um zehn.", "Mir geht es nicht so gut.", "Ich habe Kopfschmerzen und Fieber.", "Seit wann? Seit zwei Tagen.", "Brauche ich eine Krankschreibung?"] },
  { lvl: "B1", title: "Ein Projekt vorstellen", lines: ["Also, im Grunde ist es ein Chat-Server in C++.", "Das Schwierigste war, viele Verbindungen gleichzeitig zu verwalten.", "Am Ende haben wir dafür poll benutzt.", "Wenn ich es noch einmal machen würde, würde ich von Anfang an mehr testen."] },
  { lvl: "B1", title: "Eine Wohnung besichtigen", lines: ["Guten Tag, ich komme wegen der Wohnung.", "Wie hoch sind die Nebenkosten?", "Ist die Wohnung ab sofort frei?", "Darf man hier Haustiere haben?", "Ich würde die Wohnung sehr gern nehmen."] },
  { lvl: "B2", title: "Vorstellungsgespräch: Stärken", lines: ["Ich würde sagen, meine größte Stärke ist das Problemlösen.", "Wenn ich nicht weiterkomme, zerlege ich das Problem in kleine Teile.", "Bei 42 gibt es keine Lehrer, deshalb habe ich gelernt, selbst Lösungen zu finden.", "Außerdem arbeite ich gern im Team und gebe ehrliches Feedback."] },
  { lvl: "B2", title: "Eine Meinung begründen", lines: ["Ehrlich gesagt bin ich da etwas zwiegespalten.", "Einerseits bietet Homeoffice viel Flexibilität.", "Andererseits kann man sich schnell isoliert fühlen.", "Alles in allem würde ich mich für ein hybrides Modell entscheiden."] },
  { lvl: "C1", title: "Eine Empfehlung präsentieren", lines: ["Nachdem ich die Daten eingehend analysiert habe, möchte ich eine Empfehlung aussprechen.", "Kurz gesagt: Wir sollten den Start um zwei Wochen verschieben.", "Zugegebenermaßen ist das nicht das, was alle hören wollten.", "Ein überstürzter Start würde uns jedoch Risiken aussetzen, die sich nicht rechtfertigen lassen."] },
  { lvl: "C1", title: "Eine Rede eröffnen", lines: ["Sehr geehrte Damen und Herren, liebe Kolleginnen und Kollegen,", "es ist mir eine große Ehre, heute vor Ihnen zu stehen.", "Vor fünf Jahren hätte niemand gedacht, dass dieser Campus so schnell wachsen würde.", "Lassen Sie mich mit einer kleinen Geschichte beginnen."] }
];

/* Placement test: 15 items from A1 to C1 */
DATA.placement = [
  { l: "A1", q: "Ich ___ aus Frankreich.", o: ["komme", "kommst", "kommt"], a: 0 },
  { l: "A1", q: "___ du Geschwister?", o: ["Bist", "Hast", "Habt"], a: 1 },
  { l: "A1", q: "Ich habe ___ Hund.", o: ["ein", "einen", "einem"], a: 1 },
  { l: "A2", q: "Gestern ___ ich ins Kino gegangen.", o: ["habe", "bin", "war"], a: 1 },
  { l: "A2", q: "Ich fahre mit ___ Bus.", o: ["den", "dem", "der"], a: 1 },
  { l: "A2", q: "Ich bleibe zu Hause, weil ich krank ___.", o: ["bin", "bin ich", "sein"], a: 0 },
  { l: "B1", q: "Wenn ich Zeit ___, würde ich mitkommen.", o: ["habe", "hätte", "hatte"], a: 1 },
  { l: "B1", q: "Das ist der Mann, ___ ich gestern getroffen habe.", o: ["der", "den", "dem"], a: 1 },
  { l: "B1", q: "Ich warte schon lange ___ deine Antwort.", o: ["auf", "für", "an"], a: 0 },
  { l: "B2", q: "Nachdem wir gegessen ___, gingen wir spazieren.", o: ["haben", "hatten", "waren"], a: 1 },
  { l: "B2", q: "___ des schlechten Wetters fiel das Konzert aus.", o: ["Wegen", "Weil", "Denn"], a: 0 },
  { l: "B2", q: "Er sagte, er ___ keine Zeit.", o: ["hat", "habe", "hatte gehabt"], a: 1 },
  { l: "C1", q: "Das Problem lässt sich nicht so einfach ___.", o: ["lösen", "gelöst", "zu lösen"], a: 0 },
  { l: "C1", q: "Der Chef ___ gekündigt haben, sagt man.", o: ["will", "soll", "muss"], a: 1 },
  { l: "C1", q: "Wir müssen bald eine Entscheidung ___.", o: ["machen", "nehmen", "treffen"], a: 2 }
];

DATA.resources = [
  { e: "📺", name: "DW — Nicos Weg", url: "https://learngerman.dw.com/de/nicos-weg/c-36519789", lvl: "A1–B1", what: "Série vidéo gratuite de la Deutsche Welle, avec exercices." },
  { e: "🎧", name: "Easy German", url: "https://www.youtube.com/@EasyGerman", lvl: "A2–C1", what: "Interviews dans la rue, sous-titres allemand et anglais." },
  { e: "🐢", name: "Slow German (Podcast)", url: "https://slowgerman.com", lvl: "A2–B1", what: "Podcast lent sur la vie et la culture allemandes, avec transcription." },
  { e: "📰", name: "nachrichtenleicht", url: "https://www.nachrichtenleicht.de", lvl: "A2–B1", what: "Les actualités de la semaine en langue simple, avec audio." },
  { e: "🔊", name: "Forvo", url: "https://de.forvo.com", lvl: "Tous", what: "Entends n'importe quel mot prononcé par des natifs." },
  { e: "📖", name: "DWDS", url: "https://www.dwds.de", lvl: "A2–C1", what: "Dictionnaire allemand-allemand avec exemples et prononciation." },
  { e: "🎙️", name: "Deutschlandfunk Nova", url: "https://www.deutschlandfunknova.de", lvl: "B2–C1", what: "Podcasts sur la science, la société et la tech." },
  { e: "📝", name: "Goethe-Institut — Übungssätze", url: "https://www.goethe.de/de/spr/prf/ueb.html", lvl: "A1–C1", what: "Examens blancs officiels pour chaque niveau." }
];
