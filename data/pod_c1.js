window.DATA = window.DATA || {};
/* Fixed podcast scripts (C1). "A:" = Lena, "B:" = Jonas, then 6 VOCAB lines and 5 QUIZ lines. */
DATA.podScripts = DATA.podScripts || {};

DATA.podScripts.ep081 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena, und ich freue mich außerordentlich, dich im Niveau C1 begrüßen zu dürfen. Du hast einen weiten Weg hinter dir.
B: Und ich bin Jonas. Servus! Ab jetzt unterhalten wir uns so, wie wir es auch ohne Mikrofon täten. Mit allen Nuancen, Abschweifungen und gelegentlichen Spitzfindigkeiten. Erklärt wird nur noch, was wirklich ungewöhnlich ist.
A: Und wir steigen gleich mit einem Thema ein, das uns in den nächsten Jahrzehnten intensiv beschäftigen wird: die Ethik der Algorithmen. Genauer gesagt die Frage, ob und inwiefern Algorithmen fair sein können, und wie es dazu kommt, dass sie diskriminieren.
B: Ein Thema, das ich als Journalist seit Jahren verfolge. Und das auf den ersten Blick paradox wirkt. Man könnte ja meinen, ein Computer sei per Definition neutral. Er hat keine Vorurteile, keine schlechten Tage, keine Sympathien. Warum sollte er also ungerecht entscheiden?
A: Genau diese Annahme ist der Kern des Problems. Sprachlich üben wir heute übrigens, wie man komplexe Zusammenhänge präzise formuliert. Insbesondere mit Ausdrücken der Kausalität und der Einschränkung auf gehobenem Niveau: „infolgedessen“, „insofern … als“, „unter der Voraussetzung, dass“, „sofern“, „es sei denn“.
B: „Insofern … als“ ist eine schöne, etwas gehobene Konstruktion. Sie schränkt eine Aussage ein und begründet sie zugleich. „Algorithmen sind insofern problematisch, als sie bestehende Ungleichheiten verstärken können.“ Also: Sie sind problematisch, und zwar genau in dem Maße, in dem sie das tun.
A: Und „es sei denn“ ist eine elegante Art, eine Ausnahme zu formulieren. „Ein Algorithmus ist nicht fairer als seine Daten, es sei denn, man korrigiert die Verzerrungen gezielt.“ Das Verb steht hier, anders als bei den meisten Konjunktionen, an zweiter Stelle im Nebensatz.
B: Gut. Bevor wir in die Tiefe gehen: Wo begegnen uns solche Algorithmen überhaupt? Denn viele Menschen sind sich nicht bewusst, wie häufig über sie automatisiert entschieden wird.
A: In erstaunlich vielen Lebensbereichen. Bei der Kreditvergabe entscheidet ein Scoring-System, ob man einen Kredit bekommt und zu welchem Zinssatz. In Deutschland ist das etwa die Schufa, die wir aus Folge dreiunddreißig kennen. Bei Bewerbungen sortieren Programme Lebensläufe vor, bevor ein Mensch sie überhaupt sieht. Versicherungen berechnen Prämien. Und in manchen Ländern unterstützen Algorithmen sogar Richter bei der Frage, ob ein Angeklagter auf Kaution freikommt.
B: Und genau dort ist einer der bekanntesten Fälle passiert. In den USA wurde ein System namens COMPAS eingesetzt, um das Rückfallrisiko von Straftätern einzuschätzen. Eine Recherche des Journalistenverbunds ProPublica kam zweitausendsechzehn zu dem Ergebnis, dass das System schwarze Angeklagte deutlich häufiger fälschlicherweise als hochriskant einstufte als weiße.
A: Obwohl die Hautfarbe gar nicht als Variable im System vorkam.
B: Genau das ist das Tückische. Die Hautfarbe stand nirgends. Aber andere Variablen korrelierten mit ihr. Der Wohnort, das Einkommen, die Frage, ob Familienmitglieder schon einmal verhaftet worden waren. Und diese Variablen spiegelten wiederum eine Geschichte struktureller Benachteiligung wider. Man spricht von sogenannten Proxy-Variablen, also Stellvertretervariablen.
A: Das ist ein ganz zentraler Punkt, den man sich klarmachen muss. Ein Algorithmus, der aus historischen Daten lernt, lernt zwangsläufig auch die Ungerechtigkeiten, die in diesen Daten stecken. Er reproduziert die Vergangenheit, und zwar mit dem Anschein mathematischer Objektivität.
B: „Garbage in, garbage out“, wie die Informatiker sagen. Wobei es hier nicht um Müll im eigentlichen Sinne geht, sondern um Daten, die zwar korrekt sind, aber eine ungerechte Welt abbilden.
A: Ein Paradebeispiel ist der Fall eines großen amerikanischen Onlinehändlers. Das Unternehmen hatte ein KI-System entwickelt, das Bewerbungen für technische Stellen automatisch bewerten sollte. Trainiert wurde es mit den Bewerbungen der vergangenen zehn Jahre. Und da in dieser Zeit überwiegend Männer eingestellt worden waren, lernte das System, dass männliche Bewerber offenbar die besseren seien.
B: Und es fing an, Lebensläufe abzuwerten, in denen das Wort „Frauen“ vorkam. Etwa „Kapitänin der Frauenschachmannschaft“. Oder Abschlüsse von reinen Frauencolleges.
A: Das Unternehmen hat das System schließlich aufgegeben. Aber es zeigt eindrücklich, wie Diskriminierung unbemerkt in eine Technologie einsickern kann, die als neutral verkauft wird.
B: „Einsickern“ ist ein schönes Wort hier. Wie Wasser, das langsam und kaum sichtbar durch eine Wand dringt.
A: Und ein zweites, subtileres Problem sind die Trainingsdaten selbst, wenn bestimmte Gruppen darin unterrepräsentiert sind. Die Forscherin Joy Buolamwini vom MIT hat gezeigt, dass kommerzielle Gesichtserkennungssysteme bei hellhäutigen Männern fast fehlerfrei funktionierten, bei dunkelhäutigen Frauen hingegen eine Fehlerquote von teilweise über dreißig Prozent aufwiesen.
B: Weil die Systeme überwiegend mit Fotos hellhäutiger Männer trainiert worden waren. Und das hat sehr konkrete Folgen, wenn solche Systeme etwa bei der Polizei eingesetzt werden. In den USA sind mehrere Fälle dokumentiert, in denen Menschen aufgrund einer fehlerhaften Gesichtserkennung festgenommen wurden.
A: Jetzt wird es philosophisch. Denn selbst wenn man die Daten bereinigt, stellt sich eine knifflige Frage: Was genau heißt eigentlich „fair“?
B: Und das ist der Punkt, an dem viele Debatten ins Leere laufen. Weil man meint, Fairness sei eine eindeutige, messbare Größe. Ist sie aber nicht.
A: Genau. Es gibt verschiedene mathematische Definitionen von Fairness, und das Verblüffende ist: Man kann beweisen, dass sie sich teilweise gegenseitig ausschließen. Man kann nicht alle gleichzeitig erfüllen, es sei denn, die Ausgangsbedingungen der Gruppen sind identisch, was in der Realität so gut wie nie der Fall ist.
B: Erklär das mal an einem Beispiel.
A: Nehmen wir an, ein Algorithmus entscheidet über Kredite. Eine Fairnessdefinition lautet: Beide Gruppen sollen im gleichen Verhältnis Kredite bekommen. Eine andere lautet: Der Algorithmus soll in beiden Gruppen gleich treffsicher sein, also gleich viele Fehler machen. Eine dritte: Wer einen Kredit bekommt, soll in beiden Gruppen mit gleicher Wahrscheinlichkeit zurückzahlen. Wenn sich die Gruppen in ihrer tatsächlichen Rückzahlungsquote unterscheiden, etwa weil die eine Gruppe historisch ärmer ist, kann man diese Kriterien nicht alle gleichzeitig erfüllen.
B: Das heißt, man muss eine Wertentscheidung treffen. Und die ist nicht technischer, sondern politischer und moralischer Natur.
A: Genau. Und diese Entscheidung wird heute oft von Ingenieuren getroffen, manchmal ohne dass es ihnen überhaupt bewusst ist. Dabei müsste sie eigentlich gesellschaftlich ausgehandelt werden.
B: Und dann gibt es noch das Problem der Intransparenz. Viele moderne KI-Systeme, insbesondere neuronale Netze, sind sogenannte Blackboxes. Selbst ihre Entwickler können nicht im Einzelnen nachvollziehen, warum das System eine bestimmte Entscheidung getroffen hat.
A: Was rechtsstaatlich hochproblematisch ist. Wir haben in Folge neunundsiebzig über die deutsche Bürokratie gesprochen und darüber, dass jede Entscheidung einer Behörde begründet werden muss. Wie soll man gegen eine Entscheidung Widerspruch einlegen, deren Begründung niemand kennt?
B: Und genau hier setzt die europäische Gesetzgebung an. Die Datenschutz-Grundverordnung sieht vor, dass Menschen grundsätzlich nicht ausschließlich einer automatisierten Entscheidung unterworfen werden dürfen, die ihnen gegenüber rechtliche Wirkung entfaltet, sofern keine bestimmten Ausnahmen greifen.
A: Und der Europäische Gerichtshof hat dazu zweitausenddreiundzwanzig ein wegweisendes Urteil gefällt. Es ging ausgerechnet um die Schufa. Der Gerichtshof hat entschieden, dass bereits die Berechnung des Scores eine solche automatisierte Entscheidung sein kann, wenn die Bank sich maßgeblich darauf stützt.
B: Und der AI Act, den wir in Folge dreiundsechzig erwähnt haben, stuft Systeme in Bereichen wie Kreditvergabe, Personalauswahl oder Strafverfolgung als Hochrisiko-Systeme ein. Diese müssen strenge Anforderungen erfüllen, was Datenqualität, Dokumentation und menschliche Aufsicht betrifft.
A: Wobei ich da eine gewisse Skepsis nicht verhehlen kann. „Menschliche Aufsicht“ klingt beruhigend. Aber es gibt das Phänomen des sogenannten Automation Bias. Menschen neigen dazu, den Vorschlägen von Maschinen übermäßig zu vertrauen. Wenn der Computer sagt, der Bewerber sei ungeeignet, widerspricht der Sachbearbeiter selten.
B: „Etwas nicht verhehlen“ ist übrigens eine gehobene Wendung für „etwas offen zugeben“. Und du hast völlig recht. Der Mensch wird dann zum bloßen Abnicker, zum Feigenblatt.
A: Ein Feigenblatt, also etwas, das nur dazu dient, einen Missstand zu verdecken. Wie das Feigenblatt auf alten Gemälden.
B: Gut, aber ich möchte auch die Gegenposition nicht unterschlagen. Denn man darf nicht vergessen, wogegen man Algorithmen vergleicht. Nicht gegen einen idealen, vollkommen gerechten Menschen. Sondern gegen echte Menschen. Und die sind nachweislich voller Vorurteile.
A: Das ist ein wichtiger Einwand. Es gibt Studien, die zeigen, dass Richter nach der Mittagspause milder urteilen als kurz davor. Oder dass Bewerbungen mit fremd klingenden Namen bei gleicher Qualifikation deutlich seltener zu Vorstellungsgesprächen führen. In Deutschland ist das mehrfach durch sogenannte Korrespondenztests belegt worden.
B: Ein menschlicher Personaler diskriminiert also möglicherweise genauso, nur eben unsichtbar und inkonsistent. Ein Algorithmus hat zumindest den Vorteil, dass man ihn systematisch testen und gegebenenfalls korrigieren kann. Einen Menschen kann man schlecht auf Verzerrungen prüfen und dann neu programmieren.
A: Insofern ist die eigentliche Frage nicht „Mensch oder Maschine?“, sondern: Wie gestalten wir das Zusammenspiel so, dass die Stärken beider zur Geltung kommen und die Schwächen sich nicht potenzieren?
B: Gut formuliert. Jetzt zur Geschichte. Und diesmal geht es um Oksana, die ukrainische Studentin aus Folge zweiundfünfzig. Sie hat inzwischen ihr Praktikum bei der Autofirma abgeschlossen und arbeitet als Data Scientist bei einem Berliner Unternehmen, das Software für Personalabteilungen entwickelt.
A: Ah, ausgerechnet in diesem Bereich. Das passt ja.
B: Genau. Das Unternehmen bietet ein System an, das Bewerbungen vorsortiert. Und Oksana soll eine neue Version testen, bevor sie an Kunden ausgeliefert wird. Und dabei stößt sie auf etwas Merkwürdiges.
A: Was denn?
B: Bewerberinnen und Bewerber mit Lücken im Lebenslauf werden systematisch schlechter bewertet. Auf den ersten Blick wirkt das plausibel. Aber Oksana schaut genauer hin. Und sie stellt fest, dass diese Lücken überdurchschnittlich häufig bei Frauen auftreten, und zwar wegen Elternzeit. Und außerdem bei Menschen, die geflüchtet sind, weil ihre Karriere durch Krieg unterbrochen wurde.
A: Wie bei ihr selbst. Sie musste ja aus der Ukraine fliehen.
B: Genau. Und das hat sie persönlich getroffen. Ihr eigener Lebenslauf hat eine Lücke von einem Jahr. Das Jahr, in dem sie geflohen ist und in Polen gewartet hat, bis sie nach Deutschland kommen konnte. Das System hätte sie selbst aussortiert.
A: Was für eine bittere Ironie. Was hat sie gemacht?
B: Sie hat die Ergebnisse dokumentiert und ihrem Teamleiter präsentiert. Und der hat zunächst abgewiegelt. „Abwiegeln“ heißt: ein Problem herunterspielen, beschwichtigen. Er meinte, Lücken im Lebenslauf seien nun mal ein legitimes Kriterium, und die Kunden wollten das so.
A: Und Oksana hat das akzeptiert?
B: Nein. Sie hat nachgelegt, mit Zahlen. Sie hat gezeigt, dass Bewerber mit Lücken, die trotzdem eingestellt worden waren, in den Folgejahren genauso gute Leistungsbeurteilungen bekommen hatten wie alle anderen. Die Lücke war also kein Indikator für schlechtere Leistung. Sie war lediglich ein Indikator für Lebensumstände.
A: Das ist ein entscheidendes Argument. Das Kriterium misst gar nicht, was es zu messen vorgibt.
B: Genau. Und dann hat sie noch auf die rechtliche Seite hingewiesen. In Deutschland gibt es das Allgemeine Gleichbehandlungsgesetz, das Diskriminierung bei der Einstellung unter anderem wegen des Geschlechts verbietet. Und mittelbare Diskriminierung, also über ein scheinbar neutrales Kriterium, ist ebenfalls unzulässig. Das Unternehmen und vor allem dessen Kunden hätten sich angreifbar gemacht.
A: Spätestens da dürfte die Geschäftsführung hellhörig geworden sein.
B: Allerdings. „Hellhörig werden“ heißt: plötzlich aufmerksam werden, weil man eine Gefahr oder Chance wittert. Die Geschäftsführung hat das Release gestoppt. Das Kriterium wurde überarbeitet. Und Oksana wurde beauftragt, einen regelmäßigen Fairness-Audit einzuführen. Also eine systematische Prüfung jeder neuen Version auf Verzerrungen.
A: Und hat sich das herumgesprochen?
B: Ja, und zwar positiv. Das Unternehmen wirbt inzwischen damit, dass seine Software auf Fairness geprüft wird. Was natürlich auch ein bisschen Marketing ist. Aber Oksana sagt, das sei ihr egal. Hauptsache, die nächste Person mit einer Lücke im Lebenslauf bekomme eine faire Chance.
A: Jetzt bist du dran, Hörer, Hörerin. Wo begegnen dir in deinem Alltag Algorithmen, die über dich entscheiden? Formuliere eine differenzierte Einschätzung mit den Konstruktionen von heute: „Algorithmen sind insofern …, als …“ „Sofern …, …“ „… es sei denn, …“
B: Und vielleicht versuchst du dich an der Frage, welche Definition von Fairness du persönlich für die richtige hieltest, wenn es um eine Kreditvergabe ginge. Es gibt keine eindeutige Antwort. Gerade das macht sie interessant.
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: insofern … als. Schränkt eine Aussage ein und begründet sie zugleich.
A: Wort Nummer zwei: einsickern. Langsam und kaum sichtbar eindringen.
B: Wort Nummer drei: etwas nicht verhehlen. Etwas offen zugeben, nicht verbergen.
A: Wort Nummer vier: das Feigenblatt. Etwas, das nur dazu dient, einen Missstand zu verdecken.
B: Wort Nummer fünf: abwiegeln. Ein Problem herunterspielen, beschwichtigen.
A: Und Wort Nummer sechs: hellhörig werden. Plötzlich aufmerksam werden, weil man etwas Wichtiges bemerkt.
B: Noch einmal: insofern … als, einsickern, etwas nicht verhehlen, das Feigenblatt, abwiegeln, hellhörig werden.
A: Was nehmen wir mit? Algorithmen sind nicht neutral, weil sie aus historischen Daten lernen, die Ungerechtigkeiten enthalten. Über Proxy-Variablen kann Diskriminierung einsickern, auch ohne dass ein geschütztes Merkmal direkt vorkommt.
B: Fairness ist keine eindeutige mathematische Größe. Verschiedene Definitionen schließen sich teilweise aus, und die Wahl zwischen ihnen ist eine politische Wertentscheidung.
A: Die europäische Gesetzgebung versucht, mit der DSGVO und dem AI Act gegenzusteuern. Aber menschliche Aufsicht kann zum Feigenblatt werden.
B: Und die eigentliche Frage lautet nicht „Mensch oder Maschine?“, sondern wie man beide so kombiniert, dass sich ihre Schwächen nicht potenzieren.
A: Das ist das Ende von Folge einundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und frag dich beim nächsten Mal, wenn ein Computer über dich entscheidet: Wer hat eigentlich festgelegt, was fair ist? Servus!
A: Tschüss!
VOCAB: insofern … als | Schränkt eine Aussage ein und begründet sie zugleich. | 🧷
VOCAB: einsickern | Langsam und kaum sichtbar eindringen. | 💧
VOCAB: etwas nicht verhehlen | Etwas offen zugeben, nicht verbergen. | 🗣️
VOCAB: das Feigenblatt | Etwas, das nur dazu dient, einen Missstand zu verdecken. | 🍃
VOCAB: abwiegeln | Ein Problem herunterspielen, beschwichtigen. | 🤫
VOCAB: hellhörig werden | Plötzlich aufmerksam werden, weil man etwas Wichtiges bemerkt. | 👂
QUIZ: Warum können Algorithmen diskriminieren, obwohl ein Merkmal wie die Hautfarbe nicht vorkommt? | Weil andere Variablen mit diesem Merkmal korrelieren | Weil Computer Vorurteile haben | Weil sie zu langsam sind | 1
QUIZ: Was zeigte die Forschung von Joy Buolamwini? | Gesichtserkennung funktioniert bei allen Gruppen gleich gut | Gesichtserkennung hatte bei dunkelhäutigen Frauen eine viel höhere Fehlerquote | Gesichtserkennung ist verboten | 2
QUIZ: Was bedeutet es, dass sich Fairnessdefinitionen teilweise ausschließen? | Man kann nicht alle gleichzeitig erfüllen | Sie sind alle falsch | Sie bedeuten dasselbe | 1
QUIZ: Was ist „Automation Bias“? | Menschen vertrauen Maschinen übermäßig | Maschinen vertrauen Menschen nicht | Ein Fehler in der Software | 1
QUIZ: Was hat Oksana herausgefunden? | Lücken im Lebenslauf sagten nichts über die spätere Leistung aus | Das System war perfekt | Frauen bewarben sich seltener | 1
`;

DATA.podScripts.ep082 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge zweiundachtzig. Heute stellen wir eine Frage, die vor dreißig Jahren noch absurd geklungen hätte: Ist Privatsphäre überhaupt noch möglich?
A: Wir sprechen über Überwachung, über Daten und über die Frage der Einwilligung. Und das ist ein Thema, bei dem Deutschland aus historischen Gründen eine ganz besondere Sensibilität hat, wie wir in Folge siebenundvierzig schon angedeutet haben.
B: Sprachlich üben wir heute einige anspruchsvollere Strukturen: Partizipialkonstruktionen und erweiterte Attribute, die besonders in Sachtexten und in der juristischen Sprache vorkommen. Etwa „die von den Plattformen gesammelten Daten“ statt „die Daten, die von den Plattformen gesammelt werden“.
A: Solche Konstruktionen verdichten Informationen. Sie sind elegant, aber für das Verständnis anspruchsvoll, weil man sie von innen nach außen lesen muss. „Die von den Plattformen gesammelten Daten“: Der Artikel „die“ gehört zu „Daten“, und alles dazwischen beschreibt sie näher.
B: Und wir üben das Verb „lassen“ in seinen verschiedenen Bedeutungen. „Sich überwachen lassen“, also zulassen, dass man überwacht wird. Oder „Daten löschen lassen“, also veranlassen, dass jemand sie löscht.
A: Gut. Fangen wir mit einem historischen Rückblick an, ohne den man die deutsche Debatte nicht versteht. Jonas, du hast als Journalist viel über die Stasi recherchiert.
B: Ja. Die Staatssicherheit der DDR war eines der umfassendsten Überwachungssysteme der Geschichte. Sie hatte zuletzt etwa neunzigtausend hauptamtliche Mitarbeiter und darüber hinaus fast zweihunderttausend sogenannte inoffizielle Mitarbeiter. Also Menschen, die ihre Nachbarn, Kollegen, Freunde und manchmal sogar ihre Ehepartner bespitzelten.
A: „Bespitzeln“ heißt: heimlich beobachten und Informationen an jemanden weitergeben. Und die Stasi hat Akten über Millionen Menschen angelegt. Wenn man alle Akten aneinanderreihen würde, ergäben sie eine Strecke von über hundert Kilometern.
B: Und nach der Wiedervereinigung konnten die Menschen ihre eigenen Akten einsehen. Viele haben dabei herausgefunden, dass ausgerechnet ihr bester Freund oder ihr Bruder sie verraten hatte. Das hat Familien zerstört.
A: Der Film „Das Leben der Anderen“, den wir in Folge vierunddreißig erwähnt haben, zeigt das eindringlich. Und es gibt noch eine frühere Erfahrung: Die Nationalsozialisten haben Melderegister und Volkszählungsdaten genutzt, um Juden und andere verfolgte Gruppen zu identifizieren und zu deportieren.
B: Diese doppelte historische Erfahrung erklärt, warum die Deutschen so misstrauisch sind, wenn der Staat oder Unternehmen Daten sammeln. Und das führt zu einem Meilenstein: dem Volkszählungsurteil von neunzehnhundertdreiundachtzig.
A: Ja! Damals plante die Bundesregierung eine umfassende Volkszählung. Und es gab massiven Widerstand. Hunderttausende Menschen haben protestiert und zum Boykott aufgerufen. Und das Bundesverfassungsgericht hat die Volkszählung in der geplanten Form gestoppt.
B: Und in diesem Urteil hat das Gericht ein neues Grundrecht formuliert: das Recht auf informationelle Selbstbestimmung. Das bedeutet, dass jeder Mensch grundsätzlich selbst über die Preisgabe und Verwendung seiner persönlichen Daten bestimmen darf.
A: Das Urteil war seiner Zeit weit voraus. Es enthält einen berühmten Gedanken: Wer nicht wisse, welche Informationen über ihn gespeichert sind, werde sein Verhalten anpassen. Und eine Gesellschaft, in der sich die Bürger aus Angst vor Überwachung nicht mehr frei verhalten, sei mit einer freiheitlichen Demokratie unvereinbar.
B: Das ist der sogenannte Abschreckungseffekt. Auf Englisch „Chilling Effect“. Wer sich beobachtet fühlt, geht vielleicht nicht mehr zu einer Demonstration, sucht im Internet nicht mehr nach bestimmten Themen, äußert seine Meinung nicht mehr offen. Nicht weil es verboten ist, sondern aus vorauseilendem Gehorsam.
A: „Vorauseilender Gehorsam“ ist ein sehr treffender Ausdruck. Er beschreibt, dass man sich so verhält, wie man glaubt, dass die Mächtigen es wünschen, noch bevor sie es überhaupt verlangen.
B: Und heute? Heute ist die Situation in gewisser Weise paradox. Die gleichen Deutschen, die gegen eine Volkszählung auf die Straße gingen, tragen heute ein Smartphone in der Tasche, das ihren Standort rund um die Uhr erfasst.
A: Und das ist der Kern unseres Themas. Die Überwachung geht heute weniger vom Staat aus als von Unternehmen. Die Wirtschaftswissenschaftlerin Shoshana Zuboff hat dafür den Begriff „Überwachungskapitalismus“ geprägt.
B: Erklär den Begriff.
A: Zuboffs These lautet: Große Technologiekonzerne bieten scheinbar kostenlose Dienste an, Suchmaschinen, soziale Netzwerke, E-Mail. Aber sie verdienen ihr Geld mit den dabei anfallenden Verhaltensdaten. Diese Daten werden ausgewertet, um unser Verhalten vorherzusagen und letztlich zu beeinflussen. Unsere Aufmerksamkeit und unsere Entscheidungen werden zur Ware.
B: Es gibt den bekannten Satz: „Wenn du nicht für das Produkt bezahlst, bist du selbst das Produkt.“ Wobei Zuboff noch weiter geht. Sie sagt: Wir sind nicht einmal das Produkt. Wir sind der Rohstoff. Das Produkt sind die Vorhersagen über unser Verhalten, die an Werbetreibende verkauft werden.
A: Und die Menge der gesammelten Daten ist kaum vorstellbar. Wo man sich aufhält, mit wem man kommuniziert, was man kauft, wie lange man ein bestimmtes Bild ansieht, wie schnell man tippt, sogar wie man sich bewegt, wenn man das Handy in der Tasche hat.
B: Und aus scheinbar harmlosen Daten lassen sich erstaunlich intime Rückschlüsse ziehen. Eine viel zitierte Studie hat gezeigt, dass man allein anhand von Facebook-Likes mit hoher Treffsicherheit die sexuelle Orientierung, die politische Einstellung oder die Religion einer Person vorhersagen kann.
A: Und es gibt den berühmten Fall einer amerikanischen Supermarktkette, die anhand des Einkaufsverhaltens erkannte, dass eine Jugendliche schwanger war. Und ihr Gutscheine für Babyartikel schickte. Bevor ihre Eltern davon wussten.
B: Wobei manche Details dieser Geschichte inzwischen angezweifelt werden. Aber das Prinzip ist zweifellos real. Und dann gibt es noch den Datenhandel. Sogenannte Datenbroker sammeln Informationen aus unzähligen Quellen und verkaufen detaillierte Profile.
A: Jetzt zur Einwilligung. Denn rechtlich gesehen haben wir all dem ja zugestimmt. Mit einem Klick auf „Akzeptieren“.
B: Ja, und hier liegt ein grundsätzliches Problem. Die Datenschutz-Grundverordnung, die zweitausendachtzehn in Kraft getreten ist, verlangt, dass eine Einwilligung freiwillig, informiert und eindeutig sein muss. Aber ist sie das wirklich?
A: Kaum. Eine Untersuchung hat einmal berechnet, dass ein durchschnittlicher Internetnutzer viele Arbeitstage pro Jahr bräuchte, um alle Datenschutzerklärungen zu lesen, denen er zustimmt. Das macht natürlich niemand.
B: Und die berühmten Cookie-Banner. Seit der DSGVO wird man auf fast jeder Webseite gefragt, ob man Cookies akzeptiert. Und viele dieser Banner sind so gestaltet, dass man fast automatisch alles akzeptiert. Der Knopf „Alle akzeptieren“ ist groß und farbig, die Option „Ablehnen“ versteckt in mehreren Untermenüs.
A: Das nennt man „Dark Patterns“. Manipulative Designmuster, die Nutzer zu Entscheidungen drängen, die sie bei klarer Überlegung nicht treffen würden. Darüber sprechen wir ausführlicher in der nächsten Folge.
B: Das heißt, die Einwilligung ist in vielen Fällen eine Fiktion. Eine juristische Formalität, die mit echter Selbstbestimmung wenig zu tun hat. Man spricht von „Einwilligungsmüdigkeit“.
A: Und es gibt noch einen tieferen Einwand: Datenschutz ist kein rein individuelles Problem. Wenn ich meine Kontakte einer App freigebe, gebe ich die Daten meiner Freunde preis, die gar nicht zugestimmt haben. Wenn ich meine DNA bei einem Gentest einschicke, gebe ich auch Informationen über meine Geschwister und Kinder preis.
B: Das ist ein ganz wichtiger Punkt. Privatsphäre ist gewissermaßen ein Gemeingut, wie wir in Folge siebenundsechzig das Wort benutzt haben. Wer seine Daten preisgibt, beeinträchtigt auch die Privatsphäre anderer.
A: Und nun das klassische Gegenargument, das man in jeder Diskussion über Überwachung hört: „Ich habe doch nichts zu verbergen.“
B: Ah, der Klassiker. Wie entgegnest du darauf?
A: Mit mehreren Argumenten. Erstens: Jeder Mensch hat etwas, das er nicht mit allen teilen möchte. Gesundheitsprobleme, Liebesbeziehungen, finanzielle Schwierigkeiten, Gedanken, für die man sich schämt. Privatsphäre heißt nicht, dass man etwas Illegales verbirgt, sondern dass man selbst bestimmt, wer was über einen weiß.
B: Zweitens: Was heute harmlos ist, kann morgen gefährlich sein. Gesetze und Regierungen ändern sich. Daten, die heute gespeichert werden, können in zwanzig Jahren unter einem ganz anderen Regime missbraucht werden. Die deutsche Geschichte zeigt das auf erschütternde Weise.
A: Und drittens hat der Whistleblower Edward Snowden es einmal sehr pointiert formuliert: Zu sagen, man brauche keine Privatsphäre, weil man nichts zu verbergen habe, sei so, als würde man sagen, man brauche keine Meinungsfreiheit, weil man nichts zu sagen habe.
B: Das ist ein starker Vergleich. Grundrechte sind nicht für die da, die nichts brauchen, sondern sie schützen alle, besonders die Schwächsten.
A: Gut, und was kann man tun? Ist Privatsphäre noch möglich?
B: Ich bin da vorsichtig optimistisch. Auf individueller Ebene kann man einiges tun. Datensparsame Alternativen nutzen, etwa Messenger mit Ende-zu-Ende-Verschlüsselung, Browser mit Tracking-Schutz, Suchmaschinen, die keine Profile erstellen. Und man kann seine Rechte wahrnehmen. Nach der DSGVO hat jeder das Recht, von einem Unternehmen Auskunft darüber zu verlangen, welche Daten es über einen gespeichert hat. Und man kann diese Daten löschen lassen.
A: Wobei die Verantwortung nicht allein beim Einzelnen liegen sollte. Das wäre, als würde man beim Klimaschutz nur auf individuelle Konsumentscheidungen setzen. Es braucht strukturelle Lösungen. Strenge Gesetze, die auch konsequent durchgesetzt werden. Und hier hat die Europäische Union gegen große Konzerne inzwischen Strafen in Milliardenhöhe verhängt.
B: Und ein Konzept, das ich interessant finde: „Privacy by Design“. Also Datenschutz von Anfang an in die Technik einzubauen. Systeme so zu gestalten, dass sie nur die Daten erheben, die wirklich nötig sind. Die deutsche Corona-Warn-App war übrigens ein Beispiel dafür. Nach heftigen Debatten wurde sie dezentral konzipiert, sodass die Daten auf den Handys blieben und nicht zentral gespeichert wurden.
A: Ein typisch deutscher Kompromiss. Und ehrlich gesagt ein gelungener. Jetzt zur Geschichte. Diesmal geht es um Frau Schulze, die wir als Expertin für Mülltrennung und Fake News kennen. Und um ihre Erfahrungen mit der Stasi.
B: Frau Schulze? Ich wusste gar nicht, dass sie in der DDR gelebt hat. Ach ja, natürlich. Sie wohnt ja seit fünfzig Jahren im gleichen Haus in Friedrichshain, und das war früher Ostberlin.
A: Genau. Und Julien hat sie bei einem ihrer sonntäglichen Kaffeetrinken gefragt, warum sie sich so sehr gegen bestimmte Apps wehrt. Sie wollte zum Beispiel nicht, dass Julien ihr eine bestimmte App installiert, die ihren Standort erfasst.
B: Und was hat sie erzählt?
A: Sie hat lange geschwiegen. Und dann hat sie eine Geschichte erzählt, die sie noch nie jemandem erzählt hatte. Als sie Anfang zwanzig war, in den Siebzigerjahren, hatte sie einen Freund, der Gedichte schrieb. Kritische Gedichte. Und eines Tages wurde er verhaftet. Und sie wurde zur Stasi bestellt und stundenlang verhört.
B: Das ist ja furchtbar.
A: Nach der Wende hat sie ihre Stasi-Akte eingesehen. Und darin stand alles. Mit wem sie sich getroffen hatte, was sie in Briefen geschrieben hatte, welche Bücher sie gelesen hatte. Und sie hat herausgefunden, wer sie bespitzelt hatte. Es war ihre damalige beste Freundin. Die Frau, mit der sie jeden Sonntag Kaffee getrunken hatte.
B: Oh. Das muss schrecklich gewesen sein.
A: Sie hat gesagt, das Schlimmste sei nicht gewesen, dass sie überwacht wurde. Sondern das Gefühl, dass sie niemandem mehr vertrauen konnte. Und sie hat zu Julien gesagt: „Ihr jungen Leute gebt alles freiwillig her, was wir damals um jeden Preis verbergen wollten. Und ihr wisst nicht, wer es eines Tages lesen wird.“
B: Ein Satz, der nachhallt. Wie hat Julien reagiert?
A: Er war sehr berührt. Und er hat nachgedacht. Er hat gemerkt, wie sorglos er selbst mit seinen Daten umging, obwohl er als Programmierer eigentlich genau wusste, wie sie gesammelt werden. Und er hat beschlossen, etwas zu ändern.
B: Was denn?
A: Er hat zuerst bei mehreren großen Plattformen eine Auskunft nach der DSGVO angefordert. Und er war schockiert, wie viel über ihn gespeichert war. Tausende Standortdaten aus den letzten Jahren, eine Liste mit Interessen, die ihm zugeordnet worden waren, sogar Sprachaufnahmen. Viele davon hat er löschen lassen.
B: Und dann hat er bestimmt wieder einen Workshop gemacht. Hahaha.
A: Natürlich! Mit den Digitalen Detektiven, Herr Krüger und Frau Schulze. Über Datenschutz und digitale Selbstverteidigung. Und Frau Schulze hat am Anfang ihre Geschichte erzählt. Vor dreißig Senioren. Zum ersten Mal öffentlich.
B: Das war bestimmt ein sehr bewegender Moment.
A: Ja. Und danach haben auch andere aus ihrer Zeit in der DDR erzählt. Einer hatte erfahren, dass sein eigener Bruder ihn bespitzelt hatte. Und am Ende hat Frau Schulze gesagt: „Ich habe überlebt, weil ich damals gelernt habe, vorsichtig zu sein. Aber ich möchte nicht, dass meine Enkel eines Tages die gleiche Vorsicht lernen müssen.“
B: Jetzt bist du dran, Hörer, Hörerin. Wie stehst du zum Argument „Ich habe nichts zu verbergen“? Formuliere eine Antwort mit erweiterten Partizipialattributen, etwa: „Die von uns täglich preisgegebenen Daten …“ „Die in den Datenschutzerklärungen versteckten Bedingungen …“
A: Und vielleicht verlangst du einmal bei einer Plattform Auskunft darüber, welche Daten über dich gespeichert sind. Du wirst überrascht sein.
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: bespitzeln. Heimlich beobachten und Informationen weitergeben.
B: Wort Nummer zwei: die informationelle Selbstbestimmung. Das Recht, selbst über die Verwendung seiner persönlichen Daten zu bestimmen.
A: Wort Nummer drei: der Abschreckungseffekt. Man verhält sich aus Angst vor Überwachung weniger frei.
B: Wort Nummer vier: vorauseilender Gehorsam. Man tut, was die Mächtigen wohl wollen, bevor sie es überhaupt verlangen.
A: Wort Nummer fünf: die Einwilligung. Die Zustimmung, dass etwas geschehen darf.
B: Und Wort Nummer sechs: nachhallen. Lange in Erinnerung bleiben und weiterwirken, wie ein Echo.
A: Noch einmal: bespitzeln, die informationelle Selbstbestimmung, der Abschreckungseffekt, vorauseilender Gehorsam, die Einwilligung, nachhallen.
B: Was nehmen wir mit? Die deutsche Sensibilität für Datenschutz hat historische Wurzeln in der NS-Zeit und in der Stasi-Überwachung der DDR.
A: Das Volkszählungsurteil von neunzehnhundertdreiundachtzig begründete das Recht auf informationelle Selbstbestimmung und warnte vor dem Abschreckungseffekt.
B: Heute geht die Überwachung vor allem von Unternehmen aus, im sogenannten Überwachungskapitalismus. Und die Einwilligung ist oft nur eine Fiktion.
A: „Ich habe nichts zu verbergen“ greift zu kurz, weil Privatsphäre ein Grundrecht und ein Gemeingut ist, das uns alle schützt.
B: Das ist das Ende von Folge zweiundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und denk an Frau Schulze, bevor du das nächste Mal auf „Alle akzeptieren“ klickst. Tschüss!
B: Servus!
VOCAB: bespitzeln | Heimlich beobachten und Informationen an jemanden weitergeben. | 🕵️
VOCAB: die informationelle Selbstbestimmung | Das Recht, selbst über die eigenen Daten zu bestimmen. | 🔐
VOCAB: der Abschreckungseffekt | Man verhält sich aus Angst vor Überwachung weniger frei. | 🥶
VOCAB: vorauseilender Gehorsam | Man tut, was die Mächtigen wohl wollen, bevor sie es verlangen. | 🙇
VOCAB: die Einwilligung | Die Zustimmung, dass etwas geschehen darf. | ✍️
VOCAB: nachhallen | Lange in Erinnerung bleiben und weiterwirken. | 🔔
QUIZ: Welches Grundrecht formulierte das Volkszählungsurteil von 1983? | Das Recht auf informationelle Selbstbestimmung | Das Recht auf freie Meinung | Das Recht auf Arbeit | 1
QUIZ: Was ist der „Abschreckungseffekt“? | Man verhält sich aus Angst vor Überwachung weniger frei | Strafen werden höher | Man vergisst seine Passwörter | 1
QUIZ: Wer prägte den Begriff „Überwachungskapitalismus“? | Edward Snowden | Shoshana Zuboff | Max Weber | 2
QUIZ: Warum ist die Einwilligung im Internet oft eine Fiktion? | Weil niemand alle Datenschutzerklärungen lesen kann und Banner manipulativ gestaltet sind | Weil sie verboten ist | Weil sie zu teuer ist | 1
QUIZ: Wer hatte Frau Schulze damals bespitzelt? | Ihr Bruder | Ihre damalige beste Freundin | Ihr Freund | 2
`;

