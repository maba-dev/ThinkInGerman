window.DATA = window.DATA || {};
/* 500 more chunks so that each level has exactly 200 (1000 in total).
   Format: a line with a number = category index; then "chunk|≈ français|Beispiel". */
DATA.chunkCats.push(
  { emoji: "🍽️", name: "Manger & cuisiner" },      // 23
  { emoji: "💶", name: "Argent & achats" },        // 24
  { emoji: "🏡", name: "Logement & voisinage" },   // 25
  { emoji: "🎓", name: "Apprendre & étudier" },    // 26
  { emoji: "📰", name: "Société & débats" },       // 27
  { emoji: "❤️", name: "Relations & sentiments" }  // 28
);
DATA.chunkRaw2 = {
A1: `
0
Guten Abend!|Bonsoir !|Guten Abend, Frau Schulz!
Hallo zusammen!|Salut tout le monde !|Hallo zusammen, ich bin der Neue.
Das ist mein Freund.|C'est mon ami.|Das ist mein Freund Felix.
Das ist meine Freundin.|C'est mon amie / ma copine.|Das ist meine Freundin Emma.
Ich bin aus Frankreich.|Je suis de France.|Ich bin aus Frankreich, aus Lyon.
Ich bin neu in Berlin.|Je suis nouveau à Berlin.|Ich bin neu in Berlin und kenne noch niemanden.
Wo wohnst du?|Tu habites où ?|Wo wohnst du? — In Neukölln.
Ich arbeite als|Je travaille comme|Ich arbeite als Entwickler.
Ich lerne Deutsch.|J'apprends l'allemand.|Ich lerne Deutsch, seit drei Monaten.
Bis bald!|À bientôt !|Tschüss und bis bald!
Bis nächste Woche!|À la semaine prochaine !|Schönes Wochenende und bis nächste Woche!
Auf Wiedersehen!|Au revoir !|Vielen Dank und auf Wiedersehen!
Wie geht es Ihnen?|Comment allez-vous ?|Guten Tag, Herr Becker! Wie geht es Ihnen?
Sehr gut, danke.|Très bien, merci.|Wie geht's? — Sehr gut, danke.
Es geht.|Ça va (sans plus).|Wie geht's dir heute? — Es geht.
11
Noch einmal, bitte.|Encore une fois, s'il vous plaît.|Das habe ich nicht verstanden. Noch einmal, bitte.
Was bedeutet das?|Qu'est-ce que ça veut dire ?|„Feierabend“? Was bedeutet das?
Wie schreibt man das?|Comment ça s'écrit ?|„Kühlschrank“? Wie schreibt man das?
Ich weiß es nicht.|Je ne le sais pas.|Wo ist Pablo? — Ich weiß es nicht.
Ich habe eine Frage.|J'ai une question.|Entschuldigung, ich habe eine Frage.
1
Ich hätte gern ein Wasser.|Je voudrais une eau.|Ich hätte gern ein Wasser, bitte. Ohne Kohlensäure.
Die Rechnung, bitte.|L'addition, s'il vous plaît.|Entschuldigung, die Rechnung, bitte.
Zusammen oder getrennt?|Ensemble ou séparément ?|Zahlen Sie zusammen oder getrennt?
Getrennt, bitte.|Séparément, s'il vous plaît.|Zusammen oder getrennt? — Getrennt, bitte.
Was empfehlen Sie?|Que recommandez-vous ?|Ich kenne die Karte nicht. Was empfehlen Sie?
Das schmeckt gut.|C'est bon.|Hmm, das schmeckt gut! Was ist das?
Ich bin satt.|Je n'ai plus faim.|Danke, kein Dessert. Ich bin satt.
Haben Sie das in Größe M?|Vous l'avez en taille M ?|Die Jacke ist schön. Haben Sie das in Größe M?
Wo ist die Kasse?|Où est la caisse ?|Entschuldigung, wo ist die Kasse?
Kann ich mit Karte zahlen?|Je peux payer par carte ?|Kann ich mit Karte zahlen? — Ja, natürlich.
2
Wo ist die nächste U-Bahn?|Où est le métro le plus proche ?|Entschuldigung, wo ist die nächste U-Bahn?
Ich suche den Bahnhof.|Je cherche la gare.|Ich suche den Bahnhof. Ist das weit?
Gehen Sie geradeaus.|Allez tout droit.|Gehen Sie geradeaus und dann links.
Das ist hier um die Ecke.|C'est juste au coin.|Die Apotheke? Das ist hier um die Ecke.
Wie lange dauert es?|Ça dure combien de temps ?|Mit dem Bus? Wie lange dauert es?
Ich bin gleich zurück.|Je reviens tout de suite.|Warte hier, ich bin gleich zurück.
Hilfe!|À l'aide !|Hilfe! Mein Fahrrad ist weg!
Rufen Sie einen Krankenwagen!|Appelez une ambulance !|Schnell, rufen Sie einen Krankenwagen!
3
Ich bin glücklich.|Je suis heureux.|Ich bin glücklich in Berlin.
Ich bin traurig.|Je suis triste.|Leo geht nach Kanada. Ich bin traurig.
Das ist lustig!|C'est drôle !|Das Video ist so lustig!
Wie toll!|Comme c'est génial !|Du hast den Job? Wie toll!
Das ist schön!|C'est beau / C'est chouette !|Ihr kommt alle? Das ist schön!
Oh, wie süß!|Oh, comme c'est mignon !|Ein kleiner Hund! Oh, wie süß!
Ich liebe|J'adore|Ich liebe Berlin im Sommer.
Ich mag das nicht.|Je n'aime pas ça.|Kaffee ohne Zucker? Ich mag das nicht.
16
Wann kommt der Bus?|Quand arrive le bus ?|Entschuldigung, wann kommt der Bus?
Ist das der Zug nach Hamburg?|C'est le train pour Hambourg ?|Entschuldigung, ist das der Zug nach Hamburg?
Wo muss ich aussteigen?|Où dois-je descendre ?|Ich will zum Zoo. Wo muss ich aussteigen?
Der Zug hat Verspätung.|Le train a du retard.|Ich komme später, der Zug hat Verspätung.
Gute Reise!|Bon voyage !|Du fährst nach Wien? Gute Reise!
17
Ich bin krank.|Je suis malade.|Ich bin krank, ich bleibe heute zu Hause.
Ich habe Kopfschmerzen.|J'ai mal à la tête.|Ich habe Kopfschmerzen. Hast du eine Tablette?
Ich habe Fieber.|J'ai de la fièvre.|Ich habe Fieber und Husten.
Mir ist schlecht.|J'ai mal au cœur.|Mir ist schlecht. Ich brauche frische Luft.
Es geht mir besser.|Je vais mieux.|Danke, es geht mir besser.
18
Wie ist deine Nummer?|C'est quoi ton numéro ?|Wie ist deine Nummer? Ich schreibe dir.
Ich schreibe dir.|Je t'écris.|Ich schreibe dir heute Abend.
Ruf mich an!|Appelle-moi !|Ruf mich an, wenn du da bist!
Hallo, hier ist Malik.|Allô, c'est Malik.|Hallo, hier ist Malik. Ist Emma da?
19
Komm doch mit!|Viens donc avec nous !|Wir gehen ins Kino. Komm doch mit!
Gern, wann?|Volontiers, quand ?|Kaffee am Samstag? — Gern, wann?
Heute Abend?|Ce soir ?|Hast du Zeit? Heute Abend?
Bis Samstag!|À samedi !|Okay, bis Samstag!
Alles Gute zum Geburtstag!|Joyeux anniversaire !|Alles Gute zum Geburtstag, Mehmet!
23
Ich esse kein Fleisch.|Je ne mange pas de viande.|Für mich bitte vegetarisch. Ich esse kein Fleisch.
Was gibt es heute?|Qu'est-ce qu'il y a aujourd'hui ?|Mama, was gibt es heute zum Essen?
Ich koche heute.|C'est moi qui cuisine aujourd'hui.|Bleib sitzen, ich koche heute.
Das ist lecker!|C'est délicieux !|Hast du das gemacht? Das ist lecker!
Ich trinke keinen Alkohol.|Je ne bois pas d'alcool.|Für mich eine Cola. Ich trinke keinen Alkohol.
Frühstück ist fertig!|Le petit-déjeuner est prêt !|Aufstehen! Frühstück ist fertig!
24
Wie viel kostet das?|Combien ça coûte ?|Die Schuhe sind schön. Wie viel kostet das?
Das ist billig.|C'est bon marché.|Nur zwei Euro? Das ist billig!
Ich habe kein Bargeld.|Je n'ai pas d'espèces.|Geht auch Karte? Ich habe kein Bargeld.
Brauchen Sie eine Tüte?|Vous avez besoin d'un sac ?|Brauchen Sie eine Tüte? — Nein, danke.
Ich nehme das.|Je prends ça.|Die blaue Jacke? Ja, ich nehme das.
25
Ich wohne hier.|J'habite ici.|Ich wohne hier, im dritten Stock.
Meine Wohnung ist klein.|Mon appartement est petit.|Meine Wohnung ist klein, aber gemütlich.
Wer ist da?|Qui est là ?|Es klingelt. Wer ist da?
Komm rein!|Entre !|Hallo Emma, komm rein!
Mach die Tür zu!|Ferme la porte !|Es ist kalt. Mach die Tür zu!
26
Ich verstehe.|Je comprends.|Ah, jetzt verstehe ich. Danke!
Was heißt … auf Deutsch?|Comment on dit … en allemand ?|Was heißt „fenêtre“ auf Deutsch?
Ich mache Hausaufgaben.|Je fais mes devoirs.|Ich kann nicht kommen, ich mache Hausaufgaben.
Das ist richtig.|C'est juste.|„Der Tisch“? Ja, das ist richtig.
Das ist falsch.|C'est faux.|„Die Tisch“? Nein, das ist falsch.
28
Ich vermisse dich.|Tu me manques.|Ich vermisse dich, Leo.
Ich hab dich lieb.|Je t'aime fort (famille, amis).|Gute Nacht, Mama. Ich hab dich lieb.
Du bist sehr nett.|Tu es très gentil.|Danke für die Hilfe, du bist sehr nett.
Wie alt bist du?|Tu as quel âge ?|Wie alt bist du? — Siebenundzwanzig.
Hast du Geschwister?|Tu as des frères et sœurs ?|Hast du Geschwister? — Ja, eine Schwester.
0
Woher kommen Sie?|D'où venez-vous ?|Woher kommen Sie? — Aus Spanien.
Das ist Frau Müller.|Voici Madame Müller.|Das ist Frau Müller, meine Chefin.
Ich bin verheiratet.|Je suis marié.|Ich bin verheiratet und habe zwei Kinder.
Ich bin Student.|Je suis étudiant.|Ich bin Student an der TU Berlin.
1
Noch ein Bier, bitte.|Encore une bière, s'il vous plaît.|Noch ein Bier, bitte. Und ein Wasser.
Mit Milch und Zucker?|Avec du lait et du sucre ?|Ein Kaffee? Mit Milch und Zucker?
Ohne Zucker, bitte.|Sans sucre, s'il vous plaît.|Einen Tee, ohne Zucker, bitte.
Ist das frisch?|C'est frais ?|Der Fisch ist schön. Ist das frisch?
Haben Sie auch kleine Größen?|Vous avez aussi des petites tailles ?|Die Schuhe sind zu groß. Haben Sie auch kleine Größen?
2
Wo ist der Ausgang?|Où est la sortie ?|Entschuldigung, wo ist der Ausgang?
Ist hier eine Apotheke?|Il y a une pharmacie ici ?|Entschuldigung, ist hier eine Apotheke?
Wann ist das geöffnet?|Quand est-ce ouvert ?|Das Museum? Wann ist das geöffnet?
3
Ich bin so froh!|Je suis tellement content !|Du bist da! Ich bin so froh!
Wie schade!|Quel dommage !|Du kannst nicht kommen? Wie schade!
Wunderbar!|Merveilleux !|Das Wetter ist wunderbar heute!
Ich bin sauer.|Je suis fâché.|Er ist schon wieder zu spät. Ich bin sauer.
Das ist mir peinlich.|J'ai honte / Ça me gêne.|Ich habe deinen Namen vergessen. Das ist mir peinlich.
`,
A2: `
4
Hast du heute Abend schon was vor?|Tu as déjà prévu quelque chose ce soir ?|Hast du heute Abend schon was vor? Wir gehen ins Kino.
Können wir den Termin verschieben?|On peut décaler le rendez-vous ?|Ich bin krank. Können wir den Termin verschieben?
Ich muss leider absagen.|Je dois malheureusement annuler.|Es tut mir leid, ich muss leider absagen.
Wie sieht es bei dir aus?|Et toi, tu es dispo quand ?|Ich habe Montag Zeit. Wie sieht es bei dir aus?
Am besten am Wochenende.|Le mieux, c'est le week-end.|Wann passt es dir? — Am besten am Wochenende.
Wir sehen uns!|On se voit !|Okay, morgen um acht. Wir sehen uns!
Ich bin ein bisschen spät dran.|Je suis un peu en retard.|Sorry, ich bin ein bisschen spät dran.
5
Ich finde es super, dass|Je trouve ça super que|Ich finde es super, dass du mitkommst.
Das gefällt mir sehr.|Ça me plaît beaucoup.|Deine neue Wohnung? Das gefällt mir sehr.
Das ist nicht so mein Fall.|Ce n'est pas trop mon truc.|Techno? Das ist nicht so mein Fall.
Was meinst du dazu?|Qu'est-ce que tu en penses ?|Ich will umziehen. Was meinst du dazu?
Ich bin ganz deiner Meinung.|Je suis tout à fait de ton avis.|Das Café ist das beste. — Ich bin ganz deiner Meinung.
Ich bin mir nicht so sicher.|Je n'en suis pas si sûr.|Ist das eine gute Idee? Ich bin mir nicht so sicher.
6
Ich möchte einen Termin vereinbaren.|Je voudrais prendre rendez-vous.|Guten Tag, ich möchte einen Termin vereinbaren.
Wo bekomme ich das Formular?|Où est-ce que j'obtiens le formulaire ?|Wo bekomme ich das Formular für die Anmeldung?
Muss ich eine Nummer ziehen?|Je dois prendre un ticket ?|Muss ich eine Nummer ziehen oder einfach warten?
Ich habe meinen Ausweis vergessen.|J'ai oublié ma pièce d'identité.|Oh nein, ich habe meinen Ausweis vergessen!
Bis wann muss ich das abgeben?|Jusqu'à quand dois-je le rendre ?|Bis wann muss ich das abgeben? — Bis Freitag.
Ich warte schon lange.|J'attends depuis longtemps.|Entschuldigung, ich warte schon lange.
7
Zuerst bin ich|D'abord, je suis|Zuerst bin ich zum Bäcker gegangen.
Am nächsten Tag|Le lendemain|Am nächsten Tag war alles wieder gut.
Später habe ich gemerkt, dass|Plus tard, j'ai remarqué que|Später habe ich gemerkt, dass mein Handy weg war.
Weißt du, was passiert ist?|Tu sais ce qui s'est passé ?|Weißt du, was passiert ist? Ich habe den Job!
Das war so peinlich!|C'était tellement gênant !|Ich habe „Tschüss“ zum Chef gesagt. Das war so peinlich!
Zum Glück hat alles geklappt.|Heureusement, tout a marché.|Der Zug hatte Verspätung, aber zum Glück hat alles geklappt.
16
Ich hätte gern eine Fahrkarte.|Je voudrais un billet.|Ich hätte gern eine Fahrkarte nach Dresden.
Muss ich umsteigen?|Je dois changer ?|Fährt der Zug direkt oder muss ich umsteigen?
Der Zug ist ausgefallen.|Le train a été supprimé.|Ich komme nicht. Der Zug ist ausgefallen.
Ich habe ein Zimmer reserviert.|J'ai réservé une chambre.|Guten Abend, ich habe ein Zimmer reserviert.
Ist das Frühstück inklusive?|Le petit-déjeuner est compris ?|Ist das Frühstück inklusive? — Ja, von sieben bis zehn.
Wo kann ich mein Gepäck lassen?|Où puis-je laisser mes bagages ?|Wo kann ich mein Gepäck lassen? Der Check-in ist erst um drei.
17
Ich fühle mich nicht gut.|Je ne me sens pas bien.|Ich gehe nach Hause, ich fühle mich nicht gut.
Ich habe mich erkältet.|J'ai attrapé un rhume.|Ich habe mich im Regen erkältet.
Ich brauche eine Krankmeldung.|J'ai besoin d'un arrêt maladie.|Herr Doktor, ich brauche eine Krankmeldung für die Arbeit.
Ich bin total entspannt.|Je suis complètement détendu.|Nach dem Urlaub bin ich total entspannt.
Ich ärgere mich über|Je suis agacé par|Ich ärgere mich über den Lärm.
Ich habe Angst vor|J'ai peur de|Ich habe Angst vor der Prüfung.
18
Ich habe dir eine Mail geschickt.|Je t'ai envoyé un mail.|Ich habe dir eine Mail geschickt. Hast du sie gelesen?
Kannst du mir das Foto schicken?|Tu peux m'envoyer la photo ?|Kannst du mir das Foto von gestern schicken?
Ich habe kein Netz.|Je n'ai pas de réseau.|Ich rufe später an, ich habe kein Netz.
Das Handy ist kaputt.|Le portable est cassé.|Ich kann nicht anrufen, das Handy ist kaputt.
Ich habe dich nicht erreicht.|Je n'ai pas réussi à te joindre.|Ich habe dich gestern nicht erreicht.
19
Wir machen eine Party.|On fait une fête.|Am Samstag machen wir eine Party. Kommst du?
Ich komme gern.|Je viens volontiers.|Danke für die Einladung, ich komme gern.
Das war ein toller Abend.|C'était une super soirée.|Danke, das war ein toller Abend!
Wollen wir ins Kino gehen?|On va au cinéma ?|Wollen wir heute ins Kino gehen?
Ich lade dich ein.|Je t'invite.|Lass mal, ich lade dich ein.
23
Ich habe keinen Hunger mehr.|Je n'ai plus faim.|Danke, ich habe keinen Hunger mehr.
Das ist mir zu scharf.|C'est trop épicé pour moi.|Das Curry ist lecker, aber das ist mir zu scharf.
Kannst du mir das Rezept geben?|Tu peux me donner la recette ?|Der Kuchen ist super! Kannst du mir das Rezept geben?
Wir müssen noch einkaufen.|On doit encore faire les courses.|Der Kühlschrank ist leer. Wir müssen noch einkaufen.
Ich bin Vegetarier.|Je suis végétarien.|Kein Fleisch für mich, ich bin Vegetarier.
Lass es dir schmecken!|Bon appétit ! (familier)|Hier ist deine Pizza. Lass es dir schmecken!
24
Das ist im Angebot.|C'est en promotion.|Kauf es heute, das ist im Angebot.
Kann ich das umtauschen?|Je peux l'échanger ?|Die Hose ist zu klein. Kann ich das umtauschen?
Ich möchte das zurückgeben.|Je voudrais le rendre.|Das funktioniert nicht. Ich möchte das zurückgeben.
Haben Sie den Kassenbon?|Vous avez le ticket de caisse ?|Umtausch? Haben Sie den Kassenbon?
Ich muss sparen.|Je dois économiser.|Kein Restaurant diesen Monat, ich muss sparen.
Das kann ich mir nicht leisten.|Je ne peux pas me le permettre.|Ein neues Auto? Das kann ich mir nicht leisten.
25
Die Miete ist zu hoch.|Le loyer est trop élevé.|Die Wohnung ist schön, aber die Miete ist zu hoch.
Ich suche eine Wohnung.|Je cherche un appartement.|Ich suche eine Wohnung mit zwei Zimmern.
Wann kann ich die Wohnung besichtigen?|Quand puis-je visiter l'appartement ?|Wann kann ich die Wohnung besichtigen?
Die Nachbarn sind sehr laut.|Les voisins sont très bruyants.|Ich kann nicht schlafen, die Nachbarn sind sehr laut.
Kannst du die Blumen gießen?|Tu peux arroser les fleurs ?|Ich bin im Urlaub. Kannst du die Blumen gießen?
Ich bringe den Müll raus.|Je sors la poubelle.|Warte, ich bringe den Müll raus.
26
Ich lerne seit drei Monaten Deutsch.|J'apprends l'allemand depuis trois mois.|Ich lerne seit drei Monaten Deutsch, jeden Tag.
Das habe ich vergessen.|J'ai oublié ça.|Wie heißt das noch mal? Das habe ich vergessen.
Kannst du mich korrigieren?|Tu peux me corriger ?|Wenn ich Fehler mache, kannst du mich korrigieren?
Ich habe die Prüfung bestanden.|J'ai réussi l'examen.|Ich habe die Prüfung bestanden!
Ich mache einen Kurs.|Je suis un cours.|Ich mache einen Kurs an der Volkshochschule.
27
Hast du das gehört?|Tu as entendu ça ?|Hast du das gehört? Die Mieten steigen wieder.
In den Nachrichten haben sie gesagt, dass|Aux infos, ils ont dit que|In den Nachrichten haben sie gesagt, dass es morgen streikt.
Das finde ich unfair.|Je trouve ça injuste.|Frauen verdienen weniger? Das finde ich unfair.
Das ist ein großes Problem.|C'est un gros problème.|Der Müll in den Parks ist ein großes Problem.
28
Ich bin verliebt.|Je suis amoureux.|Ich glaube, ich bin verliebt.
Wir haben uns gestritten.|On s'est disputés.|Wir haben uns gestritten, aber jetzt ist alles gut.
Wir sind seit zwei Jahren zusammen.|On est ensemble depuis deux ans.|Emma und ich sind seit zwei Jahren zusammen.
Ich verstehe mich gut mit|Je m'entends bien avec|Ich verstehe mich gut mit meinen Kollegen.
Er ist mein bester Freund.|C'est mon meilleur ami.|Das ist Leo. Er ist mein bester Freund.
Ich bin stolz auf dich.|Je suis fier de toi.|Du hast es geschafft! Ich bin stolz auf dich.
4
Wann hast du frei?|Quand es-tu libre ?|Wann hast du frei? Am Freitag?
Wir könnten ins Museum gehen.|On pourrait aller au musée.|Es regnet. Wir könnten ins Museum gehen.
Ich muss noch arbeiten.|Je dois encore travailler.|Ich komme später, ich muss noch arbeiten.
Sag mir Bescheid!|Préviens-moi !|Wenn du Zeit hast, sag mir Bescheid!
Ich hole dich ab.|Je viens te chercher.|Um acht? Okay, ich hole dich ab.
5
Ich finde das nicht gut.|Je ne trouve pas ça bien.|Rauchen im Park? Ich finde das nicht gut.
Das ist eine gute Idee!|C'est une bonne idée !|Picknick am Sonntag? Das ist eine gute Idee!
Was ist dein Lieblingsessen?|Quel est ton plat préféré ?|Was ist dein Lieblingsessen? — Couscous!
Am liebsten|De préférence / Ce que je préfère|Am liebsten trinke ich Tee.
6
Ich habe eine Beschwerde.|J'ai une réclamation.|Entschuldigung, ich habe eine Beschwerde.
Können Sie mir das erklären?|Pouvez-vous me l'expliquer ?|Ich verstehe den Brief nicht. Können Sie mir das erklären?
Ich bin hier richtig, oder?|Je suis au bon endroit, non ?|Anmeldung? Ich bin hier richtig, oder?
Wo ist das Bürgeramt?|Où est la mairie (bureau des déclarations) ?|Entschuldigung, wo ist das Bürgeramt?
7
Früher habe ich|Avant, je|Früher habe ich in Lyon gewohnt.
Als ich klein war,|Quand j'étais petit,|Als ich klein war, wollte ich Pilot werden.
Das war der schönste Tag.|C'était le plus beau jour.|Unsere Hochzeit? Das war der schönste Tag.
Es hat lange gedauert.|Ça a duré longtemps.|Die Reparatur? Es hat lange gedauert.
17
Ich habe mir den Arm gebrochen.|Je me suis cassé le bras.|Beim Skifahren habe ich mir den Arm gebrochen.
Ich habe schlecht geschlafen.|J'ai mal dormi.|Ich bin müde, ich habe schlecht geschlafen.
Ich bin sehr aufgeregt.|Je suis très excité / nerveux.|Morgen ist das Konzert! Ich bin sehr aufgeregt.
18
Kannst du mir helfen? Mein Laptop geht nicht.|Tu peux m'aider ? Mon ordinateur ne marche pas.|Kannst du mir helfen? Mein Laptop geht nicht.
Ich lade das Handy auf.|Je recharge mon portable.|Warte kurz, ich lade das Handy auf.
19
Wo treffen wir uns?|On se retrouve où ?|Kino um acht. Wo treffen wir uns?
Bring gute Laune mit!|Apporte ta bonne humeur !|Party am Samstag. Bring gute Laune mit!
23
Ich hätte gern die Speisekarte.|Je voudrais la carte.|Guten Abend, ich hätte gern die Speisekarte.
Was ist das Tagesgericht?|Quel est le plat du jour ?|Entschuldigung, was ist das Tagesgericht?
24
Gibt es einen Rabatt?|Y a-t-il une réduction ?|Für Studenten? Gibt es einen Rabatt?
Ich zahle bar.|Je paie en espèces.|Karte geht nicht? Kein Problem, ich zahle bar.
26
Ich lerne jeden Tag.|J'apprends chaque jour.|Ich lerne jeden Tag eine Stunde.
Wie spricht man das aus?|Comment ça se prononce ?|„Eichhörnchen“? Wie spricht man das aus?
`,
B1: `
8
Wie heißt das noch mal?|Comment ça s'appelle déjà ?|Dieses Ding zum Öffnen… wie heißt das noch mal?
Ich muss kurz überlegen.|Je dois réfléchir un instant.|Gute Frage, ich muss kurz überlegen.
Wie soll ich das erklären?|Comment expliquer ça ?|Wie soll ich das erklären? Es ist ein bisschen kompliziert.
Ich meine damit, dass|Ce que je veux dire, c'est que|Ich meine damit, dass wir mehr Zeit brauchen.
Wie gesagt|Comme je l'ai dit|Wie gesagt, ich kann am Freitag nicht.
Na ja, wie soll ich sagen|Bon, comment dire|Na ja, wie soll ich sagen… der Film war seltsam.
9
Was genau meinst du?|Tu veux dire quoi exactement ?|„Später“? Was genau meinst du?
Könntest du das wiederholen?|Pourrais-tu répéter ?|Sorry, könntest du das wiederholen?
Wenn ich dich richtig verstehe|Si je te comprends bien|Wenn ich dich richtig verstehe, willst du kündigen?
Was ist damit gemeint?|Qu'est-ce qu'on entend par là ?|„Work-Life-Balance“ — was ist damit gemeint?
Hast du verstanden, was ich meine?|Tu as compris ce que je veux dire ?|Hast du verstanden, was ich meine, oder soll ich ein Beispiel geben?
10
Da hast du völlig recht.|Là, tu as entièrement raison.|Wir brauchen eine Pause. — Da hast du völlig recht.
Das stimmt zwar, aber|C'est vrai, certes, mais|Das stimmt zwar, aber es ist sehr teuer.
Ich sehe das ein bisschen anders.|Je vois ça un peu autrement.|Ich sehe das ein bisschen anders als du.
Ich bin da skeptisch.|Je suis sceptique là-dessus.|Eine App für alles? Ich bin da skeptisch.
Das ist doch Unsinn!|C'est absurde !|Deutsch in einer Woche lernen? Das ist doch Unsinn!
Lass uns einen Kompromiss finden.|Trouvons un compromis.|Du willst Pizza, ich Sushi. Lass uns einen Kompromiss finden.
11
Das ist nicht mein Problem.|Ce n'est pas mon problème.|Du hast den Schlüssel vergessen? Das ist nicht mein Problem!
Ich glaub, ich spinne!|Je rêve ou quoi !|Schon wieder Verspätung? Ich glaub, ich spinne!
Das ist ein Katzensprung.|C'est à deux pas.|Der Bahnhof? Das ist ein Katzensprung.
Ich habe keinen Bock.|J'ai pas envie (familier).|Joggen bei Regen? Ich habe keinen Bock.
Mach mal halblang!|Calme-toi / N'exagère pas !|Mach mal halblang, es war nur ein Witz.
Das ist doch nicht zu fassen!|C'est pas croyable !|Er hat schon wieder gekündigt? Das ist doch nicht zu fassen!
Das kannst du laut sagen!|Tu peux le dire !|Heute ist es heiß! — Das kannst du laut sagen!
Viel Spaß dabei!|Amuse-toi bien !|Du machst einen Tanzkurs? Viel Spaß dabei!
4
Mir ist etwas Wichtiges dazwischengekommen.|J'ai eu un empêchement important.|Sorry, mir ist etwas Wichtiges dazwischengekommen.
Lass uns das spontan machen.|Faisons ça spontanément.|Kein Plan? Lass uns das spontan machen.
Ich habe es mir anders überlegt.|J'ai changé d'avis.|Ich komme doch mit. Ich habe es mir anders überlegt.
6
Ich möchte einen Antrag stellen.|Je voudrais déposer une demande.|Ich möchte einen Antrag auf Kindergeld stellen.
Welche Frist gilt dafür?|Quel est le délai pour ça ?|Welche Frist gilt dafür? Zwei Wochen?
Ich habe einen Brief vom Amt bekommen.|J'ai reçu une lettre de l'administration.|Ich habe einen Brief vom Amt bekommen und verstehe nichts.
Ich lege Widerspruch ein.|Je fais opposition.|Der Bescheid ist falsch. Ich lege Widerspruch ein.
7
Das Komische war, dass|Le plus bizarre, c'est que|Das Komische war, dass niemand etwas gemerkt hat.
Am Ende stellte sich heraus, dass|À la fin, il s'est avéré que|Am Ende stellte sich heraus, dass der Schlüssel im Auto war.
Ich werde nie vergessen, wie|Je n'oublierai jamais comment|Ich werde nie vergessen, wie ich in Berlin angekommen bin.
Es war einmal|Il était une fois|Es war einmal ein König, der drei Töchter hatte.
16
Gibt es eine Direktverbindung?|Il y a une liaison directe ?|Gibt es eine Direktverbindung nach Prag?
Ich möchte einen Sitzplatz reservieren.|Je voudrais réserver une place assise.|Für den ICE möchte ich einen Sitzplatz reservieren.
Wir sind in einen Stau geraten.|On s'est retrouvés dans un bouchon.|Wir sind in einen Stau geraten und kommen später.
Das Zimmer entspricht nicht der Beschreibung.|La chambre ne correspond pas à la description.|Das Zimmer entspricht nicht der Beschreibung: kein Balkon!
17
Ich brauche dringend Urlaub.|J'ai urgemment besoin de vacances.|Ich bin so müde. Ich brauche dringend Urlaub.
Ich kann nicht abschalten.|Je n'arrive pas à décrocher.|Auch am Wochenende kann ich nicht abschalten.
Das hat mich sehr berührt.|Ça m'a beaucoup touché.|Deine Nachricht hat mich sehr berührt.
Ich bin enttäuscht.|Je suis déçu.|Ich habe mehr erwartet. Ich bin enttäuscht.
Mir geht es schon viel besser.|Je vais déjà beaucoup mieux.|Danke der Nachfrage, mir geht es schon viel besser.
18
Das Update hat alles kaputt gemacht.|La mise à jour a tout cassé.|Seit gestern geht nichts mehr. Das Update hat alles kaputt gemacht.
Ich habe das Passwort vergessen.|J'ai oublié le mot de passe.|Mist, ich habe das Passwort vergessen.
Kannst du das in die Gruppe schicken?|Tu peux l'envoyer dans le groupe ?|Super Foto! Kannst du das in die Gruppe schicken?
Ich bin gerade offline.|Je suis hors ligne en ce moment.|Ich antworte später, ich bin gerade offline.
19
Wollen wir zusammen kochen?|On cuisine ensemble ?|Wollen wir zusammen kochen? Ich bringe Gemüse mit.
Ich schmeiße eine Party.|J'organise une fête.|Am Freitag schmeiße ich eine Party. Du musst kommen!
Es wurde ziemlich spät.|Ça s'est fini assez tard.|Die Party war toll, es wurde ziemlich spät.
Wer kommt alles?|Qui vient ?|Grillen am Sonntag? Wer kommt alles?
23
Ich bin auf Diät.|Je suis au régime.|Keinen Kuchen für mich, ich bin auf Diät.
Das ist mir zu fettig.|C'est trop gras pour moi.|Pommes? Nein, das ist mir zu fettig.
Wir bestellen heute was.|On commande quelque chose aujourd'hui.|Keine Lust zu kochen. Wir bestellen heute was.
Die Reste essen wir morgen.|On mangera les restes demain.|Pack es ein, die Reste essen wir morgen.
24
Ich habe mein Konto überzogen.|Je suis à découvert.|Ich kann nichts kaufen, ich habe mein Konto überzogen.
Das ist ein Schnäppchen!|C'est une bonne affaire !|Nur zehn Euro? Das ist ein Schnäppchen!
Das ist reine Geldverschwendung.|C'est du gaspillage d'argent.|Drei Streamingdienste? Das ist reine Geldverschwendung.
Ich überweise dir das Geld.|Je te fais le virement.|Danke fürs Bezahlen, ich überweise dir das Geld.
Lass uns die Rechnung teilen.|Partageons l'addition.|Lass uns die Rechnung teilen, okay?
25
Die Nebenkosten sind gestiegen.|Les charges ont augmenté.|Die Nebenkosten sind schon wieder gestiegen.
Ich habe meine Wohnung gekündigt.|J'ai résilié mon bail.|Ich habe meine Wohnung zum Juni gekündigt.
Ich ziehe nächsten Monat um.|Je déménage le mois prochain.|Ich ziehe nächsten Monat um, nach Neukölln.
Wir haben eine Hausordnung.|On a un règlement intérieur.|Ruhe ab zehn Uhr: Wir haben eine Hausordnung.
Der Vermieter reagiert nicht.|Le propriétaire ne réagit pas.|Die Heizung ist kaputt, und der Vermieter reagiert nicht.
26
Ich lerne am besten, wenn|J'apprends le mieux quand|Ich lerne am besten, wenn ich laut spreche.
Ich habe Fortschritte gemacht.|J'ai fait des progrès.|In drei Monaten habe ich große Fortschritte gemacht.
Ich bereite mich auf die Prüfung vor.|Je prépare l'examen.|Ich bereite mich auf die Prüfung im Juni vor.
Das muss ich auswendig lernen.|Je dois apprendre ça par cœur.|Die Artikel? Das muss ich auswendig lernen.
Ich habe ein Brett vor dem Kopf.|J'ai un trou / Je bloque complètement.|Die Lösung ist einfach, aber ich habe ein Brett vor dem Kopf.
27
Darüber wird viel diskutiert.|On en discute beaucoup.|Über die Vier-Tage-Woche wird viel diskutiert.
Laut einer Umfrage|Selon un sondage|Laut einer Umfrage arbeiten viele Deutsche im Homeoffice.
Das ist ein heikles Thema.|C'est un sujet délicat.|Politik am Esstisch? Das ist ein heikles Thema.
Man sollte bedenken, dass|Il faut garder à l'esprit que|Man sollte bedenken, dass nicht alle ein Auto haben.
Es gibt Vor- und Nachteile.|Il y a des avantages et des inconvénients.|Homeoffice? Es gibt Vor- und Nachteile.
28
Wir haben uns aus den Augen verloren.|On s'est perdus de vue.|Nach der Schule haben wir uns aus den Augen verloren.
Ich kann mich auf dich verlassen.|Je peux compter sur toi.|Danke, ich weiß, ich kann mich auf dich verlassen.
Er hat mit ihr Schluss gemacht.|Il a rompu avec elle.|Er hat mit ihr Schluss gemacht, nach fünf Jahren.
Wir haben uns wieder vertragen.|On s'est réconciliés.|Wir haben gestritten, aber wir haben uns wieder vertragen.
Sie ist mir sehr ans Herz gewachsen.|Je me suis beaucoup attaché à elle.|Frau Schulz ist mir sehr ans Herz gewachsen.
Das bleibt unter uns.|Ça reste entre nous.|Ich erzähle dir was, aber das bleibt unter uns.
12
Ich bin gerade im Homeoffice.|Je suis en télétravail en ce moment.|Ruf mich an, ich bin gerade im Homeoffice.
Ich habe heute Feierabend.|J'ai fini ma journée de travail.|Endlich, ich habe heute Feierabend!
Ich bin krankgeschrieben.|Je suis en arrêt maladie.|Ich bin bis Freitag krankgeschrieben.
Ich habe viel um die Ohren.|J'ai beaucoup de choses à gérer.|Diese Woche habe ich viel um die Ohren.
Das ist nicht mein Aufgabenbereich.|Ce n'est pas dans mes attributions.|Rechnungen? Das ist nicht mein Aufgabenbereich.
8
Was wollte ich sagen?|Qu'est-ce que je voulais dire ?|Ach, was wollte ich sagen? Ach ja, das Meeting!
Ich komme nicht auf das Wort.|Le mot ne me revient pas.|Ich komme nicht auf das Wort… Schraubenzieher!
9
Worauf willst du hinaus?|Où veux-tu en venir ?|Du redest seit zehn Minuten. Worauf willst du hinaus?
Verstehe ich dich richtig?|Je te comprends bien ?|Verstehe ich dich richtig? Du willst aufhören?
10
Das sehe ich genauso.|Je vois exactement les choses ainsi.|Wir brauchen mehr Zeit. — Das sehe ich genauso.
Da ist was dran.|Il y a du vrai là-dedans.|Teuer heißt nicht besser? Da ist was dran.
Das überzeugt mich nicht.|Ça ne me convainc pas.|Dein Argument überzeugt mich nicht.
11
Das ist doch kein Weltuntergang.|Ce n'est pas la fin du monde.|Du hast den Bus verpasst? Das ist doch kein Weltuntergang.
Ich bin ganz Ohr.|Je suis tout ouïe.|Du hast Neuigkeiten? Ich bin ganz Ohr.
Mir reicht's!|J'en ai assez !|Schon wieder Lärm. Mir reicht's!
Das ist halb so wild.|Ce n'est pas si grave.|Der Fleck? Das ist halb so wild.
17
Ich bin am Ende meiner Kräfte.|Je suis à bout de forces.|Nach der Prüfungswoche bin ich am Ende meiner Kräfte.
Das macht mir Mut.|Ça me donne du courage.|Deine Worte machen mir Mut.
12
Ich arbeite in Teilzeit.|Je travaille à temps partiel.|Seit dem Baby arbeite ich in Teilzeit.
Ich habe eine Gehaltserhöhung bekommen.|J'ai eu une augmentation.|Gute Nachrichten: Ich habe eine Gehaltserhöhung bekommen!
Wir haben eine Besprechung.|On a une réunion.|Ich kann nicht telefonieren, wir haben eine Besprechung.
27
Das ist umstritten.|C'est controversé.|Das neue Gesetz ist umstritten.
Ich habe davon in der Zeitung gelesen.|J'en ai lu quelque chose dans le journal.|Den Streik? Ich habe davon in der Zeitung gelesen.
23
Das schmeckt nach mehr!|J'en reprendrais bien !|Dein Kuchen schmeckt nach mehr!
`,
B2: `
12
Lassen Sie uns das kurz besprechen.|Discutons-en brièvement.|Haben Sie fünf Minuten? Lassen Sie uns das kurz besprechen.
Das liegt nicht in meiner Hand.|Ça ne dépend pas de moi.|Die Entscheidung liegt nicht in meiner Hand.
Wir müssen an einem Strang ziehen.|Nous devons tirer dans le même sens.|Nur gemeinsam schaffen wir das. Wir müssen an einem Strang ziehen.
Ich stimme mich mit dem Team ab.|Je me coordonne avec l'équipe.|Bevor ich antworte, stimme ich mich mit dem Team ab.
Das klären wir im nächsten Meeting.|On règle ça à la prochaine réunion.|Zu viele Fragen — das klären wir im nächsten Meeting.
Ich behalte das im Hinterkopf.|Je le garde dans un coin de ma tête.|Guter Hinweis, ich behalte das im Hinterkopf.
Wir sind etwas in Verzug.|Nous avons un peu de retard.|Wir sind etwas in Verzug, aber das holen wir auf.
Das hat oberste Priorität.|C'est la priorité absolue.|Die Sicherheit der Daten hat oberste Priorität.
Ich delegiere das an|Je délègue ça à|Ich delegiere das an Lena, sie kennt das Projekt.
Der Kunde ist abgesprungen.|Le client s'est désisté.|Schlechte Nachricht: Der Kunde ist abgesprungen.
13
Ich habe mein Studium abgeschlossen.|J'ai terminé mes études.|Ich habe mein Studium 2020 abgeschlossen.
Ich suche eine neue Herausforderung.|Je cherche un nouveau défi.|Ich suche eine neue Herausforderung, deshalb bewerbe ich mich.
Ich bin belastbar und flexibel.|Je résiste au stress et je suis flexible.|Ich bin belastbar und flexibel, auch unter Zeitdruck.
Ich übernehme gern Verantwortung.|J'aime prendre des responsabilités.|Im Projekt übernehme ich gern Verantwortung.
Ich könnte frühestens im März anfangen.|Je pourrais commencer au plus tôt en mars.|Wegen meiner Kündigungsfrist könnte ich frühestens im März anfangen.
Wie sieht die Einarbeitung aus?|Comment se passe l'intégration ?|Eine Frage noch: Wie sieht die Einarbeitung aus?
14
Hiermit bestätige ich|Par la présente, je confirme|Hiermit bestätige ich den Termin am 5. Mai.
Wir bedauern, Ihnen mitteilen zu müssen|Nous regrettons de devoir vous informer|Wir bedauern, Ihnen mitteilen zu müssen, dass die Stelle besetzt ist.
Ich bitte um Rückmeldung bis|Merci de me répondre avant le|Ich bitte um Rückmeldung bis Freitag.
Bitte entschuldigen Sie die Unannehmlichkeiten.|Veuillez excuser le désagrément.|Die Lieferung kommt später. Bitte entschuldigen Sie die Unannehmlichkeiten.
Ich beziehe mich auf Ihre Anzeige|Je fais référence à votre annonce|Ich beziehe mich auf Ihre Anzeige vom 3. März.
Mit der Bitte um Kenntnisnahme|Pour information|Anbei der Bericht, mit der Bitte um Kenntnisnahme.
15
Auf den ersten Blick|Au premier abord|Auf den ersten Blick wirkt das Foto ruhig.
Es fällt auf, dass|On remarque que|Es fällt auf, dass alle Personen lächeln.
Im Gegensatz dazu|À l'inverse|Im Gegensatz dazu ist das zweite Bild sehr laut.
Meines Erachtens|À mon sens|Meines Erachtens ist das die beste Lösung.
Daraus lässt sich schließen, dass|On peut en conclure que|Daraus lässt sich schließen, dass Bildung entscheidend ist.
Nicht zu vergessen ist|Il ne faut pas oublier|Nicht zu vergessen ist der Umweltaspekt.
10
Das ist ein zweischneidiges Schwert.|C'est une arme à double tranchant.|Soziale Medien sind ein zweischneidiges Schwert.
Ich muss dir widersprechen.|Je dois te contredire.|Ich muss dir widersprechen: Die Zahlen sagen etwas anderes.
Das ist Ansichtssache, aber|C'est une question de point de vue, mais|Das ist Ansichtssache, aber ich finde es zu teuer.
Da bin ich ganz bei dir.|Je suis entièrement d'accord avec toi.|Mehr Radwege? Da bin ich ganz bei dir.
Darüber lässt sich streiten.|Ça se discute.|Ob das die beste Lösung ist, darüber lässt sich streiten.
20
Das ist Jacke wie Hose.|C'est bonnet blanc et blanc bonnet.|Bus oder Bahn? Das ist Jacke wie Hose.
jemandem einen Bären aufbinden|raconter des salades à quelqu'un|Du hast den Chef getroffen? Du willst mir einen Bären aufbinden!
Ich drück dir die Daumen.|Je croise les doigts pour toi.|Morgen ist die Prüfung? Ich drück dir die Daumen.
die Katze im Sack kaufen|acheter les yeux fermés|Ohne Besichtigung? Ich will nicht die Katze im Sack kaufen.
Ich glaube, mein Schwein pfeift!|C'est pas vrai ! / J'hallucine !|Er hat im Lotto gewonnen? Ich glaube, mein Schwein pfeift!
Das ist nicht das Gelbe vom Ei.|Ce n'est pas terrible.|Die Lösung funktioniert, aber das ist nicht das Gelbe vom Ei.
etwas in den Sand setzen|planter quelque chose (échouer)|Er hat das Projekt total in den Sand gesetzt.
jemandem auf den Schlips treten|vexer quelqu'un|Ich wollte dir nicht auf den Schlips treten.
21
streng genommen|à strictement parler|Streng genommen ist das nicht erlaubt.
in erster Linie|en premier lieu|In erster Linie geht es um Sicherheit.
in der Regel|en règle générale|In der Regel antworte ich innerhalb eines Tages.
unter Umständen|le cas échéant / éventuellement|Unter Umständen dauert es länger.
nach wie vor|toujours (comme avant)|Das Problem besteht nach wie vor.
im Prinzip|en principe|Im Prinzip bin ich einverstanden.
ganz im Gegenteil|bien au contraire|Langweilig? Ganz im Gegenteil!
17
Ich stehe total unter Druck.|Je suis sous une énorme pression.|Mit drei Deadlines stehe ich total unter Druck.
Das nimmt mich ziemlich mit.|Ça me bouleverse pas mal.|Die Trennung nimmt mich ziemlich mit.
Ich bin hin- und hergerissen.|Je suis tiraillé.|Berlin oder Wien? Ich bin hin- und hergerissen.
Ich habe ein mulmiges Gefühl.|J'ai un mauvais pressentiment.|Vor dem Gespräch habe ich ein mulmiges Gefühl.
Das ist mir unangenehm.|Ça me met mal à l'aise.|Über Geld zu sprechen ist mir unangenehm.
16
Ich habe meinen Flug umgebucht.|J'ai modifié mon vol.|Wegen des Streiks habe ich meinen Flug umgebucht.
Ich möchte mich über den Service beschweren.|Je voudrais me plaindre du service.|Ich möchte mich über den Service im Hotel beschweren.
Steht mir eine Entschädigung zu?|Ai-je droit à une indemnisation ?|Der Flug hatte fünf Stunden Verspätung. Steht mir eine Entschädigung zu?
18
Ich teile meinen Bildschirm.|Je partage mon écran.|Moment, ich teile meinen Bildschirm.
Die Datei ist zu groß.|Le fichier est trop volumineux.|Ich kann sie nicht schicken, die Datei ist zu groß.
Das läuft über die Cloud.|Ça passe par le cloud.|Keine USB-Sticks mehr, das läuft über die Cloud.
Ich habe das Backup eingespielt.|J'ai restauré la sauvegarde.|Keine Panik, ich habe das Backup eingespielt.
19
Ich bin für jeden Spaß zu haben.|Je suis partant pour tout.|Karaoke? Klar, ich bin für jeden Spaß zu haben.
Lass uns anstoßen!|Trinquons !|Auf die neue Stelle! Lass uns anstoßen!
Das holen wir nach.|On rattrapera ça.|Du kannst heute nicht? Kein Problem, das holen wir nach.
23
Das ist nicht mein Geschmack.|Ce n'est pas à mon goût.|Sushi? Das ist nicht mein Geschmack.
Wir haben einen Tisch reserviert.|Nous avons réservé une table.|Guten Abend, wir haben einen Tisch reserviert, auf Benali.
Ich vertrage keine Laktose.|Je ne supporte pas le lactose.|Ohne Milch, bitte. Ich vertrage keine Laktose.
24
Das ist im Preis inklusive.|C'est compris dans le prix.|Das Frühstück ist im Preis inklusive.
Ich möchte eine Ratenzahlung vereinbaren.|Je voudrais convenir d'un paiement échelonné.|Die Rechnung ist hoch. Ich möchte eine Ratenzahlung vereinbaren.
Das Preis-Leistungs-Verhältnis stimmt.|Le rapport qualité-prix est bon.|Nicht billig, aber das Preis-Leistungs-Verhältnis stimmt.
Die Kosten übernimmt die Firma.|C'est l'entreprise qui prend en charge les frais.|Der Kurs ist teuer, aber die Kosten übernimmt die Firma.
25
Die Kaution bekommen Sie zurück.|Vous récupérerez la caution.|Wenn alles in Ordnung ist, die Kaution bekommen Sie zurück.
Ich habe einen Mangel gemeldet.|J'ai signalé un défaut.|Ich habe einen Mangel gemeldet: Schimmel im Bad.
Wir teilen uns eine WG.|On partage une colocation.|Wir teilen uns eine WG in Kreuzberg.
Die Wohnung ist bezugsfertig.|L'appartement est prêt à habiter.|Ab dem 1. Mai ist die Wohnung bezugsfertig.
26
Ich bilde mich weiter.|Je me forme en continu.|Ich bilde mich weiter, mit Online-Kursen.
Ich habe das Studium abgebrochen.|J'ai abandonné mes études.|Ich habe das Studium abgebrochen und eine Ausbildung gemacht.
Das ist praxisnah.|C'est axé sur la pratique.|Mir gefällt der Kurs, das ist praxisnah.
Ich habe eine steile Lernkurve.|J'apprends très vite (courbe raide).|Im neuen Job habe ich eine steile Lernkurve.
Ich habe es auf Anhieb verstanden.|Je l'ai compris du premier coup.|Seine Erklärung war super, ich habe es auf Anhieb verstanden.
27
Das wird kontrovers diskutiert.|C'est un sujet controversé.|Das Tempolimit wird kontrovers diskutiert.
Die Schere zwischen Arm und Reich|Le fossé entre riches et pauvres|Die Schere zwischen Arm und Reich wird größer.
Es besteht dringender Handlungsbedarf.|Il est urgent d'agir.|Beim Klimaschutz besteht dringender Handlungsbedarf.
Die Politik ist gefordert.|C'est aux politiques d'agir.|Bei den Mieten ist die Politik gefordert.
Das betrifft vor allem|Cela concerne surtout|Das betrifft vor allem junge Familien.
Das ist ein Teufelskreis.|C'est un cercle vicieux.|Kein Job ohne Erfahrung, keine Erfahrung ohne Job. Das ist ein Teufelskreis.
28
Wir sind auf einer Wellenlänge.|On est sur la même longueur d'onde.|Mit Jonas verstehe ich mich sofort. Wir sind auf einer Wellenlänge.
Ich habe Schmetterlinge im Bauch.|J'ai des papillons dans le ventre.|Vor dem Date habe ich Schmetterlinge im Bauch.
Sie hat mir einen Korb gegeben.|Elle m'a éconduit.|Ich habe sie gefragt, aber sie hat mir einen Korb gegeben.
Wir gehen getrennte Wege.|Nous suivons des chemins différents.|Nach zehn Jahren gehen wir getrennte Wege.
Er ist ein guter Zuhörer.|C'est quelqu'un qui sait écouter.|Erzähl es Pablo, er ist ein guter Zuhörer.
12
Ich bin für das Budget zuständig.|Je suis responsable du budget.|In diesem Projekt bin ich für das Budget zuständig.
Wir müssen Prioritäten setzen.|Nous devons fixer des priorités.|Zu viele Aufgaben — wir müssen Prioritäten setzen.
Lassen Sie mich das kurz zusammenfassen.|Laissez-moi résumer brièvement.|Lassen Sie mich das kurz zusammenfassen: Drei Punkte sind offen.
13
Ich möchte mich beruflich weiterentwickeln.|Je voudrais évoluer professionnellement.|Ich möchte mich beruflich weiterentwickeln, am liebsten im Bereich Bildung.
Ich arbeite lösungsorientiert.|Je travaille de façon orientée solutions.|Ich arbeite lösungsorientiert und bleibe ruhig unter Druck.
14
Anbei erhalten Sie|Veuillez trouver ci-joint|Anbei erhalten Sie die gewünschten Unterlagen.
Ich danke Ihnen für Ihr Entgegenkommen.|Je vous remercie de votre amabilité.|Ich danke Ihnen für Ihr Entgegenkommen bei der Terminwahl.
15
Hinzu kommt, dass|À cela s'ajoute que|Hinzu kommt, dass die Mieten weiter steigen.
Letztendlich|Finalement|Letztendlich muss jeder selbst entscheiden.
Ich vertrete die Ansicht, dass|Je défends l'idée que|Ich vertrete die Ansicht, dass Bildung kostenlos sein sollte.
21
im Grunde|au fond|Im Grunde hast du recht.
durchaus|tout à fait|Das ist durchaus möglich.
offen gestanden|à vrai dire|Offen gestanden habe ich das nicht erwartet.
`,
C1: `
20
Da beißt die Maus keinen Faden ab.|Il n'y a rien à faire, c'est comme ça.|Die Frist ist morgen. Da beißt die Maus keinen Faden ab.
jemandem das Wasser reichen können|arriver à la cheville de quelqu'un|In Mathe kann ihm niemand das Wasser reichen.
aus einer Mücke einen Elefanten machen|faire une montagne d'un rien|Es war nur ein kleiner Fehler. Mach doch aus einer Mücke keinen Elefanten.
die Flinte ins Korn werfen|jeter l'éponge|Nach einem Misserfolg sollte man nicht gleich die Flinte ins Korn werfen.
den Wald vor lauter Bäumen nicht sehen|ne pas voir la forêt à cause des arbres|Vor lauter Details sieht er den Wald vor lauter Bäumen nicht.
jemandem den Wind aus den Segeln nehmen|couper l'herbe sous le pied à quelqu'un|Mit seiner Entschuldigung hat er ihr den Wind aus den Segeln genommen.
Öl ins Feuer gießen|jeter de l'huile sur le feu|Mit diesem Kommentar hast du nur Öl ins Feuer gegossen.
auf keinen grünen Zweig kommen|ne pas réussir à s'en sortir|Mit diesem Geschäftsmodell kommen wir auf keinen grünen Zweig.
sich etwas durch die Lappen gehen lassen|laisser filer une occasion|So eine Chance darfst du dir nicht durch die Lappen gehen lassen.
etwas unter Dach und Fach bringen|mener quelque chose à bon port|Endlich haben wir den Vertrag unter Dach und Fach gebracht.
jemandem einen Strich durch die Rechnung machen|contrecarrer les plans de quelqu'un|Das Wetter hat uns einen Strich durch die Rechnung gemacht.
die Daumen drehen|se tourner les pouces|Statt zu arbeiten, dreht er den ganzen Tag die Daumen.
jemanden auf die Palme bringen|mettre quelqu'un hors de lui|Mit seiner Unpünktlichkeit bringt er mich auf die Palme.
Das schlägt dem Fass den Boden aus!|C'est le comble !|Er hat schon wieder gelogen. Das schlägt dem Fass den Boden aus!
sich die Zähne an etwas ausbeißen|se casser les dents sur quelque chose|An diesem Bug beiße ich mir seit Tagen die Zähne aus.
mit einem blauen Auge davonkommen|s'en tirer à bon compte|Der Unfall war schlimm, aber er ist mit einem blauen Auge davongekommen.
etwas für bare Münze nehmen|prendre quelque chose pour argent comptant|Nimm nicht alles für bare Münze, was im Internet steht.
jemandem ein Dorn im Auge sein|être une épine dans le pied de quelqu'un|Die neue Regel ist dem Betriebsrat ein Dorn im Auge.
in den sauren Apfel beißen|avaler la pilule|Die Reparatur ist teuer, aber wir müssen in den sauren Apfel beißen.
den Bogen überspannen|dépasser les bornes|Mit dieser Forderung hat er den Bogen überspannt.
21
Insofern hast du recht, als|Tu as raison dans la mesure où|Insofern hast du recht, als die Kosten tatsächlich gestiegen sind.
Es mag sein, dass … dennoch|Il se peut que … néanmoins|Es mag sein, dass es teuer ist, dennoch lohnt es sich.
schlichtweg|tout simplement|Das ist schlichtweg falsch.
keineswegs zu unterschätzen|à ne surtout pas sous-estimer|Der Aufwand ist keineswegs zu unterschätzen.
in erheblichem Maße|dans une large mesure|Die Digitalisierung hat die Arbeit in erheblichem Maße verändert.
weitgehend|en grande partie|Das Projekt ist weitgehend abgeschlossen.
bedingt|dans une certaine mesure|Das stimmt nur bedingt.
im Wesentlichen|pour l'essentiel|Im Wesentlichen sind wir uns einig.
ohnehin|de toute façon|Wir müssen das ohnehin bis Freitag erledigen.
geschweige denn|et encore moins|Er kann kaum Englisch, geschweige denn Deutsch.
mitnichten|nullement|Das war mitnichten meine Absicht.
gewiss|certes, assurément|Gewiss, es gibt Risiken, aber auch Chancen.
22
Vor diesem Hintergrund|Dans ce contexte|Vor diesem Hintergrund ist die Entscheidung verständlich.
Es sei darauf hingewiesen, dass|Il convient de souligner que|Es sei darauf hingewiesen, dass die Daten vorläufig sind.
Dem ist entgegenzuhalten, dass|On peut objecter à cela que|Dem ist entgegenzuhalten, dass die Kosten langfristig sinken.
Zieht man in Betracht, dass|Si l'on considère que|Zieht man in Betracht, dass die Bevölkerung altert, wird das Problem deutlich.
Es liegt auf der Hand, dass|Il est évident que|Es liegt auf der Hand, dass wir mehr Personal brauchen.
Hierbei handelt es sich um|Il s'agit ici de|Hierbei handelt es sich um eine Ausnahme.
Letzten Endes|En fin de compte|Letzten Endes entscheidet der Kunde.
Ausgehend von|En partant de|Ausgehend von diesen Zahlen schlage ich Folgendes vor.
Im Zuge der|Dans le cadre de / Avec|Im Zuge der Digitalisierung entstehen neue Berufe.
Es ist davon auszugehen, dass|Il faut partir du principe que|Es ist davon auszugehen, dass die Preise weiter steigen.
Erschwerend kommt hinzu, dass|Ce qui complique encore les choses, c'est que|Erschwerend kommt hinzu, dass das Budget gekürzt wurde.
Nicht von ungefähr|Ce n'est pas un hasard si|Nicht von ungefähr ist Berlin so beliebt bei Start-ups.
Summa summarum|Au total / En somme|Summa summarum war das Projekt ein Erfolg.
Einerseits mag das zutreffen, andererseits|D'un côté, c'est peut-être vrai, de l'autre|Einerseits mag das zutreffen, andererseits fehlen Belege.
Dies wirft die Frage auf, ob|Cela soulève la question de savoir si|Dies wirft die Frage auf, ob das System gerecht ist.
12
Wir sollten das Pferd nicht von hinten aufzäumen.|Il ne faut pas mettre la charrue avant les bœufs.|Erst die Analyse, dann die Lösung. Wir sollten das Pferd nicht von hinten aufzäumen.
Das steht auf der Agenda.|C'est à l'ordre du jour.|Das Budget steht auf der Agenda für Montag.
Wir müssen die Weichen stellen.|Nous devons poser les jalons.|Jetzt müssen wir die Weichen für das nächste Jahr stellen.
Das ist mit heißer Nadel gestrickt.|C'est fait à la va-vite.|Der Plan ist mit heißer Nadel gestrickt.
Ich halte Rücksprache mit|Je me concerte avec|Bevor ich zusage, halte ich Rücksprache mit der Geschäftsführung.
Das sollten wir auf den Prüfstand stellen.|Nous devrions remettre cela en question.|Unseren Prozess sollten wir auf den Prüfstand stellen.
Wir ziehen eine Zwischenbilanz.|Faisons un bilan intermédiaire.|Nach drei Monaten ziehen wir eine Zwischenbilanz.
Das ist Chefsache.|C'est l'affaire de la direction.|Diese Entscheidung ist Chefsache.
14
Ich erlaube mir, Sie darauf hinzuweisen, dass|Je me permets de vous signaler que|Ich erlaube mir, Sie darauf hinzuweisen, dass die Frist abgelaufen ist.
Für Ihr Verständnis danke ich Ihnen im Voraus.|Je vous remercie par avance de votre compréhension.|Die Lieferung verzögert sich. Für Ihr Verständnis danke ich Ihnen im Voraus.
Ich sehe mich leider gezwungen|Je me vois malheureusement contraint|Ich sehe mich leider gezwungen, den Vertrag zu kündigen.
Wir kommen gern auf Ihr Angebot zurück.|Nous reviendrons volontiers vers vous concernant votre offre.|Vielen Dank, wir kommen gern auf Ihr Angebot zurück.
Unter Berücksichtigung|En tenant compte de|Unter Berücksichtigung aller Umstände lehnen wir den Antrag ab.
17
Das geht mir an die Nieren.|Ça me touche profondément.|Die Bilder aus dem Krankenhaus gehen mir an die Nieren.
Ich bin mit den Nerven am Ende.|Je suis à bout de nerfs.|Nach dieser Woche bin ich mit den Nerven am Ende.
Mir ist der Kragen geplatzt.|J'ai pété les plombs.|Als er wieder zu spät kam, ist mir der Kragen geplatzt.
Das lässt mich nicht kalt.|Ça ne me laisse pas indifférent.|Seine Geschichte lässt mich nicht kalt.
Ich fühle mich wie neugeboren.|Je me sens comme neuf.|Nach dem Urlaub fühle ich mich wie neugeboren.
27
Das ist ein gesamtgesellschaftliches Problem.|C'est un problème qui concerne toute la société.|Einsamkeit ist ein gesamtgesellschaftliches Problem.
Die Debatte hat sich zugespitzt.|Le débat s'est envenimé.|Seit der Wahl hat sich die Debatte zugespitzt.
Man darf das Kind nicht mit dem Bade ausschütten.|Il ne faut pas jeter le bébé avec l'eau du bain.|Die Reform hat Fehler, aber man darf das Kind nicht mit dem Bade ausschütten.
Das ist ein Tropfen auf den heißen Stein.|C'est une goutte d'eau dans l'océan.|Zehn Euro mehr? Das ist ein Tropfen auf den heißen Stein.
die Weichen für die Zukunft stellen|préparer l'avenir|Mit der Bildungsreform will man die Weichen für die Zukunft stellen.
Das ist ein zweischneidiges Thema.|C'est un sujet à double tranchant.|KI in der Schule ist ein zweischneidiges Thema.
Hier prallen Welten aufeinander.|Deux mondes s'affrontent ici.|Alt gegen Jung — hier prallen Welten aufeinander.
26
Ich habe mich in das Thema eingearbeitet.|Je me suis familiarisé avec le sujet.|In zwei Wochen habe ich mich in das Thema eingearbeitet.
Das muss ich mir erst aneignen.|Je dois d'abord me l'approprier.|Die neue Software muss ich mir erst aneignen.
Ich bin da noch nicht ganz sattelfest.|Je ne suis pas encore tout à fait à l'aise là-dessus.|Beim Konjunktiv I bin ich da noch nicht ganz sattelfest.
Übung macht den Meister.|C'est en forgeant qu'on devient forgeron.|Du sprichst schon besser. Übung macht den Meister!
Das sitzt jetzt.|C'est acquis maintenant.|Die Adjektivendungen? Das sitzt jetzt.
28
Wir sind ein Herz und eine Seele.|Nous sommes inséparables.|Seit der Schule sind wir ein Herz und eine Seele.
Er hat mich im Stich gelassen.|Il m'a laissé tomber.|Als ich Hilfe brauchte, hat er mich im Stich gelassen.
Die Chemie stimmt.|Le courant passe.|Mit dem neuen Team stimmt die Chemie.
Wir haben das Kriegsbeil begraben.|Nous avons enterré la hache de guerre.|Nach Jahren haben wir das Kriegsbeil begraben.
Ich bin ganz Ohr.|Je suis tout ouïe.|Erzähl! Ich bin ganz Ohr.
Er trägt sie auf Händen.|Il est aux petits soins pour elle.|Seit der Hochzeit trägt er sie auf Händen.
24
Das kostet ein Vermögen.|Ça coûte une fortune.|Eine Wohnung in München kostet ein Vermögen.
Wir müssen den Gürtel enger schnallen.|Nous devons nous serrer la ceinture.|Nach der Preiserhöhung müssen wir den Gürtel enger schnallen.
Das geht ins Geld.|Ça finit par coûter cher.|Jeden Tag essen gehen, das geht ins Geld.
Er schwimmt im Geld.|Il roule sur l'or.|Seit dem Verkauf seiner Firma schwimmt er im Geld.
25
Hier ist nachts tote Hose.|Ici, c'est mort la nuit.|Schönes Dorf, aber hier ist nachts tote Hose.
Wir wohnen Tür an Tür.|Nous habitons porte à porte.|Frau Schulz und ich wohnen Tür an Tür.
Das Viertel wird gentrifiziert.|Le quartier s'embourgeoise.|Die Mieten steigen, das Viertel wird gentrifiziert.
21
seinerzeit|à l'époque|Seinerzeit war das eine Revolution.
schlechterdings|absolument, purement et simplement|Das ist schlechterdings unmöglich.
allenfalls|tout au plus|Das dauert allenfalls eine Woche.
22
Infolgedessen|Par conséquent|Die Kosten stiegen. Infolgedessen wurde das Projekt gestoppt.
Es gilt zu bedenken, dass|Il faut tenir compte du fait que|Es gilt zu bedenken, dass nicht alle Zugang zum Internet haben.
Daraus ergibt sich, dass|Il en résulte que|Daraus ergibt sich, dass wir mehr investieren müssen.
20
jemandem reinen Tisch machen|faire table rase / mettre les choses au clair|Wir sollten reinen Tisch machen und offen reden.
die Gunst der Stunde nutzen|saisir l'occasion|Die Preise sind niedrig. Wir sollten die Gunst der Stunde nutzen.
etwas auf die leichte Schulter nehmen|prendre quelque chose à la légère|Die Warnung darfst du nicht auf die leichte Schulter nehmen.
jemandem unter die Arme greifen|donner un coup de main à quelqu'un|Als ich arbeitslos war, haben mir Freunde unter die Arme gegriffen.
das Blatt hat sich gewendet|la situation s'est retournée|Am Anfang lief alles schlecht, aber das Blatt hat sich gewendet.
12
Das ist ein Selbstläufer.|Ça marche tout seul.|Wenn das Produkt einmal bekannt ist, ist das ein Selbstläufer.
Wir müssen nachjustieren.|Nous devons réajuster.|Die Zahlen stimmen nicht ganz. Wir müssen nachjustieren.
14
Ich bitte höflichst um Nachsicht.|Je vous prie de bien vouloir m'excuser.|Für die Verzögerung bitte ich höflichst um Nachsicht.
28
Wir sind durch dick und dünn gegangen.|Nous avons traversé le meilleur et le pire ensemble.|Leo und ich sind durch dick und dünn gegangen.
`
};
/* merge into DATA.chunks: skip duplicates, stop at 200 per level */
(function () {
  const norm = s => s.toLowerCase().normalize("NFC").replace(/[^\p{L}\p{N}' ]+/gu, " ").replace(/\s+/g, " ").trim();
  const seen = new Set(DATA.chunks.map(c => norm(c.chunk)));
  let n = DATA.chunks.reduce((m, c) => Math.max(m, c.n), 0);
  for (const lvl of ["A1", "A2", "B1", "B2", "C1"]) {
    let have = DATA.chunks.filter(c => c.lvl === lvl).length, cat = 0;
    for (const raw of (DATA.chunkRaw2[lvl] || "").split("\n")) {
      if (have >= 200) break;
      const line = raw.trim();
      if (!line) continue;
      if (/^\d+$/.test(line)) { cat = +line; continue; }
      const [chunk, fr, ex] = line.split("|").map(x => (x || "").trim());
      if (!chunk || seen.has(norm(chunk))) continue;
      seen.add(norm(chunk));
      DATA.chunks.push({ n: ++n, c: cat, chunk, fr, ex, lvl });
      have++;
    }
  }
  delete DATA.chunkRaw2;
})();
