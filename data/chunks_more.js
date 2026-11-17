window.DATA = window.DATA || {};
/* 300 extra chunks (with chunks_more2.js: 200 per level). Format: a line with a number = category index; then "chunk|≈ français|Beispiel". */
DATA.chunkCats.push(
  { emoji: "🚆", name: "Voyager & se déplacer" },
  { emoji: "🩺", name: "Santé & émotions" },
  { emoji: "📱", name: "Téléphone & technologie" },
  { emoji: "🎉", name: "Invitations & sorties" },
  { emoji: "🗣️", name: "Expressions imagées" },
  { emoji: "⚖️", name: "Nuancer & insister" },
  { emoji: "🧱", name: "Structurer & argumenter" }
);
DATA.chunkRaw = {
A1: `
0
Guten Morgen!|Bonjour ! (le matin)|Guten Morgen! Gut geschlafen?
Gute Nacht!|Bonne nuit !|Gute Nacht, schlaf gut!
Ich heiße|Je m'appelle|Ich heiße Malik.
Wie heißt du?|Comment tu t'appelles ?|Hallo! Wie heißt du?
Ich bin … Jahre alt.|J'ai … ans.|Ich bin 27 Jahre alt.
Was machst du beruflich?|Tu fais quoi dans la vie ?|Was machst du beruflich? — Ich bin Entwickler.
Ich spreche ein bisschen Deutsch.|Je parle un peu allemand.|Entschuldigung, ich spreche nur ein bisschen Deutsch.
Tschüss!|Salut ! (au revoir)|Tschüss, bis Montag!
Herzlich willkommen!|Bienvenue !|Herzlich willkommen in Berlin!
Ich auch.|Moi aussi.|Ich mag Pizza. — Ich auch!
Ich auch nicht.|Moi non plus.|Ich mag keinen Winter. — Ich auch nicht.
1
Ein Kaffee, bitte.|Un café, s'il vous plaît.|Ein Kaffee und ein Croissant, bitte.
Noch etwas?|Autre chose ?|Ein Brötchen, bitte. — Noch etwas?
Haben Sie|Avez-vous|Haben Sie das T-Shirt in Blau?
Das ist zu teuer.|C'est trop cher.|Schön, aber das ist zu teuer.
Ich schaue nur.|Je regarde seulement.|Kann ich helfen? — Danke, ich schaue nur.
Kann ich das anprobieren?|Je peux l'essayer ?|Die Jacke gefällt mir. Kann ich sie anprobieren?
Hier, bitte.|Voilà.|Hier, bitte, Ihr Kaffee.
Für hier oder zum Mitnehmen?|Sur place ou à emporter ?|Ein Latte. — Für hier oder zum Mitnehmen?
Einen Tisch für zwei, bitte.|Une table pour deux, s'il vous plaît.|Guten Abend, einen Tisch für zwei, bitte.
2
Entschuldigung!|Excusez-moi !|Entschuldigung, wo ist der Bahnhof?
Wo ist die Toilette?|Où sont les toilettes ?|Entschuldigung, wo ist die Toilette?
links, rechts, geradeaus|à gauche, à droite, tout droit|An der Ampel links, dann geradeaus.
Ich brauche|J'ai besoin de|Ich brauche ein neues Handy.
Ich möchte|Je voudrais|Ich möchte Deutsch lernen.
Kann ich hier …?|Je peux … ici ?|Kann ich hier sitzen?
Pass auf!|Attention !|Pass auf, der Boden ist nass!
Warte mal!|Attends !|Warte mal, ich komme mit.
Los geht's!|C'est parti !|Alle da? Los geht's!
3
Super!|Super !|Ich habe die Prüfung bestanden! — Super!
Oh nein!|Oh non !|Oh nein, ich habe meinen Schlüssel vergessen.
Mir ist kalt.|J'ai froid.|Mir ist kalt. Machst du das Fenster zu?
Mir ist warm.|J'ai chaud.|Mir ist warm, ich ziehe die Jacke aus.
Ich habe Hunger.|J'ai faim.|Ich habe Hunger! Gehen wir essen?
Ich habe Durst.|J'ai soif.|Ich habe Durst. Hast du Wasser?
Ich bin müde.|Je suis fatigué.|Ich bin müde, ich gehe ins Bett.
Danke schön!|Merci beaucoup !|Danke schön für die Blumen!
Bitte schön!|Je vous en prie !|Danke! — Bitte schön!
Gern geschehen.|De rien, avec plaisir.|Danke für die Hilfe! — Gern geschehen.
Toll!|Génial !|Wir fahren ans Meer? Toll!
16
Eine Fahrkarte nach …, bitte.|Un billet pour …, s'il vous plaît.|Eine Fahrkarte nach Hamburg, bitte.
Wann fährt der nächste Zug?|Quand part le prochain train ?|Entschuldigung, wann fährt der nächste Zug nach Potsdam?
Welches Gleis?|Quel quai ?|Der Zug nach Leipzig — welches Gleis?
Ich habe mich verlaufen.|Je me suis perdu.|Entschuldigung, ich habe mich verlaufen.
Hin und zurück, bitte.|Aller-retour, s'il vous plaît.|Eine Fahrkarte nach Köln, hin und zurück, bitte.
`,
A2: `
4
Hast du am … Zeit?|Tu as le temps … ?|Hast du am Samstag Zeit?
Was machst du am Wochenende?|Tu fais quoi ce week-end ?|Was machst du am Wochenende? — Nichts Besonderes.
Ich habe schon etwas vor.|J'ai déjà quelque chose de prévu.|Freitag? Da habe ich leider schon etwas vor.
Vielleicht ein anderes Mal.|Peut-être une autre fois.|Heute kann ich nicht. Vielleicht ein anderes Mal.
Treffen wir uns um …?|On se retrouve à … ?|Treffen wir uns um acht am Bahnhof?
Ich bin gleich da.|J'arrive tout de suite.|Ich bin gleich da, noch fünf Minuten!
Ich verspäte mich.|Je vais être en retard.|Sorry, ich verspäte mich um zehn Minuten.
Danke für die Einladung!|Merci pour l'invitation !|Danke für die Einladung, es war sehr schön!
5
Mir gefällt|Ça me plaît|Mir gefällt die Wohnung sehr.
Das gefällt mir nicht.|Ça ne me plaît pas.|Die Farbe gefällt mir nicht.
Ich mag|J'aime|Ich mag Berlin, aber nicht den Winter.
Ich finde es gut, dass|Je trouve bien que|Ich finde es gut, dass du Deutsch lernst.
lieber … als …|plutôt … que …|Ich trinke lieber Tee als Kaffee.
Das ist mir wichtig.|C'est important pour moi.|Pünktlichkeit ist mir wichtig.
Das finde ich nicht so gut.|Je ne trouve pas ça très bien.|Ehrlich gesagt finde ich das nicht so gut.
Was denkst du?|Qu'en penses-tu ?|Ich nehme das blaue. Was denkst du?
6
Welche Unterlagen brauche ich?|De quels documents ai-je besoin ?|Welche Unterlagen brauche ich für die Anmeldung?
Wo muss ich unterschreiben?|Où dois-je signer ?|Wo muss ich unterschreiben? — Hier unten.
Ich bin neu hier.|Je suis nouveau ici.|Hallo, ich bin neu hier. Wo ist die Küche?
Die Heizung ist kaputt.|Le chauffage est en panne.|Die Heizung ist kaputt, können Sie jemanden schicken?
Wann haben Sie geöffnet?|Quand êtes-vous ouverts ?|Wann haben Sie am Samstag geöffnet?
Können Sie das wiederholen?|Pouvez-vous répéter ?|Entschuldigung, können Sie das wiederholen?
Ich möchte ein Konto eröffnen.|Je voudrais ouvrir un compte.|Guten Tag, ich möchte ein Konto eröffnen.
Was muss ich tun?|Que dois-je faire ?|Ich habe meinen Ausweis verloren. Was muss ich tun?
7
zuerst … dann …|d'abord … ensuite …|Zuerst gehe ich einkaufen, dann koche ich.
danach|après ça|Danach sind wir ins Kino gegangen.
plötzlich|soudain|Plötzlich ging das Licht aus.
letztes Jahr|l'année dernière|Letztes Jahr war ich in Wien.
vor zwei Jahren|il y a deux ans|Vor zwei Jahren bin ich nach Berlin gezogen.
zum Schluss|pour finir|Zum Schluss haben wir Kuchen gegessen.
Stell dir vor!|Imagine !|Stell dir vor, ich habe den Job!
Und dann?|Et après ?|Ich habe den Zug verpasst. — Und dann?
17
Mir geht's nicht so gut.|Je ne vais pas très bien.|Mir geht's heute nicht so gut, ich bleibe zu Hause.
Mir tut … weh.|J'ai mal à …|Mir tut der Rücken weh.
Ich bin erkältet.|Je suis enrhumé.|Ich bin erkältet und habe Fieber.
Ich muss zum Arzt.|Je dois aller chez le médecin.|Mein Hals tut weh, ich muss zum Arzt.
Ich mache mir Sorgen.|Je m'inquiète.|Ich mache mir Sorgen um meine Mutter.
Ich bin so nervös!|Je suis tellement stressé !|Morgen ist die Prüfung. Ich bin so nervös!
Ich freue mich so!|Je suis tellement content !|Du kommst nach Berlin? Ich freue mich so!
Ich habe Heimweh.|J'ai le mal du pays.|Im Winter habe ich manchmal Heimweh.
18
Hier ist …|Ici … (au téléphone)|Hallo, hier ist Malik.
Kann ich … sprechen?|Puis-je parler à … ?|Kann ich bitte Frau Krüger sprechen?
Ich rufe zurück.|Je rappelle.|Ich bin gerade im Bus, ich rufe zurück!
Die Verbindung ist schlecht.|La connexion est mauvaise.|Die Verbindung ist schlecht, ich höre dich kaum.
Hörst du mich?|Tu m'entends ?|Hallo? Hörst du mich?
Du bist stumm geschaltet.|Tu es en muet.|Du bist stumm geschaltet!
Mein Akku ist leer.|Ma batterie est vide.|Sorry, mein Akku ist leer.
Wie ist das WLAN-Passwort?|Quel est le mot de passe du Wi-Fi ?|Entschuldigung, wie ist das WLAN-Passwort?
Schick mir eine Nachricht.|Envoie-moi un message.|Schick mir eine Nachricht, wenn du da bist.
19
Hast du Lust, … zu …?|Ça te dit de … ?|Hast du Lust, ins Kino zu gehen?
Kommst du mit?|Tu viens ?|Wir gehen in eine Bar. Kommst du mit?
Gern!|Avec plaisir !|Kaffee? — Gern!
Klingt gut!|Ça a l'air bien !|Grillen am Sonntag? Klingt gut!
Soll ich etwas mitbringen?|Je dois apporter quelque chose ?|Danke für die Einladung! Soll ich etwas mitbringen?
Viel Spaß!|Amuse-toi bien !|Du gehst zum Konzert? Viel Spaß!
Es war sehr schön.|C'était très bien.|Danke für den Abend, es war sehr schön.
Schönes Wochenende!|Bon week-end !|Bis Montag! Schönes Wochenende!
Auf dich!|À toi ! (en trinquant)|Auf dich und deinen neuen Job!
`,
B1: `
8
Wie war das noch mal?|C'était quoi déjà ?|Wie war das noch mal? Ach ja, am Dienstag.
Ich muss kurz nachdenken.|Je dois réfléchir un instant.|Ich muss kurz nachdenken, bevor ich antworte.
Das ist schwer zu erklären.|C'est difficile à expliquer.|Das ist schwer zu erklären, aber ich versuche es.
Wo war ich stehen geblieben?|Où en étais-je ?|Sorry, wo war ich stehen geblieben?
Darüber habe ich noch nie nachgedacht.|Je n'y ai jamais pensé.|Mein Lieblingsjahrzehnt? Darüber habe ich noch nie nachgedacht.
9
Wie meinst du das genau?|Que veux-tu dire exactement ?|Flexibel? Wie meinst du das genau?
Kannst du ein Beispiel geben?|Tu peux donner un exemple ?|Das verstehe ich nicht ganz. Kannst du ein Beispiel geben?
Willst du damit sagen, dass|Tu veux dire que|Willst du damit sagen, dass das Projekt gestoppt wird?
Da bin ich nicht mitgekommen.|Je n'ai pas suivi.|Sorry, da bin ich nicht mitgekommen. Noch mal, bitte.
10
Da hast du nicht ganz unrecht.|Tu n'as pas tout à fait tort.|Da hast du nicht ganz unrecht, aber es ist teuer.
Ich verstehe deinen Standpunkt, aber|Je comprends ton point de vue, mais|Ich verstehe deinen Standpunkt, aber es ist zu riskant.
Genau das meine ich.|C'est exactement ce que je veux dire.|Genau das meine ich!
einerseits … andererseits …|d'un côté … de l'autre …|Einerseits ist es teuer, andererseits ist die Qualität super.
Das kommt mir bekannt vor.|Ça me dit quelque chose.|Diese Geschichte kommt mir bekannt vor.
Ich bin da anderer Meinung.|Je ne suis pas de cet avis.|Ich bin da anderer Meinung, ehrlich gesagt.
11
Das ist nicht der Rede wert.|Ce n'est rien.|Danke für deine Hilfe! — Ach, das ist nicht der Rede wert.
Ich bin fix und fertig.|Je suis épuisé.|Nach der Prüfung war ich fix und fertig.
Das ist ein Kinderspiel.|C'est un jeu d'enfant.|Keine Sorge, das ist ein Kinderspiel.
Ich bin pleite.|Je suis fauché.|Ich kann nicht mitkommen, ich bin pleite.
Das hat mir gerade noch gefehlt.|Il ne manquait plus que ça.|Regen und kein Schirm. Das hat mir gerade noch gefehlt!
Jetzt mal langsam!|Doucement !|Jetzt mal langsam, wir haben noch Zeit.
Kein Wunder!|Pas étonnant !|Du hast nur drei Stunden geschlafen? Kein Wunder!
4
Ich habe es eilig.|Je suis pressé.|Sorry, ich habe es eilig. Können wir später reden?
Mir ist etwas dazwischengekommen.|J'ai eu un empêchement.|Ich kann nicht kommen, mir ist etwas dazwischengekommen.
Ich sage dir Bescheid.|Je te tiens au courant.|Ich sage dir Bescheid, wenn ich mehr weiß.
6
Ich möchte mich beschweren.|Je voudrais me plaindre.|Ich möchte mich über den Lärm beschweren.
Ich hätte gern mein Geld zurück.|Je voudrais être remboursé.|Das funktioniert nicht. Ich hätte gern mein Geld zurück.
Ist das im Preis inbegriffen?|C'est compris dans le prix ?|Ist das Frühstück im Preis inbegriffen?
16
Ich habe meinen Anschluss verpasst.|J'ai raté ma correspondance.|Der ICE hatte Verspätung, ich habe meinen Anschluss verpasst.
Der Zug fällt aus.|Le train est supprimé.|Der Zug fällt aus. Wir müssen den Bus nehmen.
Lohnt es sich, … zu besichtigen?|Ça vaut le coup de visiter … ?|Lohnt es sich, das Schloss zu besichtigen?
Mein Gepäck ist nicht angekommen.|Mes bagages ne sont pas arrivés.|Entschuldigung, mein Gepäck ist nicht angekommen.
17
Ich bin total gestresst.|Je suis complètement stressé.|Diese Woche bin ich total gestresst.
Das geht mir auf die Nerven.|Ça m'énerve.|Der Lärm geht mir auf die Nerven.
Ich bin erleichtert.|Je suis soulagé.|Die Prüfung war leicht. Ich bin so erleichtert!
Ich bin stolz auf|Je suis fier de|Ich bin stolz auf dich!
Kopf hoch!|Courage !|Kopf hoch, das wird schon wieder!
18
Er stürzt ständig ab.|Il plante tout le temps.|Mein Laptop stürzt ständig ab.
Hast du es schon mit Neustarten versucht?|Tu as essayé de redémarrer ?|Er reagiert nicht? Hast du es schon mit Neustarten versucht?
Ich schicke dir den Link.|Je t'envoie le lien.|Ich schicke dir den Link zum Meeting.
Kannst du deinen Bildschirm teilen?|Tu peux partager ton écran ?|Kannst du deinen Bildschirm teilen, damit wir es sehen?
19
Da bin ich raus.|Je ne suis pas de la partie.|Karaoke? Da bin ich raus.
Lass uns spontan entscheiden.|Décidons sur le moment.|Wir müssen nicht alles planen. Lass uns spontan entscheiden.
Das geht auf mich.|C'est moi qui invite.|Steck dein Geld weg, das geht auf mich.
Je mehr, desto lustiger!|Plus on est de fous, plus on rit !|Bring deine Freunde mit — je mehr, desto lustiger!
12
Ich bin gerade sehr eingespannt.|Je suis très pris en ce moment.|Ich bin gerade sehr eingespannt, können wir nächste Woche reden?
Ich mache heute Überstunden.|Je fais des heures sup aujourd'hui.|Ich mache heute Überstunden, der Bericht muss fertig werden.
Ich nehme mir einen Tag frei.|Je prends un jour de congé.|Am Freitag nehme ich mir einen Tag frei.
7
kurz gesagt|en bref|Kurz gesagt: Wir haben den Zug verpasst.
Was dann passiert ist, war|Ce qui s'est passé ensuite, c'est|Was dann passiert ist, war unglaublich.
damals|à l'époque|Damals hatte ich noch kein Handy.
`,
B2: `
12
Ich nehme das in die Hand.|Je m'en charge.|Keine Sorge, ich nehme das in die Hand.
Das hat höchste Priorität.|C'est la priorité absolue.|Der Bugfix hat höchste Priorität.
Wir sollten das im Auge behalten.|Nous devrions garder un œil là-dessus.|Die Kosten sollten wir im Auge behalten.
Können wir das vertagen?|On peut reporter ça ?|Das ist ein guter Punkt. Können wir das vertagen?
Das sprengt den Rahmen.|Ça dépasse le cadre.|Das sprengt den Rahmen dieses Meetings.
Wer übernimmt das?|Qui s'en charge ?|Gute Idee. Wer übernimmt das?
13
Ich bringe Erfahrung im Bereich … mit.|J'ai de l'expérience dans le domaine …|Ich bringe Erfahrung im Bereich Webentwicklung mit.
Ich arbeite gern im Team.|J'aime travailler en équipe.|Ich arbeite gern im Team, zum Beispiel beim Peer-Review.
Ich habe gelernt, selbstständig zu arbeiten.|J'ai appris à travailler en autonomie.|Bei 42 habe ich gelernt, selbstständig zu arbeiten.
Wie sieht ein typischer Arbeitstag aus?|À quoi ressemble une journée type ?|Wie sieht ein typischer Arbeitstag in dieser Position aus?
Was sind die nächsten Schritte?|Quelles sont les prochaines étapes ?|Vielen Dank. Was sind die nächsten Schritte?
Meine Gehaltsvorstellung liegt bei|Mes prétentions salariales sont de|Meine Gehaltsvorstellung liegt bei 50.000 Euro brutto.
14
Ich möchte mich nach … erkundigen.|Je voudrais me renseigner sur …|Ich möchte mich nach dem Stand meines Antrags erkundigen.
Hiermit kündige ich|Par la présente, je résilie|Hiermit kündige ich meinen Vertrag fristgerecht zum 31. März.
Ich bitte um Ihr Verständnis.|Merci de votre compréhension.|Das Büro ist wegen Bauarbeiten geschlossen. Ich bitte um Ihr Verständnis.
Könnten Sie mir bitte bestätigen, dass|Pourriez-vous me confirmer que|Könnten Sie mir bitte bestätigen, dass die Zahlung eingegangen ist?
Ich freue mich auf Ihre Antwort.|Dans l'attente de votre réponse.|Ich freue mich auf Ihre Antwort.
15
Ein Vorteil ist, dass|Un avantage est que|Ein Vorteil ist, dass man flexibler ist.
Ein Nachteil besteht darin, dass|Un inconvénient est que|Ein Nachteil besteht darin, dass man oft allein ist.
Ich bin davon überzeugt, dass|Je suis convaincu que|Ich bin davon überzeugt, dass Bildung kostenlos sein sollte.
Dafür spricht, dass|Ce qui plaide en faveur, c'est que|Dafür spricht, dass die Mieten günstiger sind.
Dagegen spricht, dass|Ce qui plaide contre, c'est que|Dagegen spricht, dass die Wege länger sind.
10
Das sehe ich etwas differenzierter.|Je vois ça de façon plus nuancée.|Das sehe ich etwas differenzierter.
Da muss ich dir recht geben.|Là, je dois te donner raison.|Da muss ich dir recht geben, das war ein Fehler.
bis zu einem gewissen Grad|jusqu'à un certain point|Bis zu einem gewissen Grad stimme ich zu.
Das ist Ansichtssache.|C'est une question de point de vue.|Ob das schön ist? Das ist Ansichtssache.
20
Das ist nicht mein Bier.|Ce ne sont pas mes affaires.|Wie er sein Geld ausgibt, ist nicht mein Bier.
einen Kater haben|avoir la gueule de bois|Nach der Party hatte ich einen Kater.
jemandem auf den Keks gehen|taper sur les nerfs de quelqu'un|Sein ständiges Jammern geht mir auf den Keks.
Schwein haben|avoir de la chance|Der Zug hatte Verspätung, ich hatte Schwein!
den Nagel auf den Kopf treffen|mettre le doigt dessus|Mit dieser Analyse hast du den Nagel auf den Kopf getroffen.
ins Fettnäpfchen treten|faire une gaffe|Ich bin beim Chef voll ins Fettnäpfchen getreten.
um den heißen Brei herumreden|tourner autour du pot|Red nicht um den heißen Brei herum!
Alles hat ein Ende, nur die Wurst hat zwei.|Toute chose a une fin.|Kopf hoch — alles hat ein Ende, nur die Wurst hat zwei.
das Eis brechen|briser la glace|Ein Witz hat das Eis gebrochen.
eine Extrawurst wollen|vouloir un traitement de faveur|Er will immer eine Extrawurst.
unter vier Augen|en tête-à-tête|Können wir das unter vier Augen besprechen?
21
soweit ich weiß|autant que je sache|Soweit ich weiß, ist das Büro montags zu.
wenn ich mich nicht irre|si je ne me trompe pas|Wenn ich mich nicht irre, haben wir uns schon getroffen.
mehr oder weniger|plus ou moins|Das Projekt ist mehr oder weniger fertig.
im Großen und Ganzen|dans l'ensemble|Im Großen und Ganzen bin ich zufrieden.
gewissermaßen|en quelque sorte|Das ist gewissermaßen ein Kompromiss.
keineswegs|en aucun cas|Das ist keineswegs perfekt.
zumindest|au moins|Zumindest haben wir es versucht.
eigentlich|en fait|Eigentlich wollte ich heute früher gehen.
16
Das ist eine Touristenfalle.|C'est un piège à touristes.|Dieses Restaurant ist eine Touristenfalle.
17
Ich bin völlig überfordert.|Je suis complètement débordé.|In der ersten Woche war ich völlig überfordert.
`,
C1: `
20
Da liegt der Hund begraben.|C'est là que le bât blesse.|Die Finanzierung — da liegt der Hund begraben.
den Faden verlieren|perdre le fil|Entschuldigung, ich habe den Faden verloren.
etwas auf die lange Bank schieben|remettre à plus tard|Schieb die Entscheidung nicht auf die lange Bank.
sich kein Blatt vor den Mund nehmen|ne pas mâcher ses mots|Sie nimmt sich kein Blatt vor den Mund.
den Teufel an die Wand malen|voir tout en noir|Mal nicht gleich den Teufel an die Wand!
zwei Fliegen mit einer Klappe schlagen|faire d'une pierre deux coups|So schlagen wir zwei Fliegen mit einer Klappe.
Das ist nur die Spitze des Eisbergs.|Ce n'est que la partie émergée de l'iceberg.|Diese Fehler sind nur die Spitze des Eisbergs.
wieder bei null anfangen|repartir de zéro|Die Tests sind gescheitert, wir fangen wieder bei null an.
den Ball flach halten|rester modeste, ne pas s'emballer|Halt mal den Ball flach, es ist erst der Anfang.
auf dem Holzweg sein|faire fausse route|Mit dieser Annahme sind wir auf dem Holzweg.
etwas aus dem Ärmel schütteln|sortir quelque chose de son chapeau|Eine Lösung kann ich nicht einfach aus dem Ärmel schütteln.
jemandem reinen Wein einschenken|dire la vérité à quelqu'un|Ich muss dir reinen Wein einschenken.
die Kirche im Dorf lassen|ne pas exagérer|Lass mal die Kirche im Dorf, so schlimm ist es nicht.
mit offenen Karten spielen|jouer cartes sur table|Lass uns mit offenen Karten spielen.
den Kürzeren ziehen|être perdant|Am Ende ziehen immer die Mieter den Kürzeren.
etwas unter den Teppich kehren|mettre quelque chose sous le tapis|Das Problem wurde unter den Teppich gekehrt.
ein Auge zudrücken|fermer les yeux (par indulgence)|Diesmal drücke ich noch ein Auge zu.
auf der Kippe stehen|être sur la sellette|Das Projekt steht auf der Kippe.
das A und O|l'essentiel|Gute Kommunikation ist das A und O.
zwischen den Zeilen lesen|lire entre les lignes|Wenn man zwischen den Zeilen liest, ist er unzufrieden.
jemandem den Rücken stärken|soutenir quelqu'un|Meine Chefin hat mir den Rücken gestärkt.
die Nase vorn haben|être en tête|Bei dieser Technologie haben sie die Nase vorn.
sich ins eigene Fleisch schneiden|se tirer une balle dans le pied|Mit dieser Entscheidung schneidet sich die Firma ins eigene Fleisch.
etwas auf den Punkt bringen|résumer l'essentiel|Lass mich das auf den Punkt bringen.
das Handtuch werfen|jeter l'éponge|Nach zehn Versuchen hat er das Handtuch geworfen.
jemandem über den Weg laufen|croiser quelqu'un par hasard|Gestern bin ich meiner Ex-Kollegin über den Weg gelaufen.
alle Hebel in Bewegung setzen|remuer ciel et terre|Wir setzen alle Hebel in Bewegung.
das Rad neu erfinden|réinventer la roue|Wir müssen das Rad nicht neu erfinden.
sich etwas hinter die Ohren schreiben|se le tenir pour dit|Das schreibe ich mir hinter die Ohren.
nicht auf den Kopf gefallen sein|ne pas être bête|Sie ist nicht auf den Kopf gefallen.
21
Man kann wohl sagen, dass|On peut dire que|Man kann wohl sagen, dass der Start überstürzt war.
gelinde gesagt|c'est le moins qu'on puisse dire|Die Stimmung war, gelinde gesagt, angespannt.
wohlgemerkt|notons-le bien|Das war, wohlgemerkt, vor der Krise.
nichtsdestotrotz|néanmoins|Nichtsdestotrotz halte ich an meinem Plan fest.
zugegebenermaßen|il faut l'avouer|Zugegebenermaßen hat der Plan Schwächen.
allem Anschein nach|selon toute apparence|Allem Anschein nach wird es teurer.
aller Wahrscheinlichkeit nach|selon toute vraisemblance|Aller Wahrscheinlichkeit nach steigen die Preise.
in gewisser Hinsicht|à certains égards|In gewisser Hinsicht hat er recht.
wenn überhaupt|si tant est que / au contraire même|Es hat nicht geholfen — wenn überhaupt, wurde es schlimmer.
nicht so sehr … als vielmehr …|pas tant … que …|Es geht nicht so sehr ums Geld als vielmehr ums Prinzip.
Es versteht sich von selbst, dass|Il va de soi que|Es versteht sich von selbst, dass Sicherheit vorgeht.
Es bleibt abzuwarten, ob|Reste à voir si|Es bleibt abzuwarten, ob das funktioniert.
unbestreitbar|indéniablement|Die Stadt hat sich unbestreitbar verändert.
vor allem|surtout, avant tout|Vor allem müssen wir den Nutzern zuhören.
im Grunde genommen|au fond|Im Grunde genommen sind wir uns einig.
Was … angeht,|En ce qui concerne …,|Was die Kosten angeht, sind wir flexibel.
Wie dem auch sei,|Quoi qu'il en soit,|Wie dem auch sei, wir müssen heute entscheiden.
nebenbei bemerkt|soit dit en passant|Nebenbei bemerkt: Er hat nie geantwortet.
wenn man es genau nimmt|à y regarder de près|Wenn man es genau nimmt, war das kein Fehler.
unterm Strich|au final, en bilan|Unterm Strich war es ein gutes Jahr.
22
zunächst einmal|tout d'abord|Zunächst einmal möchte ich mich bedanken.
darüber hinaus|en outre|Darüber hinaus ist das Modell günstiger.
Hinzu kommt, dass|À cela s'ajoute que|Hinzu kommt, dass die Nachfrage steigt.
demzufolge|par conséquent|Demzufolge müssen wir den Plan ändern.
folglich|par conséquent|Die Kosten stiegen, folglich stiegen auch die Preise.
angesichts|compte tenu de|Angesichts der Lage verschieben wir den Start.
im Hinblick auf|eu égard à|Im Hinblick auf die Wahl ist das riskant.
Es stellt sich die Frage, ob|La question se pose de savoir si|Es stellt sich die Frage, ob sich das lohnt.
Ein Paradebeispiel dafür ist|Un exemple typique en est|Ein Paradebeispiel dafür ist das Homeoffice.
Daraus folgt, dass|Il en découle que|Daraus folgt, dass wir mehr investieren müssen.
Abschließend möchte ich|Pour conclure, je voudrais|Abschließend möchte ich zwei Punkte hervorheben.
Die Vorteile überwiegen die Nachteile.|Les avantages l'emportent sur les inconvénients.|Meiner Ansicht nach überwiegen die Vorteile die Nachteile.
Wägt man alle Argumente ab,|Tout bien pesé,|Wägt man alle Argumente ab, spricht mehr für Option A.
Es wäre verfehlt zu behaupten, dass|Il serait erroné d'affirmer que|Es wäre verfehlt zu behaupten, dass alles schlecht war.
nicht zuletzt|enfin et surtout|Nicht zuletzt spielt der Preis eine Rolle.
Dies gilt insbesondere für|Cela vaut en particulier pour|Dies gilt insbesondere für junge Menschen.
Es zeichnet sich ab, dass|On voit se dessiner que|Es zeichnet sich ab, dass mehr Menschen remote arbeiten.
im Folgenden|dans ce qui suit|Im Folgenden erläutere ich drei Gründe.
Ausschlaggebend ist|Ce qui est décisif, c'est|Ausschlaggebend ist am Ende der Preis.
Lässt man … außer Acht,|Si l'on fait abstraction de …,|Lässt man die Kosten außer Acht, ist der Plan ideal.
12
Wir müssen Prioritäten setzen.|Nous devons fixer des priorités.|Wir können nicht alles machen, wir müssen Prioritäten setzen.
Das ist nicht zielführend.|Ça ne mène nulle part.|Diese Diskussion ist nicht zielführend.
Lassen Sie uns das bilateral klären.|Réglons ça entre nous.|Das ist sehr speziell. Lassen Sie uns das bilateral klären.
Ich möchte an … anknüpfen.|Je voudrais rebondir sur …|Ich möchte an das anknüpfen, was Frau Krüger gesagt hat.
Darf ich kurz einhaken?|Puis-je intervenir ?|Darf ich kurz einhaken? Die Zahlen stimmen nicht.
Wir sollten uns nicht verzetteln.|Ne nous dispersons pas.|Interessant, aber wir sollten uns nicht verzetteln.
Ich schlage vor, wir parken das Thema.|Je propose qu'on mette ce sujet de côté.|Gute Idee. Ich schlage vor, wir parken das Thema.
Das ist ein No-Go.|C'est rédhibitoire.|Fehlende Tests sind bei uns ein No-Go.
Wir haben den Zeitplan im Griff.|Nous maîtrisons le planning.|Keine Sorge, wir haben den Zeitplan im Griff.
Das müssen wir ausloten.|Il faut explorer ça.|Welche Optionen wir haben, müssen wir noch ausloten.
14
Ich möchte mein Interesse an … bekunden.|Je souhaite exprimer mon intérêt pour …|Ich möchte mein Interesse an der ausgeschriebenen Stelle bekunden.
Ich schreibe Ihnen im Namen|Je vous écris au nom|Ich schreibe Ihnen im Namen des Studierendenvereins.
Ich wäre Ihnen sehr verbunden, wenn|Je vous serais très obligé si|Ich wäre Ihnen sehr verbunden, wenn Sie mir die Unterlagen schicken könnten.
Anbei sende ich Ihnen|Ci-joint, je vous envoie|Anbei sende ich Ihnen den unterschriebenen Vertrag.
Sollten Sie weitere Informationen benötigen,|Si vous avez besoin d'autres informations,|Sollten Sie weitere Informationen benötigen, stehe ich Ihnen gern zur Verfügung.
Leider muss ich Ihnen mitteilen, dass|J'ai le regret de vous informer que|Leider muss ich Ihnen mitteilen, dass die Veranstaltung ausfällt.
In Erwartung Ihrer Antwort|Dans l'attente de votre réponse|In Erwartung Ihrer Antwort verbleibe ich mit freundlichen Grüßen.
Ich nehme Bezug auf unser Telefonat.|Je fais suite à notre appel.|Ich nehme Bezug auf unser Telefonat vom 3. Mai.
10
Da bin ich zwiegespalten.|Je suis partagé.|Was Homeoffice angeht, bin ich zwiegespalten.
Das greift zu kurz.|C'est trop réducteur.|Diese Erklärung greift zu kurz.
Das ist ein berechtigter Einwand, aber|C'est une objection légitime, mais|Das ist ein berechtigter Einwand, aber bedenken Sie die Kosten.
So weit würde ich nicht gehen.|Je n'irais pas jusque-là.|Eine Katastrophe? So weit würde ich nicht gehen.
Ich kann nachvollziehen, warum|Je peux comprendre pourquoi|Ich kann nachvollziehen, warum Sie skeptisch sind.
Da gehen die Meinungen auseinander.|Les avis divergent.|Bei diesem Thema gehen die Meinungen auseinander.
Darauf können wir uns einigen.|On peut s'entendre là-dessus.|Ein Kompromiss? Darauf können wir uns einigen.
17
Das hat mich kalt erwischt.|Ça m'a pris au dépourvu.|Die Nachricht hat mich kalt erwischt.
Mir fehlen die Worte.|Je n'ai pas de mots.|Vielen Dank, mir fehlen die Worte.
Das liegt mir schwer im Magen.|Ça me pèse sur l'estomac.|Diese Entscheidung liegt mir schwer im Magen.
Das ist mir völlig schnuppe.|Je m'en fiche complètement.|Promi-Klatsch? Das ist mir völlig schnuppe.
Mir ist ein Stein vom Herzen gefallen.|Ça m'a soulagé d'un grand poids.|Als die Zusage kam, ist mir ein Stein vom Herzen gefallen.
`
};
/* merge into DATA.chunks (skip duplicates) */
(function () {
  const norm = s => s.toLowerCase().normalize("NFC").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim();
  const seen = new Set(DATA.chunks.map(c => norm(c.chunk)));
  let n = DATA.chunks.length;
  for (const lvl of ["A1", "A2", "B1", "B2", "C1"]) {
    let cat = 0;
    for (const raw of (DATA.chunkRaw[lvl] || "").split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      if (/^\d+$/.test(line)) { cat = +line; continue; }
      const [chunk, fr, ex] = line.split("|").map(x => (x || "").trim());
      if (!chunk || seen.has(norm(chunk))) continue;
      seen.add(norm(chunk));
      DATA.chunks.push({ n: ++n, c: cat, chunk, fr, ex, lvl });
    }
  }
  delete DATA.chunkRaw;
})();