DATA.podScripts.ep083 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge dreiundachtzig. Und bevor wir anfangen, eine kleine Bitte: Leg doch einmal dein Handy weg. Oder zumindest dreh es um. Denn heute sprechen wir über die Aufmerksamkeitsökonomie.
A: Ein Begriff, der beschreibt, dass in unserer heutigen Welt die Aufmerksamkeit zum knappsten und deshalb wertvollsten Gut geworden ist. Informationen gibt es im Überfluss. Was knapp ist, ist die Zeit und die Konzentration, die wir ihnen widmen können.
B: Der Wirtschaftswissenschaftler und Nobelpreisträger Herbert Simon hat das schon neunzehnhunderteinundsiebzig, also lange vor dem Smartphone, sehr scharfsinnig formuliert: Ein Reichtum an Informationen schaffe eine Armut an Aufmerksamkeit.
A: Und heute konkurrieren unzählige Unternehmen, Apps und Medien um genau diese knappe Ressource. Mit immer raffinierteren Methoden. Und darum geht es heute: um Konzentration und um manipulatives Design.
B: Sprachlich üben wir heute Modalpartikeln. Diese kleinen Wörter wie „doch“, „ja“, „eben“, „halt“, „wohl“, „schon“, „mal“ und „eigentlich“, die im gesprochenen Deutsch unglaublich häufig sind und die für Nicht-Muttersprachler besonders schwer zu beherrschen sind. Weil sie keine eindeutige Übersetzung haben, aber die Bedeutung eines Satzes subtil verändern.
A: Ich habe dir gleich am Anfang ein Beispiel gegeben. „Leg doch einmal dein Handy weg.“ Das „doch“ macht die Aufforderung freundlicher, fast wie ein Vorschlag. Ohne „doch“ klingt „Leg dein Handy weg“ wie ein Befehl.
B: Und „ja“ signalisiert, dass etwas bekannt ist, dass beide es wissen. „Das ist ja das Problem.“ Und „eben“ oder „halt“ drücken aus, dass etwas nun einmal so ist und man es nicht ändern kann. „So ist das halt.“ „Halt“ ist eher süddeutsch und österreichisch, „eben“ eher norddeutsch.
A: Achte heute einmal darauf, wie oft wir diese Partikeln benutzen. Du wirst überrascht sein. Gut, fangen wir mit einer Selbstbeobachtung an. Jonas, wie oft schaust du am Tag auf dein Handy?
B: Ich habe das nach Folge siebenundvierzig tatsächlich gemessen. Es ist ziemlich erschreckend. Ich entsperre mein Handy im Durchschnitt über hundert Mal am Tag. Und das deckt sich ungefähr mit verschiedenen Studien, die von durchschnittlich achtzig bis hundertfünfzig Mal ausgehen.
A: Hundert Mal! Das heißt, im wachen Zustand ungefähr alle zehn Minuten.
B: Ja. Und das Schlimme ist: Viele dieser Male geschehen ganz automatisch. Ich will eigentlich nur kurz die Uhrzeit wissen, und zwanzig Minuten später lese ich einen Artikel über die Paarungsgewohnheiten von Tiefseefischen.
A: Hahaha. Das kennt wohl jeder. Und das ist eben kein Zufall, sondern das Ergebnis einer gezielten Gestaltung. Es gibt eine ganze Disziplin, die sich damit beschäftigt, wie man Menschen dazu bringt, Produkte möglichst häufig und lange zu nutzen. Man spricht auch von „Persuasive Technology“, also überzeugender oder vielmehr überredender Technologie.
B: Und einer der bekanntesten Kritiker ist Tristan Harris, ein ehemaliger Designethiker bei Google. Er hat das Smartphone einmal mit einem Spielautomaten verglichen, den wir alle ständig in der Tasche tragen.
A: Ein sehr treffender Vergleich, wenn man sich die Mechanismen anschaut. Das wichtigste Prinzip ist die sogenannte variable Belohnung. Das hat der Psychologe B. F. Skinner schon in den Fünfzigerjahren an Tauben und Ratten untersucht.
B: Erklär das mal.
A: Skinner hat herausgefunden: Wenn ein Tier jedes Mal eine Belohnung bekommt, wenn es einen Hebel drückt, lernt es das Verhalten. Aber wenn die Belohnung unregelmäßig kommt, manchmal ja, manchmal nein, und nicht vorhersehbar, dann drückt es den Hebel viel häufiger und hört kaum noch damit auf.
B: Und genau so funktionieren Spielautomaten. Und genau so funktioniert das Herunterziehen, um einen Feed zu aktualisieren. Man zieht, und manchmal kommt etwas Spannendes, manchmal nicht. Man weiß es nie vorher. Und darum zieht man immer wieder.
A: Das ist ja geradezu perfide. „Perfide“ heißt: hinterhältig, auf raffinierte Weise böswillig. Und dann gibt es den unendlichen Scroll. Früher hatte jede Seite ein Ende. Man musste aktiv auf „nächste Seite“ klicken. Das war ein natürlicher Haltepunkt, ein Moment, in dem man sich fragen konnte: Will ich weitermachen?
B: Und der Erfinder des unendlichen Scrollens, Aza Raskin, hat später öffentlich bedauert, was er da geschaffen hat. Er hat berechnet, dass durch seine Erfindung täglich unzählige Stunden menschlicher Lebenszeit verloren gehen.
A: Ein bemerkenswertes Eingeständnis. Und das automatische Abspielen. Bei Streamingdiensten beginnt die nächste Folge automatisch, bevor man überhaupt entscheiden kann, ob man sie sehen will. Aus einer Folge werden drei, aus drei werden sechs.
B: Das Komaglotzen aus Folge achtundfünfzig. Und die Benachrichtigungen, die wir in Folge siebenundvierzig besprochen haben. Rote Zahlen, die signalisieren: Hier ist etwas Dringendes. Rot ist nicht zufällig gewählt. Es ist die Farbe der Warnung und der Dringlichkeit.
A: Und dann gibt es die sogenannten Dark Patterns, die wir in der letzten Folge erwähnt haben. Manipulative Designmuster. Ein klassisches Beispiel ist das Abonnement, das man mit einem Klick abschließen kann, aber nur über ein kompliziertes Labyrinth von Menüs wieder kündigen kann. Das nennt man auf Englisch „Roach Motel“, Kakerlakenfalle: leicht hinein, schwer hinaus.
B: Wobei Deutschland da übrigens eine sehr sinnvolle Regelung eingeführt hat: den Kündigungsbutton. Seit zweitausendzweiundzwanzig müssen Unternehmen, bei denen man online einen Vertrag abschließen kann, auch einen gut sichtbaren Knopf zum Kündigen anbieten. Mit der Aufschrift „Verträge hier kündigen“.
A: Eine typisch deutsche, pragmatische Lösung. Weitere Dark Patterns sind künstliche Verknappung. „Nur noch zwei Zimmer verfügbar!“ „Fünf andere Personen sehen sich dieses Angebot gerade an!“ Das erzeugt Druck und die Angst, etwas zu verpassen.
B: Die berühmte „Fear of Missing Out“. Und das sogenannte „Confirmshaming“. Wenn man ein Angebot ablehnen will, muss man auf einen Knopf klicken, auf dem etwas steht wie: „Nein danke, ich möchte lieber kein Geld sparen.“ Man soll sich schlecht fühlen, wenn man ablehnt.
A: Hahaha. Das ist ja eigentlich lächerlich, aber es funktioniert offenbar. Gut. Und was macht das mit uns? Mit unserer Konzentration?
B: Hier muss man vorsichtig sein, weil es viele populäre, aber wissenschaftlich fragwürdige Behauptungen gibt. Man hört zum Beispiel oft, unsere Aufmerksamkeitsspanne sei inzwischen kürzer als die eines Goldfischs. Acht Sekunden.
A: Ah, der Goldfisch-Mythos! Der lässt sich ja wirklich nicht ausrotten.
B: Genau. Diese Zahl stammt aus einer Marketingstudie und ist wissenschaftlich nicht haltbar. Es gibt keine einheitliche „Aufmerksamkeitsspanne“, die man so messen könnte. Sie hängt sehr stark von der Aufgabe und der Motivation ab.
A: Was aber gut belegt ist: Der ständige Wechsel zwischen Aufgaben hat einen Preis. Man spricht von „Wechselkosten“. Wenn man bei einer konzentrierten Arbeit unterbrochen wird, etwa durch eine Nachricht, braucht man laut einer häufig zitierten Studie der Forscherin Gloria Mark im Durchschnitt über zwanzig Minuten, um wieder vollständig in die ursprüngliche Aufgabe zurückzufinden.
B: Zwanzig Minuten! Und wenn man alle zehn Minuten aufs Handy schaut, kommt man also eigentlich nie in einen Zustand tiefer Konzentration.
A: Genau. Und das sogenannte Multitasking ist im Grunde eine Illusion. Das Gehirn kann sich nicht wirklich auf zwei anspruchsvolle Aufgaben gleichzeitig konzentrieren. Es springt nur sehr schnell hin und her. Und dabei macht es mehr Fehler und arbeitet langsamer.
B: Und es gibt eine faszinierende Studie, die zeigt, dass schon die bloße Anwesenheit des Handys die Denkleistung beeinträchtigen kann. Selbst wenn es ausgeschaltet ist und mit dem Display nach unten auf dem Tisch liegt. Teilnehmer, deren Handy in einem anderen Raum war, schnitten bei Konzentrationstests besser ab.
A: Offenbar kostet es Kraft, nicht an das Handy zu denken. Ein Teil unserer Aufmerksamkeit ist ständig damit beschäftigt, dem Impuls zu widerstehen. Wobei man fairerweise sagen muss, dass nicht alle Folgestudien diesen Effekt in gleichem Maße bestätigen konnten.
B: Und das bringt uns zu einem Konzept, das der amerikanische Informatiker Cal Newport populär gemacht hat: „Deep Work“. Also tiefe, konzentrierte Arbeit ohne Ablenkung.
A: Newport argumentiert, dass die Fähigkeit, sich lange und tief zu konzentrieren, in unserer Wirtschaft immer seltener und gleichzeitig immer wertvoller wird. Wer diese Fähigkeit pflegt, hat einen enormen Vorteil.
B: Und er empfiehlt, feste Zeiten für tiefe Arbeit zu reservieren. Zeiten, in denen man vollkommen unerreichbar ist. Und vor allem: die Fähigkeit zur Langeweile wieder zu trainieren.
A: Das finde ich besonders interessant. Langeweile ist eigentlich etwas sehr Wertvolles. Viele kreative Ideen entstehen genau dann, wenn der Geist nicht beschäftigt ist. Beim Spazierengehen, unter der Dusche, beim Warten an der Bushaltestelle. Aber diese Momente füllen wir heute fast alle mit dem Handy.
B: Wir haben verlernt, uns zu langweilen. Und damit vielleicht auch einen Teil unserer Kreativität. Es gibt übrigens Forschung, die zeigt, dass Menschen, die sich vorher gelangweilt haben, bei kreativen Aufgaben besser abschneiden.
A: Gut. Und was kann man tun? Neben den Tipps aus Folge siebenundvierzig?
B: Der Philosoph und Autor Jaron Lanier, übrigens selbst ein Pionier der virtuellen Realität, ist da radikal. Er empfiehlt, sämtliche Konten in sozialen Netzwerken zu löschen. Das ist natürlich nicht für jeden realistisch.
A: Ich halte einen Mittelweg für sinnvoller. Nicht die Technik verteufeln, sondern sie bewusst gestalten. „Verteufeln“ heißt: etwas als vollkommen schlecht darstellen. Man kann die Apps so einstellen, dass sie einem dienen, statt einen zu beherrschen.
B: Und auf politischer Ebene? Die EU-Gesetzgebung, die wir besprochen haben, verbietet inzwischen bestimmte Dark Patterns. Und es gibt Diskussionen darüber, ob man süchtig machende Designelemente für Kinder und Jugendliche grundsätzlich einschränken sollte.
A: Das halte ich für überfällig. „Überfällig“ heißt: Es hätte schon längst passieren müssen. Jetzt zur Geschichte. Diesmal geht es um Emre. Und um eine überraschende Erfahrung.
B: Emre, der Content Creator. Der ja selbst von der Aufmerksamkeitsökonomie lebt.
A: Genau. Und das macht die Geschichte interessant. Emre arbeitet ja inzwischen als Junior-Entwickler bei der Firma für Krankenhaus-Software und macht nebenbei seine Videos. Und er hat gemerkt, dass er sich bei der Arbeit kaum noch konzentrieren kann. Er hat ständig nachgeschaut, wie viele Aufrufe sein neuestes Video hatte, wie viele Kommentare gekommen waren.
B: Der Spielautomat in der Tasche.
A: Ja. Und eines Tages hat seine Teamleiterin, Frau Okafor, die wir aus dem technischen Interview in Folge zweiundsechzig kennen, ihn freundlich, aber deutlich darauf angesprochen. Sie hatte bemerkt, dass sein Code mehr Fehler enthielt als früher. Und sie hat ihn gefragt, ob alles in Ordnung sei.
B: Und was hat Emre gemacht?
A: Er hat zuerst abgestritten, dass es am Handy liege. Aber dann hat er es selbst gemessen. Und er kam auf über hundertfünfzig Mal Entsperren am Tag. Mehr als Jonas! Hahaha.
B: Hahaha. Ein trauriger Rekord.
A: Und dann hat er ein Experiment gemacht, über das er natürlich auch ein Video gedreht hat. Eine Woche komplett ohne Smartphone. Er hat sich ein altes Tastenhandy besorgt, mit dem man nur telefonieren und SMS schreiben kann.
B: Mutig. Wie war die erste Zeit?
A: Furchtbar, hat er erzählt. Am ersten Tag hat er ständig in seine Hosentasche gegriffen. Phantomvibrationen nennt man das. Er hat geglaubt, das Handy vibriere, obwohl gar keines da war. Er war unruhig, gereizt, gelangweilt. In der U-Bahn wusste er nicht, wohin mit seinem Blick.
B: Entzugserscheinungen. Wie bei einer echten Sucht.
A: Ja. Aber ab dem dritten Tag hat sich etwas verändert. Er hat angefangen, in der U-Bahn aus dem Fenster zu schauen. Er hat Menschen beobachtet. Er hat ein Buch gelesen, zum ersten Mal seit Jahren ein ganzes Buch. Und bei der Arbeit konnte er sich plötzlich stundenlang konzentrieren. Er hat an einem einzigen Tag ein Problem gelöst, an dem er seit zwei Wochen gescheitert war.
B: Deep Work in Aktion. Und dann?
A: Das Interessanteste war das Ende der Woche. Er hat sein Smartphone wieder eingeschaltet und hatte über zweitausend Benachrichtigungen. Und er hat gemerkt, dass fast nichts davon wirklich wichtig gewesen war. Die Welt hatte sich auch ohne ihn weitergedreht.
B: Eine wichtige Erkenntnis. Und was hat er dauerhaft geändert?
A: Er hat alle Benachrichtigungen ausgeschaltet, außer für Anrufe von seiner Familie. Bei der Arbeit liegt das Handy jetzt in einer Schublade. Und er schaut nur noch zweimal am Tag nach seinen Videostatistiken. Und er hat das Video über sein Experiment gepostet.
B: Und die Ironie?
A: Hahaha, genau die Ironie: Das Video über eine Woche ohne Smartphone wurde sein erfolgreichstes überhaupt. Über drei Millionen Aufrufe. Er hat gesagt: „Ich habe mit einem Video über Aufmerksamkeit mehr Aufmerksamkeit bekommen als je zuvor. Das ist halt die verrückte Welt, in der wir leben.“
B: Jetzt bist du dran, Hörer, Hörerin. Achte heute einmal bewusst darauf, wie oft du nach deinem Handy greifst. Und beschreibe deine Erfahrung mit möglichst vielen Modalpartikeln: „Ich schaue ja eigentlich …“ „Das ist halt so …“ „Ich sollte doch mal …“
A: Und vielleicht gönnst du dir heute einen Moment echter Langeweile. Ohne Handy, ohne Musik, ohne Podcast. Ja, sogar ohne unseren. Schau einfach mal, welche Gedanken kommen.
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: die Aufmerksamkeitsökonomie. Eine Wirtschaft, in der die Aufmerksamkeit das knappste und wertvollste Gut ist.
B: Wort Nummer zwei: perfide. Hinterhältig, auf raffinierte Weise böswillig.
A: Wort Nummer drei: die Wechselkosten. Der Verlust an Zeit und Konzentration, wenn man zwischen Aufgaben wechselt.
B: Wort Nummer vier: verteufeln. Etwas als vollkommen schlecht darstellen.
A: Wort Nummer fünf: überfällig. Es hätte schon längst passieren müssen.
B: Und Wort Nummer sechs: die Modalpartikel. Kleine Wörter wie „doch“, „ja“, „halt“, „eben“, die die Bedeutung eines Satzes subtil verändern.
A: Noch einmal: die Aufmerksamkeitsökonomie, perfide, die Wechselkosten, verteufeln, überfällig, die Modalpartikel.
B: Was nehmen wir mit? In einer Welt mit unbegrenzten Informationen ist die Aufmerksamkeit das knappste Gut. Und viele Technologien sind gezielt so gestaltet, dass sie diese Aufmerksamkeit binden.
A: Die Mechanismen: variable Belohnung wie beim Spielautomaten, unendliches Scrollen, automatisches Abspielen und Dark Patterns.
B: Die Folgen: hohe Wechselkosten, Multitasking als Illusion und der Verlust der fruchtbaren Langeweile.
A: Und die Antwort: Deep Work, bewusste Gestaltung der Technik, politische Regulierung. Und die Fähigkeit zur Langeweile wieder zu lernen.
B: Das ist das Ende von Folge dreiundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und jetzt kannst du dein Handy ja wieder umdrehen. Oder vielleicht doch noch ein bisschen liegen lassen? Tschüss!
B: Servus!
VOCAB: die Aufmerksamkeitsökonomie | Eine Wirtschaft, in der die Aufmerksamkeit das knappste Gut ist. | 👁️
VOCAB: perfide | Hinterhältig, auf raffinierte Weise böswillig. | 🐍
VOCAB: die Wechselkosten | Der Verlust an Zeit und Konzentration beim Wechsel zwischen Aufgaben. | 🔀
VOCAB: verteufeln | Etwas als vollkommen schlecht darstellen. | 👹
VOCAB: überfällig | Es hätte schon längst passieren müssen. | ⌛
VOCAB: die Modalpartikel | Kleine Wörter wie doch, ja, halt, eben, die einen Satz färben. | 🎨
QUIZ: Was bewirkt das „doch“ in „Leg doch einmal dein Handy weg“? | Es macht die Aufforderung freundlicher | Es macht sie unhöflicher | Es macht sie zu einer Frage | 1
QUIZ: Was ist das Prinzip der „variablen Belohnung“? | Unregelmäßige, unvorhersehbare Belohnungen machen ein Verhalten besonders hartnäckig | Man bekommt immer die gleiche Belohnung | Man bekommt nie eine Belohnung | 1
QUIZ: Was gilt in Deutschland seit 2022 für Online-Verträge? | Man braucht einen gut sichtbaren Kündigungsbutton | Man darf keine Verträge online abschließen | Verträge sind kostenlos | 1
QUIZ: Was sagt die Wissenschaft über den „Goldfisch-Mythos“? | Er ist wissenschaftlich nicht haltbar | Er ist bewiesen | Goldfische können sich nicht konzentrieren | 1
QUIZ: Was ist mit Emres Video über eine Woche ohne Smartphone passiert? | Es hatte keine Aufrufe | Es wurde sein erfolgreichstes Video | Er hat es gelöscht | 2
`;

DATA.podScripts.ep084 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge vierundachtzig. Heute widmen wir uns einer Frage, die in der modernen Arbeitswelt immer drängender wird: Wie führt man, ohne Chef zu sein? Unser Thema: Führen ohne Hierarchie. Einfluss und Vertrauen.
A: Lange Zeit war Führung untrennbar mit einer Position verbunden. Wer oben in der Hierarchie stand, hatte das Sagen. Der Chef entschied, die Mitarbeiter führten aus. Aber dieses Modell gerät zunehmend ins Wanken.
B: „Ins Wanken geraten“ heißt: instabil werden, nicht mehr sicher stehen, an Gültigkeit verlieren. Und das hat mehrere Gründe. In vielen Unternehmen arbeitet man heute in Projekten, in Teams über Abteilungsgrenzen hinweg, oft mit Menschen, denen man nicht vorgesetzt ist. Und man muss sie trotzdem dazu bewegen, mitzuziehen.
A: Sprachlich widmen wir uns heute dem Thema Wortbildung. Insbesondere Nominalisierungen und Wortfamilien. Das Deutsche ist eine Sprache, die unglaublich produktiv neue Wörter bildet. Aus einem Verb wie „führen“ entstehen der Führer, die Führung, die Führungskraft, führungsstark, verführen, ausführen, durchführen, anführen und so weiter.
B: Wobei wir beim Wort „Führer“ natürlich einen Moment innehalten müssen. Aus historischen Gründen ist dieses Wort im Deutschen belastet. Man spricht deshalb lieber von einer „Führungskraft“ oder einer „Leitung“. Den Begriff „Führer“ verwendet man allenfalls in Zusammensetzungen wie „Reiseführer“ oder „Bergführer“, wie bei Hias.
A: Genau. „Innehalten“ heißt übrigens: kurz aufhören, um nachzudenken. Gut. Fangen wir mit einer grundlegenden Unterscheidung an. Der Soziologe Max Weber, den wir aus Folge neunundsiebzig kennen, hat verschiedene Formen von Herrschaft unterschieden. Und daraus kann man eine wichtige Unterscheidung ableiten: zwischen Macht und Autorität.
B: Was ist der Unterschied?
A: Macht ist die Fähigkeit, andere zu etwas zu zwingen, notfalls gegen ihren Willen. Durch Belohnung oder Bestrafung. Ein Chef kann einem Mitarbeiter kündigen oder ihm eine Gehaltserhöhung verweigern. Autorität hingegen beruht auf Anerkennung. Man folgt jemandem, weil man ihn als kompetent, glaubwürdig oder vertrauenswürdig ansieht.
B: Das heißt, man kann Macht haben, ohne Autorität zu besitzen. Ein Chef, den niemand respektiert. Und man kann Autorität haben, ohne Macht zu haben. Eine erfahrene Kollegin, auf deren Rat alle hören, obwohl sie keine Leitungsposition innehat.
A: Genau. Und Führen ohne Hierarchie bedeutet im Kern: Einfluss durch Autorität statt durch Macht. Man spricht im Englischen auch von „Lateral Leadership“, also lateraler oder seitlicher Führung. Auf Augenhöhe, nicht von oben herab.
B: Und wie erlangt man diese Art von Einfluss? Darüber gibt es eine Menge Forschung und Literatur. Fangen wir mit dem wichtigsten Faktor an: Vertrauen.
A: Ja. Und es gibt ein bekanntes Modell, das Vertrauen fast wie eine Gleichung beschreibt. Die sogenannte Vertrauensformel. Sie stammt von David Maister und Kollegen. Demnach setzt sich Vertrauen aus drei Faktoren zusammen, die man durch einen vierten teilen muss.
B: Eine Formel für Vertrauen? Das klingt sehr ingenieurmäßig. Hahaha.
A: Hahaha. Ja, aber sie ist erstaunlich aufschlussreich. Die drei Faktoren im Zähler sind: Glaubwürdigkeit, also Kompetenz und Fachwissen. Zuverlässigkeit, also hält man, was man verspricht. Und Nähe, also das Gefühl, dass man dem anderen auch persönliche Dinge anvertrauen kann.
B: Und der Nenner? Das, wodurch man teilt?
A: Die Selbstbezogenheit. Also das Ausmaß, in dem jemand nur an seinen eigenen Vorteil denkt. Je größer die Selbstbezogenheit, desto kleiner das Vertrauen. Selbst wenn jemand kompetent, zuverlässig und sympathisch ist, verliert er das Vertrauen, wenn man merkt, dass es ihm nur um sich selbst geht.
B: Das leuchtet ein. Wir vertrauen niemandem, bei dem wir das Gefühl haben, er wolle uns nur benutzen.
A: Genau. Und Vertrauen hat eine weitere wichtige Eigenschaft: Es entsteht langsam und vergeht schnell. Es gibt dazu ein schönes Bild: Vertrauen kommt zu Fuß und geht zu Pferd.
B: Ein treffendes Sprichwort. Man baut es über Monate auf, und mit einem einzigen Vertrauensbruch ist es dahin.
A: Gut. Der zweite Faktor ist das, was der Psychologe Robert Cialdini als Prinzipien der Überzeugung beschrieben hat. Darüber sprechen wir ausführlicher in Folge sechsundachtzig. Aber ein Prinzip ist für die laterale Führung besonders wichtig: die Reziprozität, also die Gegenseitigkeit.
B: Wer gibt, dem wird gegeben.
A: Genau. Menschen fühlen sich verpflichtet, einen Gefallen zu erwidern. Wer anderen hilft, ohne sofort etwas zurückzuverlangen, baut ein Netzwerk von Wohlwollen auf. Und wenn man dann selbst Unterstützung braucht, ist sie da.
B: Das ist eigentlich das Prinzip des Vitamin B, das wir so oft erwähnt haben. Aber in einer positiven, ehrlichen Form. Nicht als Klüngel, sondern als Gemeinschaft.
A: „Klüngel“ ist ein schönes Wort aus dem Rheinland. Es bezeichnet ein Netzwerk, in dem man sich gegenseitig Vorteile verschafft, oft auf nicht ganz saubere Weise. Besonders in Köln spricht man vom Kölner Klüngel.
B: Der dritte Faktor: die gemeinsame Vision. Wer andere ohne formale Macht führen will, muss ihnen einen Sinn vermitteln. Warum lohnt es sich, bei diesem Projekt mitzumachen? Was ist das gemeinsame Ziel?
A: Der Autor Simon Sinek hat dafür ein bekanntes Modell entwickelt, den „Golden Circle“. Er sagt, die meisten Menschen und Organisationen kommunizieren von außen nach innen: Was machen wir, wie machen wir es, und manchmal, warum. Aber inspirierende Führungspersönlichkeiten kommunizieren von innen nach außen. Sie beginnen mit dem Warum.
B: Also nicht: „Wir entwickeln eine neue Software.“ Sondern: „Wir wollen, dass Pflegekräfte mehr Zeit für ihre Patienten haben. Darum entwickeln wir eine Software, die ihnen die Dokumentation abnimmt.“
A: Genau. Das Warum motiviert. Das Was allein nicht. Und das passt zu dem, was wir in Folge siebenundsechzig über die intrinsische Motivation gesagt haben. Menschen engagieren sich für etwas, das sie für sinnvoll halten.
B: Und jetzt ein Bereich, in dem das Führen ohne Hierarchie besonders radikal umgesetzt wird. Es gibt Unternehmen, die die klassische Hierarchie weitgehend abgeschafft haben. Man spricht von Holakratie oder von selbstorganisierten Teams.
A: Ein bekanntes Beispiel aus den Niederlanden ist Buurtzorg, ein Pflegedienst. Er arbeitet mit kleinen, selbstorganisierten Teams von etwa zehn bis zwölf Pflegekräften, ohne Teamleitung im klassischen Sinne. Die Teams organisieren ihre Arbeit selbst, stellen selbst neues Personal ein, teilen die Aufgaben untereinander auf.
B: Und funktioniert das?
A: Erstaunlich gut. Buurtzorg ist mit mehreren tausend Pflegekräften gewachsen, die Zufriedenheit der Mitarbeiter und der Patienten gilt als sehr hoch, und die Verwaltungskosten sind deutlich niedriger als bei vergleichbaren Anbietern. Der Belgier Frederic Laloux hat solche Organisationen in seinem Buch „Reinventing Organizations“ beschrieben. Das Buch hat in Deutschland eine regelrechte Bewegung ausgelöst.
B: Wobei ich da auch kritische Stimmen nicht unterschlagen möchte. Nicht jedes Experiment mit Hierarchielosigkeit ist geglückt. Einige Unternehmen, die mit großem Pathos die Holakratie eingeführt haben, sind später zurückgerudert.
A: „Zurückrudern“ heißt: eine Position oder Entscheidung teilweise wieder zurücknehmen. Wie ein Ruderboot, das rückwärts fährt.
B: Genau. Und es gibt eine sehr kluge Kritik von der Feministin Jo Freeman aus den Siebzigerjahren. Ihr Essay heißt „Die Tyrannei der Strukturlosigkeit“. Ihre These: Es gibt keine wirklich strukturlosen Gruppen. Wenn man formale Hierarchien abschafft, entstehen informelle Hierarchien. Die sind aber unsichtbar und deshalb viel schwerer zu kontrollieren und zu kritisieren.
A: Das ist ein sehr scharfsinniger Gedanke. In einer Gruppe ohne offizielle Leitung bestimmen oft diejenigen, die am lautesten sind, die die meisten Freunde haben oder die am längsten dabei sind. Und niemand kann sie zur Rechenschaft ziehen, weil sie offiziell gar keine Macht haben.
B: „Jemanden zur Rechenschaft ziehen“ heißt: verlangen, dass jemand für sein Handeln die Verantwortung übernimmt und es erklärt. Insofern ist Hierarchie nicht per se schlecht. Sie kann sogar schützen, weil sie Verantwortlichkeiten klar macht.
A: Genau. Die Frage ist also nicht „Hierarchie ja oder nein“, sondern welche Form von Struktur einer bestimmten Aufgabe angemessen ist. Bei einem Feuerwehreinsatz braucht man eine klare Befehlskette. Bei einem kreativen Projekt eher nicht.
B: Jetzt zur Geschichte. Und diesmal geht es um Julien. Der ja inzwischen eine ganz besondere Rolle an der Programmierschule hat, ohne der Chef zu sein.
A: Ja, Herr Yilmaz und Katrin leiten die Schule. Aber Julien hat eine Aufgabe bekommen, die genau zu unserem Thema passt. Die Schule hat beschlossen, zusammen mit den Campussen in Wolfsburg, Heilbronn und Wien ein gemeinsames Mentoring-Programm aufzubauen. Und Julien soll das koordinieren.
B: Koordinieren, aber ohne Weisungsbefugnis? Also ohne das Recht, anderen Anweisungen zu geben?
A: Genau. Die Kollegen an den anderen Campussen sind ihm nicht unterstellt. Sie haben ihre eigenen Chefs, ihre eigenen Prioritäten und ihre eigene Arbeit. Und Julien muss sie überzeugen, Zeit und Energie in das gemeinsame Projekt zu stecken.
B: Eine klassische Situation des Führens ohne Hierarchie. Wie ist er vorgegangen?
A: Am Anfang hat er einen Fehler gemacht. Er hat eine lange E-Mail mit einem detaillierten Plan an alle geschickt. Mit Fristen, Aufgaben und Zuständigkeiten. Wie ein Chef.
B: Und die Reaktion?
A: Höflich gesagt: verhalten. „Verhalten“ heißt hier: zurückhaltend, ohne Begeisterung. Aus Wien kam gar keine Antwort. Aus Heilbronn eine knappe Mail, sie hätten gerade keine Kapazitäten. Und aus Wolfsburg eine leicht gereizte Nachfrage, wer das eigentlich entschieden habe.
B: Hahaha. Typisch. Niemand lässt sich gern von jemandem Aufgaben zuteilen, der dazu nicht befugt ist.
A: Genau. Julien war frustriert und hat mit Katrin darüber gesprochen. Und Katrin hat ihm einen klugen Rat gegeben: „Du hast mit dem Was angefangen. Fang mit dem Warum an. Und bevor du etwas forderst, hör erst mal zu.“
B: Simon Sinek und die Reziprozität. Und dann?
A: Julien hat jeden Campus persönlich besucht. Er ist nach Wien gefahren, nach Heilbronn und nach Wolfsburg. Und er hat nicht seinen Plan präsentiert, sondern Fragen gestellt. Was sind eure größten Herausforderungen? Wo verlieren Studierende die Motivation? Was würde euch die Arbeit erleichtern?
B: Und was kam dabei heraus?
A: Er hat festgestellt, dass alle das gleiche Problem hatten. Viele Studierende brachen in den ersten Monaten ab, weil sie sich allein gelassen fühlten. Besonders diejenigen, die keine Erfahrung mit dem Programmieren hatten und aus Familien ohne akademischen Hintergrund kamen. Wie Lea.
B: Das gemeinsame Warum.
A: Genau. Und in Wien hat er außerdem etwas angeboten, bevor er etwas verlangt hat. Der Wiener Campus hatte Probleme mit einem Teil ihrer Lernplattform. Und Julien hat ihnen geholfen, das Problem zu lösen. An einem Wochenende, ohne Gegenleistung.
B: Reziprozität. Er hat zuerst gegeben.
A: Ja. Und als er dann zwei Monate später ein gemeinsames Treffen vorgeschlagen hat, kamen alle. Und er hat nicht seinen alten Plan präsentiert, sondern gesagt: „Wir haben alle das gleiche Problem. Lasst uns gemeinsam eine Lösung finden.“ Und das Mentoring-Programm haben sie dann zusammen entworfen. Jeder Campus hat eigene Ideen eingebracht.
B: Und es ist dann ihr gemeinsames Projekt und nicht mehr nur Juliens Projekt.
A: Genau. Das ist der entscheidende Unterschied. Menschen unterstützen, was sie mitgestaltet haben. Und das Ergebnis? Nach einem Jahr ist die Abbruchquote an allen vier Campussen deutlich gesunken. Und das Programm wird inzwischen auch an anderen Standorten der Schule in Europa übernommen.
B: Und Julien? Hat er eine Beförderung bekommen?
A: Das ist das Interessante. Herr Yilmaz hat ihm eine Leitungsposition angeboten. Mit Personalverantwortung. Und Julien hat abgelehnt.
B: Abgelehnt? Warum?
A: Er hat gesagt: „Ich habe gemerkt, dass ich ohne formale Macht mehr bewirken kann. Weil die Leute mir folgen, weil sie wollen, nicht weil sie müssen. Das möchte ich nicht verlieren.“
B: Ein bemerkenswerter Satz. Jetzt bist du dran, Hörer, Hörerin. Denk an eine Situation, in der du jemanden überzeugen musstest, ohne Macht über ihn zu haben. Was hat funktioniert? Was nicht? Und bilde dabei möglichst viele Wörter aus einer Wortfamilie, etwa „führen“, „trauen“ oder „stimmen“: vertrauen, das Vertrauen, vertrauenswürdig, zutrauen, misstrauisch.
A: Und überleg dir: Wie würde die Vertrauensformel bei dir aussehen? In welchem der Faktoren bist du stark, in welchem könntest du dich verbessern?
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: ins Wanken geraten. Instabil werden, an Gültigkeit verlieren.
B: Wort Nummer zwei: innehalten. Kurz aufhören, um nachzudenken.
A: Wort Nummer drei: der Klüngel. Ein Netzwerk, in dem man sich gegenseitig Vorteile verschafft, oft nicht ganz sauber.
B: Wort Nummer vier: zurückrudern. Eine Position oder Entscheidung teilweise zurücknehmen.
A: Wort Nummer fünf: jemanden zur Rechenschaft ziehen. Verlangen, dass jemand die Verantwortung übernimmt und sein Handeln erklärt.
B: Und Wort Nummer sechs: die Weisungsbefugnis. Das Recht, anderen Anweisungen zu geben.
A: Noch einmal: ins Wanken geraten, innehalten, der Klüngel, zurückrudern, jemanden zur Rechenschaft ziehen, die Weisungsbefugnis.
B: Was nehmen wir mit? Macht beruht auf Zwang, Autorität auf Anerkennung. Führen ohne Hierarchie bedeutet Einfluss durch Autorität.
A: Die Vertrauensformel: Glaubwürdigkeit, Zuverlässigkeit und Nähe, geteilt durch die Selbstbezogenheit. Und Vertrauen kommt zu Fuß und geht zu Pferd.
B: Wichtige Hebel sind Reziprozität und ein gemeinsames Warum. Und Menschen unterstützen, was sie mitgestaltet haben.
A: Aber Achtung vor der Tyrannei der Strukturlosigkeit: Ohne formale Hierarchie entstehen oft unsichtbare informelle Hierarchien.
B: Das ist das Ende von Folge vierundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und fang beim nächsten Projekt mit dem Warum an. Tschüss!
B: Servus!
VOCAB: ins Wanken geraten | Instabil werden, an Gültigkeit verlieren. | 🌊
VOCAB: innehalten | Kurz aufhören, um nachzudenken. | ⏸️
VOCAB: der Klüngel | Ein Netzwerk, in dem man sich gegenseitig Vorteile verschafft. | 🕸️
VOCAB: zurückrudern | Eine Position oder Entscheidung teilweise zurücknehmen. | 🚣
VOCAB: jemanden zur Rechenschaft ziehen | Verlangen, dass jemand die Verantwortung für sein Handeln übernimmt. | ⚖️
VOCAB: die Weisungsbefugnis | Das Recht, anderen Anweisungen zu geben. | 📋
QUIZ: Was ist der Unterschied zwischen Macht und Autorität? | Macht beruht auf Zwang, Autorität auf Anerkennung | Es gibt keinen Unterschied | Autorität beruht auf Geld | 1
QUIZ: Was steht in der Vertrauensformel im Nenner? | Die Kompetenz | Die Selbstbezogenheit | Die Zuverlässigkeit | 2
QUIZ: Was ist die These von „Die Tyrannei der Strukturlosigkeit“? | Ohne formale Hierarchie entstehen unsichtbare informelle Hierarchien | Strukturen sind immer schlecht | Gruppen brauchen keinen Leiter | 1
QUIZ: Was war Juliens erster Fehler? | Er hat eine lange E-Mail mit einem detaillierten Plan geschickt wie ein Chef | Er hat niemanden kontaktiert | Er hat zu viel Geld ausgegeben | 1
QUIZ: Warum hat Julien die Leitungsposition abgelehnt? | Weil er ohne formale Macht mehr bewirken kann | Weil das Gehalt zu niedrig war | Weil er nach Lyon zurück wollte | 1
`;

