window.DATA = window.DATA || {};
/* Kurzgeschichten, A1 → C1 (3 per level).
   gloss: difficult words explained with a picture and simple German (never French). */
DATA.stories = [
/* ================= A1 ================= */
{
  id: "malik-berlin", lvl: "A1", title: "Malik in Berlin", e: "🏙️",
  scenes: [
    { e: "👨🧳🚆", t: "Das ist Malik. Er ist 27 Jahre alt und kommt aus Lyon. Heute kommt er mit dem Zug in Berlin an." },
    { e: "🏢🔑🛏️", t: "Er hat ein kleines Zimmer in einer Wohnung. Das Zimmer hat ein Bett, einen Tisch und ein großes Fenster." },
    { e: "🌧️☂️😅", t: "Es regnet. Malik hat keinen Regenschirm. Aber er lacht: Berlin ist grau, aber spannend." },
    { e: "🏪🥨🧃", t: "Am Abend geht er zum Späti an der Ecke. Er kauft eine Brezel und einen Saft." },
    { e: "👵🐶🚪", t: "Vor der Tür steht eine alte Frau mit einem Hund. „Hallo! Ich bin Frau Weber, Ihre Nachbarin. Und das ist Bruno.“" },
    { e: "😊👋", t: "Malik sagt: „Freut mich! Ich heiße Malik.“ Er spricht nur ein bisschen Deutsch, aber das ist ein guter Anfang." }
  ],
  gloss: { regenschirm: ["☂️", "das Ding gegen Regen, man hält es über den Kopf"], späti: ["🏪", "ein kleiner Laden in Berlin, er hat bis spät in die Nacht offen"], nachbarin: ["🏘️", "eine Frau, die neben dir wohnt"], anfang: ["🏁", "der Start, der erste Moment"] },
  questions: [
    { q: "Woher kommt Malik?", o: ["Aus Paris", "Aus Lyon", "Aus Berlin"], a: 1 },
    { q: "Was kauft er im Späti?", o: ["Eine Brezel und einen Saft", "Brot und Käse", "Kaffee"], a: 0 },
    { q: "Wer ist Bruno?", o: ["Der Sohn von Frau Weber", "Der Hund von Frau Weber", "Ein Freund von Malik"], a: 1 }
  ]
},
{
  id: "wo-ist-bruno", lvl: "A1", title: "Wo ist Bruno?", e: "🐶",
  scenes: [
    { e: "👵🐶🌳", t: "Frau Weber geht jeden Morgen mit Bruno in den Park. Bruno ist klein und braun." },
    { e: "🐿️🐶💨", t: "Heute sieht Bruno ein Eichhörnchen. Er läuft und läuft. Dann ist er weg!" },
    { e: "😟🔍🌳", t: "„Bruno! Bruno!“ Frau Weber sucht hinter den Bäumen und unter den Bänken. Kein Bruno." },
    { e: "👨🏃📱", t: "Malik joggt im Park. Er sieht Frau Weber. „Was ist los?“ – „Mein Hund ist weg!“" },
    { e: "🥐🐶😋", t: "Malik hat eine Idee. Er geht zur Bäckerei. Und da sitzt Bruno — vor der Tür, mit einem Croissant im Mund!" },
    { e: "🤗☕", t: "Frau Weber lacht. „Danke, Malik! Kommen Sie, ich lade Sie auf einen Kaffee ein.“" }
  ],
  gloss: { "eichhörnchen": ["🐿️", "ein kleines Tier mit einem großen Schwanz, es lebt in Bäumen"], "bänken": ["🪑", "lange Sitze im Park für zwei oder mehr Personen"], joggt: ["🏃", "läuft langsam, als Sport"], "lade": ["🎁", "einladen: ich bezahle für dich"] },
  questions: [
    { q: "Warum läuft Bruno weg?", o: ["Er hat Hunger", "Er sieht ein Eichhörnchen", "Er hört ein Auto"], a: 1 },
    { q: "Wo findet Malik den Hund?", o: ["Im Park", "Vor der Bäckerei", "Zu Hause"], a: 1 },
    { q: "Was macht Frau Weber am Ende?", o: ["Sie lädt Malik auf einen Kaffee ein", "Sie ruft die Polizei", "Sie weint"], a: 0 }
  ]
},
{
  id: "kaffee-kuchen", lvl: "A1", title: "Kaffee und Kuchen", e: "🍰",
  scenes: [
    { e: "📅☀️🏡", t: "Es ist Sonntag. Malik ist bei Frau Weber eingeladen. Sie wohnt im ersten Stock." },
    { e: "🍰☕🍓", t: "Auf dem Tisch stehen Kaffee, Sahne und drei Kuchen: Apfelkuchen, Käsekuchen und Erdbeerkuchen." },
    { e: "😋🍽️", t: "„Nehmen Sie, Malik! Das ist Tradition in Deutschland: Kaffee und Kuchen am Sonntag.“" },
    { e: "📷👨‍👩‍👧", t: "Frau Weber zeigt Fotos. „Das ist meine Tochter. Sie wohnt in Wien. Und das bin ich, vor fünfzig Jahren!“" },
    { e: "🗣️📚", t: "Malik versteht nicht alles. Frau Weber spricht langsam und zeigt auf die Dinge. So lernt er viele neue Wörter." },
    { e: "😊🍰➡️🏠", t: "Um sechs Uhr geht Malik nach Hause. Er ist satt und glücklich. „Bis nächsten Sonntag?“ – „Sehr gern!“" }
  ],
  gloss: { eingeladen: ["✉️", "jemand sagt: Komm zu mir, du bist mein Gast"], stock: ["🏢", "die Etage in einem Haus"], sahne: ["🍦", "weiße, süße Creme aus Milch"], satt: ["😌", "man hat genug gegessen und keinen Hunger mehr"] },
  questions: [
    { q: "Welcher Tag ist es?", o: ["Samstag", "Sonntag", "Montag"], a: 1 },
    { q: "Wo wohnt die Tochter von Frau Weber?", o: ["In Berlin", "In Wien", "In Lyon"], a: 1 },
    { q: "Wie lernt Malik neue Wörter?", o: ["Mit einer App", "Frau Weber zeigt auf die Dinge", "Er liest ein Buch"], a: 1 }
  ]
},
/* ================= A2 ================= */
{
  id: "anmeldung", lvl: "A2", title: "Die Anmeldung", e: "📋",
  scenes: [
    { e: "🏛️📅😩", t: "In Deutschland muss man sich in den ersten zwei Wochen anmelden. Malik hat online nach einem Termin gesucht, aber alle Termine waren schon weg." },
    { e: "⏰🌅🚶", t: "Ein Kollege hat ihm einen Tipp gegeben: „Geh um sieben Uhr hin, manchmal gibt es freie Termine.“ Also ist Malik früh aufgestanden." },
    { e: "👥👥👥🚪", t: "Um sieben standen schon zwanzig Leute vor dem Bürgeramt. Alle hatten Kaffee und Papiere in der Hand." },
    { e: "📃❌😳", t: "Nach zwei Stunden war Malik endlich dran. Aber die Frau am Schalter sagte: „Wo ist die Wohnungsgeberbestätigung?“ Malik hatte das Formular vergessen!" },
    { e: "📱🏃‍♂️📄", t: "Er hat seinen Vermieter angerufen. Der Vermieter hat das Dokument per E-Mail geschickt, und Malik hat es im Copyshop gegenüber gedruckt." },
    { e: "✅🎉", t: "Um elf Uhr hatte er seine Meldebescheinigung. „Herzlichen Glückwunsch“, sagte die Frau. „Jetzt sind Sie offiziell Berliner!“" }
  ],
  gloss: { anmelden: ["📋", "der Stadt sagen, wo man wohnt"], schalter: ["🪟", "der Platz in einem Amt, wo eine Person dir hilft"], wohnungsgeberbestätigung: ["📄", "ein Papier vom Vermieter: diese Person wohnt hier"], meldebescheinigung: ["✅", "das Dokument, das zeigt: du bist angemeldet"] },
  questions: [
    { q: "Warum ist Malik um sieben Uhr zum Bürgeramt gegangen?", o: ["Es gab online keine Termine", "Er hatte frei", "Der Chef wollte es"], a: 0 },
    { q: "Was hatte Malik vergessen?", o: ["Seinen Pass", "Ein Formular vom Vermieter", "Sein Handy"], a: 1 },
    { q: "Wie hat er das Problem gelöst?", o: ["Er ist nach Hause gegangen", "Der Vermieter hat das Dokument geschickt", "Er hat einen neuen Termin genommen"], a: 1 }
  ]
},
{
  id: "falscher-zug", lvl: "A2", title: "Der falsche Zug", e: "🚆",
  scenes: [
    { e: "🚉🎫", t: "Am Samstag wollte Malik nach Leipzig fahren. Er hatte eine Fahrkarte für den ICE um 9:15 Uhr." },
    { e: "😴🚆", t: "Am Gleis stand ein Zug. Malik ist eingestiegen, hat sich ans Fenster gesetzt und ist sofort eingeschlafen." },
    { e: "👨‍✈️❓", t: "Eine Stunde später hat ihn der Schaffner geweckt. „Ihre Fahrkarte, bitte. … Oh, das ist der falsche Zug. Wir fahren nach Potsdam!“" },
    { e: "😱➡️😂", t: "Malik war zuerst schockiert. Dann hat er gelacht: „Na ja, Potsdam kenne ich auch noch nicht.“" },
    { e: "🏰🌳☀️", t: "In Potsdam hat er das Schloss Sanssouci besucht und ist stundenlang durch den Park spaziert. Das Wetter war wunderbar." },
    { e: "📸💡", t: "Nach Leipzig ist er erst eine Woche später gefahren. Aber sein Lieblingsfoto ist immer noch das Schloss — aus der falschen Stadt." }
  ],
  gloss: { gleis: ["🚉", "dort hält der Zug, man steigt dort ein"], eingeschlafen: ["😴", "angefangen zu schlafen"], schaffner: ["🎫", "die Person im Zug, die die Fahrkarten kontrolliert"], schloss: ["🏰", "ein großes, altes Haus für einen König"] },
  questions: [
    { q: "Wohin wollte Malik fahren?", o: ["Nach Potsdam", "Nach Leipzig", "Nach Hamburg"], a: 1 },
    { q: "Warum hat er den Fehler nicht gemerkt?", o: ["Er hat geschlafen", "Er hat telefoniert", "Er hat gelesen"], a: 0 },
    { q: "Was hat er in Potsdam gemacht?", o: ["Er ist sofort zurückgefahren", "Er hat das Schloss besucht", "Er hat gearbeitet"], a: 1 }
  ]
},
{
  id: "wg-party", lvl: "A2", title: "Die WG-Party", e: "🎉",
  scenes: [
    { e: "📱🎉🏠", t: "Lea, eine Kollegin von Malik, hat ihn zu einer Party in ihre WG eingeladen. „Bring einfach etwas zu trinken mit!“, hat sie geschrieben." },
    { e: "🍾🛒😬", t: "Malik war nervös. Er kannte niemanden außer Lea. Im Supermarkt hat er eine Flasche Wein und Chips gekauft." },
    { e: "🚪🎶👥", t: "Die Wohnung war voll. Die Musik war laut, und alle sprachen sehr schnell Deutsch. Malik stand allein in der Küche." },
    { e: "🧑‍🍳🥗🗣️", t: "Dann hat ein Mann ihn angesprochen: „Hey, ich bin Jonas. Hilfst du mir beim Salat?“ Zusammen haben sie Tomaten geschnitten und geredet." },
    { e: "🎲😂🌙", t: "Später haben alle ein Spiel gespielt. Malik hat viele Fehler gemacht, aber alle haben mit ihm gelacht, nicht über ihn." },
    { e: "🌅🚲😊", t: "Um drei Uhr ist er mit dem Fahrrad nach Hause gefahren. Er hatte fünf neue Kontakte im Handy und keine Angst mehr vor Partys." }
  ],
  gloss: { wg: ["🏘️", "eine Wohnung, in der mehrere Leute zusammen wohnen"], niemanden: ["🙅", "keine Person"], angesprochen: ["🗣️", "jemand hat angefangen, mit ihm zu reden"], geschnitten: ["🔪", "mit dem Messer klein gemacht"] },
  questions: [
    { q: "Was sollte Malik zur Party mitbringen?", o: ["Etwas zu trinken", "Einen Kuchen", "Musik"], a: 0 },
    { q: "Wer hat Malik in der Küche angesprochen?", o: ["Lea", "Jonas", "Frau Weber"], a: 1 },
    { q: "Wie war die Party am Ende für Malik?", o: ["Schrecklich", "Schön, er hatte keine Angst mehr", "Langweilig"], a: 1 }
  ]
},
/* ================= B1 ================= */
{
  id: "vorstellungsgespraech", lvl: "B1", title: "Das Vorstellungsgespräch", e: "🎤",
  scenes: [
    { e: "🪑👔😬", t: "Malik hatte sich bei 42 Berlin als pädagogischer Mitarbeiter beworben. Er hatte seine Vorstellung so oft geübt, dass er sie im Schlaf sagen konnte." },
    { e: "👩‍💼💬", t: "Die Leiterin, Frau Krüger, war freundlich und stellte zuerst Fragen zu seinen Projekten. Alles lief gut, bis sie fragte: „Erzählen Sie mir von einem Misserfolg.“" },
    { e: "🧊😶", t: "Malik erstarrte. In seinem Kopf begann er, aus dem Französischen zu übersetzen, und suchte den perfekten Satz. Die Stille schien endlos." },
    { e: "🫁⏳", t: "Dann erinnerte er sich an den Rat seiner Lehrerin: „Zeit gewinnen, nicht übersetzen.“ Er atmete tief ein und sagte: „Gute Frage. Lassen Sie mich kurz überlegen.“" },
    { e: "🐛📉➡️📈", t: "Er erzählte von einem Gruppenprojekt, bei dem er kurz vor der Abgabe fehlerhaften Code hochgeladen hatte, und erklärte, was er daraus gelernt hatte: zuerst testen und früh kommunizieren." },
    { e: "📧🎉", t: "Eine Woche später bekam er eine E-Mail. Frau Krüger schrieb: „Ihre Ehrlichkeit hat uns überzeugt.“ Er hatte die Stelle — nicht wegen perfekter Grammatik, sondern weil er authentisch war." }
  ],
  gloss: { beworben: ["📄", "sich bewerben: einen Brief und einen Lebenslauf für eine Stelle schicken"], misserfolg: ["📉", "etwas, das nicht funktioniert hat"], erstarrte: ["🧊", "konnte sich plötzlich nicht mehr bewegen oder sprechen"], abgabe: ["⏰", "der Moment, an dem man eine Arbeit abgeben muss"], ehrlichkeit: ["🤞", "die Wahrheit sagen"] },
  questions: [
    { q: "Warum erstarrte Malik?", o: ["Er hat die Frage nicht verstanden", "Er hat im Kopf übersetzt", "Die Leiterin war unfreundlich"], a: 1 },
    { q: "Welcher Satz hat ihm geholfen?", o: ["„Lassen Sie mich kurz überlegen.“", "„Ich weiß es nicht.“", "„Können Sie das wiederholen?“"], a: 0 },
    { q: "Warum hat er die Stelle bekommen?", o: ["Seine Grammatik war perfekt", "Er hatte den besten Lebenslauf", "Er war ehrlich und authentisch"], a: 2 }
  ]
},
{
  id: "hausordnung", lvl: "B1", title: "Die Hausordnung", e: "📜",
  scenes: [
    { e: "🏢📜🤔", t: "Im Treppenhaus hing ein langes Papier: die Hausordnung. Malik hatte es nie gelesen. Ein Fehler, wie er bald merken sollte." },
    { e: "🥁🌙😴", t: "An einem Dienstagabend probte er um zehn Uhr auf seiner Cajón, einer kleinen Trommel. Fünf Minuten später klingelte es an der Tür." },
    { e: "👨‍🦳📏😠", t: "Herr Schulz aus dem Erdgeschoss stand vor ihm. „Wissen Sie nicht, dass ab 22 Uhr Nachtruhe ist? Das steht in der Hausordnung!“" },
    { e: "♻️🗑️😳", t: "Und es ging weiter: „Außerdem haben Sie gestern Glas in die Papiertonne geworfen.“ Malik entschuldigte sich und versprach, die Regeln zu lesen." },
    { e: "📖☕💡", t: "Am Wochenende las er die Hausordnung Wort für Wort, mit einem Wörterbuch. Dabei lernte er mehr Deutsch als in einer ganzen Kurswoche." },
    { e: "🥧🚪🙂", t: "Am Montag brachte er Herrn Schulz ein Stück Kuchen. Der alte Mann lächelte zum ersten Mal. „Wissen Sie, junger Mann, Ordnung ist nicht alles. Aber vieles.“" }
  ],
  gloss: { treppenhaus: ["🪜", "der Teil im Haus mit den Treppen"], probte: ["🥁", "proben: üben, bevor man spielt"], nachtruhe: ["🌙", "die Zeit in der Nacht, in der man leise sein muss"], erdgeschoss: ["🏢", "die Etage auf der Höhe der Straße"], papiertonne: ["🗑️", "der blaue Container nur für Papier"] },
  questions: [
    { q: "Warum klingelte Herr Schulz?", o: ["Malik war zu laut nach 22 Uhr", "Malik hatte die Miete nicht bezahlt", "Er wollte Kuchen"], a: 0 },
    { q: "Was hat Malik außerdem falsch gemacht?", o: ["Er hat Glas in die Papiertonne geworfen", "Er hat geraucht", "Er hat die Tür offen gelassen"], a: 0 },
    { q: "Was hat Malik durch die Hausordnung gelernt?", o: ["Nichts Neues", "Viel Deutsch", "Wie man Kuchen backt"], a: 1 }
  ]
},
{
  id: "stromausfall", lvl: "B1", title: "Der Stromausfall", e: "🕯️",
  scenes: [
    { e: "💻⚡🌃", t: "Es war Freitagabend, und Malik arbeitete noch an einem Projekt, als plötzlich alle Lichter ausgingen. Der ganze Block war dunkel." },
    { e: "📱🔦🔋", t: "Sein Handy hatte nur noch zehn Prozent Akku. Er zündete eine Kerze an und überlegte, was er tun sollte." },
    { e: "🚪👥🕯️", t: "Im Treppenhaus traf er seine Nachbarn — viele von ihnen sah er zum ersten Mal. Jemand schlug vor, sich im Hof zu treffen." },
    { e: "🎸🍷🌙", t: "Eine Studentin aus dem dritten Stock holte ihre Gitarre, Herr Schulz brachte Brot und Käse, und Frau Weber erzählte vom Stromausfall von 1978." },
    { e: "💡😮⏰", t: "Als der Strom um Mitternacht zurückkam, waren alle fast ein bisschen enttäuscht. Niemand wollte zurück in seine Wohnung." },
    { e: "💬📱🤝", t: "Seitdem hat das Haus eine WhatsApp-Gruppe, und jeden ersten Freitag im Monat gibt es ein Hoffest — mit Kerzen, aber mit Strom." }
  ],
  gloss: { stromausfall: ["⚡", "plötzlich gibt es keine Elektrizität mehr"], kerze: ["🕯️", "ein Stück Wachs mit einem kleinen Feuer, es gibt Licht"], hof: ["🏡", "der Platz hinter oder zwischen den Häusern"], enttäuscht: ["😞", "traurig, weil etwas nicht so ist wie erhofft"] },
  questions: [
    { q: "Was ist am Freitagabend passiert?", o: ["Ein Feuer", "Ein Stromausfall", "Eine Party"], a: 1 },
    { q: "Wo haben sich die Nachbarn getroffen?", o: ["Im Hof", "Im Späti", "Bei Malik"], a: 0 },
    { q: "Was hat sich danach im Haus verändert?", o: ["Nichts", "Es gibt jetzt ein Hoffest jeden Monat", "Alle sind umgezogen"], a: 1 }
  ]
},
/* ================= B2 ================= */
{
  id: "sprachtandem", lvl: "B2", title: "Das Sprachtandem", e: "🗣️",
  scenes: [
    { e: "🇫🇷🇩🇪☕", t: "Jeden Donnerstag traf sich Malik mit Paula in einem Café in Neukölln: dreißig Minuten auf Französisch, dreißig auf Deutsch. Die deutsche Hälfte fürchtete er anfangs." },
    { e: "🧠🔁😩", t: "Er plante seine Sätze auf Französisch, übersetzte sie im Kopf und sprach sie viel zu spät aus. Bis er fertig war, hatte sich das Gespräch längst weiterentwickelt." },
    { e: "🃏😂💸", t: "Paula, die selbst Französisch lernte, schlug ein Spiel vor: Wer länger als drei Sekunden schwieg, musste den nächsten Kaffee bezahlen. In der ersten Woche zahlte Malik fünf Kaffees." },
    { e: "🧩🗣️", t: "Also änderte er seine Taktik. Statt nach dem perfekten Wort zu suchen, beschrieb er, was er meinte: „das Ding, mit dem man…“, „so eine Art…“. Es klang holprig, doch das Gespräch lief weiter." },
    { e: "🚇🎧💭", t: "Einige Monate später passierte etwas Merkwürdiges: In der U-Bahn ertappte sich Malik dabei, wie er auf Deutsch dachte und still die Leute um sich herum kommentierte." },
    { e: "☕😄", t: "Inzwischen ist es Paula, die die meisten Kaffees bezahlt. Und Malik fürchtet die Donnerstage nicht mehr — sie sind zum Höhepunkt seiner Woche geworden." }
  ],
  gloss: { fürchtete: ["😨", "hatte Angst vor etwas"], taktik: ["♟️", "ein Plan oder eine Methode, um ein Ziel zu erreichen"], holprig: ["🪨", "nicht glatt, nicht elegant"], ertappte: ["👀", "sich ertappen: plötzlich merken, dass man etwas tut"], höhepunkt: ["🌟", "der beste oder spannendste Teil"] },
  questions: [
    { q: "Warum kam Malik im Gespräch immer zu spät?", o: ["Er übersetzte alles im Kopf", "Er hörte nicht zu", "Er sprach zu schnell"], a: 0 },
    { q: "Wozu zwang ihn das Spiel?", o: ["Nur Französisch zu sprechen", "Lange Pausen zu vermeiden", "Sätze aufzuschreiben"], a: 1 },
    { q: "Welche neue Strategie half ihm?", o: ["Wortlisten lernen", "Beschreiben, was er meinte", "Langsamer sprechen"], a: 1 }
  ]
},
{
  id: "umzug-heilbronn", lvl: "B2", title: "Der Umzug nach Heilbronn", e: "📦",
  scenes: [
    { e: "📧🏙️➡️🌄", t: "Als man Malik anbot, beim Aufbau des Campus in Heilbronn mitzuhelfen, zögerte er. Berlin war inzwischen sein Zuhause; Heilbronn kannte er nur vom Namen." },
    { e: "🗺️🍷🤔", t: "Seine Kollegen zogen ihn auf: „Da gibt es doch nur Weinberge und Schwaben!“ Trotzdem reizte ihn die Herausforderung, etwas von Grund auf mitzugestalten." },
    { e: "🗣️❓😵", t: "Die erste Überraschung war sprachlich. Der Bäcker sagte „Grüß Gott“ statt „Moin“, und bei manchen Gesprächen auf Schwäbisch verstand Malik kaum ein Wort." },
    { e: "🏗️💻👥", t: "Die Arbeit hingegen war genau das, was er gesucht hatte. Er organisierte das Piscine, betreute Hunderte Bewerber und lernte, auf Deutsch vor großen Gruppen zu sprechen." },
    { e: "🍷🌄🚴", t: "An den Wochenenden fuhr er mit dem Fahrrad durch die Weinberge, und ein Kollege brachte ihm bei, Maultaschen zu machen — ein Rezept, das er inzwischen besser beherrscht als manche Einheimische." },
    { e: "🏠❤️", t: "Nach einem Jahr wurde ihm klar, dass „Zuhause“ kein Ort ist, sondern ein Gefühl. Und das hatte er, ganz unerwartet, auch in Heilbronn gefunden." }
  ],
  gloss: { zögerte: ["⏸️", "wartete, weil er nicht sicher war"], "zogen ihn auf": ["😜", "machten sich freundlich lustig über ihn"], herausforderung: ["🧗", "eine schwierige, aber interessante Aufgabe"], einheimische: ["🏘️", "Leute, die schon immer an einem Ort wohnen"], schwaben: ["🌄", "die Menschen aus der Region um Stuttgart"] },
  questions: [
    { q: "Warum zögerte Malik zuerst?", o: ["Berlin war sein Zuhause geworden", "Das Gehalt war zu niedrig", "Er mochte keinen Wein"], a: 0 },
    { q: "Was war die erste Überraschung in Heilbronn?", o: ["Das Wetter", "Der Dialekt und die Begrüßung", "Die Mieten"], a: 1 },
    { q: "Was versteht Malik am Ende unter „Zuhause“?", o: ["Einen bestimmten Ort", "Ein Gefühl", "Seine Wohnung in Berlin"], a: 1 }
  ]
},
{
  id: "kuendigung", lvl: "B2", title: "Die Kündigung, die keine war", e: "✉️",
  scenes: [
    { e: "📬😨", t: "An einem Montagmorgen lag im Briefkasten ein Schreiben seines Vermieters mit dem Betreff „Kündigung wegen Eigenbedarf“. Malik las den Brief dreimal, ohne alles zu verstehen." },
    { e: "📞🧑‍⚖️", t: "Panisch rief er Lea an, deren Schwester beim Mieterverein arbeitete. „Keine Panik“, sagte sie, „in Deutschland ist man als Mieter ziemlich gut geschützt.“" },
    { e: "📑🔍", t: "Beim Mieterverein prüfte eine Beraterin den Brief genau. Es stellte sich heraus, dass die Kündigungsfrist falsch berechnet und der Eigenbedarf kaum begründet war." },
    { e: "✍️📨", t: "Gemeinsam formulierten sie ein höfliches, aber bestimmtes Antwortschreiben. Malik lernte dabei Wörter, die in keinem Lehrbuch standen: „Widerspruch“, „fristgerecht“, „Härtefall“." },
    { e: "🤝☕", t: "Zwei Wochen später rief der Vermieter an. Sein Neffe hatte inzwischen eine andere Wohnung gefunden, und er zog die Kündigung zurück — fast entschuldigend." },
    { e: "📚💡", t: "Malik trat dem Mieterverein bei und schrieb an jenem Abend in sein Notizbuch: „Bürokratie ist auch nur eine Sprache. Man muss sie lernen wie jede andere.“" }
  ],
  gloss: { eigenbedarf: ["🏠", "der Vermieter braucht die Wohnung für sich oder seine Familie"], mieterverein: ["🤝", "eine Organisation, die Mietern hilft"], kündigungsfrist: ["⏳", "die Zeit zwischen Kündigung und Auszug"], widerspruch: ["✋", "offiziell sagen: Ich bin nicht einverstanden"], fristgerecht: ["📅", "rechtzeitig, innerhalb der erlaubten Zeit"] },
  questions: [
    { q: "Was stand im Brief des Vermieters?", o: ["Eine Mieterhöhung", "Eine Kündigung wegen Eigenbedarf", "Eine Einladung"], a: 1 },
    { q: "Was fand die Beraterin heraus?", o: ["Die Kündigung war fehlerhaft", "Malik musste sofort ausziehen", "Der Vermieter hatte recht"], a: 0 },
    { q: "Was meint Malik mit „Bürokratie ist auch nur eine Sprache“?", o: ["Man kann sie lernen", "Sie ist unverständlich", "Sie ist nur auf Deutsch"], a: 0 }
  ]
},
/* ================= C1 ================= */
{
  id: "gutachten", lvl: "C1", title: "Das Gutachten", e: "🧮",
  scenes: [
    { e: "🏦💻📊", t: "Priya war eingestellt worden, um den Algorithmus einer Münchner Bank zur Kreditvergabe zu verbessern, und binnen weniger Wochen war ihr genau das gelungen: Die Entscheidungen fielen schneller, die Ausfälle gingen zurück, und ihre Vorgesetzte war des Lobes voll." },
    { e: "🔍📍😶", t: "Erst als sie an einem ruhigen Freitagnachmittag tiefer in die Daten eintauchte, stieß sie auf etwas Beunruhigendes: Antragsteller aus bestimmten Postleitzahlgebieten wurden doppelt so häufig abgelehnt wie der Durchschnitt — unabhängig von ihrem Einkommen." },
    { e: "🧩⚖️", t: "Das Modell kannte zwar niemandes Herkunft, hatte aber gelernt, sie gewissermaßen aus dem Wohnort abzuleiten. Niemand hatte es darauf programmiert zu diskriminieren; es spiegelte schlicht die Vorurteile wider, die in jahrzehntealten Entscheidungen steckten." },
    { e: "🗣️🏢😬", t: "Das Problem anzusprechen, war nicht ohne Risiko. Das neue Modell wurde bereits im Vorstand gefeiert, und Priya war die jüngste im Team. Sie verbrachte das Wochenende damit, abzuwägen, wie sie es formulieren sollte." },
    { e: "📑🤝", t: "Am Montag legte sie, statt jemanden zu beschuldigen, die Zahlen zusammen mit einem Vorschlag vor: das Modell mit Fairness-Kriterien neu zu trainieren und ein unabhängiges Gutachten zu veröffentlichen. Zu ihrer Erleichterung stellte sich die Risikochefin sofort hinter sie." },
    { e: "🌍📰", t: "Das Gutachten wurde schließlich weit über die Bank hinaus zitiert. Darauf angesprochen, zuckte Priya mit den Schultern: „Der Algorithmus war nicht böse. Er war ein Spiegel — und uns gefiel nicht, was wir darin sahen.“" }
  ],
  gloss: { kreditvergabe: ["🏦", "die Entscheidung, wer Geld von der Bank leihen darf"], "ausfälle": ["📉", "Fälle, in denen jemand einen Kredit nicht zurückzahlt"], beunruhigendes: ["😟", "etwas, das Sorgen macht"], abzuleiten: ["🔎", "ableiten: aus indirekten Informationen schließen"], vorstand: ["🏢", "die oberste Leitung einer Firma"], gutachten: ["📑", "ein schriftlicher Bericht eines Experten"] },
  questions: [
    { q: "Was entdeckte Priya?", o: ["Das Modell war zu langsam", "Bestimmte Wohngebiete wurden häufiger abgelehnt", "Die Daten waren gestohlen"], a: 1 },
    { q: "Warum war das Modell voreingenommen?", o: ["Jemand hatte es absichtlich so programmiert", "Es übernahm Vorurteile aus alten Daten", "Es kannte die Herkunft der Kunden"], a: 1 },
    { q: "Was meint Priya mit dem „Spiegel“?", o: ["Das Modell zeigte die Vorurteile der Gesellschaft", "Das Modell kopierte andere Banken", "Das Modell war perfekt transparent"], a: 0 }
  ]
},
{
  id: "fremd-zuhause", lvl: "C1", title: "Fremd im eigenen Land", e: "🧳",
  scenes: [
    { e: "✈️🏡🌅", t: "Nach sechs Jahren in Wien kehrte Léa nach Bordeaux zurück, überzeugt davon, das Schwierigste am Leben im Ausland hinter sich zu haben. Niemand hatte sie gewarnt, dass die Rückkehr ebenso verunsichernd sein könnte." },
    { e: "🗣️🤷‍♀️", t: "Der erste Schock war sprachlicher Natur. Mitten im Satz griff sie nach einem französischen Wort und fand stattdessen ein deutsches. Ihre Freunde zogen sie gnadenlos auf; ihre Großmutter schaute schlicht verständnislos." },
    { e: "🍷⏳😶", t: "Dann kamen die subtileren Verschiebungen. Die langen Sonntagsessen, die sie so sehr vermisst hatte, empfand sie nun als leicht erdrückend. Sie ertappte sich dabei, auf die Uhr zu schauen — und schämte sich dafür." },
    { e: "🪞🌀", t: "Allmählich dämmerte ihr, dass sie nicht an den Ort zurückgekehrt war, den sie verlassen hatte. Die Stadt hatte sich verändert, gewiss — doch sie selbst ebenso, und diese Kluft sah niemand außer ihr." },
    { e: "📓🤝🌏", t: "Was ihr schließlich half, war nicht der Versuch, dort anzuknüpfen, wo sie aufgehört hatte. Sie schloss sich einer Gruppe von Rückkehrern an, die sich monatlich trafen, und begann, über ihre Erfahrung zu schreiben — und sei es nur, um sie zu verstehen." },
    { e: "🏠🌉✨", t: "Zwei Jahre später beschreibt sich Léa als dauerhaft „dazwischen“ — und betrachtet das, zu ihrer eigenen Überraschung, nicht mehr als Verlust, sondern als eine Art Privileg." }
  ],
  gloss: { verunsichernd: ["🌀", "so, dass man sich unsicher und verwirrt fühlt"], gnadenlos: ["😈", "ohne Mitleid, sehr stark"], erdrückend: ["😮‍💨", "so, dass man sich eingeengt und unfrei fühlt"], "dämmerte": ["🌅", "es dämmerte ihr: sie verstand langsam"], kluft: ["🏞️", "ein großer Abstand zwischen zwei Dingen"], "rückkehrern": ["🔙", "Menschen, die nach einer Zeit im Ausland heimkommen"] },
  questions: [
    { q: "Was überraschte Léa bei der Rückkehr am meisten?", o: ["Die hohen Preise", "Dass die Rückkehr genauso verunsichernd war", "Dass ihre Freunde weggezogen waren"], a: 1 },
    { q: "Wie empfand sie die Sonntagsessen?", o: ["Noch schöner als früher", "Leicht erdrückend", "Langweilig, sie ging nicht hin"], a: 1 },
    { q: "Wie sieht Léa heute ihr „Dazwischen“?", o: ["Als Verlust", "Als Privileg", "Als vorübergehendes Problem"], a: 1 }
  ]
},
{
  id: "die-rede", lvl: "C1", title: "Die Rede", e: "🎙️",
  scenes: [
    { e: "🎉🏛️📝", t: "Zum fünften Jahrestag des Campus in Wolfsburg sollte Malik eine Rede halten — auf Deutsch, vor dreihundert Gästen, darunter der Oberbürgermeister. Er hatte drei Wochen Zeit und eine leere Seite." },
    { e: "✍️🔁🗑️", t: "Seine ersten Entwürfe klangen wie übersetzte Behördenschreiben: korrekt, aber leblos. „Du sprichst über die Leute, nicht zu ihnen“, bemerkte seine Kollegin trocken, nachdem sie die dritte Fassung gelesen hatte." },
    { e: "📼🎧💡", t: "Also hörte er sich Reden an, die ihn berührt hatten, und achtete diesmal nicht auf die Wörter, sondern auf die Pausen, den Rhythmus, die Momente, in denen die Redner leiser wurden statt lauter." },
    { e: "📖🗣️", t: "Schließlich verwarf er alles und erzählte eine einzige Geschichte: wie er vor Jahren in einer Berliner Bäckerei kein Wort herausgebracht hatte und eine ältere Dame ihm geduldig das Wort „Brötchen“ beigebracht hatte." },
    { e: "😶🎤👏", t: "Am Abend der Feier zitterte seine Stimme bei den ersten Sätzen. Doch als er bei der Bäckerei ankam, wurde es im Saal so still, dass man das Summen der Scheinwerfer hörte." },
    { e: "🌙💬", t: "Hinterher kam der Oberbürgermeister zu ihm. „Wissen Sie, was das Beste an Ihrer Rede war?“, fragte er. „Man hat gemerkt, dass jedes Wort erkämpft war.“" }
  ],
  gloss: { jahrestag: ["🎂", "der Tag, an dem etwas vor einer Zahl von Jahren begann"], "entwürfe": ["📝", "erste, noch nicht fertige Versionen eines Textes"], leblos: ["🪨", "ohne Gefühl, ohne Energie"], verwarf: ["🗑️", "verwerfen: entscheiden, etwas nicht zu benutzen"], scheinwerfer: ["💡", "starke Lampen auf einer Bühne"], "erkämpft": ["🥊", "mit viel Mühe erreicht"] },
  questions: [
    { q: "Was war das Problem mit Maliks ersten Entwürfen?", o: ["Sie waren voller Fehler", "Sie waren korrekt, aber leblos", "Sie waren zu kurz"], a: 1 },
    { q: "Worauf achtete Malik, als er andere Reden hörte?", o: ["Auf schwierige Wörter", "Auf Pausen und Rhythmus", "Auf die Länge"], a: 1 },
    { q: "Was meinte der Oberbürgermeister mit „jedes Wort war erkämpft“?", o: ["Malik hatte sich jedes Wort mühsam angeeignet", "Die Rede war aggressiv", "Malik hatte die Rede kopiert"], a: 0 }
  ]
}
];
