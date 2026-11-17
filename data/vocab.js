window.DATA = window.DATA || {};
/* Bildwörterbuch. Each word: [picture, word (with article for nouns), IPA, level, example sentence, plural ("" = none)].
   No French on purpose: picture + sound + sentence = meaning. The article colour (der / die / das) is shown on screen. */
DATA.vocab = [];
DATA.addWords = (id, name, e, words) => {
  let t = DATA.vocab.find(x => x.id === id);
  if (!t) { t = { id, name, e, words: [] }; DATA.vocab.push(t); }
  t.words.push(...words);
};
(function () {
  const add = DATA.addWords;
  /* ================= A1 ================= */
  add("family", "Familie & Menschen", "👪", [
    ["👨","der Mann","/man/","A1","Der Mann trinkt Kaffee.","die Männer"],
    ["👩","die Frau","/fʁaʊ̯/","A1","Die Frau liest ein Buch.","die Frauen"],
    ["👶","das Baby","/ˈbeːbi/","A1","Das Baby schläft.","die Babys"],
    ["👦","der Junge","/ˈjʊŋə/","A1","Der Junge spielt Fußball.","die Jungen"],
    ["👧","das Mädchen","/ˈmɛːtçən/","A1","Das Mädchen hat lange Haare.","die Mädchen"],
    ["👪","die Familie","/faˈmiːli̯ə/","A1","Meine Familie wohnt in Lyon.","die Familien"],
    ["👴","der Opa","/ˈoːpa/","A1","Mein Opa ist achtzig.","die Opas"],
    ["👵","die Oma","/ˈoːma/","A1","Meine Oma kocht sehr gut.","die Omas"],
    ["👫","der Freund","/fʁɔʏ̯nt/","A1","Am Freitag treffe ich meine Freunde.","die Freunde"]
  ]);
  add("food", "Essen & Trinken", "🍎", [
    ["🍎","der Apfel","/ˈapfl̩/","A1","Ich esse jeden Tag einen Apfel.","die Äpfel"],
    ["🍞","das Brot","/bʁoːt/","A1","Das Brot ist frisch.","die Brote"],
    ["🧀","der Käse","/ˈkɛːzə/","A1","Ich esse gern Käse.",""],
    ["🥚","das Ei","/aɪ̯/","A1","Zwei Eier, bitte.","die Eier"],
    ["☕","der Kaffee","/ˈkafe/","A1","Ohne Kaffee kann ich nicht arbeiten.",""],
    ["🥛","die Milch","/mɪlç/","A1","Wir haben keine Milch mehr.",""],
    ["💧","das Wasser","/ˈvasɐ/","A1","Ein Glas Wasser, bitte.",""],
    ["🍌","die Banane","/baˈnaːnə/","A1","Affen lieben Bananen.","die Bananen"],
    ["🍅","die Tomate","/toˈmaːtə/","A1","Pizza mit Tomaten und Käse.","die Tomaten"],
    ["🥔","die Kartoffel","/kaʁˈtɔfl̩/","A1","In Deutschland isst man viele Kartoffeln.","die Kartoffeln"],
    ["🍰","der Kuchen","/ˈkuːxn̩/","A1","Kaffee und Kuchen am Sonntag!","die Kuchen"],
    ["🍺","das Bier","/biːɐ̯/","A1","Ein Bier, bitte.","die Biere"],
    ["🍴","die Gabel","/ˈɡaːbl̩/","A1","Ich brauche eine Gabel.","die Gabeln"],
    ["🥄","der Löffel","/ˈlœfl̩/","A1","Die Suppe isst man mit dem Löffel.","die Löffel"]
  ]);
  add("home", "Zuhause", "🏠", [
    ["🏠","das Haus","/haʊ̯s/","A1","Das Haus ist groß.","die Häuser"],
    ["🛏️","das Bett","/bɛt/","A1","Ich gehe um elf ins Bett.","die Betten"],
    ["🪑","der Stuhl","/ʃtuːl/","A1","Nimm dir einen Stuhl.","die Stühle"],
    ["🚪","die Tür","/tyːɐ̯/","A1","Mach bitte die Tür zu.","die Türen"],
    ["🪟","das Fenster","/ˈfɛnstɐ/","A1","Mach das Fenster auf, es ist warm.","die Fenster"],
    ["🔑","der Schlüssel","/ˈʃlʏsl̩/","A1","Ich finde meinen Schlüssel nicht.","die Schlüssel"],
    ["🛋️","das Sofa","/ˈzoːfa/","A1","Die Katze schläft auf dem Sofa.","die Sofas"],
    ["🍳","die Küche","/ˈkʏçə/","A1","Die Küche ist klein, aber schön.","die Küchen"],
    ["🚿","die Dusche","/ˈduːʃə/","A1","Ich nehme jeden Morgen eine Dusche.","die Duschen"],
    ["🛁","das Bad","/baːt/","A1","Das Bad ist links.","die Bäder"]
  ]);
  add("body", "Körper & Gesundheit", "🧍", [
    ["👁️","das Auge","/ˈaʊ̯ɡə/","A1","Sie hat grüne Augen.","die Augen"],
    ["👂","das Ohr","/oːɐ̯/","A1","Ich höre mit den Ohren.","die Ohren"],
    ["👃","die Nase","/ˈnaːzə/","A1","Meine Nase läuft.","die Nasen"],
    ["👄","der Mund","/mʊnt/","A1","Mach den Mund auf!","die Münder"],
    ["✋","die Hand","/hant/","A1","Gib mir die Hand.","die Hände"],
    ["🦶","der Fuß","/fuːs/","A1","Mir tun die Füße weh.","die Füße"],
    ["🦷","der Zahn","/tsaːn/","A1","Putz dir die Zähne!","die Zähne"],
    ["👤","der Kopf","/kɔpf/","A1","Mir tut der Kopf weh.","die Köpfe"]
  ]);
  add("clothes", "Kleidung", "👕", [
    ["👕","das T-Shirt","/ˈtiːʃœːɐ̯t/","A1","Er trägt ein weißes T-Shirt.","die T-Shirts"],
    ["👖","die Hose","/ˈhoːzə/","A1","Die Hose ist zu eng.","die Hosen"],
    ["🧥","die Jacke","/ˈjakə/","A1","Nimm eine Jacke mit, es ist kalt.","die Jacken"],
    ["👗","das Kleid","/klaɪ̯t/","A1","Das rote Kleid ist schön.","die Kleider"],
    ["👟","der Schuh","/ʃuː/","A1","Zieh bitte die Schuhe aus.","die Schuhe"],
    ["🧦","die Socke","/ˈzɔkə/","A1","Ich verliere immer eine Socke.","die Socken"],
    ["🎩","der Hut","/huːt/","A1","Der Hut steht dir gut.","die Hüte"],
    ["👓","die Brille","/ˈbʁɪlə/","A1","Ohne Brille sehe ich nichts.","die Brillen"]
  ]);
  add("city", "Stadt & Verkehr", "🏙️", [
    ["🏙️","die Stadt","/ʃtat/","A1","Berlin ist eine große Stadt.","die Städte"],
    ["🏦","die Bank","/baŋk/","A1","Die Bank öffnet um neun.","die Banken"],
    ["🏥","das Krankenhaus","/ˈkʁaŋkn̩ˌhaʊ̯s/","A1","Sie arbeitet im Krankenhaus.","die Krankenhäuser"],
    ["🏫","die Schule","/ˈʃuːlə/","A1","Die Schule beginnt um acht.","die Schulen"],
    ["🛒","der Supermarkt","/ˈzuːpɐˌmaʁkt/","A1","Der Supermarkt ist am Sonntag zu.","die Supermärkte"],
    ["🥐","die Bäckerei","/bɛkəˈʁaɪ̯/","A1","Ich kaufe Brötchen in der Bäckerei.","die Bäckereien"],
    ["🚉","der Bahnhof","/ˈbaːnˌhoːf/","A1","Wo ist der Bahnhof?","die Bahnhöfe"],
    ["🚌","der Bus","/bʊs/","A1","Der Bus kommt in fünf Minuten.","die Busse"],
    ["🚆","der Zug","/tsuːk/","A1","Der Zug hat Verspätung.","die Züge"],
    ["🚗","das Auto","/ˈaʊ̯to/","A1","Ich fahre mit dem Auto.","die Autos"],
    ["🚲","das Fahrrad","/ˈfaːɐ̯ˌʁaːt/","A1","In Berlin fahre ich Fahrrad.","die Fahrräder"],
    ["🎫","die Fahrkarte","/ˈfaːɐ̯ˌkaʁtə/","A1","Eine Fahrkarte nach Hamburg, bitte.","die Fahrkarten"]
  ]);
  add("colours", "Farben, Zahlen & Zeit", "🎨", [
    ["🔴","rot","/ʁoːt/","A1","Die Ampel ist rot.",""],
    ["🔵","blau","/blaʊ̯/","A1","Der Himmel ist blau.",""],
    ["🟢","grün","/ɡʁyːn/","A1","Grün heißt: Du darfst gehen.",""],
    ["🟡","gelb","/ɡɛlp/","A1","Bananen sind gelb.",""],
    ["⚫","schwarz","/ʃvaʁts/","A1","Ich trinke den Kaffee schwarz.",""],
    ["⚪","weiß","/vaɪ̯s/","A1","Schnee ist weiß.",""],
    ["1️⃣","eins","/aɪ̯ns/","A1","Eins, zwei, drei — los!",""],
    ["2️⃣","zwei","/tsvaɪ̯/","A1","Ich habe zwei Katzen.",""],
    ["3️⃣","drei","/dʁaɪ̯/","A1","Drei Fahrkarten, bitte.",""],
    ["🔟","zehn","/tseːn/","A1","Es ist zehn Uhr.",""],
    ["⏰","die Uhr","/uːɐ̯/","A1","Wie viel Uhr ist es?","die Uhren"],
    ["📅","der Tag","/taːk/","A1","Guten Tag!","die Tage"]
  ]);
  add("animals", "Tiere", "🐾", [
    ["🐶","der Hund","/hʊnt/","A1","Der Hund bellt.","die Hunde"],
    ["🐱","die Katze","/ˈkatsə/","A1","Meine Katze schläft den ganzen Tag.","die Katzen"],
    ["🐦","der Vogel","/ˈfoːɡl̩/","A1","Die Vögel singen am Morgen.","die Vögel"],
    ["🐟","der Fisch","/fɪʃ/","A1","Fische leben im Wasser.","die Fische"],
    ["🐴","das Pferd","/pfeːɐ̯t/","A1","Sie reitet jedes Wochenende ein Pferd.","die Pferde"],
    ["🐄","die Kuh","/kuː/","A1","Die Kuh gibt Milch.","die Kühe"],
    ["🐭","die Maus","/maʊ̯s/","A1","Die Katze sieht eine Maus.","die Mäuse"]
  ]);
  add("nature", "Natur & Umwelt", "🌳", [
    ["☀️","die Sonne","/ˈzɔnə/","A1","Die Sonne scheint.",""],
    ["🌧️","der Regen","/ˈʁeːɡn̩/","A1","Nimm einen Schirm, es kommt Regen.",""],
    ["❄️","der Schnee","/ʃneː/","A1","Im Winter liegt Schnee.",""],
    ["🌳","der Baum","/baʊ̯m/","A1","Wir sitzen unter einem Baum.","die Bäume"],
    ["🌬️","der Wind","/vɪnt/","A1","Der Wind ist heute stark.","die Winde"],
    ["🏔️","der Berg","/bɛʁk/","A1","Die Zugspitze ist der höchste Berg Deutschlands.","die Berge"]
  ]);
  add("actions", "Verben", "🏃", [
    ["🏃","laufen","/ˈlaʊ̯fn̩/","A1","Ich laufe jeden Morgen fünf Kilometer.",""],
    ["😴","schlafen","/ˈʃlaːfn̩/","A1","Ich schlafe acht Stunden.",""],
    ["🍽️","essen","/ˈɛsn̩/","A1","Wir essen um sieben.",""],
    ["🥤","trinken","/ˈtʁɪŋkn̩/","A1","Trink mehr Wasser!",""],
    ["✍️","schreiben","/ˈʃʁaɪ̯bn̩/","A1","Schreib deinen Namen hier.",""],
    ["📖","lesen","/ˈleːzn̩/","A1","Ich lese gern Krimis.",""],
    ["👨‍🍳","kochen","/ˈkɔxn̩/","A1","Er kocht für die ganze Familie.",""],
    ["🏊","schwimmen","/ˈʃvɪmən/","A1","Kannst du schwimmen?",""]
  ]);
  add("feelings", "Gefühle & Charakter", "😊", [
    ["😊","glücklich","/ˈɡlʏklɪç/","A1","Ich bin so glücklich!",""],
    ["😢","traurig","/ˈtʁaʊ̯ʁɪç/","A1","Warum bist du traurig?",""],
    ["🥱","müde","/ˈmyːdə/","A1","Ich bin müde. Ich gehe ins Bett.",""],
    ["😠","wütend","/ˈvyːtn̩t/","A1","Er ist wütend, weil der Zug zu spät ist.",""],
    ["🤒","krank","/kʁaŋk/","A1","Ich bin krank und bleibe zu Hause.",""],
    ["😋","hungrig","/ˈhʊŋʁɪç/","A1","Ich bin hungrig! Was gibt es heute?",""]
  ]);
  /* ================= A2 ================= */
  add("shopping", "Einkaufen & Geld", "🛍️", [
    ["💶","das Geld","/ɡɛlt/","A2","Ich habe kein Geld dabei.",""],
    ["💳","die Karte","/ˈkaʁtə/","A2","Kann ich mit Karte zahlen?","die Karten"],
    ["🧾","der Kassenbon","/ˈkasn̩ˌbɔŋ/","A2","Behalte den Kassenbon, falls du es umtauschen willst.","die Kassenbons"],
    ["🏷️","der Preis","/pʁaɪ̯s/","A2","Der Preis steht auf dem Etikett.","die Preise"],
    ["🪙","die Münze","/ˈmʏntsə/","A2","Ich brauche eine Münze für den Einkaufswagen.","die Münzen"],
    ["👛","das Portemonnaie","/pɔʁtmɔˈneː/","A2","Sie hat ihr Portemonnaie im Bus verloren.","die Portemonnaies"],
    ["🛍️","die Tüte","/ˈtyːtə/","A2","Brauchen Sie eine Tüte?","die Tüten"],
    ["🏧","der Geldautomat","/ˈɡɛltʔaʊ̯toˌmaːt/","A2","Gibt es hier einen Geldautomaten?","die Geldautomaten"],
    ["🛒","der Einkaufswagen","/ˈaɪ̯nkaʊ̯fsˌvaːɡn̩/","A2","Der Einkaufswagen ist schon voll.","die Einkaufswagen"],
    ["🏪","der Laden","/ˈlaːdn̩/","A2","Der Laden an der Ecke ist billig.","die Läden"]
  ]);
  add("hobbies", "Freizeit", "🎸", [
    ["⚽","der Fußball","/ˈfuːsbal/","A2","Wir spielen jeden Sonntag Fußball.","die Fußbälle"],
    ["🎸","die Gitarre","/ɡiˈtaʁə/","A2","Er lernt Gitarre spielen.","die Gitarren"],
    ["🎨","die Malerei","/maːləˈʁaɪ̯/","A2","Malerei hilft mir beim Entspannen.",""],
    ["🎮","das Videospiel","/ˈviːdeoˌʃpiːl/","A2","Am Wochenende spiele ich Videospiele.","die Videospiele"],
    ["🎬","das Kino","/ˈkiːno/","A2","Gehen wir heute Abend ins Kino?","die Kinos"],
    ["🎤","das Konzert","/kɔnˈtsɛʁt/","A2","Das Konzert war fantastisch.","die Konzerte"],
    ["🏕️","das Zelt","/tsɛlt/","A2","Wir haben das Zelt am See aufgebaut.","die Zelte"],
    ["🧘","das Yoga","/ˈjoːɡa/","A2","Ich mache vor der Arbeit Yoga.",""],
    ["🎲","das Brettspiel","/ˈbʁɛtˌʃpiːl/","A2","Wir haben den ganzen Abend ein Brettspiel gespielt.","die Brettspiele"],
    ["📷","die Kamera","/ˈkaməʁa/","A2","Ich habe meine Kamera mit in den Urlaub genommen.","die Kameras"],
    ["🥾","das Wandern","/ˈvandɐn/","A2","Wandern ist in Deutschland sehr beliebt.",""],
    ["🏋️","das Fitnessstudio","/ˈfɪtnɛsˌʃtuːdi̯o/","A2","Ich gehe dreimal pro Woche ins Fitnessstudio.","die Fitnessstudios"]
  ]);
  add("food", "Essen & Trinken", "🍎", [
    ["🥗","der Salat","/zaˈlaːt/","A2","Zum Mittagessen nehme ich einen Salat.","die Salate"],
    ["🍝","die Nudeln","/ˈnuːdl̩n/","A2","Nudeln sind schnell gekocht.",""],
    ["🥩","das Fleisch","/flaɪ̯ʃ/","A2","Sie isst kein Fleisch.",""],
    ["🧈","die Butter","/ˈbʊtɐ/","A2","Brot mit Butter und Marmelade.",""],
    ["🍓","die Erdbeere","/ˈeːɐ̯tˌbeːʁə/","A2","Im Juni sind die Erdbeeren am besten.","die Erdbeeren"],
    ["🍋","die Zitrone","/tsiˈtʁoːnə/","A2","Tee mit Zitrone, bitte.","die Zitronen"],
    ["🍫","die Schokolade","/ʃokoˈlaːdə/","A2","Dunkle Schokolade ist meine Schwäche.","die Schokoladen"],
    ["🥨","die Brezel","/ˈbʁeːtsl̩/","A2","In Bayern isst man Brezeln zum Frühstück.","die Brezeln"]
  ]);
  add("home", "Zuhause", "🏠", [
    ["🛗","der Aufzug","/ˈaʊ̯fˌtsuːk/","A2","Der Aufzug ist kaputt, nimm die Treppe.","die Aufzüge"],
    ["🪴","die Pflanze","/ˈpflantsə/","A2","Gieß die Pflanzen zweimal pro Woche.","die Pflanzen"],
    ["🖼️","das Bild","/bɪlt/","A2","An der Wand hängt ein Bild vom Meer.","die Bilder"],
    ["🧺","die Wäsche","/ˈvɛʃə/","A2","Am Sonntag mache ich die Wäsche.",""],
    ["🪥","die Zahnbürste","/ˈtsaːnˌbʏʁstə/","A2","Vergiss deine Zahnbürste nicht.","die Zahnbürsten"],
    ["🧹","der Besen","/ˈbeːzn̩/","A2","Der Besen steht in der Ecke.","die Besen"],
    ["🗑️","der Mülleimer","/ˈmʏlʔaɪ̯mɐ/","A2","Der Mülleimer ist voll.","die Mülleimer"],
    ["🪞","der Spiegel","/ˈʃpiːɡl̩/","A2","Sie schaut in den Spiegel.","die Spiegel"]
  ]);
  add("body", "Körper & Gesundheit", "🧍", [
    ["💊","die Tablette","/taˈblɛtə/","A2","Nehmen Sie eine Tablette nach dem Essen.","die Tabletten"],
    ["🩹","das Pflaster","/ˈpflastɐ/","A2","Ich brauche ein Pflaster.","die Pflaster"],
    ["🌡️","das Fieber","/ˈfiːbɐ/","A2","Du hast hohes Fieber.",""],
    ["🤧","der Schnupfen","/ˈʃnʊpfn̩/","A2","Ich habe Schnupfen und Husten.",""],
    ["🩺","der Arzt","/aːɐ̯tst/","A2","Ich muss zum Arzt.","die Ärzte"],
    ["🏥","die Praxis","/ˈpʁaksɪs/","A2","Die Praxis ist mittwochs geschlossen.","die Praxen"],
    ["🚑","der Krankenwagen","/ˈkʁaŋkn̩ˌvaːɡn̩/","A2","Ruf einen Krankenwagen!","die Krankenwagen"],
    ["🤕","die Kopfschmerzen","/ˈkɔpfˌʃmɛʁtsn̩/","A2","Ich habe schreckliche Kopfschmerzen.",""]
  ]);
  add("travel", "Reisen", "✈️", [
    ["🏨","das Hotel","/hoˈtɛl/","A2","Unser Hotel liegt am Strand.","die Hotels"],
    ["🏖️","der Strand","/ʃtʁant/","A2","Wir waren den ganzen Tag am Strand.","die Strände"],
    ["✈️","das Flugzeug","/ˈfluːkˌtsɔʏ̯k/","A2","Das Flugzeug landet um 18 Uhr.","die Flugzeuge"],
    ["🧳","der Koffer","/ˈkɔfɐ/","A2","Mein Koffer ist zu schwer.","die Koffer"],
    ["🛂","der Reisepass","/ˈʁaɪ̯zəˌpas/","A2","Vergiss deinen Reisepass nicht!","die Reisepässe"],
    ["🗺️","der Stadtplan","/ˈʃtatˌplaːn/","A2","Kannst du es mir auf dem Stadtplan zeigen?","die Stadtpläne"],
    ["🚢","das Schiff","/ʃɪf/","A2","Wir sind mit dem Schiff auf die Insel gefahren.","die Schiffe"],
    ["🛣️","die Autobahn","/ˈaʊ̯toˌbaːn/","A2","Auf der Autobahn war viel Stau.","die Autobahnen"],
    ["🚇","die U-Bahn","/ˈuːˌbaːn/","A2","Die U-Bahn ist am schnellsten.","die U-Bahnen"],
    ["⛽","die Tankstelle","/ˈtaŋkˌʃtɛlə/","A2","Wir müssen an der Tankstelle halten.","die Tankstellen"]
  ]);
  add("work", "Arbeit & Beruf", "💼", [
    ["👨‍🍳","der Koch","/kɔx/","A2","Der Koch macht super Nudeln.","die Köche"],
    ["👩‍🏫","die Lehrerin","/ˈleːʁəʁɪn/","A2","Unsere Lehrerin spricht sehr deutlich.","die Lehrerinnen"],
    ["👨‍💻","der Entwickler","/ɛntˈvɪklɐ/","A2","Er arbeitet als Entwickler.","die Entwickler"],
    ["👷","der Handwerker","/ˈhantˌvɛʁkɐ/","A2","Die Handwerker kommen um sieben.","die Handwerker"],
    ["🧑‍🌾","der Bauer","/ˈbaʊ̯ɐ/","A2","Der Bauer hat hundert Kühe.","die Bauern"],
    ["💼","das Büro","/byˈʁoː/","A2","Ich bin bis sechs im Büro.","die Büros"],
    ["📅","der Termin","/tɛʁˈmiːn/","A2","Ich habe um zehn einen Termin.","die Termine"],
    ["🤝","das Vorstellungsgespräch","/ˈfoːɐ̯ʃtɛlʊŋsɡəˌʃpʁɛːç/","A2","Mein Vorstellungsgespräch ist am Montag.","die Vorstellungsgespräche"],
    ["💰","das Gehalt","/ɡəˈhalt/","A2","Das Gehalt ist gut.","die Gehälter"],
    ["🏢","die Firma","/ˈfɪʁma/","A2","Die Firma hat zweihundert Mitarbeiter.","die Firmen"]
  ]);
  add("tech", "Technik", "💻", [
    ["💻","der Laptop","/ˈlɛptɔp/","A2","Mein Laptop ist alt.","die Laptops"],
    ["📱","das Handy","/ˈhɛndi/","A2","Mein Handy ist leer.","die Handys"],
    ["⌨️","die Tastatur","/tastaˈtuːɐ̯/","A2","Die deutsche Tastatur hat ä, ö und ü.","die Tastaturen"],
    ["🖨️","der Drucker","/ˈdʁʊkɐ/","A2","Der Drucker hat kein Papier mehr.","die Drucker"],
    ["🔒","das Passwort","/ˈpasvɔʁt/","A2","Gib niemandem dein Passwort.","die Passwörter"],
    ["🔋","der Akku","/ˈaku/","A2","Der Akku ist fast leer.","die Akkus"],
    ["📶","das WLAN","/ˈveːlaːn/","A2","Wie ist das WLAN-Passwort?",""],
    ["📧","die E-Mail","/ˈiːmeɪ̯l/","A2","Ich schicke dir eine E-Mail.","die E-Mails"]
  ]);
  add("nature", "Natur & Umwelt", "🌳", [
    ["🌙","der Mond","/moːnt/","A2","Heute ist Vollmond.","die Monde"],
    ["⭐","der Stern","/ʃtɛʁn/","A2","Auf dem Land sieht man die Sterne.","die Sterne"],
    ["🌸","die Blume","/ˈbluːmə/","A2","Er hat ihr Blumen mitgebracht.","die Blumen"],
    ["🍂","der Herbst","/hɛʁpst/","A2","Im Herbst fallen die Blätter.","die Herbste"],
    ["⛈️","das Gewitter","/ɡəˈvɪtɐ/","A2","Heute Abend gibt es ein Gewitter.","die Gewitter"],
    ["🌊","das Meer","/meːɐ̯/","A2","Im Sommer fahren wir ans Meer.","die Meere"],
    ["🌲","der Wald","/valt/","A2","Wir gehen im Wald spazieren.","die Wälder"],
    ["🌈","der Regenbogen","/ˈʁeːɡn̩ˌboːɡn̩/","A2","Schau mal, ein Regenbogen!","die Regenbögen"]
  ]);
  add("feelings", "Gefühle & Charakter", "😊", [
    ["😲","überrascht","/yːbɐˈʁaʃt/","A2","Ich war vom Ergebnis überrascht.",""],
    ["😬","nervös","/nɛʁˈvøːs/","A2","Ich bin nervös vor dem Gespräch.",""],
    ["😤","genervt","/ɡəˈnɛʁft/","A2","Ich bin genervt, weil der Bus nicht kommt.",""],
    ["😌","entspannt","/ɛntˈʃpant/","A2","Im Urlaub bin ich total entspannt.",""],
    ["🤩","begeistert","/bəˈɡaɪ̯stɐt/","A2","Wir sind von Berlin begeistert.",""],
    ["😞","enttäuscht","/ɛntˈtɔʏ̯ʃt/","A2","Ich bin vom Film enttäuscht.",""],
    ["😳","peinlich","/ˈpaɪ̯nlɪç/","A2","Das war mir echt peinlich.",""],
    ["🥺","einsam","/ˈaɪ̯nzaːm/","A2","Am Anfang habe ich mich einsam gefühlt.",""]
  ]);
  add("actions", "Verben", "🏃", [
    ["🧗","klettern","/ˈklɛtɐn/","A2","Wir sind auf den Berg geklettert.",""],
    ["🤸","springen","/ˈʃpʁɪŋən/","A2","Die Kinder springen ins Wasser.",""],
    ["☎️","telefonieren","/telefoˈniːʁən/","A2","Ich telefoniere jeden Sonntag mit meiner Mutter.",""],
    ["🫗","gießen","/ˈɡiːsn̩/","A2","Gieß bitte die Blumen.",""],
    ["🧽","putzen","/ˈpʊtsn̩/","A2","Samstags putze ich die Wohnung.",""],
    ["🎁","schenken","/ˈʃɛŋkn̩/","A2","Was schenkst du ihm zum Geburtstag?",""],
    ["🚶","spazieren gehen","/ʃpaˈtsiːʁən ˈɡeːən/","A2","Nach dem Essen gehen wir spazieren.",""],
    ["📦","packen","/ˈpakn̩/","A2","Ich muss noch meinen Koffer packen.",""],
    ["🎵","singen","/ˈzɪŋən/","A2","Sie singt im Chor.",""],
    ["💃","tanzen","/ˈtantsn̩/","A2","Tanzt du gern?",""]
  ]);
})();