DATA.podScripts.ep085 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge fünfundachtzig. Heute nehmen wir uns eine der umstrittensten wirtschafts- und sozialpolitischen Ideen unserer Zeit vor: das bedingungslose Grundeinkommen.
A: Die Idee ist ebenso einfach wie radikal: Jeder Bürger erhält vom Staat jeden Monat einen festen Geldbetrag. Ohne Bedingungen, ohne Bedürftigkeitsprüfung, ohne Gegenleistung. Egal ob er arbeitet oder nicht, egal ob er arm oder reich ist.
B: Und an dieser Idee scheiden sich die Geister. „Daran scheiden sich die Geister“ heißt: Die Meinungen dazu sind sehr unterschiedlich, man kann sich nicht einigen. Die einen sehen darin die Lösung für Armut, für die Folgen der Automatisierung und für mehr Freiheit. Die anderen halten es für unbezahlbar, ungerecht und für eine Einladung zum Nichtstun.
A: Sprachlich widmen wir uns heute einem Merkmal, das besonders die Wirtschafts-, Verwaltungs- und Pressesprache prägt: den Nomen-Verb-Verbindungen. Wir haben sie schon in Folge sechsundsechzig kennengelernt. Heute üben wir sie auf höherem Niveau.
B: Beispiele aus dem heutigen Kontext: „Anspruch erheben auf“, „zur Verfügung stellen“, „in Kraft treten“, „zur Diskussion stellen“, „in Frage stellen“, „eine Rolle spielen“, „Kritik üben an“, „zum Ausdruck bringen“, „Rücksicht nehmen auf“, „in Erwägung ziehen“.
A: Viele dieser Verbindungen haben eine einfachere Entsprechung. „In Erwägung ziehen“ heißt „erwägen“ oder „überlegen“. „Kritik üben an“ heißt „kritisieren“. Aber die Nomen-Verb-Verbindung klingt formeller und sachlicher. Und manchmal hat sie eine leicht andere Nuance.
B: Gut. Bevor wir argumentieren, ein Blick auf die Geschichte der Idee. Denn sie ist viel älter, als man denkt.
A: In der Tat. Schon im sechzehnten Jahrhundert findet sich in Thomas Morus' „Utopia“ ein Gedanke in diese Richtung. Und im achtzehnten Jahrhundert schlug der amerikanische Revolutionär Thomas Paine vor, jedem Bürger bei Erreichen der Volljährigkeit eine Grundausstattung zu zahlen, als Entschädigung für den Verlust des gemeinschaftlichen Bodens.
B: Und interessanterweise wurde die Idee im zwanzigsten Jahrhundert von ganz unterschiedlichen politischen Lagern vertreten. Der liberale Ökonom Milton Friedman, ein Vordenker des Neoliberalismus, schlug eine negative Einkommensteuer vor, ein verwandtes Konzept. Und Martin Luther King forderte ein garantiertes Einkommen als Mittel gegen die Armut.
A: Das ist bemerkenswert. Eine Idee, die sowohl Marktliberale als auch Linke unterstützen. Wenn auch aus völlig unterschiedlichen Gründen.
B: Genau. Die Liberalen sehen darin eine Möglichkeit, den komplizierten, bürokratischen Sozialstaat durch ein einfaches, unbürokratisches System zu ersetzen. Die Linken sehen darin ein Mittel, Menschen von der Notwendigkeit der Lohnarbeit zu befreien und Armut abzuschaffen.
A: Und in Deutschland war einer der bekanntesten Fürsprecher Götz Werner, der Gründer der Drogeriekette dm. Ein Unternehmer, der sich vehement für ein Grundeinkommen eingesetzt hat.
B: „Vehement“ heißt: mit großem Nachdruck, sehr leidenschaftlich. Gut, dann steigen wir in die Debatte ein. Ich übernehme die Pro-Seite.
A: Und ich die Kontra-Seite. Wobei ich betonen möchte, dass ich persönlich hin- und hergerissen bin.
B: Mein erstes Argument: die Würde und die Freiheit. Unser heutiges Sozialsystem, in Deutschland das Bürgergeld, ist an Bedingungen geknüpft. Wer Leistungen bezieht, muss nachweisen, dass er bedürftig ist, muss seine Vermögensverhältnisse offenlegen, muss sich bewerben und kann sanktioniert werden. Das empfinden viele Menschen als entwürdigend. Ein Grundeinkommen würde diese Kontrolle und diese Stigmatisierung beenden.
A: Ich verstehe das Argument. Allerdings möchte ich zu bedenken geben, dass die Gesellschaft durchaus einen legitimen Anspruch darauf erheben kann, dass Menschen, die arbeiten können, auch einen Beitrag leisten. Es gibt ein Prinzip der Gegenseitigkeit. Warum soll die Pflegekraft, die Nachtschichten schiebt, mit ihren Steuern das Grundeinkommen eines Menschen finanzieren, der sich entscheidet, gar nicht zu arbeiten?
B: Ein klassischer Einwand. Und meine Antwort: Erstens würde auch die Pflegekraft das Grundeinkommen bekommen. Zweitens zeigen Experimente, dass die allermeisten Menschen trotzdem weiterarbeiten. Und drittens leisten viele Menschen, die heute als „nicht arbeitend“ gelten, enorm viel unbezahlte Arbeit. Kindererziehung, Pflege von Angehörigen, Ehrenamt. Wir haben in Folge siebenundfünfzig darüber gesprochen.
A: Das ist ein wichtiger Punkt, gerade aus feministischer Perspektive. Ein großer Teil der unbezahlten Sorgearbeit wird von Frauen geleistet. Ein Grundeinkommen würde diese Arbeit gewissermaßen anerkennen.
B: Mein zweites Argument: die Automatisierung. Wir haben in Folge dreiundsechzig über künstliche Intelligenz gesprochen. Wenn Maschinen immer mehr Arbeit übernehmen, könnten künftig nicht mehr genug Arbeitsplätze für alle vorhanden sein. Ein Grundeinkommen würde die Menschen absichern und die Produktivitätsgewinne gerechter verteilen.
A: Hier muss ich Kritik üben. Diese Befürchtung gab es bei jeder technologischen Revolution. Und bisher hat sie sich nie bewahrheitet. Es sind immer neue Arbeitsplätze entstanden. Wer jetzt ein Grundeinkommen mit dem Ende der Arbeit begründet, stützt sich auf eine Prognose, die zumindest fraglich ist.
B: Das stimmt zwar für die Vergangenheit. Aber es ist keine Garantie für die Zukunft. Und selbst wenn neue Jobs entstehen: Der Übergang kann für viele Menschen hart sein. Ein Grundeinkommen würde diesen Übergang abfedern. „Abfedern“ heißt: die Härte eines Stoßes mildern.
A: Gut. Dann komme ich zu meinem Hauptargument: der Finanzierbarkeit. Rechnen wir einmal grob. Deutschland hat etwa vierundachtzig Millionen Einwohner. Wenn jeder Erwachsene tausend Euro im Monat bekäme und Kinder etwas weniger, kämen wir auf eine Summe von weit über achthundert Milliarden Euro pro Jahr. Das entspricht einem sehr großen Teil der gesamten Staatsausgaben.
B: Die Zahl klingt riesig. Aber sie ist irreführend, weil man die Einsparungen gegenrechnen muss. Das Grundeinkommen würde viele bestehende Sozialleistungen ersetzen. Bürgergeld, Kindergeld, Wohngeld, Teile der Rente, BAföG. Und die riesige Bürokratie, die diese Leistungen verwaltet.
A: Aber nicht alle. Ein Mensch mit einer schweren Behinderung braucht deutlich mehr als tausend Euro. Diese Leistungen müssten zusätzlich bestehen bleiben. Und es bleibt eine gewaltige Finanzierungslücke, die nur durch deutlich höhere Steuern geschlossen werden könnte. Manche Modelle schlagen eine drastisch erhöhte Mehrwertsteuer vor, was wiederum Geringverdiener überproportional belasten würde.
B: Das ist zugegebenermaßen die Achillesferse der Idee. „Die Achillesferse“ ist der verwundbarste, schwächste Punkt, nach dem griechischen Helden Achilles, der nur an der Ferse verwundbar war.
A: Und mein drittes Argument: die Inflation. Wenn alle Menschen plötzlich mehr Geld haben, könnten die Preise steigen, besonders die Mieten. Vermieter könnten die Mieten einfach um den Betrag des Grundeinkommens erhöhen. Und dann wäre der Effekt verpufft.
B: Ein ernstzunehmender Einwand, der allerdings umstritten ist. Da das Grundeinkommen größtenteils durch Steuern finanziert würde, also umverteilt und nicht neu gedruckt, wäre der Inflationseffekt vermutlich begrenzt. Aber bei den Mieten hast du einen Punkt. Das müsste man durch Mietregulierung flankieren.
A: Gut. Und was sagt die Empirie? Es gab ja eine ganze Reihe von Experimenten.
B: Ja. Das bekannteste in Europa fand von zweitausendsiebzehn bis zweitausendachtzehn in Finnland statt. Zweitausend Arbeitslose bekamen zwei Jahre lang monatlich fünfhundertsechzig Euro, ohne Bedingungen.
A: Und das Ergebnis?
B: Die Beschäftigung stieg leicht, aber nicht dramatisch. Die Teilnehmer arbeiteten also keineswegs weniger, eher ein bisschen mehr. Vor allem aber berichteten sie von deutlich weniger Stress, besserer Gesundheit und mehr Vertrauen in ihre Zukunft und in die Institutionen.
A: Und in Deutschland gab es ein besonders spannendes Experiment.
B: Ja, das Pilotprojekt Grundeinkommen des Vereins „Mein Grundeinkommen“ zusammen mit dem Deutschen Institut für Wirtschaftsforschung. Hundertzweiundzwanzig Menschen bekamen drei Jahre lang monatlich zwölfhundert Euro. Und eine Vergleichsgruppe bekam nichts.
A: Und die Ergebnisse wurden zweitausendvierundzwanzig veröffentlicht. Was kam heraus?
B: Die Empfänger arbeiteten im Durchschnitt nicht weniger als die Vergleichsgruppe. Aber viele haben ihre Arbeit verändert. Sie haben Weiterbildungen gemacht, den Job gewechselt, sich selbstständig gemacht. Und sie haben deutlich mehr gespart und mehr gespendet. Und ihre psychische Gesundheit hat sich verbessert.
A: Wobei man kritisch anmerken muss: Diese Experimente sind zeitlich begrenzt und betreffen nur kleine Gruppen. Sie können nicht abbilden, was passiert, wenn eine ganze Gesellschaft ein Grundeinkommen bekommt. Und die Frage der Finanzierung stellt sich in einem Experiment gar nicht, weil das Geld aus Spenden kommt.
B: Das ist richtig. Die Experimente zeigen, wie Menschen individuell reagieren. Aber nicht, wie sich eine ganze Volkswirtschaft verändert. Diese Frage bleibt letztlich offen.
A: Und es gibt auch Zwischenformen. Ein solidarisches Grundeinkommen, ein Grundeinkommen nur für bestimmte Gruppen, eine negative Einkommensteuer. Oder das Grundeinkommen für junge Menschen, wie es manche vorgeschlagen haben, um ihnen einen freien Start ins Leben zu ermöglichen.
B: Und in Österreich wurde übrigens im Jahr zweitausendzweiundzwanzig ein Volksbegehren für ein bedingungsloses Grundeinkommen durchgeführt. Es hat die notwendige Zahl von Unterschriften erreicht und wurde deshalb im Parlament behandelt, hatte aber keine politischen Konsequenzen.
A: Jonas, ein Aspekt kommt mir in der Debatte oft zu kurz: Was macht ein Grundeinkommen mit unserem Verständnis von Arbeit? In Deutschland definieren sich sehr viele Menschen über ihren Beruf. Die erste Frage auf einer Party lautet ja meistens: „Und, was machst du so?“
B: Das stimmt. Und der Soziologe Max Weber, schon wieder er, hat diese protestantische Arbeitsethik beschrieben, nach der harte Arbeit fast eine moralische Pflicht ist. Wer nicht arbeitet, gilt schnell als faul oder als Schmarotzer, wie es abwertend heißt.
A: Ein Grundeinkommen würde diese Verknüpfung von Erwerbsarbeit und Würde in Frage stellen. Und das macht vielen Menschen Angst. Nicht nur aus wirtschaftlichen, sondern aus fast existenziellen Gründen. Was gibt dem Leben einen Sinn, wenn nicht die Arbeit?
B: Wobei man auch umgekehrt fragen könnte: Ist es nicht seltsam, dass wir den Wert eines Menschen so stark an seine Erwerbstätigkeit koppeln? Die Pflege der kranken Mutter ist doch nicht weniger wertvoll als die Arbeit in einer Werbeagentur.
A: Ein Gedanke, der sich nicht so leicht beiseiteschieben lässt.
A: Jetzt zur Geschichte. Und diesmal geht es um Mira. Die ja in Folge vierundsechzig mit dem Theaterspielen angefangen hat.
B: Ja, die Projektmanagerin bei einer Versicherung, die eigentlich Schauspielerin werden wollte.
A: Genau. Und Mira hat sich für die Verlosung eines Grundeinkommens beworben. Ein Verein in Deutschland verlost regelmäßig Grundeinkommen von tausend Euro im Monat für ein Jahr, finanziert durch Spenden.
B: Und? Hat sie gewonnen?
A: Ja! Sie hat es selbst kaum glauben können. Und dann stand sie vor einer großen Entscheidung. Sollte sie weiter in der Versicherung arbeiten? Oder das Jahr nutzen, um etwas Neues zu wagen?
B: Was hat sie gemacht?
A: Sie hat ihre Arbeitszeit in der Versicherung halbiert. Mit dem Grundeinkommen konnte sie sich das leisten. Und die gewonnene Zeit hat sie in das Theater gesteckt. Sie hat sich bei mehreren freien Theatern beworben, hat an Castings teilgenommen und eine Schauspielausbildung an einer Abendschule begonnen.
B: Eine große Veränderung. Hat sie Angst gehabt?
A: Am Anfang sehr. Sie hat gesagt, das Gefährlichste an der Freiheit sei, dass man plötzlich keine Ausreden mehr habe. Früher konnte sie sagen: „Ich würde ja gern, aber ich muss arbeiten.“ Jetzt musste sie sich ehrlich fragen, was sie eigentlich wolle.
B: Ein sehr tiefsinniger Gedanke. Die Freiheit kann auch beängstigend sein.
A: Ja. Und nach acht Monaten kam der Durchbruch. Sie hat eine Rolle in einem Stück an einem kleinen Theater in Kreuzberg bekommen. Eine bezahlte Rolle. Nicht viel Geld, aber ihre erste professionelle Rolle.
B: Wunderbar! Und nach dem Jahr? Als das Grundeinkommen aufhörte?
A: Das ist der interessante Teil. Sie ist nicht zurück zur Versicherung in Vollzeit. Sie arbeitet jetzt zwei Tage pro Woche dort und hat sich als Schauspielerin und Theaterpädagogin selbstständig gemacht. Sie gibt Theaterkurse für Kinder und für Geflüchtete. Und sie verdient insgesamt etwas weniger als früher, aber sie sagt, sie sei unendlich viel glücklicher.
B: Und was sagt sie über das Grundeinkommen?
A: Sie hat gesagt: „Das Geld hat mir nicht das Leben geändert. Aber es hat mir den Mut gegeben, es selbst zu ändern. Es war wie ein Sicherheitsnetz, das mir erlaubt hat, endlich zu springen.“ Und sie hat ergänzt: „Aber ich weiß auch, dass ich privilegiert war. Ich hatte eine gute Ausbildung und Ersparnisse. Ob das für alle so funktionieren würde, kann ich nicht sagen.“
B: Eine sehr ehrliche und differenzierte Einschätzung. Genau wie es sich für eine C1-Diskussion gehört. Hahaha.
A: Hahaha. Jetzt bist du dran, Hörer, Hörerin. Bist du für oder gegen ein bedingungsloses Grundeinkommen? Formuliere deine Position mit möglichst vielen Nomen-Verb-Verbindungen: „Ich möchte zu bedenken geben, dass …“ „An dieser Idee übe ich Kritik, weil …“ „Man sollte in Erwägung ziehen, …“
B: Und frag dich ehrlich: Was würdest du tun, wenn du ein Jahr lang tausend Euro im Monat ohne Bedingungen bekämst? Würdest du weniger arbeiten? Oder etwas anderes?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: Daran scheiden sich die Geister. Die Meinungen sind sehr unterschiedlich.
A: Wort Nummer zwei: in Erwägung ziehen. Etwas ernsthaft überlegen.
B: Wort Nummer drei: vehement. Mit großem Nachdruck, sehr leidenschaftlich.
A: Wort Nummer vier: abfedern. Die Härte von etwas mildern.
B: Wort Nummer fünf: die Achillesferse. Der verwundbarste, schwächste Punkt.
A: Und Wort Nummer sechs: flankieren. Mit zusätzlichen Maßnahmen unterstützen und absichern.
B: Noch einmal: Daran scheiden sich die Geister, in Erwägung ziehen, vehement, abfedern, die Achillesferse, flankieren.
A: Was nehmen wir mit? Das bedingungslose Grundeinkommen ist eine alte Idee, die von Liberalen wie von Linken unterstützt wird, wenn auch aus unterschiedlichen Gründen.
B: Pro: Würde und Freiheit, Anerkennung unbezahlter Arbeit, Absicherung gegen die Folgen der Automatisierung.
A: Kontra: das Prinzip der Gegenseitigkeit, die enorme Finanzierungslücke und mögliche Preissteigerungen, besonders bei den Mieten.
B: Die Experimente in Finnland und Deutschland zeigen: Die Menschen arbeiten nicht weniger, sind aber gesünder und zuversichtlicher. Aber sie können nicht abbilden, was in einer ganzen Gesellschaft passieren würde.
A: Das ist das Ende von Folge fünfundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und denk an Mira: Manchmal braucht man nur ein Sicherheitsnetz, um endlich zu springen. Servus!
A: Tschüss!
VOCAB: Daran scheiden sich die Geister | Die Meinungen sind sehr unterschiedlich. | ⚔️
VOCAB: in Erwägung ziehen | Etwas ernsthaft überlegen. | 🤔
VOCAB: vehement | Mit großem Nachdruck, sehr leidenschaftlich. | 🔥
VOCAB: abfedern | Die Härte von etwas mildern. | 🛏️
VOCAB: die Achillesferse | Der verwundbarste, schwächste Punkt. | 🦶
VOCAB: flankieren | Mit zusätzlichen Maßnahmen unterstützen und absichern. | 🛡️
QUIZ: Welcher deutsche Unternehmer setzte sich vehement für ein Grundeinkommen ein? | Götz Werner, der Gründer von dm | Carl Benz | Konrad Zuse | 1
QUIZ: Was ist laut Lena die Achillesferse des Grundeinkommens? | Die Finanzierbarkeit | Die Bürokratie | Die Würde | 1
QUIZ: Was war ein Ergebnis des finnischen Experiments? | Die Menschen arbeiteten viel weniger | Die Menschen hatten weniger Stress und eine bessere Gesundheit | Das Experiment wurde abgebrochen | 2
QUIZ: Was haben die Empfänger im deutschen Pilotprojekt oft gemacht? | Sie haben aufgehört zu arbeiten | Weiterbildungen gemacht, den Job gewechselt und mehr gespart | Sie sind ins Ausland gezogen | 2
QUIZ: Was hat Mira mit dem gewonnenen Grundeinkommen gemacht? | Sie hat ihre Arbeitszeit halbiert und Theater gespielt | Sie hat eine Weltreise gemacht | Sie hat alles gespart | 1
`;

DATA.podScripts.ep086 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge sechsundachtzig. Heute gehen wir zweieinhalbtausend Jahre zurück, um etwas sehr Aktuelles zu verstehen. Unser Thema ist die Kunst der Überzeugung. Die Rhetorik.
A: Die Rhetorik ist die Lehre von der wirkungsvollen Rede. Und ihre Grundlagen wurden im antiken Griechenland gelegt, vor allem von Aristoteles. Und das Erstaunliche ist: Seine Analyse ist bis heute so zutreffend, dass sie in jedem Kommunikationsseminar, in der Werbung und in der Politik verwendet wird.
B: Aristoteles hat drei Überzeugungsmittel unterschieden, die man bis heute mit ihren griechischen Namen bezeichnet: Ethos, Pathos und Logos. Und wer diese drei versteht, durchschaut nicht nur, wie gute Redner überzeugen, sondern auch, wie man manipuliert wird.
A: Sprachlich widmen wir uns heute rhetorischen Stilmitteln. Also sprachlichen Mitteln, die eine Rede eindringlicher, einprägsamer und überzeugender machen. Die Anapher, die Klimax, die rhetorische Frage, die Antithese, die Metapher. Und wir werden sie nicht nur erklären, sondern auch selbst benutzen.
B: Und wir sprechen über ein Thema, das besonders in der deutschen Geschichte eine dunkle Seite hat. Denn die Kunst der Überzeugung kann missbraucht werden. Und das Deutschland des zwanzigsten Jahrhunderts ist ein erschütterndes Beispiel dafür.
A: Darauf kommen wir später. Fangen wir mit dem ersten Überzeugungsmittel an: dem Ethos.
B: Das Ethos bezieht sich auf die Glaubwürdigkeit des Redners. Wir lassen uns von jemandem überzeugen, den wir für kompetent, vertrauenswürdig und moralisch integer halten. Bevor wir überhaupt hören, was jemand sagt, prüfen wir, wer es sagt.
A: Ein Arzt, der über Gesundheit spricht, hat mehr Ethos als ein Schauspieler. Wobei die Werbung genau mit diesem Effekt spielt. Ein Schauspieler im weißen Kittel, der eine Zahnpasta empfiehlt, borgt sich das Ethos eines Zahnarztes.
B: „Sich etwas borgen“ heißt: sich etwas leihen. Und das ist ein interessanter Punkt: Ethos kann man sich erarbeiten, aber man kann es auch vortäuschen. Durch Titel, Kleidung, Auftreten, eine tiefe Stimme. Studien zeigen übrigens, dass wir großen Menschen und Menschen mit tiefer Stimme unbewusst mehr Kompetenz zuschreiben.
A: Was natürlich vollkommen irrational ist. Und das hängt mit der Vertrauensformel aus Folge vierundachtzig zusammen. Ethos entsteht durch Glaubwürdigkeit, Zuverlässigkeit und den Eindruck, dass es dem Redner nicht nur um sich selbst geht.
B: Ein Redner kann sein Ethos auch gezielt stärken. Indem er von eigenen Erfahrungen erzählt. Indem er Schwächen zugibt. Paradoxerweise erhöht das oft die Glaubwürdigkeit. Wer zugibt, sich auch geirrt zu haben, wirkt ehrlicher.
A: Das zweite Überzeugungsmittel ist das Pathos. Das Pathos zielt auf die Gefühle des Publikums. Auf Mitleid, Angst, Wut, Hoffnung, Stolz, Empörung. Menschen werden selten allein durch Argumente zum Handeln bewegt. Sie müssen emotional berührt werden.
B: Und das ist bei Spendenaufrufen besonders deutlich. Eine Hilfsorganisation zeigt nicht eine Statistik über Millionen hungernder Kinder. Sie zeigt ein einziges Kind mit großen Augen und erzählt seine Geschichte. Das berührt uns viel stärker.
A: Dazu gibt es sogar ein psychologisches Phänomen, den sogenannten Identifiable Victim Effect. Wir sind eher bereit, einem einzelnen, identifizierbaren Menschen zu helfen als vielen anonymen. Der Satz „Ein einzelner Tod ist eine Tragödie, eine Million Tote sind eine Statistik“ wird oft zitiert, wobei seine Herkunft unklar ist.
B: Ein zynischer Satz, der aber eine psychologische Wahrheit trifft. Und hier liegt die Gefahr des Pathos. Gefühle können das Denken ausschalten. Wer Angst hat oder wütend ist, prüft Argumente weniger kritisch. Wir haben das in Folge siebzig bei den Fake News gesehen.
A: Das dritte Überzeugungsmittel ist der Logos. Der Logos bezieht sich auf die Argumentation selbst. Auf Logik, Beweise, Fakten, Zahlen, Beispiele. Man überzeugt, indem man einen Sachverhalt schlüssig begründet.
B: Und typischerweise würde man denken, dass der Logos das wichtigste Mittel sein sollte. Besonders in Deutschland, wo Sachlichkeit so geschätzt wird.
A: Genau. Und interessanterweise gibt es da kulturelle Unterschiede. In der deutschen Kommunikationskultur wird der Logos tendenziell stärker gewichtet. Eine Präsentation in Deutschland muss vor allem gut begründet und faktenbasiert sein. In der amerikanischen Kultur spielen Pathos und persönliche Geschichten oft eine größere Rolle.
B: Was erklärt, warum amerikanische Präsentationen auf Deutsche manchmal etwas überzogen und deutsche Präsentationen auf Amerikaner etwas trocken wirken. Hahaha.
A: Hahaha. Genau. Aber Aristoteles betont: Die wirkungsvollste Rede verbindet alle drei. Ein glaubwürdiger Redner mit einer schlüssigen Argumentation, der zugleich die Herzen berührt.
B: Gut. Jetzt zu den rhetorischen Stilmitteln. Lena, fang an.
A: Erstens: die Anapher. Das ist die Wiederholung desselben Wortes oder derselben Wortgruppe am Anfang aufeinanderfolgender Sätze. Das berühmteste Beispiel ist die Rede von Martin Luther King: „I have a dream.“ Er wiederholt diesen Satz immer wieder. Und dadurch entsteht ein mitreißender Rhythmus.
B: Auf Deutsch könnte man sagen: „Wir wollen eine Stadt, in der Kinder sicher spielen können. Wir wollen eine Stadt, in der niemand allein ist. Wir wollen eine Stadt, die allen gehört.“
A: Sehr gut! Zweitens: die Klimax. Das ist eine Steigerung. Man ordnet Begriffe so an, dass sie immer stärker werden. Das klassische Beispiel ist der Satz, den Julius Cäsar zugeschrieben wird: „Veni, vidi, vici.“ Ich kam, ich sah, ich siegte. Wir hatten ihn schon in Folge achtzig.
B: Oder: „Das ist gut, das ist großartig, das ist revolutionär.“ Drittens: die rhetorische Frage. Eine Frage, auf die man keine Antwort erwartet, weil die Antwort offensichtlich ist. „Wollen wir wirklich, dass unsere Kinder in einer zerstörten Umwelt aufwachsen?“ Niemand würde mit Ja antworten.
A: Viertens: die Antithese. Das ist die Gegenüberstellung von Gegensätzen. Sie schafft Spannung und Klarheit. Das berühmte Zitat von John F. Kennedy: „Fragt nicht, was euer Land für euch tun kann. Fragt, was ihr für euer Land tun könnt.“
B: Und Kennedy hat ja in Berlin den legendären Satz gesagt: „Ich bin ein Berliner.“ Neunzehnhundertdreiundsechzig, vor dem Schöneberger Rathaus.
A: Und es gibt eine hartnäckige Legende, dass er damit eigentlich gesagt habe, er sei ein Pfannkuchen. Weil in manchen Gegenden Deutschlands der Krapfen „Berliner“ heißt, wie wir in Folge vier gelernt haben.
B: Hahaha. Ja, das ist eine schöne Anekdote. Aber sie ist falsch. Der Satz war grammatikalisch völlig korrekt, und in Berlin selbst heißt das Gebäck ja „Pfannkuchen“. Niemand im Publikum hat das missverstanden. Aber die Legende hält sich hartnäckig.
A: Fünftens: die Metapher. Ein bildlicher Ausdruck, bei dem ein Wort in einer übertragenen Bedeutung verwendet wird. „Der Eiserne Vorhang“ für die Grenze zwischen Ost und West. „Das Rückgrat der Wirtschaft“ für den Mittelstand, darüber sprechen wir in Folge fünfundneunzig.
B: Und Metaphern sind besonders mächtig, weil sie unser Denken prägen. Ob man von einer „Flüchtlingswelle“ spricht oder von „Menschen, die Schutz suchen“, verändert die Wahrnehmung grundlegend. Eine Welle ist eine Naturgewalt, eine Bedrohung, gegen die man Dämme bauen muss.
A: Das ist ein ganz wichtiger Punkt. Sprache ist nie neutral. Die Wahl der Metapher ist bereits eine politische Entscheidung. Man spricht von „Framing“. Darüber sprechen wir ausführlicher in Folge einundneunzig, über die Frage, ob Sprache das Denken prägt.
B: Und jetzt die dunkle Seite. Denn alle diese Mittel können missbraucht werden. Und die deutsche Geschichte zeigt das auf erschütternde Weise.
A: Ja. Die Nationalsozialisten waren Meister der Propaganda. Joseph Goebbels leitete ein eigenes Ministerium für Volksaufklärung und Propaganda. Und Hitler selbst setzte in seinen Reden massiv auf Pathos. Auf Wut, auf Angst, auf das Gefühl der Demütigung nach dem Ersten Weltkrieg, auf Hass gegen Sündenböcke.
B: Ein Sündenbock ist jemand, dem man die Schuld für etwas gibt, wofür er nicht verantwortlich ist. Und die Nationalsozialisten machten die Juden zum Sündenbock für alle Probleme. Mit einer Rhetorik, die logisches Denken systematisch ausschaltete.
A: Es gibt eine berühmte Rede von Goebbels aus dem Jahr neunzehnhundertdreiundvierzig im Berliner Sportpalast. Die sogenannte Sportpalastrede. Er stellte der Menge mehrere rhetorische Fragen, die in der Frage gipfelten: „Wollt ihr den totalen Krieg?“ Und die Menge schrie begeistert: „Ja!“
B: Ein erschreckendes Beispiel dafür, wie rhetorische Fragen, Klimax und Massenpsychologie zusammenwirken, um Menschen zu manipulieren. Das war keine echte Frage, sondern eine inszenierte Zustimmung.
A: Und genau deshalb hat die Rhetorik in Deutschland nach dem Krieg lange einen schlechten Ruf gehabt. Ein Politiker, der zu leidenschaftlich redet, wirkte schnell verdächtig. Die Deutschen haben eine gewisse Skepsis gegenüber charismatischen Rednern entwickelt.
B: Was man an Angela Merkel gut sehen konnte. Sie war das Gegenteil einer leidenschaftlichen Rednerin. Nüchtern, sachlich, manchmal fast langweilig. Und vielleicht gerade deshalb hatte sie in Deutschland so viel Vertrauen. Ihr Ethos beruhte auf Sachlichkeit und Verlässlichkeit, nicht auf Pathos.
A: Interessanter Gedanke. Die Abwesenheit von Pathos als eigene Form von Ethos. Und was können wir tun, um uns vor Manipulation zu schützen?
B: Erstens: die Mittel kennen. Wer weiß, wie Manipulation funktioniert, erkennt sie leichter. Wenn man merkt, dass eine Rede vor allem an Gefühle appelliert, sollte man besonders wachsam sein.
A: Zweitens: zwischen Person und Argument trennen. Ein glaubwürdiger Mensch kann auch falsche Argumente vorbringen. Und ein unsympathischer Mensch kann recht haben.
B: Drittens: auf typische Fehlschlüsse achten. Zum Beispiel das „Argumentum ad hominem“. Man greift nicht das Argument an, sondern die Person. „Was weiß der schon, der hat ja nicht mal studiert.“ Oder der Strohmann-Trugschluss: Man verzerrt die Position des Gegners, um sie dann leichter angreifen zu können.
A: Und die falsche Dichotomie. „Entweder du bist für uns, oder du bist gegen uns.“ Als gäbe es nur zwei Möglichkeiten. Darüber sprechen wir ausführlich in Folge achtundneunzig, über Denkfehler.
B: Jetzt zur Geschichte. Und diesmal geht es um Amira und Lukas. Genauer gesagt: um ihre Hochzeit. Und um die Rede, die Julien als Trauzeuge halten soll.
A: Oh, wie schön! Julien ist Trauzeuge? Ein Trauzeuge ist eine Person, die bei der Hochzeit offiziell bezeugt, dass die Ehe geschlossen wurde. Und traditionell hält der Trauzeuge eine Rede.
B: Genau. Und Julien, der ja schon so viele Reden in unserer Geschichte gehalten hat, ist diesmal unglaublich nervös. Weil es eine Hochzeit ist. Weil alle Familien da sind, die marokkanische und die bayerische. Und weil die Rede persönlich und lustig und berührend sein soll.
A: Die höchste Kunst der Rhetorik! Was hat er gemacht?
B: Er hat sich Rat bei mir geholt. Wir haben uns im Café getroffen. Und ich habe ihm von Ethos, Pathos und Logos erzählt. Er hat zuerst gelacht. Er sagte: „Bei einer Hochzeitsrede brauche ich doch keine Logik.“
A: Hahaha. Und hatte er recht?
B: Teilweise. Ich habe ihm erklärt, dass bei einer Hochzeitsrede das Ethos daher kommt, dass er das Paar wirklich kennt. Das Pathos ist natürlich zentral. Aber ein bisschen Logos braucht man auch: eine klare Struktur, damit die Leute folgen können.
A: Und wie hat er die Rede aufgebaut?
B: Er hat mit einer Geschichte angefangen. Wie in Folge achtzig empfohlen. Mit der Geschichte, wie er Amira zum ersten Mal getroffen hat. In einer Bar in Neukölln, als sie beide versucht haben, Deutsch zu sprechen, obwohl sie fließend Französisch konnten.
A: Das Ethos: Er war von Anfang an dabei.
B: Genau. Dann hat er eine Anapher benutzt. Er sagte: „Amira ist eine Frau, die nach Berlin gekommen ist, ohne jemanden zu kennen. Amira ist eine Frau, die nachts Patienten tröstet und morgens trotzdem lacht. Amira ist eine Frau, die für ihre Kolleginnen kämpft. Und Amira ist eine Frau, die in einem blauen Dirndl auf dem Oktoberfest den richtigen Mann gefunden hat.“
A: Hahaha! Mit der Pointe am Ende! Das Dirndl aus Folge siebenunddreißig!
B: Genau. Alle haben gelacht. Und dann hat er eine Antithese benutzt: „Lukas ist ein Mann der Zahlen und der Wissenschaft. Amira ist eine Frau des Herzens und der Intuition. Er bringt Ordnung in ihr Leben, sie bringt Leben in seine Ordnung.“
A: „Er bringt Ordnung in ihr Leben, sie bringt Leben in seine Ordnung.“ Das ist wunderschön. Ein Chiasmus sogar! So nennt man es, wenn die Wörter in umgekehrter Reihenfolge wiederholt werden.
B: Genau. Und am Ende hat er einen Satz auf Arabisch gesagt, den Amiras Großmutter ihm beigebracht hatte. Und einen Satz auf Bayerisch, den Lukas' Vater ihm beigebracht hatte. Und dann auf Deutsch: „Zwei Sprachen, zwei Familien, eine Liebe.“
A: Eine Klimax am Schluss. Und wie war die Reaktion?
B: Amiras Großmutter hat geweint. Lukas' Vater, ein sehr wortkarger bayerischer Landwirt, hat geweint. Und am Ende hat er Julien auf die Schulter geklopft und gesagt: „Des war a scheene Red.“ Das war die schönste Kritik, die Julien je bekommen hat.
A: Hahaha. „Das war eine schöne Rede“ auf Bayerisch. Jetzt bist du dran, Hörer, Hörerin. Schreib eine kurze Rede für einen besonderen Anlass. Eine Hochzeit, einen Geburtstag, einen Abschied. Und benutze mindestens drei rhetorische Mittel: eine Anapher, eine Antithese und eine Klimax.
B: Und achte beim nächsten Mal, wenn du einen Politiker oder eine Werbung hörst, darauf, ob er dich mit Ethos, Pathos oder Logos überzeugen will.
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: die Anapher. Die Wiederholung desselben Wortes am Anfang aufeinanderfolgender Sätze.
A: Wort Nummer zwei: die Klimax. Eine Steigerung, bei der die Begriffe immer stärker werden.
B: Wort Nummer drei: die Antithese. Die Gegenüberstellung von Gegensätzen.
A: Wort Nummer vier: der Sündenbock. Jemand, dem man die Schuld gibt, obwohl er nicht verantwortlich ist.
B: Wort Nummer fünf: sich etwas borgen. Sich etwas leihen, auch im übertragenen Sinne.
A: Und Wort Nummer sechs: wortkarg. Jemand, der nur sehr wenig spricht.
B: Noch einmal: die Anapher, die Klimax, die Antithese, der Sündenbock, sich etwas borgen, wortkarg.
A: Was nehmen wir mit? Aristoteles' drei Überzeugungsmittel: Ethos, die Glaubwürdigkeit. Pathos, die Gefühle. Logos, die Argumentation. Die wirkungsvollste Rede verbindet alle drei.
B: Rhetorische Stilmittel: die Anapher, die Klimax, die rhetorische Frage, die Antithese, die Metapher. Und Metaphern prägen unser Denken.
A: Die Rhetorik kann missbraucht werden, wie die NS-Propaganda zeigt. Darum haben die Deutschen eine gewisse Skepsis gegenüber charismatischen Rednern.
B: Und zum Schutz: die Mittel kennen, Person und Argument trennen und auf Fehlschlüsse achten.
A: Das ist das Ende von Folge sechsundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und denk daran: Wer die Mittel kennt, ist schwerer zu manipulieren. Servus!
A: Tschüss!
VOCAB: die Anapher | Die Wiederholung desselben Wortes am Anfang aufeinanderfolgender Sätze. | 🔁
VOCAB: die Klimax | Eine Steigerung, bei der die Begriffe immer stärker werden. | 📈
VOCAB: die Antithese | Die Gegenüberstellung von Gegensätzen. | ☯️
VOCAB: der Sündenbock | Jemand, dem man die Schuld gibt, obwohl er nicht verantwortlich ist. | 🐐
VOCAB: sich etwas borgen | Sich etwas leihen, auch im übertragenen Sinne. | 🤲
VOCAB: wortkarg | Jemand, der nur sehr wenig spricht. | 🤐
QUIZ: Worauf bezieht sich das Ethos? | Auf die Glaubwürdigkeit des Redners | Auf die Gefühle des Publikums | Auf die Logik der Argumente | 1
QUIZ: Was ist eine Anapher? | Eine Frage ohne Antwort | Die Wiederholung desselben Wortes am Satzanfang | Eine Steigerung | 2
QUIZ: Was stimmt über Kennedys Satz „Ich bin ein Berliner“? | Er hat damit wirklich „Ich bin ein Pfannkuchen“ gesagt | Der Satz war korrekt, und niemand hat ihn missverstanden | Er hat ihn auf Englisch gesagt | 2
QUIZ: Warum haben viele Deutsche eine Skepsis gegenüber charismatischen Rednern? | Wegen der Erfahrung mit der NS-Propaganda | Weil sie Reden langweilig finden | Weil es verboten ist | 1
QUIZ: Was hat Lukas' Vater nach Juliens Rede gesagt? | Nichts | „Des war a scheene Red.“ | „Zu lang.“ | 2
`;

DATA.podScripts.ep087 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge siebenundachtzig. Heute wird es philosophisch. Wir stellen eine Frage, die durch die Automatisierung und die künstliche Intelligenz eine neue Dringlichkeit bekommen hat: Was ist eigentlich der Sinn der Arbeit?
A: Arbeiten wir nur, um Geld zu verdienen? Oder gibt die Arbeit unserem Leben einen Sinn, eine Struktur, eine Identität? Und was würde mit uns geschehen, wenn Maschinen einen Großteil unserer Arbeit übernähmen?
B: In Folge dreiundsechzig haben wir die praktischen Folgen der KI für die Arbeitswelt besprochen. In Folge fünfundachtzig das Grundeinkommen. Heute gehen wir eine Ebene tiefer. Zur Philosophie der Arbeit.
A: Sprachlich üben wir heute den Umgang mit abstrakten Begriffen und Zitaten. Wir lernen, wie man philosophische Gedanken wiedergibt, wie man sich auf Autoren bezieht und wie man Positionen gegeneinander abwägt. Mit Ausdrücken wie: „Ihm zufolge …“, „Im Anschluss an …“, „In Abgrenzung zu …“, „Pointiert formuliert …“, „Dem ist entgegenzuhalten, dass …“
B: „Ihm zufolge“ oder „laut ihm“ heißt: nach seiner Meinung. Und „zufolge“ steht übrigens meistens nach dem Nomen und mit Dativ: „Marx zufolge“, „der Studie zufolge“. Eine elegante Art, eine Position wiederzugeben.
A: Gut. Fangen wir ganz am Anfang an. In der Antike hatte die Arbeit einen erstaunlich schlechten Ruf.
B: Ja. Für Aristoteles und die griechischen Philosophen war körperliche Arbeit etwas für Sklaven. Ein freier Bürger sollte sich der Muße widmen. Der Muße, also der freien Zeit für Philosophie, Politik, Kunst und Gespräch. Das griechische Wort für Muße ist „scholé“, daraus stammt übrigens unser Wort „Schule“.
A: Das ist eine faszinierende Etymologie. Die Schule war ursprünglich ein Ort der Muße, nicht der Arbeit. Und die Etymologie ist die Lehre von der Herkunft der Wörter.
B: Und auch in der Bibel ist die Arbeit zunächst eine Strafe. Nach der Vertreibung aus dem Paradies heißt es: „Im Schweiße deines Angesichts sollst du dein Brot essen.“ Arbeit als Mühsal, als Fluch.
A: Und das deutsche Wort „Arbeit“ hat übrigens eine ähnliche Geschichte. Es stammt vermutlich von einem alten Wort, das so etwas wie „Mühsal“ oder „Not“ bedeutete. Erst mit der Zeit bekam es eine positivere Bedeutung.
B: Und dann kam die große Wende, die wir in Folge fünfundachtzig schon kurz erwähnt haben: die Reformation. Martin Luther und später der Calvinismus haben die Arbeit aufgewertet. Für Luther war jede ehrliche Arbeit ein Dienst an Gott. Nicht nur das Gebet im Kloster, sondern auch die Arbeit des Bauern oder des Schusters. Das deutsche Wort „Beruf“ hat hier seinen Ursprung.
A: Ja! „Beruf“ kommt von „Berufung“. Man wird von Gott zu einer Arbeit berufen. Das ist ein Gedanke, der im Deutschen bis heute mitschwingt. „Mitschwingen“ heißt: auch vorhanden sein, unterschwellig mitklingen.
B: Und Max Weber hat in seiner berühmten Studie über die protestantische Ethik argumentiert, dass dieser religiöse Arbeitsethos eine wichtige Grundlage für die Entstehung des modernen Kapitalismus war. Harte Arbeit und Sparsamkeit wurden zu Tugenden.
A: Dann kam Karl Marx, im neunzehnten Jahrhundert. Für ihn war die Arbeit zunächst etwas zutiefst Menschliches. Der Mensch verwirklicht sich durch seine Arbeit. Er gestaltet die Welt und sich selbst. Aber im Kapitalismus, so Marx, sei die Arbeit entfremdet.
B: Die Entfremdung ist ein zentraler Begriff. Was meinte Marx damit?
A: Marx zufolge ist der Arbeiter in der Fabrik in mehrfacher Hinsicht entfremdet. Von dem Produkt seiner Arbeit, das ihm nicht gehört. Von der Tätigkeit selbst, die monoton und fremdbestimmt ist. Ein Arbeiter am Fließband dreht den ganzen Tag dieselbe Schraube, ohne zu wissen, was am Ende entsteht. Und letztlich ist er auch von sich selbst und den anderen Menschen entfremdet.
B: Und dieser Gedanke ist erstaunlich aktuell. Wenn man an Menschen denkt, die in einem Lager Pakete sortieren, gesteuert von einem Algorithmus, der jede Sekunde misst. Oder an die Lieferfahrer aus Folge fünfundsechzig.
A: Und es gibt einen modernen Denker, der diesen Gedanken sehr pointiert weitergeführt hat: der amerikanische Anthropologe David Graeber. Er hat zweitausendachtzehn ein Buch mit dem provokanten Titel „Bullshit Jobs“ veröffentlicht.
B: Ein bemerkenswerter Titel. Was ist seine These?
A: Graeber zufolge gibt es in modernen Gesellschaften eine große Zahl von Jobs, die selbst die Menschen, die sie ausüben, für vollkommen sinnlos halten. Jobs, von denen sie heimlich glauben, dass es keinen Unterschied machen würde, wenn es sie nicht gäbe. Oder dass die Welt sogar besser wäre.
B: Und hat er Beispiele genannt?
A: Er hat verschiedene Typen beschrieben. Den „Lakaien“, der nur dazu da ist, einen anderen wichtig aussehen zu lassen. Den „Schläger“, dessen Arbeit nur existiert, weil die Konkurrenz auch jemanden dafür hat, etwa in manchen Bereichen der Werbung oder der Unternehmensanwälte. Den „Flickschuster“, der ständig Probleme behebt, die gar nicht existieren müssten. Den „Kästchenankreuzer“, der Berichte schreibt, die niemand liest. Und den „Aufgabenverteiler“, der anderen Arbeit zuweist, die sie auch ohne ihn erledigen könnten.
B: Hahaha. Der Kästchenankreuzer! Ich glaube, viele Menschen in großen Organisationen erkennen sich darin wieder.
A: Genau. Und Graeber stellt eine bemerkenswerte Beobachtung an: Oft gilt eine umgekehrte Beziehung zwischen dem gesellschaftlichen Nutzen einer Arbeit und ihrer Bezahlung. Pflegekräfte, Erzieherinnen, Müllwerker, deren Arbeit unverzichtbar ist, verdienen wenig. Manche hochbezahlte Jobs dagegen leisten wenig für die Gesellschaft.
B: Das hat man während der Pandemie sehr deutlich gesehen. Plötzlich sprach man von „systemrelevanten Berufen“. Die Pflegekraft, der Kassierer im Supermarkt, der Busfahrer. Man hat für sie applaudiert, vom Balkon. Aber an ihrer Bezahlung hat sich wenig geändert.
A: Dem ist allerdings entgegenzuhalten, dass Graebers These auch kritisiert wurde. Empirische Untersuchungen konnten nicht bestätigen, dass sinnlose Jobs in dem Ausmaß zunehmen, wie er behauptet hat. Und was einem Menschen sinnlos erscheint, kann für das Funktionieren einer Organisation durchaus wichtig sein.
B: Das ist ein berechtigter Einwand. Aber der Kern bleibt: Viele Menschen erleben ihre Arbeit als sinnlos. Und das hat Folgen. Für ihre Motivation und ihre Gesundheit.
A: Und jetzt die Automatisierung. Es gibt einen berühmten Essay des Ökonomen John Maynard Keynes aus dem Jahr neunzehnhundertdreißig. Er heißt „Wirtschaftliche Möglichkeiten für unsere Enkelkinder“.
B: Ja, und Keynes hat darin eine kühne Prognose gewagt. Er sagte voraus, dass die Menschen hundert Jahre später, also etwa im Jahr zweitausenddreißig, dank des technischen Fortschritts nur noch fünfzehn Stunden pro Woche arbeiten würden.
A: Fünfzehn Stunden! Und wir sind im Jahr zweitausenddreißig fast angekommen. Was ist schiefgelaufen?
B: In einem Punkt hatte Keynes recht: Die Produktivität ist enorm gestiegen. Wir könnten heute mit viel weniger Arbeit den Lebensstandard von neunzehnhundertdreißig erreichen. Aber statt weniger zu arbeiten, haben wir mehr konsumiert. Unsere Bedürfnisse sind mitgewachsen.
A: Und Keynes hat übrigens auch eine Sorge geäußert, die ich besonders interessant finde. Er fragte sich, ob die Menschen mit der vielen freien Zeit überhaupt umgehen könnten. Er befürchtete eine Art kollektiven Nervenzusammenbruch. Weil die Menschen jahrhundertelang darauf trainiert worden seien, zu arbeiten, und nicht wüssten, was sie mit ihrer Freiheit anfangen sollen.
B: Das ist eine bemerkenswert moderne Sorge. Man kennt das Phänomen bei Menschen, die in Rente gehen. Viele fallen in ein Loch, weil ihnen die Struktur und die Anerkennung der Arbeit fehlt. Man spricht vom „Pensionsschock“ oder Rentenschock.
A: Und hier kommt ein Philosoph ins Spiel, der für unser Thema sehr wichtig ist: die deutsch-amerikanische Philosophin Hannah Arendt. Sie hat in ihrem Werk „Vita activa“ drei Formen menschlicher Tätigkeit unterschieden: das Arbeiten, das Herstellen und das Handeln.
B: Erklär die Unterscheidung.
A: Das Arbeiten dient der Erhaltung des Lebens. Essen zubereiten, putzen, die Grundbedürfnisse befriedigen. Es ist ein endloser Kreislauf, denn was man heute macht, muss man morgen wiederholen. Das Herstellen schafft dauerhafte Dinge. Ein Haus, einen Tisch, ein Kunstwerk. Etwas, das bleibt. Und das Handeln ist das Tun zwischen Menschen. Politik, Gespräch, gemeinsames Gestalten der Welt.
B: Und was ist ihre These in Bezug auf die moderne Gesellschaft?
A: Arendt warnte schon neunzehnhundertachtundfünfzig vor einer Gefahr. Wir hätten uns in eine „Arbeitsgesellschaft“ verwandelt, die nur noch das Arbeiten kenne. Und sie formulierte einen sehr pointierten Satz: Was uns bevorstehe, sei die Aussicht auf eine Arbeitsgesellschaft, der die Arbeit ausgegangen ist. Also die einzige Tätigkeit, auf die sie sich noch versteht.
B: Das ist ein beklemmender Gedanke. „Beklemmend“ heißt: bedrückend, beängstigend. Eine Gesellschaft, die nur noch arbeiten kann und der die Arbeit ausgeht.
A: Genau. Und das ist eigentlich der Kern unserer heutigen Frage. Wenn die Maschinen uns die Arbeit im Sinne Arendts abnehmen, also die mühsame, sich wiederholende Arbeit, dann könnte das eine enorme Befreiung sein. Mehr Zeit für das Herstellen und das Handeln. Für Kunst, Wissenschaft, Politik, Gemeinschaft. Für die Muße der alten Griechen.
B: Oder es könnte zu einer Krise der Sinngebung führen. Wenn wir nicht gelernt haben, unserem Leben jenseits der Erwerbsarbeit einen Sinn zu geben.
A: Und es gibt eine neuere Denkrichtung, die genau hier ansetzt. Der Soziologe Hartmut Rosa, einer der bekanntesten deutschen Gegenwartsphilosophen, spricht von „Resonanz“. Er sagt, ein gelingendes Leben hänge nicht von der Menge an Ressourcen ab, sondern davon, ob wir eine lebendige, antwortende Beziehung zur Welt haben.
B: Resonanz, wie bei einem Musikinstrument. Die Welt spricht zu uns, und wir antworten. Und Arbeit kann eine solche Resonanzerfahrung sein. Wenn der Tischler das Holz spürt. Wenn die Lehrerin merkt, dass ein Schüler etwas verstanden hat. Wenn der Programmierer nach Stunden endlich das Problem gelöst hat.
A: Aber entfremdete Arbeit ist resonanzlos. Sie ist stumm. Und Rosa zufolge liegt das Problem der modernen Gesellschaft in der ständigen Beschleunigung, die solche Resonanzerfahrungen erschwert.
B: Jetzt zur Geschichte. Und diesmal geht es um Herrn Wagner. Den Bäcker, der seine Bäckerei an Kenji übergeben hat und in Rente gegangen ist.
A: Ah, Herr Wagner aus Sachsen! Mit dem starken sächsischen Akzent. Wie geht es ihm?
B: Am Anfang gar nicht gut. Herr Wagner ist fünfundvierzig Jahre lang jeden Morgen um drei Uhr aufgestanden, um Brot zu backen. Und plötzlich war da nichts mehr. Er wachte trotzdem jeden Morgen um drei Uhr auf. Und wusste nicht, was er tun sollte.
A: Der Rentenschock. Keynes' Befürchtung im Kleinen.
B: Genau. Er saß zu Hause, schaute fern, wurde immer stiller. Seine Frau machte sich große Sorgen. Er sagte zu ihr: „Ich bin nichts mehr wert. Ich bin nur noch ein alter Mann, der auf den Tod wartet.“
A: Das ist erschütternd. Seine ganze Identität hing an seiner Arbeit.
B: Ja. Und eines Tages kam Kenji vorbei. Er wollte Herrn Wagner eigentlich nur um Rat für ein altes sächsisches Rezept fragen. Den Dresdner Christstollen. Und er merkte sofort, dass es Herrn Wagner schlecht ging.
A: Und was hat Kenji gemacht?
B: Er hat Herrn Wagner gefragt, ob er ihm einmal pro Woche helfen würde, die alten Rezepte aufzuschreiben. Herr Wagner hatte viele Rezepte nur im Kopf, nie aufgeschrieben. Und sie würden verloren gehen, wenn niemand sie festhielte.
A: Das ist klug. Das ist nicht mehr die mühsame Arbeit des täglichen Brotbackens. Das ist Herstellen im Sinne Arendts. Etwas Bleibendes schaffen.
B: Genau. Und Herr Wagner hat zugestimmt. Und dann ist etwas Unerwartetes passiert. Bei den Gesprächen hat er angefangen, nicht nur Rezepte zu erzählen, sondern auch Geschichten. Wie er als Lehrling in Dresden in der DDR angefangen hat. Wie es war, als nach der Wende die großen Supermärkte kamen und viele kleine Bäckereien schließen mussten. Wie er trotzdem durchgehalten hat.
A: Und hat Kenji das aufgeschrieben?
B: Ja. Und zwar mit meiner Hilfe. Ich habe Herrn Wagner interviewt, wie ich es bei meinem Großvater versäumt hatte. Folge vierundsechzig. Und daraus ist ein kleines Buch geworden. Halb Rezeptbuch, halb Lebensgeschichte. „Das Brot meines Lebens“, heißt es.
A: Wie wunderschön! Und Herr Wagner?
B: Er ist aufgeblüht. Er hält jetzt Backkurse in einem Nachbarschaftszentrum. Für Kinder und für Geflüchtete. Und er sagt etwas, das mich sehr berührt hat: „Fünfundvierzig Jahre habe ich gearbeitet, um zu leben. Jetzt lebe ich zum ersten Mal, um etwas weiterzugeben.“
A: Ein Satz, der die ganze Folge zusammenfasst. Der Sinn liegt vielleicht nicht in der Arbeit selbst, sondern in der Resonanz, in dem, was wir weitergeben und mit anderen teilen.
B: Jetzt bist du dran, Hörer, Hörerin. Was bedeutet Arbeit für dich? Erlebst du sie als sinnvoll oder als entfremdet? Und gib die Position eines Philosophen wieder, mit den Ausdrücken von heute: „Marx zufolge …“, „Arendt unterscheidet zwischen …“, „Dem ist entgegenzuhalten, dass …“
A: Und überleg dir: Was würdest du tun, wenn du nur noch fünfzehn Stunden pro Woche arbeiten müsstest, wie Keynes es vorausgesagt hat?
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: die Muße. Freie Zeit, die man für geistige oder kreative Tätigkeiten nutzt.
B: Wort Nummer zwei: zufolge. Nach der Meinung oder Aussage von. Marx zufolge.
A: Wort Nummer drei: die Entfremdung. Ein Gefühl der Fremdheit gegenüber der eigenen Arbeit, sich selbst und den anderen.
B: Wort Nummer vier: mitschwingen. Unterschwellig vorhanden sein, mitklingen.
A: Wort Nummer fünf: beklemmend. Bedrückend und beängstigend.
B: Und Wort Nummer sechs: aufblühen. Wieder lebendig, fröhlich und aktiv werden, wie eine Blume.
A: Noch einmal: die Muße, zufolge, die Entfremdung, mitschwingen, beklemmend, aufblühen.
B: Was nehmen wir mit? In der Antike war Arbeit etwas für Sklaven, und die Muße galt als das Höchste. Das Wort „Schule“ kommt von „scholé“, Muße.
A: Mit der Reformation wurde die Arbeit aufgewertet, das Wort „Beruf“ kommt von „Berufung“. Marx kritisierte die Entfremdung der Arbeit im Kapitalismus.
B: Graeber beschrieb sinnlose „Bullshit Jobs“. Keynes sagte eine Fünfzehn-Stunden-Woche voraus und fürchtete, dass die Menschen mit der Freiheit nicht umgehen könnten.
A: Und Arendt unterschied zwischen Arbeiten, Herstellen und Handeln. Vielleicht liegt der Sinn darin, was wir herstellen und mit anderen teilen.
B: Das ist das Ende von Folge siebenundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und frag dich heute einmal: Wofür lebst du? Tschüss!
B: Servus!
VOCAB: die Muße | Freie Zeit für geistige oder kreative Tätigkeiten. | 📜
VOCAB: zufolge | Nach der Meinung oder Aussage von: Marx zufolge. | 💬
VOCAB: die Entfremdung | Ein Gefühl der Fremdheit gegenüber der eigenen Arbeit und sich selbst. | 🌫️
VOCAB: mitschwingen | Unterschwellig vorhanden sein, mitklingen. | 🎻
VOCAB: beklemmend | Bedrückend und beängstigend. | 😰
VOCAB: aufblühen | Wieder lebendig, fröhlich und aktiv werden. | 🌸
QUIZ: Woher kommt das Wort „Schule“? | Vom griechischen Wort für Muße | Vom lateinischen Wort für Arbeit | Vom Wort für Lehrer | 1
QUIZ: Was bedeutet „Entfremdung“ bei Marx? | Der Arbeiter ist von seinem Produkt, seiner Tätigkeit und sich selbst entfremdet | Der Arbeiter zieht in ein fremdes Land | Der Arbeiter verdient zu viel | 1
QUIZ: Was sagte Keynes für das Jahr 2030 voraus? | Eine Fünfzehn-Stunden-Woche | Das Ende der Welt | Mehr Arbeit für alle | 1
QUIZ: Welche drei Tätigkeiten unterscheidet Hannah Arendt? | Arbeiten, Herstellen, Handeln | Essen, Schlafen, Arbeiten | Lesen, Schreiben, Rechnen | 1
QUIZ: Was hat Herr Wagner nach seiner Rente gemacht? | Er hat ein Buch mit Rezepten und Lebensgeschichte gemacht und gibt Backkurse | Er ist nach Sachsen gezogen | Er hat eine neue Bäckerei eröffnet | 1
`;
