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

DATA.podScripts.ep088 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge achtundachtzig. Heute sprechen wir über ein Thema, das sich wie ein roter Faden durch unseren ganzen Podcast zieht: interkulturelle Kompetenz. Und zwar konkret im Team, im Berufsleben.
A: „Wie ein roter Faden“ ist eine schöne Redewendung. Sie bezeichnet ein durchgehendes Motiv, das sich durch etwas hindurchzieht. Sie stammt übrigens angeblich von Goethe, der sich auf einen roten Faden bezog, der in alle Taue der britischen Marine eingeflochten gewesen sein soll.
B: Und in unserer Geschichte haben wir ja immer wieder interkulturelle Begegnungen erlebt. Julien aus Frankreich, Amira aus Marokko, Kenji aus Japan, Oksana aus der Ukraine. Und immer wieder ging es um die Frage: Wie kommuniziert man über kulturelle Grenzen hinweg?
A: Heute schauen wir uns das systematischer an. Mit wissenschaftlichen Modellen, mit einem besonderen Fokus auf die viel zitierte deutsche Direktheit, aber auch mit einer gehörigen Portion Skepsis gegenüber Stereotypen.
B: Sprachlich üben wir heute, wie man differenziert über Verallgemeinerungen spricht. Denn wer über Kulturen redet, läuft ständig Gefahr, in Klischees zu verfallen. Wir lernen Ausdrücke wie: „tendenziell“, „im Großen und Ganzen“, „mit gewissen Einschränkungen“, „das trifft nicht auf alle zu“, „zugespitzt formuliert“, „pauschal lässt sich das nicht sagen“.
A: „Pauschal“ heißt: allgemein, ohne Unterschiede zu machen. Und „zugespitzt“ heißt: bewusst übertrieben, um einen Punkt deutlich zu machen. Diese Ausdrücke sind wichtig, weil sie zeigen, dass man sich der Grenzen seiner Aussage bewusst ist.
B: Gut. Fangen wir mit einer Warnung an. Wenn wir über „die Deutschen“ oder „die Franzosen“ sprechen, reden wir über statistische Tendenzen. Nicht über einzelne Menschen. Innerhalb einer Kultur gibt es enorme Unterschiede. Zwischen Generationen, Regionen, sozialen Schichten und natürlich Individuen.
A: Ein Berliner ist anders als ein Bayer, ein Hamburger anders als ein Kölner. Und ein Wiener ist sowieso ganz anders. Hahaha.
B: Hahaha. Absolut. Und trotzdem gibt es kulturelle Muster, die die Forschung durchaus belegen kann. Und die zu kennen, kann sehr hilfreich sein. Die Kunst besteht darin, sie als Hypothese zu nutzen, nicht als Schublade.
A: „In eine Schublade stecken“ heißt: jemanden vorschnell einer Kategorie zuordnen, ohne ihn als Individuum zu sehen. Gut. Eines der einflussreichsten Modelle stammt vom niederländischen Sozialpsychologen Geert Hofstede. Er hat in den Siebzigerjahren Zehntausende Mitarbeiter des Computerkonzerns IBM in über fünfzig Ländern befragt.
B: Und aus diesen Daten hat er verschiedene Kulturdimensionen abgeleitet. Also Achsen, auf denen sich Kulturen unterscheiden lassen. Die wichtigsten sind: Machtdistanz, Individualismus, Unsicherheitsvermeidung und die Langfristorientierung.
A: Die Machtdistanz beschreibt, wie sehr die weniger Mächtigen in einer Gesellschaft eine ungleiche Machtverteilung akzeptieren und erwarten. In Kulturen mit hoher Machtdistanz spricht man den Chef nicht einfach an, man widerspricht ihm nicht öffentlich. In Kulturen mit niedriger Machtdistanz sind die Hierarchien flacher.
B: Und Deutschland liegt bei der Machtdistanz eher niedrig, Österreich sogar sehr niedrig. Was viele überrascht, weil man an die Titel denkt. „Herr Doktor“, „Frau Magister“. Aber im Arbeitsalltag sind die Hierarchien in Österreich relativ flach.
A: Interessant. Die Unsicherheitsvermeidung beschreibt, wie sehr sich Menschen durch unklare, unvorhersehbare Situationen bedroht fühlen. Und hier liegt Deutschland ziemlich hoch. Was vieles erklärt. Die Liebe zu Regeln, zu Planung, zu Versicherungen, die wir in Folge neununddreißig angesprochen haben. Und zur Bürokratie.
B: Und Frankreich liegt da übrigens noch höher. Was Julien vielleicht überrascht hätte. Hahaha. Aber Hofstedes Modell wurde auch kritisiert. Es basiert auf Daten aus nur einem einzigen Unternehmen, die zudem schon Jahrzehnte alt sind. Und es behandelt Nationen als einheitliche Kulturen, was sie natürlich nicht sind.
A: Ein berechtigter Einwand. Darum schauen wir uns ein zweites, praxisnäheres Modell an. Die amerikanische Forscherin Erin Meyer hat in ihrem Buch „The Culture Map“ acht Skalen beschrieben, auf denen sich Kulturen im Berufsleben unterscheiden. Und einige davon sind für das Verständnis der Deutschen besonders aufschlussreich.
B: Fangen wir mit der Kommunikation an. Meyer unterscheidet zwischen Low-Context- und High-Context-Kulturen. Das Konzept stammt ursprünglich vom Anthropologen Edward Hall.
A: In Low-Context-Kulturen sagt man explizit, was man meint. Die Botschaft steckt in den Worten selbst. Man ist präzise, klar, eindeutig. Und man wiederholt lieber einmal zu viel, als missverstanden zu werden. Deutschland, die Niederlande, die USA und skandinavische Länder sind typische Low-Context-Kulturen.
B: Und in High-Context-Kulturen steckt viel von der Bedeutung im Kontext. In der Beziehung, im Tonfall, in dem, was nicht gesagt wird. Man muss zwischen den Zeilen lesen. Japan ist das Paradebeispiel. Aber auch Frankreich, China, viele arabische Länder.
A: Und das erklärt das Missverständnis zwischen Kenji und Jasmin in Folge achtundsiebzig perfekt. Kenji sagte „Die Brezeln sind interessant heute“ und meinte eine deutliche Kritik. Jasmin hörte ein Lob. High Context traf auf Low Context.
B: Genau. Es gibt sogar eine japanische Redewendung für die Fähigkeit, die Stimmung zu lesen: „kuuki wo yomu“, wörtlich „die Luft lesen“. Und jemand, der das nicht kann, gilt als unhöflich.
A: Die zweite Skala ist für uns besonders wichtig: das Feedback. Und hier gibt es einen faszinierenden Befund. Man würde vermuten, dass Low-Context-Kulturen auch beim negativen Feedback direkt sind. Aber das ist nicht immer so.
B: Erklär das.
A: Die USA sind eine Low-Context-Kultur, aber beim negativen Feedback eher indirekt. Amerikaner verpacken Kritik oft in viel Lob. Das Sandwich aus Folge achtundsiebzig. Deutsche hingegen sind sowohl Low-Context als auch beim negativen Feedback sehr direkt.
B: Und das führt zu typischen Missverständnissen. Ein Amerikaner hört von seinem deutschen Kollegen: „Diese Präsentation hat drei gravierende Fehler.“ Und er ist schockiert und fühlt sich gedemütigt. Der Deutsche hat aber nur eine sachliche Rückmeldung gegeben und hält den Amerikaner im Übrigen für sehr kompetent.
A: Und umgekehrt hört ein Deutscher von seinem amerikanischen Kollegen: „That's a really interesting approach, maybe we could think about some small adjustments.“ Und er denkt, alles ist in Ordnung. Dabei hat der Amerikaner eigentlich gemeint: Das ist völlig falsch, mach es neu.
B: Hahaha. Eine Quelle unendlicher Missverständnisse. Und Meyer gibt den Rat, sich solcher sprachlicher Verstärker und Abschwächer bewusst zu sein. Deutsche benutzen tendenziell Verstärker: „absolut falsch“, „völlig inakzeptabel“. Amerikaner und Briten benutzen eher Abschwächer: „slightly concerned“, „not quite there yet“.
A: Die Briten sind da die Meister. Es gibt eine berühmte, halb scherzhafte Tabelle, die übersetzt, was Briten sagen und was sie meinen. Wenn ein Brite sagt „With the greatest respect“, meint er eigentlich: „Ich halte Sie für einen Idioten.“ Hahaha.
B: Hahaha. Und wenn er sagt „That's not bad“, meint er „Das ist hervorragend“. Und „Quite good“ heißt eigentlich „ein bisschen enttäuschend“. Für Deutsche ist das ein Minenfeld.
A: Die dritte Skala, die für Deutschland interessant ist: Vertrauen. Meyer unterscheidet zwischen aufgabenbasiertem und beziehungsbasiertem Vertrauen.
B: In aufgabenbasierten Kulturen entsteht Vertrauen durch die Arbeit selbst. Man vertraut jemandem, weil er zuverlässig liefert, kompetent ist, seine Termine einhält. Die persönliche Beziehung ist zweitrangig. Deutschland und die USA sind hier typische Beispiele.
A: In beziehungsbasierten Kulturen entsteht Vertrauen durch die persönliche Beziehung. Man isst zusammen, trinkt zusammen, lernt die Familie kennen. Erst dann macht man Geschäfte. Viele Länder in Asien, Südamerika, Afrika und der arabischen Welt sind hier zu verorten. Und auch Frankreich und Italien eher als Deutschland.
B: Und das erklärt, warum deutsche Geschäftsleute im Ausland manchmal ungeduldig werden. Sie wollen schnell zur Sache kommen. Während ihre Partner erst einmal lange essen und plaudern wollen. Und dann wirkt der Deutsche unhöflich und kalt.
A: Und umgekehrt erklärt es die Kokosnuss aus Folge siebzehn. In Deutschland trennt man Beruf und Privatleben. Man kann jahrelang eng mit Kollegen zusammenarbeiten, ohne sie privat zu kennen. Das empfinden Menschen aus beziehungsbasierten Kulturen oft als distanziert.
B: Und die vierte Skala: die Zeitwahrnehmung. Meyer unterscheidet zwischen linearer und flexibler Zeit. In linearen Kulturen wird Zeit in klare Abschnitte eingeteilt. Ein Termin ist ein Termin. Pünktlichkeit ist wichtig. Man erledigt eine Aufgabe nach der anderen.
A: Deutschland, die Schweiz und Skandinavien sind die Spitzenreiter. Wobei man ehrlicherweise anmerken muss, dass die Deutsche Bahn in dieser Hinsicht nicht besonders deutsch ist. Hahaha.
B: Hahaha. Ein Paradox! Und in flexiblen Kulturen ist Zeit dehnbar. Termine sind Richtwerte. Man macht mehrere Dinge gleichzeitig und passt sich den Umständen an. Und wenn ein wichtiger Mensch kommt, unterbricht man das Meeting für ihn.
A: Wir haben das in Folge vierundfünfzig gesehen, als Jonas in Spanien immer der Erste war, der kam. Und Amira in Casablanca, wo niemand pünktlich war.
B: Gut. Und jetzt die Kernfrage: Wie entwickelt man interkulturelle Kompetenz? Was macht einen guten interkulturellen Kommunikator aus?
A: Erstens: das Bewusstsein für die eigene kulturelle Prägung. Das klingt banal, ist aber entscheidend. Die meisten Menschen halten ihre eigenen kulturellen Normen für natürlich und universell. Für „normal“. Man erkennt die eigene Kultur oft erst, wenn man auf eine andere trifft. Wie ein Fisch, der erst merkt, dass er im Wasser lebt, wenn man ihn herausholt.
B: Ein schönes Bild. Zweitens: Ambiguitätstoleranz. Das ist die Fähigkeit, Mehrdeutigkeit und Unsicherheit auszuhalten, ohne sofort zu urteilen. Wenn sich jemand anders verhält, als man erwartet, nicht sofort annehmen, er sei unhöflich, sondern sich fragen: Welche andere Erklärung könnte es geben?
A: Das ist besonders für Deutsche eine Herausforderung, angesichts der hohen Unsicherheitsvermeidung. Drittens: die Fähigkeit zum Perspektivwechsel. Sich vorstellen, wie die eigene Kommunikation auf andere wirken könnte. Was für mich sachliches Feedback ist, kann für jemand anderen eine Demütigung sein.
B: Und viertens: Metakommunikation. Also über die Kommunikation selbst sprechen. In interkulturellen Teams ist es sehr hilfreich, die unterschiedlichen Stile offen anzusprechen. „Bei uns in Deutschland ist es üblich, Kritik direkt zu äußern. Das ist nicht persönlich gemeint. Wie ist das bei euch?“
A: Das ist vielleicht der wichtigste Tipp überhaupt. Unterschiede benennen, statt sie zu ignorieren.
B: Jetzt zur Geschichte. Diesmal ein ganz besonderes Team. Julien koordiniert ja das gemeinsame Mentoring-Programm der vier Campusse aus Folge vierundachtzig. Und jetzt soll das Programm auf einen neuen Campus übertragen werden. In Tokio.
A: In Tokio! Wie passend. Und Kenji hilft bestimmt?
B: Genau. Kenji hat angeboten, als kultureller Vermittler zu helfen. Und das war bitter nötig. Denn beim ersten Videocall zwischen dem Berliner Team und dem Tokioter Team ist einiges schiefgelaufen.
A: Was ist passiert?
B: Das Berliner Team, angeführt von einem sehr direkten Kollegen namens Thomas, hat das Konzept präsentiert. Und dann hat Thomas gefragt: „Was haltet ihr davon? Gibt es Kritik?“ Und das Tokioter Team hat freundlich gelächelt und gesagt: „Das ist ein sehr interessantes Konzept. Wir werden es sorgfältig prüfen.“
A: Oh je. „Sehr interessant“ und „sorgfältig prüfen“. In Japan kann das ein sehr höfliches Nein sein.
B: Genau. Thomas hat das als Zustimmung verstanden. Er hat sofort einen detaillierten Zeitplan geschickt, mit Fristen. Und dann kam wochenlang keine Antwort.
A: Und Thomas war bestimmt frustriert.
B: Sehr. Er hat eine ziemlich scharfe E-Mail geschrieben. „Wir haben vor drei Wochen einen klaren Zeitplan vereinbart. Leider haben wir noch keine Rückmeldung erhalten. Bitte antworten Sie bis Freitag.“
A: Aus deutscher Sicht eine normale, sachliche E-Mail. Aus japanischer Sicht vermutlich eine Ohrfeige.
B: Genau das. Das Tokioter Team war zutiefst verletzt. Und dann hat Kenji eingegriffen. Er hat mit beiden Seiten gesprochen. Zuerst mit den Kollegen in Tokio, auf Japanisch. Und er hat herausgefunden, dass sie mit dem Konzept tatsächlich große Probleme hatten.
A: Welche Probleme?
B: Das Peer-Learning-Prinzip, bei dem Studierende sich gegenseitig bewerten und kritisieren, widersprach stark der japanischen Kultur. Dort ist es unüblich, Kommilitonen offen zu kritisieren, besonders ältere. Und der Gedanke, dass es keine Lehrer gibt, fanden manche geradezu respektlos gegenüber der Rolle des Lehrers, des „Sensei“.
A: Das ist ja ein fundamentaler Konflikt. Und das hatten sie im Videocall nicht gesagt?
B: Nein, weil es unhöflich gewesen wäre, das Konzept der Gäste direkt vor allen zu kritisieren. Sie wollten es intern besprechen und dann eine diplomatische Lösung vorschlagen. Aber dann kam die E-Mail von Thomas und hat sie unter Druck gesetzt.
A: Und was hat Kenji dann gemacht?
B: Er hat mit Julien und Thomas in Berlin gesprochen und den Hintergrund erklärt. Thomas war zunächst ungläubig. Er sagte: „Warum haben sie das nicht einfach gesagt?“ Und Kenji hat geantwortet: „Sie haben es gesagt. Du hast nur nicht zugehört.“
A: Ein bemerkenswerter Satz. „Sie haben es gesagt, du hast nur nicht zugehört.“
B: Ja. Und dann hat Julien eine Idee gehabt. Statt eines weiteren Videocalls ist er mit Kenji nach Tokio geflogen. Wie bei den anderen Campussen. Sie haben zuerst zusammen gegessen, mehrere Abende lang. Beziehungsbasiertes Vertrauen. Und erst danach haben sie über die Arbeit gesprochen.
A: Und haben sie eine Lösung gefunden?
B: Ja, eine sehr kreative. Sie haben das Peer-Learning angepasst. Die Bewertungen in Tokio erfolgen anonym, sodass niemand das Gesicht verliert. Und es gibt erfahrene Mentoren, die eine Rolle ähnlich wie ein Sensei haben. Nicht als Lehrer, der alles erklärt, sondern als respektierte Begleiter.
A: Das ist die Essenz interkultureller Kompetenz. Nicht das eigene Modell einfach übertragen, sondern es gemeinsam anpassen.
B: Genau. Und das Interessanteste: Einige Elemente aus Tokio wurden danach auch in Berlin übernommen. Die anonymen Bewertungen haben dort nämlich auch geholfen. Besonders für die stilleren Studierenden wie Lea.
A: Und Thomas?
B: Thomas hat sich bei dem Tokioter Team mit einem langen, sehr höflichen Brief entschuldigt. Mit Kenjis Hilfe formuliert. Und er hat gesagt, er habe in diesen Wochen mehr über Kommunikation gelernt als in zwanzig Jahren Berufsleben.
A: Jetzt bist du dran, Hörer, Hörerin. Wie würdest du deine eigene Kultur auf den Skalen von Erin Meyer einordnen? Direkt oder indirekt? Aufgaben- oder beziehungsbasiert? Lineare oder flexible Zeit? Formuliere differenziert: „Tendenziell …“, „Pauschal lässt sich das nicht sagen, aber …“, „Zugespitzt formuliert …“
B: Und denk an ein interkulturelles Missverständnis, das du erlebt hast. Wie hätte man es mit Metakommunikation vermeiden können?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: der rote Faden. Ein durchgehendes Motiv, das sich durch etwas hindurchzieht.
A: Wort Nummer zwei: pauschal. Allgemein, ohne Unterschiede zu machen.
B: Wort Nummer drei: in eine Schublade stecken. Jemanden vorschnell einer Kategorie zuordnen.
A: Wort Nummer vier: zwischen den Zeilen lesen. Verstehen, was nicht direkt gesagt wird.
B: Wort Nummer fünf: die Ambiguitätstoleranz. Die Fähigkeit, Mehrdeutigkeit auszuhalten, ohne sofort zu urteilen.
A: Und Wort Nummer sechs: das Minenfeld. Eine Situation voller versteckter Gefahren, in der man leicht einen Fehler macht.
B: Noch einmal: der rote Faden, pauschal, in eine Schublade stecken, zwischen den Zeilen lesen, die Ambiguitätstoleranz, das Minenfeld.
A: Was nehmen wir mit? Kulturelle Muster sind statistische Tendenzen, keine Schubladen. Sie sind als Hypothese nützlich.
B: Hofstedes Kulturdimensionen und Erin Meyers Skalen helfen, Unterschiede zu verstehen: Low und High Context, direktes und indirektes Feedback, aufgaben- und beziehungsbasiertes Vertrauen, lineare und flexible Zeit.
A: Deutschland ist tendenziell eine Low-Context-Kultur mit direktem Feedback, aufgabenbasiertem Vertrauen und linearer Zeit. Mit vielen regionalen und individuellen Ausnahmen.
B: Und interkulturelle Kompetenz bedeutet: die eigene Prägung erkennen, Ambiguität aushalten, die Perspektive wechseln und über Kommunikation sprechen.
A: Das ist das Ende von Folge achtundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und vergiss nicht: Manchmal sagen die anderen es schon, wir hören nur nicht zu. Servus!
A: Tschüss!
VOCAB: der rote Faden | Ein durchgehendes Motiv, das sich durch etwas hindurchzieht. | 🧵
VOCAB: pauschal | Allgemein, ohne Unterschiede zu machen. | 📦
VOCAB: in eine Schublade stecken | Jemanden vorschnell einer Kategorie zuordnen. | 🗄️
VOCAB: zwischen den Zeilen lesen | Verstehen, was nicht direkt gesagt wird. | 📖
VOCAB: die Ambiguitätstoleranz | Die Fähigkeit, Mehrdeutigkeit auszuhalten, ohne sofort zu urteilen. | 🌗
VOCAB: das Minenfeld | Eine Situation voller versteckter Gefahren. | 💣
QUIZ: Was ist eine Low-Context-Kultur? | Man sagt explizit, was man meint | Man muss zwischen den Zeilen lesen | Man spricht sehr wenig | 1
QUIZ: Wie unterscheiden sich Deutsche und Amerikaner beim negativen Feedback? | Deutsche sind direkter, Amerikaner verpacken Kritik oft in Lob | Beide sind gleich direkt | Amerikaner sind direkter | 1
QUIZ: Was bedeutet aufgabenbasiertes Vertrauen? | Vertrauen entsteht durch zuverlässige Arbeit | Vertrauen entsteht durch gemeinsames Essen | Vertrauen ist unwichtig | 1
QUIZ: Was meinte das Tokioter Team mit „sehr interessant, wir werden es sorgfältig prüfen“? | Begeisterte Zustimmung | Eigentlich hatten sie große Bedenken | Sie hatten keine Zeit | 2
QUIZ: Was sagte Kenji zu Thomas? | „Du musst lauter sprechen.“ | „Sie haben es gesagt. Du hast nur nicht zugehört.“ | „Sie mögen dich nicht.“ | 2
`;

DATA.podScripts.ep089 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge neunundachtzig. Heute sprechen wir über ein Thema, das durch die Corona-Pandemie eine ungeahnte gesellschaftliche Brisanz bekommen hat: das Vertrauen in die Wissenschaft. Und das schwierige Verhältnis von Expertise und Unsicherheit.
A: „Brisanz“ bezeichnet die Eigenschaft eines Themas, sehr umstritten und explosiv zu sein. Ein brisantes Thema löst heftige Reaktionen aus. Und kaum ein Thema war in den letzten Jahren brisanter als die Frage, wem man in einer Krise glauben soll.
B: Während der Pandemie wurden Virologen plötzlich zu Fernsehstars. In Deutschland kannte auf einmal jeder Christian Drosten. Wissenschaftliche Begriffe wie Inzidenz, Reproduktionszahl oder Peer-Review gehörten plötzlich zum Alltagswortschatz.
A: Und gleichzeitig erlebten wir eine enorme Polarisierung. Die einen vertrauten der Wissenschaft fast blind, die anderen misstrauten ihr zutiefst. Und Wissenschaftler wurden bedroht und beschimpft.
B: Heute wollen wir verstehen, wie Wissenschaft eigentlich funktioniert. Warum Unsicherheit kein Zeichen von Schwäche, sondern von Ehrlichkeit ist. Und warum das Vertrauen in die Wissenschaft für eine Demokratie so wichtig ist.
A: Sprachlich üben wir heute, wie man präzise über Wahrscheinlichkeit, Gewissheit und Zweifel spricht. Auf einem Niveau, das über die einfachen Vermutungen aus Folge dreiundsechzig hinausgeht. Mit Ausdrücken wie: „Es gilt als gesichert, dass …“, „Die Befundlage deutet darauf hin, dass …“, „Nach derzeitigem Kenntnisstand …“, „Es lässt sich nicht ausschließen, dass …“, „Dies ist umstritten.“
B: „Nach derzeitigem Kenntnisstand“ ist ein besonders wichtiger Ausdruck. Er drückt genau aus, was Wissenschaft ist: das beste verfügbare Wissen zu einem bestimmten Zeitpunkt. Das sich ändern kann, wenn neue Erkenntnisse hinzukommen.
A: Gut. Fangen wir mit einem grundlegenden Missverständnis an. Viele Menschen stellen sich Wissenschaft als eine Sammlung von festen, unumstößlichen Wahrheiten vor. Etwas, das in Lehrbüchern steht und für immer gilt.
B: Und das ist falsch. Wissenschaft ist kein fertiges Gebäude, sondern ein Prozess. Eine Methode, um sich der Wahrheit schrittweise anzunähern. Und dazu gehört, dass man sich irrt und seine Meinung ändert.
A: Und hier ist ein Philosoph zentral, den man in diesem Zusammenhang kennen sollte: Karl Popper. Ein in Wien geborener Philosoph, der übrigens jahrelang in Neuseeland und England gelehrt hat. Er hat ein Prinzip formuliert, das für das moderne Wissenschaftsverständnis grundlegend ist: die Falsifizierbarkeit.
B: Ein Wiener! Natürlich. Erklär das Prinzip.
A: Popper zufolge kann man eine wissenschaftliche Theorie niemals endgültig beweisen. Man kann sie nur widerlegen. Er hat dafür ein berühmtes Beispiel gebracht: die Schwäne. Wenn man tausend weiße Schwäne sieht, ist damit nicht bewiesen, dass alle Schwäne weiß sind. Aber wenn man einen einzigen schwarzen Schwan sieht, ist die Behauptung widerlegt.
B: Und tatsächlich wurden in Australien schwarze Schwäne entdeckt. Was die Europäer lange für unmöglich gehalten hatten.
A: Genau. Und daraus folgt: Eine gute wissenschaftliche Theorie muss so formuliert sein, dass man sie prinzipiell widerlegen könnte. Sie muss falsifizierbar sein. Eine Behauptung, die sich nicht widerlegen lässt, egal was passiert, ist keine Wissenschaft.
B: Zum Beispiel eine Verschwörungstheorie. Wenn es keine Beweise gibt, heißt es: „Das zeigt, wie gut sie alles vertuschen.“ Wenn es Gegenbeweise gibt, heißt es: „Die sind gefälscht.“ Eine solche Theorie lässt sich durch nichts widerlegen. Und genau deshalb ist sie unwissenschaftlich.
A: Ein sehr wichtiger Punkt. Eine Immunisierung gegen Kritik, wie Popper sagen würde. Und das bedeutet: Der Zweifel ist der Motor der Wissenschaft. Wissenschaftler versuchen nicht, ihre Theorien zu bestätigen, sondern sie zu widerlegen. Und was diese Versuche übersteht, gilt vorläufig als gesichert.
B: Gut. Und wie wird wissenschaftliches Wissen überprüft? Da gibt es ein zentrales Verfahren: das Peer-Review.
A: Wenn ein Wissenschaftler eine Studie veröffentlichen will, schickt er sie an eine Fachzeitschrift. Und die Zeitschrift lässt die Studie von anderen, unabhängigen Experten auf dem gleichen Gebiet begutachten. Sie prüfen die Methoden, die Daten und die Schlussfolgerungen. Und oft muss die Studie überarbeitet werden, bevor sie veröffentlicht wird.
B: Das ist wieder das Peer-Prinzip aus Folge vierundvierzig! Gleichrangige prüfen sich gegenseitig.
A: Genau. Wobei auch das Peer-Review nicht perfekt ist. Gutachter können Fehler übersehen, oder sie haben eigene Interessen. Und es gibt die sogenannte Replikationskrise.
B: Was ist das?
A: In den letzten Jahren hat man in manchen Disziplinen festgestellt, dass sich die Ergebnisse vieler veröffentlichter Studien nicht wiederholen ließen. Wenn andere Forscher das gleiche Experiment durchführten, kamen sie zu anderen Ergebnissen. Besonders betroffen war die Psychologie. Ein großes Projekt hat versucht, hundert psychologische Studien zu wiederholen. Und nur bei weniger als der Hälfte gelang es.
B: Das ist erschreckend. Aber andererseits auch ein Zeichen, dass die Wissenschaft sich selbst korrigiert. Sie hat dieses Problem ja selbst entdeckt und arbeitet daran.
A: Genau so sehe ich es auch. Die Fähigkeit zur Selbstkorrektur ist die eigentliche Stärke der Wissenschaft. Kein anderes System des Wissens kritisiert sich selbst so systematisch. Und daraus sind Reformen entstanden: die Vorregistrierung von Studien, die Offenlegung der Daten, größere Stichproben.
B: Und jetzt die Pandemie. Denn hier zeigte sich das Problem der Unsicherheit in aller Schärfe. Lena, was ist da schiefgelaufen?
A: Das Grundproblem war, dass die Öffentlichkeit Gewissheit wollte, die Wissenschaft aber nur vorläufiges Wissen bieten konnte. Ein neues Virus, über das man anfangs fast nichts wusste. Und die Erkenntnisse änderten sich ständig.
B: Zum Beispiel die Masken. Am Anfang hieß es, Masken würden wenig bringen. Später hieß es, sie seien sehr wichtig. Und viele Menschen sagten: „Die Wissenschaftler wissen ja selbst nicht, was sie wollen. Warum sollten wir ihnen glauben?“
A: Und das ist genau das Missverständnis. Dass sich die Empfehlung änderte, war kein Zeichen von Inkompetenz, sondern davon, dass die Wissenschaft funktionierte. Neue Daten führten zu neuen Erkenntnissen. Das ist kein Fehler, das ist der Kern des wissenschaftlichen Arbeitens.
B: Wobei man fairerweise auch sagen muss, dass die Kommunikation oft schlecht war. Wenn Unsicherheit als Gewissheit präsentiert wird, und sich dann als falsch erweist, verliert man Vertrauen. Es wäre ehrlicher gewesen, von Anfang an zu sagen: „Nach derzeitigem Kenntnisstand empfehlen wir …, aber das kann sich ändern.“
A: Das ist ein ganz wichtiger Punkt. Christian Drosten hat übrigens genau das immer wieder betont. In seinem Podcast hat er oft gesagt, was man weiß, was man nicht weiß und wie sicher er sich ist. Und manche haben ihm genau das vorgeworfen. Als ob Ehrlichkeit über Unsicherheit eine Schwäche wäre.
B: Und es gab noch ein zweites Problem. Die Vermischung von Wissenschaft und Politik. Die Wissenschaft kann sagen, wie ein Virus sich verbreitet und welche Maßnahmen wie wirken. Aber ob man Schulen schließt, ist keine wissenschaftliche, sondern eine politische Entscheidung. Weil man verschiedene Werte abwägen muss: Gesundheit, Bildung, Wirtschaft, Freiheit.
A: Das ist eine entscheidende Unterscheidung. Der Soziologe Max Weber, wieder er, hat das schon vor hundert Jahren in seinem Vortrag „Wissenschaft als Beruf“ formuliert. Die Wissenschaft kann sagen, was ist und welche Mittel zu welchem Ziel führen. Aber sie kann nicht sagen, welches Ziel man wählen soll. Das ist eine Frage der Werte.
B: Und wenn Politiker sagen „Wir folgen der Wissenschaft“, dann verschleiern sie manchmal, dass sie eigentlich eine Wertentscheidung treffen. Und wenn diese Entscheidung unpopulär ist, richtet sich der Ärger gegen die Wissenschaftler.
A: Genau das ist passiert. Wissenschaftler wurden zu Sündenböcken, wie in Folge sechsundachtzig. Sie bekamen Morddrohungen. Viele haben sich danach aus der öffentlichen Kommunikation zurückgezogen. Was ein großer Verlust für die Gesellschaft ist.
B: Und jetzt ein interessanter Befund. Wie steht es eigentlich um das Vertrauen in die Wissenschaft in Deutschland? Es gibt dazu jedes Jahr eine Umfrage, das sogenannte Wissenschaftsbarometer.
A: Und die Ergebnisse sind differenziert. Während der Pandemie stieg das Vertrauen zunächst stark an. Eine große Mehrheit vertraute der Wissenschaft. Später sank es wieder etwas, blieb aber insgesamt auf einem recht hohen Niveau. Eine kleinere, aber lautstarke Gruppe misstraut der Wissenschaft jedoch grundsätzlich.
B: Und warum misstrauen manche Menschen der Wissenschaft? Das ist eine wichtige Frage, und man sollte sie nicht mit Arroganz beantworten.
A: Absolut. Es gibt verschiedene Gründe. Erstens die Abhängigkeit von Geldgebern. Viele Menschen vermuten, dass Wissenschaftler im Interesse der Industrie forschen. Und das ist nicht ganz unbegründet. Es gab historische Fälle, in denen die Tabakindustrie oder die Ölindustrie Studien finanziert hat, um Zweifel an den Gefahren des Rauchens oder des Klimawandels zu säen.
B: Das ist ein wichtiger Punkt. Das Buch „Die Machiavellis der Wissenschaft“ der Historiker Naomi Oreskes und Erik Conway hat dokumentiert, wie gezielt Zweifel gestreut wurde. Und das hat das Vertrauen nachhaltig beschädigt.
A: Zweitens die Erfahrung, sich nicht gehört zu fühlen. Wenn Wissenschaftler und Eliten herablassend über „die einfachen Leute“ sprechen, entsteht Ablehnung. Wer sich nicht ernst genommen fühlt, wendet sich ab.
B: Drittens die Komplexität. Wissenschaft ist oft schwer zu verstehen. Und einfache, eindeutige Antworten von Verschwörungstheoretikern wirken attraktiver als komplizierte, unsichere wissenschaftliche Erkenntnisse.
A: Und viertens: Vertrauen in die Wissenschaft hängt oft mit dem Vertrauen in Institutionen insgesamt zusammen. Wer dem Staat, den Medien und den Eliten generell misstraut, misstraut oft auch der Wissenschaft.
B: Gut. Und was kann man tun? Wie lässt sich das Vertrauen stärken?
A: Erstens: Transparenz über Unsicherheit. Die Wissenschaft sollte offen sagen, was sie weiß und was nicht. Und zwischen gesicherten Erkenntnissen und vorläufigen Vermutungen unterscheiden.
B: Zweitens: Wissenschaftskommunikation verbessern. Wissenschaftler sollten lernen, verständlich zu sprechen, ohne zu vereinfachen. Und zuhören, nicht nur belehren.
A: Drittens: Bildung. Schon in der Schule sollte man nicht nur wissenschaftliche Fakten lernen, sondern auch, wie Wissenschaft funktioniert. Warum Unsicherheit dazugehört. Wie man eine seriöse Studie von einer unseriösen unterscheidet.
B: Und viertens, und das finde ich besonders wichtig: Vertrauen in die Wissenschaft heißt nicht blindes Vertrauen. Ein gesundes, kritisches Vertrauen. Man sollte fragen dürfen. Die Wissenschaft lebt ja vom Zweifel. Der Unterschied ist, ob man aus Neugier zweifelt oder aus Prinzip.
A: Ein schöner Gedanke. Kritisches Vertrauen statt blinden Glaubens oder grundsätzlichen Misstrauens. Jetzt zur Geschichte. Diesmal geht es um Amira, die ja als Pflegefachfrau während der Pandemie gearbeitet hat. Und um ihre eigene Familie.
B: Ah, das ist bestimmt eine persönliche Geschichte.
A: Ja. Amiras jüngerer Bruder, Youssef, lebt in Casablanca. Und während der Pandemie hat er in den sozialen Medien viele Videos gesehen, die gegen die Impfung waren. Und er war überzeugt, dass die Impfung gefährlich sei. Dass sie unfruchtbar mache und dass sie Mikrochips enthalte.
B: Die klassischen Mythen. Wie hat Amira reagiert?
A: Am Anfang sehr emotional. Sie hat ihn angeschrien, am Telefon. Sie hat gesagt: „Du bist so dumm! Ich sehe jeden Tag Menschen auf der Intensivstation sterben, und du glaubst irgendwelchen Videos!“
B: Verständlich, aber nicht hilfreich vermutlich.
A: Genau. Youssef hat aufgelegt und wochenlang nicht mehr mit ihr gesprochen. Und Amira war verzweifelt. Weil er auch Kontakt mit ihren Eltern hatte, die schon älter und gefährdet waren.
B: Und was hat sie dann gemacht?
A: Sie hat mit Lukas darüber gesprochen. Und Lukas, der ja Arzt ist, hat ihr etwas Kluges gesagt: „Wenn du ihn als dumm behandelst, verteidigt er sich. Niemand ändert seine Meinung, wenn er sich angegriffen fühlt. Versuch zuerst zu verstehen, warum er Angst hat.“
B: Das ist psychologisch sehr klug. Und hat sie es versucht?
A: Ja. Beim nächsten Telefonat hat sie nicht argumentiert, sondern gefragt. „Youssef, was macht dir eigentlich Angst?“ Und Youssef hat erzählt, dass er Angst hatte, weil die Impfung so schnell entwickelt worden war. Und weil er der Regierung nicht vertraute. Und weil ein Freund nach der Impfung krank geworden war.
B: Das sind ja eigentlich nachvollziehbare Sorgen, hinter den Mythen.
A: Genau. Und Amira hat diese Sorgen ernst genommen. Sie hat erklärt, warum die Entwicklung so schnell ging. Nicht weil man Schritte übersprungen hatte, sondern weil man jahrelange Vorarbeit an der mRNA-Technologie hatte, weil viele Phasen parallel liefen und weil sehr viel Geld zur Verfügung stand. Sie hat ihm von der Firma in Mainz erzählt, aus Folge dreiundfünfzig.
B: Die Gründer mit türkischen Wurzeln!
A: Genau. Und sie hat zugegeben, was man nicht wusste. Sie hat gesagt: „Ich kann dir nicht garantieren, dass die Impfung für jeden völlig ohne Nebenwirkungen ist. Das kann niemand. Aber nach allem, was wir wissen, ist das Risiko durch das Virus viel größer.“
B: Die Ehrlichkeit über Unsicherheit hat ihre Glaubwürdigkeit gestärkt.
A: Genau das. Youssef hat gesagt, das sei das erste Mal, dass ihm jemand nicht einfach gesagt habe, er sei dumm. Und dass ihm jemand zugegeben habe, dass es keine absolute Sicherheit gibt. Gerade das habe ihn überzeugt.
B: Und hat er sich impfen lassen?
A: Nach zwei Wochen Bedenkzeit, ja. Und er hat auch seine Eltern ermutigt. Und er hat später gesagt: „Ich habe nicht der Wissenschaft vertraut. Ich habe meiner Schwester vertraut. Und meine Schwester hat mir die Wissenschaft erklärt.“
B: Ein Satz, der viel über Vertrauen aussagt. Vertrauen in die Wissenschaft läuft oft über Menschen, denen wir persönlich vertrauen.
A: Jetzt bist du dran, Hörer, Hörerin. Wie stehst du zur Wissenschaft? Formuliere eine wissenschaftliche Aussage mit den richtigen Abstufungen der Gewissheit: „Es gilt als gesichert, dass …“, „Die Befundlage deutet darauf hin, dass …“, „Nach derzeitigem Kenntnisstand …“, „Es lässt sich nicht ausschließen, dass …“
B: Und denk an eine Situation, in der du jemanden mit anderen Ansichten überzeugen wolltest. Hast du argumentiert oder zugehört?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: die Brisanz. Die Eigenschaft eines Themas, sehr umstritten und explosiv zu sein.
A: Wort Nummer zwei: nach derzeitigem Kenntnisstand. Nach dem besten verfügbaren Wissen zum jetzigen Zeitpunkt.
B: Wort Nummer drei: widerlegen. Beweisen, dass eine Behauptung falsch ist.
A: Wort Nummer vier: die Falsifizierbarkeit. Die Eigenschaft einer Theorie, dass man sie prinzipiell widerlegen könnte.
B: Wort Nummer fünf: Zweifel säen. Gezielt Unsicherheit verbreiten.
A: Und Wort Nummer sechs: verschleiern. Etwas absichtlich undeutlich machen, damit man es nicht klar erkennt.
B: Noch einmal: die Brisanz, nach derzeitigem Kenntnisstand, widerlegen, die Falsifizierbarkeit, Zweifel säen, verschleiern.
A: Was nehmen wir mit? Wissenschaft ist kein fertiges Gebäude, sondern ein Prozess der schrittweisen Annäherung an die Wahrheit. Popper zufolge kann man Theorien nicht beweisen, nur widerlegen.
B: Das Peer-Review und die Selbstkorrektur, etwa nach der Replikationskrise, sind die Stärken der Wissenschaft.
A: In der Pandemie wurde Unsicherheit oft mit Inkompetenz verwechselt. Und Wissenschaft und politische Wertentscheidungen wurden vermischt.
B: Und Vertrauen entsteht durch Ehrlichkeit über Unsicherheit, durch Zuhören statt Belehren und oft durch Menschen, denen wir persönlich vertrauen.
A: Das ist das Ende von Folge neunundachtzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und zweifle ruhig. Aber aus Neugier, nicht aus Prinzip. Servus!
A: Tschüss!
VOCAB: die Brisanz | Die Eigenschaft eines Themas, sehr umstritten und explosiv zu sein. | 💥
VOCAB: nach derzeitigem Kenntnisstand | Nach dem besten verfügbaren Wissen zum jetzigen Zeitpunkt. | 🔬
VOCAB: widerlegen | Beweisen, dass eine Behauptung falsch ist. | ❌
VOCAB: die Falsifizierbarkeit | Eine Theorie muss sich prinzipiell widerlegen lassen. | 🦢
VOCAB: Zweifel säen | Gezielt Unsicherheit verbreiten. | 🌱
VOCAB: verschleiern | Etwas absichtlich undeutlich machen. | 🌫️
QUIZ: Was besagt Poppers Prinzip der Falsifizierbarkeit? | Theorien kann man endgültig beweisen | Theorien kann man nicht beweisen, nur widerlegen | Alle Theorien sind falsch | 2
QUIZ: Was ist die Replikationskrise? | Viele Studienergebnisse ließen sich nicht wiederholen | Es gibt zu wenige Wissenschaftler | Studien werden nicht veröffentlicht | 1
QUIZ: Was hat Max Weber über die Wissenschaft gesagt? | Sie kann sagen, welches Ziel man wählen soll | Sie kann sagen, was ist, aber nicht, welches Ziel man wählen soll | Sie ist immer politisch | 2
QUIZ: Was hat Lukas Amira geraten? | Ihren Bruder als dumm zu behandeln | Zuerst zu verstehen, warum ihr Bruder Angst hat | Den Kontakt abzubrechen | 2
QUIZ: Was hat Youssef am Ende gesagt? | Er vertraue nur der Regierung | Er habe seiner Schwester vertraut, und sie habe ihm die Wissenschaft erklärt | Er bleibe gegen die Impfung | 2
`;

DATA.podScripts.ep090 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge neunzig. Heute richten wir den Blick nach oben. Zu den Sternen. Wir stellen eine der ganz großen Fragen: Lohnt sich die Raumfahrt?
A: Lohnt es sich, Milliarden auszugeben, um Menschen auf den Mond oder auf den Mars zu schicken, während auf der Erde Menschen hungern, das Klima kollabiert und Schulen verfallen? Oder ist die Raumfahrt gerade wegen dieser Probleme unverzichtbar?
B: Eine Debatte, die so alt ist wie die Raumfahrt selbst. Schon in den Sechzigerjahren, während des Wettlaufs zum Mond, gab es heftige Kritik. Und heute, mit privaten Unternehmen und Milliardären, die ins All fliegen, ist sie aktueller denn je.
A: Sprachlich widmen wir uns heute einer Struktur, die für die gehobene Schriftsprache und besonders für wissenschaftliche Texte typisch ist: den erweiterten Partizipialattributen. Wir haben sie in Folge zweiundachtzig kurz angesprochen. Heute vertiefen wir sie.
B: Ein Partizipialattribut ist ein Partizip, das wie ein Adjektiv vor einem Nomen steht und erweitert werden kann. „Die fliegende Rakete.“ Das ist einfach. Aber man kann es erweitern: „Die mit über hundert Tonnen Treibstoff beladene, von Cape Canaveral aus startende Rakete.“
A: Das klingt kompliziert, aber es ist eigentlich eine Verdichtung. Statt zweier Relativsätze, „die Rakete, die mit über hundert Tonnen Treibstoff beladen ist und die von Cape Canaveral aus startet“, packt man alles vor das Nomen.
B: Es gibt zwei Arten von Partizipien. Das Partizip Präsens mit „-end“: „die startende Rakete“, also die Rakete, die gerade startet. Es drückt etwas Gleichzeitiges und Aktives aus. Und das Partizip Perfekt: „die gestartete Rakete“, also die Rakete, die gestartet ist. Bei transitiven Verben hat es oft passive Bedeutung: „die gebaute Station“, also die Station, die gebaut wurde.
A: Und es gibt noch eine dritte, besonders elegante Form: das Gerundivum mit „zu“ plus Partizip Präsens. „Die zu lösenden Probleme“, also die Probleme, die gelöst werden müssen. „Eine nicht zu unterschätzende Gefahr“, eine Gefahr, die man nicht unterschätzen darf.
B: Die liest man oft in Zeitungen. „Eine nicht zu unterschätzende Herausforderung.“ Der Trick beim Lesen: Man sucht zuerst den Artikel und dann das dazugehörige Nomen. Und dann liest man den Teil dazwischen.
A: Gut, das war viel Grammatik. Jetzt zur Raumfahrt. Fangen wir mit einem historischen Rückblick an. Und der führt, wie so oft, auch nach Deutschland. Mit einer sehr ambivalenten Geschichte.
B: Du meinst Wernher von Braun.
A: Genau. Wernher von Braun war ein deutscher Raketeningenieur. Im Zweiten Weltkrieg entwickelte er für die Nationalsozialisten die V2-Rakete, die erste Großrakete der Welt. Sie wurde gegen London und Antwerpen eingesetzt und tötete Tausende Menschen. Und noch mehr Menschen starben bei ihrer Herstellung. Zwangsarbeiter und KZ-Häftlinge, die im Lager Mittelbau-Dora unter unmenschlichen Bedingungen arbeiten mussten.
B: Und nach dem Krieg wurde von Braun von den Amerikanern in die USA gebracht. Zusammen mit vielen anderen deutschen Wissenschaftlern. Die Operation hieß „Paperclip“. Und dort wurde er zum Vater des amerikanischen Raumfahrtprogramms. Er entwickelte die Saturn-V-Rakete, die die Astronauten zum Mond brachte.
A: Eine zutiefst widersprüchliche Biografie. Der gleiche Mann, dessen Raketen auf London fielen, brachte die ersten Menschen auf den Mond. Und die Frage, inwieweit er moralisch für die Verbrechen verantwortlich war, wird bis heute kontrovers diskutiert.
B: Der amerikanische Satiriker Tom Lehrer hat dazu ein bitterböses Lied geschrieben. Darin heißt es sinngemäß: Wenn die Raketen hochgehen, wen kümmert es, wo sie herunterkommen? Das sei nicht seine Abteilung, sagt Wernher von Braun.
A: Eine sehr scharfe Kritik an der moralischen Gleichgültigkeit eines Wissenschaftlers, der sich nur für die Technik interessiert, nicht für ihre Folgen. Das ist eine Frage, die uns auch heute bei der KI begegnet, wie in Folge einundachtzig.
B: Gut. Dann zur eigentlichen Debatte. Ich vertrete die Pro-Seite. Ja, die Raumfahrt lohnt sich.
A: Und ich die kritische Seite. Wobei ich, wie so oft, nicht völlig dagegen bin.
B: Mein erstes Argument: der technologische Nutzen. Viele Technologien, die wir heute täglich benutzen, sind direkt oder indirekt aus der Raumfahrt hervorgegangen. Satellitennavigation, also das GPS in unseren Handys. Wettersatelliten, ohne die moderne Wettervorhersagen undenkbar wären. Die Satellitenkommunikation.
A: Wobei ich da ein bisschen widersprechen muss. Man hört oft Mythen über angebliche Erfindungen der Raumfahrt. Zum Beispiel, dass die Teflonpfanne oder der Klettverschluss aus der Raumfahrt stammen. Das stimmt nicht. Beide gab es schon vorher. Die Raumfahrt hat sie nur bekannt gemacht.
B: Das ist richtig. Aber der Nutzen der Satelliten ist unbestreitbar. Und hier kommt mein zweites Argument: die Erdbeobachtung. Und das ist, ironischerweise, ein Argument für die Raumfahrt gerade wegen der Probleme auf der Erde. Ohne Satelliten wüssten wir viel weniger über den Klimawandel.
A: Das ist ein starkes Argument. Die von Satelliten gesammelten Daten über das schmelzende Eis an den Polen, den steigenden Meeresspiegel und die Abholzung der Regenwälder sind für die Klimaforschung unverzichtbar.
B: Genau. Und das europäische Erdbeobachtungsprogramm Copernicus liefert kostenlos riesige Mengen an Daten. Für die Landwirtschaft, für den Katastrophenschutz, für die Klimaforschung. Bei Überschwemmungen oder Waldbränden helfen die Satellitenbilder, Menschenleben zu retten.
A: Gut, das gestehe ich dir zu. Aber das betrifft die unbemannte Raumfahrt, also Satelliten. Meine Kritik richtet sich vor allem gegen die bemannte Raumfahrt. Menschen ins All zu schicken, ist um ein Vielfaches teurer und riskanter. Und vieles, was Menschen dort tun, könnten Roboter günstiger erledigen.
B: Ein häufiger Einwand. Meine Antwort: Erstens können Menschen flexibel auf unvorhergesehene Situationen reagieren, was Roboter bisher nur begrenzt können. Und zweitens: die Inspiration. Und das ist mein drittes Argument.
A: Die Inspiration. Das klingt mir ein bisschen pathetisch, ehrlich gesagt.
B: Vielleicht. Aber es ist real. Die Mondlandung neunzehnhundertneunundsechzig wurde von über einer halben Milliarde Menschen live im Fernsehen verfolgt. Eine ganze Generation wurde dadurch inspiriert, Wissenschaftler und Ingenieure zu werden. Man spricht vom „Apollo-Effekt“.
A: Das bestreite ich nicht. Aber ich möchte die Kosten ins Spiel bringen. Das Apollo-Programm kostete nach heutigem Wert weit über zweihundert Milliarden Dollar. Und die Internationale Raumstation ISS gilt als eines der teuersten Objekte, das die Menschheit je gebaut hat, mit Gesamtkosten von über hundert Milliarden.
B: Klingt viel. Aber im Verhältnis? Das Budget der europäischen Raumfahrtagentur ESA beträgt pro Jahr und pro europäischem Bürger nur einen relativ kleinen Betrag. Etwa so viel wie ein Kinoticket.
A: Das ist ein geschickter rhetorischer Trick. Hahaha. Wie wir in Folge sechsundachtzig gelernt haben. Man macht eine große Zahl klein, indem man sie pro Person umrechnet. Aber absolut sind es trotzdem Milliarden, die woanders fehlen.
B: Hahaha. Erwischt. Aber das gilt für jede Ausgabe. Und mein viertes Argument ist ein langfristiges: das Überleben der Menschheit. Manche argumentieren, dass die Menschheit langfristig nur überleben kann, wenn sie mehrere Planeten besiedelt. Für den Fall einer globalen Katastrophe. Ein Asteroideneinschlag, ein Supervulkan, ein Atomkrieg.
A: Und hier, muss ich sagen, werde ich sehr skeptisch. Besonders bei den Plänen einiger Milliardäre, die eine Kolonie auf dem Mars gründen wollen. Der Mars ist ein lebensfeindlicher Ort. Es gibt keine atmosphärische Luft zum Atmen, eine tödliche Strahlung, Temperaturen von minus sechzig Grad im Durchschnitt.
B: Das stimmt. Selbst nach einem Atomkrieg oder mit einem katastrophalen Klimawandel wäre die Erde immer noch unendlich viel bewohnbarer als der Mars.
A: Genau! Und ich finde es fast zynisch, wenn reiche Menschen davon träumen, auf den Mars zu flüchten, statt ihr Geld einzusetzen, um die Erde zu retten. Das ist eine Art Weltflucht. Der Astronom und Autor Carl Sagan hat übrigens nach dem berühmten Foto „Pale Blue Dot“ einen wunderbaren Text geschrieben.
B: Das Foto, das die Raumsonde Voyager neunzehnhundertneunzig aus sechs Milliarden Kilometern Entfernung aufgenommen hat. Auf dem die Erde nur ein winziger, blassblauer Punkt ist. Ein Staubkorn in einem Sonnenstrahl.
A: Genau. Und Sagan schreibt sinngemäß, dass dieser kleine Punkt alles ist, was wir haben. Dass jeder Mensch, den wir je geliebt haben, jeder Krieg, jede Kultur auf diesem winzigen Staubkorn stattgefunden hat. Und dass es keinen Ort gibt, zumindest in absehbarer Zukunft, zu dem wir auswandern könnten. Und dass dies unsere Verantwortung unterstreicht, freundlicher miteinander umzugehen und diesen einzigen Ort zu bewahren.
B: Ein bewegender Gedanke. Und er zeigt etwas Paradoxes: Die Raumfahrt hat uns gerade dadurch etwas über die Erde gelehrt, dass sie uns von ihr entfernt hat. Man spricht vom sogenannten „Overview-Effekt“.
A: Erklär den Begriff.
B: Viele Astronauten berichten, dass der Anblick der Erde aus dem All ihr Bewusstsein grundlegend verändert hat. Sie sehen einen kleinen, zerbrechlichen Planeten ohne sichtbare Grenzen, umgeben von einer hauchdünnen Atmosphäre. Und sie empfinden plötzlich eine tiefe Verbundenheit mit der ganzen Menschheit und ein starkes Bedürfnis, den Planeten zu schützen.
A: Das ist eigentlich das schönste Argument für die Raumfahrt. Sie verändert unseren Blick auf uns selbst. Auch der deutsche Astronaut Alexander Gerst hat darüber gesprochen. Er hat von der ISS aus Botschaften an seine Enkelkinder gesendet, in denen er sich für den Zustand des Planeten entschuldigte.
B: Ja, das war sehr bewegend. Er sagte, er habe die Rauchwolken der Waldbrände und die zurückgehenden Gletscher von oben gesehen. Und er wünsche sich, dass seine Generation nicht als diejenige in Erinnerung bleibe, die den Planeten zerstört hat.
A: Und dann gibt es noch die neue Dimension: die Kommerzialisierung. Private Unternehmen wie die von Elon Musk oder Jeff Bezos dominieren inzwischen große Teile der Raumfahrt. Und das wirft ganz neue Fragen auf.
B: Zum Beispiel der Weltraumtourismus. Superreiche, die für Millionen ein paar Minuten in den Weltraum fliegen. Und die dabei enorm viel CO2 ausstoßen. Das empfinden viele als dekadent.
A: „Dekadent“ heißt: Verfall und übertriebenen Luxus zeigend. Und ein weiteres Problem ist der Weltraumschrott. Inzwischen kreisen Tausende von Satelliten und Millionen kleiner Trümmerteile um die Erde. Ein einziges Netzwerk für Satelliteninternet umfasst schon Tausende Satelliten.
B: Und Astronomen beklagen, dass diese Satelliten den Nachthimmel verschmutzen und ihre Beobachtungen stören. Und es droht das sogenannte Kessler-Syndrom.
A: Was ist das?
B: Eine Kettenreaktion. Wenn ein Satellit mit Weltraumschrott zusammenstößt, entstehen Tausende neuer Trümmer. Die wiederum mit anderen Satelliten kollidieren. Und so weiter. Im schlimmsten Fall könnten bestimmte Umlaufbahnen für Jahrzehnte unbrauchbar werden.
A: Und wer regelt das? Wem gehört der Weltraum?
B: Das ist eine spannende rechtliche Frage. Der Weltraumvertrag von neunzehnhundertsiebenundsechzig legt fest, dass der Weltraum allen Menschen gehört und kein Staat Himmelskörper beanspruchen darf. Aber er wurde für eine Zeit geschrieben, als nur Staaten Raumfahrt betrieben. Für private Unternehmen gibt es große Lücken.
A: Der Weltraum als Gemeingut, wie in Folge siebenundsechzig. Jetzt zur Geschichte. Diesmal geht es um Lea. Die ja in Braunschweig Informatik studieren will.
B: Lea! Was ist mit ihr?
A: Lea hat inzwischen tatsächlich ihre Fachhochschulreife gemacht und studiert jetzt an der Technischen Universität Braunschweig. Und Braunschweig ist, das wissen viele nicht, ein wichtiger Standort für die Luft- und Raumfahrtforschung. Das Deutsche Zentrum für Luft- und Raumfahrt hat dort ein großes Institut.
B: Und Lea interessiert sich dafür?
A: Sehr. Sie ist in einem studentischen Projekt, das einen kleinen Satelliten baut. Einen sogenannten CubeSat. Das ist ein winziger Satellit, nur zehn mal zehn mal zehn Zentimeter groß. Wie ein Würfel. Und Studierende auf der ganzen Welt bauen solche Satelliten, um zu lernen.
B: Das ist ja toll! Und was soll ihr Satellit machen?
A: Er soll die Bodenfeuchtigkeit messen. Für die Landwirtschaft in Regionen, die von Dürre bedroht sind. Lea ist für die Software zuständig. Sie programmiert das System, das die Daten auswertet und zur Erde schickt.
B: Ein perfektes Beispiel für den Nutzen der unbemannten Raumfahrt. Und wie läuft es?
A: Es gab viele Rückschläge. Der erste Prototyp ist bei einem Test in einer Vakuumkammer kaputtgegangen. Das ist eine Kammer, in der man die Bedingungen im All simuliert. Und die Elektronik hat die extremen Temperaturen nicht ausgehalten.
B: Und hat sie aufgegeben?
A: Natürlich nicht. Wie Hias gesagt hat: Ein Schritt nach dem anderen. Und nach zwei Jahren Arbeit war der Satellit fertig. Und dann kam der große Tag. Der Start. Der Satellit wurde zusammen mit anderen kleinen Satelliten auf einer Rakete ins All gebracht.
B: Und Lea war dabei?
A: Sie hat den Start live im Kontrollraum der Universität verfolgt. Zusammen mit ihrem Team. Und mit einem besonderen Gast: ihrem Vater. Dem Mann, der fünfundzwanzig Jahre am Band bei Volkswagen gearbeitet hat und der gesagt hatte, Studieren sei nichts für Leute wie sie.
B: Oh, wie schön! Und?
A: Als das erste Signal des Satelliten empfangen wurde, ein kleines Piepen aus dem All, haben alle gejubelt und sich umarmt. Und Leas Vater hat geweint. Und er hat gesagt: „Ich habe mein Leben lang Autos gebaut, die auf der Straße fahren. Und meine Tochter baut einen Satelliten, der um die Erde fliegt.“
B: Ein unglaublicher Moment. Von Wolfsburg in den Weltraum.
A: Und die Daten des Satelliten werden inzwischen von einer Forschungsgruppe genutzt, die mit Bauern in Ostafrika zusammenarbeitet. Damit sie besser planen können, wann sie säen und bewässern.
B: Das ist vielleicht die beste Antwort auf unsere Frage. Die Raumfahrt lohnt sich, wenn sie dem Leben auf der Erde dient.
A: Jetzt bist du dran, Hörer, Hörerin. Lohnt sich die Raumfahrt? Formuliere deine Position mit erweiterten Partizipialattributen. Zum Beispiel: „Die von Satelliten gesammelten Daten …“, „Die mit enormen Kosten verbundene bemannte Raumfahrt …“, „Eine nicht zu unterschätzende Gefahr …“
B: Und denk an das Foto vom blassblauen Punkt. Was bedeutet es für dich?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: das Partizipialattribut. Ein Partizip, das wie ein Adjektiv vor einem Nomen steht und erweitert werden kann.
A: Wort Nummer zwei: nicht zu unterschätzen. So bedeutend, dass man es nicht unterschätzen darf.
B: Wort Nummer drei: lebensfeindlich. So, dass Leben dort kaum möglich ist.
A: Wort Nummer vier: der Overview-Effekt. Die Veränderung des Bewusstseins beim Anblick der Erde aus dem All.
B: Wort Nummer fünf: dekadent. Verfall und übertriebenen Luxus zeigend.
A: Und Wort Nummer sechs: der Rückschlag. Ein Ereignis, das einen Fortschritt unterbricht oder zurückwirft.
B: Noch einmal: das Partizipialattribut, nicht zu unterschätzen, lebensfeindlich, der Overview-Effekt, dekadent, der Rückschlag.
A: Was nehmen wir mit? Erweiterte Partizipialattribute verdichten Informationen: „die mit Treibstoff beladene, startende Rakete“. Und das Gerundivum: „die zu lösenden Probleme“.
B: Die Raumfahrt hat eine ambivalente Geschichte, verkörpert durch Wernher von Braun.
A: Für die Raumfahrt sprechen die Satelliten für Navigation und Klimaforschung, die Inspiration und der Overview-Effekt. Dagegen die enormen Kosten, der Weltraumschrott und die Illusion, auf den Mars flüchten zu können.
B: Und vielleicht ist die beste Antwort: Die Raumfahrt lohnt sich, wenn sie uns hilft, unseren einzigen Planeten zu bewahren.
A: Das ist das Ende von Folge neunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und schau heute Abend einmal in den Sternenhimmel. Wenn die Satelliten ihn noch nicht verdecken. Servus!
A: Tschüss!
VOCAB: das Partizipialattribut | Ein Partizip vor einem Nomen, das wie ein Adjektiv erweitert werden kann. | 🧩
VOCAB: nicht zu unterschätzen | So bedeutend, dass man es nicht unterschätzen darf. | ⚠️
VOCAB: lebensfeindlich | So, dass Leben dort kaum möglich ist. | 🪐
VOCAB: der Overview-Effekt | Die Veränderung des Bewusstseins beim Anblick der Erde aus dem All. | 🌍
VOCAB: dekadent | Verfall und übertriebenen Luxus zeigend. | 🍾
VOCAB: der Rückschlag | Ein Ereignis, das einen Fortschritt unterbricht. | ↩️
QUIZ: Was bedeutet „die zu lösenden Probleme“? | Die Probleme, die gelöst wurden | Die Probleme, die gelöst werden müssen | Die Probleme, die man nicht lösen kann | 2
QUIZ: Was entwickelte Wernher von Braun im Zweiten Weltkrieg? | Die V2-Rakete | Den ersten Satelliten | Das GPS | 1
QUIZ: Was ist der „Overview-Effekt“? | Astronauten verändern ihr Bewusstsein beim Anblick der Erde aus dem All | Ein technisches Problem im All | Eine Methode der Navigation | 1
QUIZ: Was ist das Kessler-Syndrom? | Eine Krankheit von Astronauten | Eine Kettenreaktion von Zusammenstößen im Weltraum | Eine Form von Heimweh | 2
QUIZ: Was soll Leas Satellit messen? | Die Temperatur auf dem Mars | Die Bodenfeuchtigkeit für die Landwirtschaft | Die Zahl der Sterne | 2
`;

DATA.podScripts.ep091 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge einundneunzig. Heute stellen wir eine Frage, die gewissermaßen den Kern unseres ganzen Podcasts berührt. Schließlich heißt er „Denk auf Deutsch“. Die Frage lautet: Prägt die Sprache das Denken?
A: Denken wir anders, je nachdem, welche Sprache wir sprechen? Sieht ein Deutscher die Welt anders als ein Japaner oder ein Araber? Und was passiert in unserem Kopf, wenn wir eine neue Sprache lernen?
B: Diese Frage beschäftigt Philosophen, Linguisten und Psychologen seit Jahrhunderten. Und sie hat einen Namen: die Hypothese der linguistischen Relativität. Oder nach ihren bekanntesten Vertretern: die Sapir-Whorf-Hypothese.
A: Sprachlich widmen wir uns heute dem Konjunktiv in seinen feinsten Nuancen. Und einigen besonders gehobenen Konnektoren und Partikeln, die man in wissenschaftlichen Essays findet: „mithin“, „gleichwohl“, „indes“, „insofern“, „gewissermaßen“, „mitnichten“.
B: „Mitnichten“ ist ein schönes, etwas altmodisches Wort. Es bedeutet: keineswegs, überhaupt nicht. „Das ist mitnichten bewiesen.“ Und „gleichwohl“ bedeutet: trotzdem, dennoch. „Die Hypothese ist umstritten, gleichwohl hat sie die Forschung bereichert.“
A: Und „indes“ ist eine elegante Alternative zu „jedoch“ oder „während“. „Die einen glauben an einen starken Einfluss, andere indes bezweifeln ihn.“ Man findet es vor allem in der Schriftsprache und in Feuilletons, also den Kulturteilen der Zeitungen.
B: Gut. Fangen wir mit der Geschichte der Idee an. Und die beginnt, wie so oft, mit einem Deutschen. Mit Wilhelm von Humboldt.
A: Ja, der ältere Bruder des berühmten Naturforschers Alexander von Humboldt. Wilhelm war Sprachwissenschaftler, Philosoph und hat übrigens die Universität in Berlin gegründet, die heute seinen Namen trägt. Und er vertrat Anfang des neunzehnten Jahrhunderts die These, dass jede Sprache eine eigene „Weltansicht“ enthält.
B: Eine Weltansicht. Das heißt, jede Sprache ist nicht nur ein Werkzeug, um Gedanken auszudrücken, sondern sie formt die Gedanken selbst. Humboldt schrieb sinngemäß, die Sprache sei das bildende Organ des Gedankens.
A: Ein Jahrhundert später haben zwei Amerikaner diese Idee aufgegriffen. Der Linguist Edward Sapir und vor allem sein Schüler Benjamin Lee Whorf. Whorf war übrigens im Hauptberuf gar kein Wissenschaftler, sondern Brandschutzinspektor bei einer Versicherung.
B: Ein Brandschutzinspektor! Das ist großartig. Und wie kam er auf seine Ideen?
A: Gerade durch seinen Beruf. Er hat beobachtet, dass Arbeiter neben Fässern mit der Aufschrift „leer“, auf Englisch „empty“, unvorsichtig rauchten. Weil „leer“ für sie „harmlos“ bedeutete. Dabei enthielten diese Fässer explosive Dämpfe und waren viel gefährlicher als volle Fässer. Das Wort hat ihr Verhalten geprägt.
B: Ein faszinierendes Beispiel. Und dann hat er die Sprache der Hopi erforscht. Ein indigenes Volk in Arizona.
A: Genau. Und Whorf behauptete, die Hopi-Sprache habe keine Wörter und grammatischen Formen für Zeit, so wie wir sie kennen. Keine Vergangenheit, Gegenwart und Zukunft im europäischen Sinn. Und deshalb würden die Hopi Zeit grundlegend anders wahrnehmen als Europäer.
B: Eine spektakuläre These. Aber stimmte sie?
A: Mitnichten. Spätere Linguisten, besonders Ekkehart Malotki, ein deutscher Sprachwissenschaftler, haben die Hopi-Sprache gründlich untersucht. Und sie fanden zahlreiche Ausdrücke für Zeit. Whorf hatte sich schlicht geirrt. Er hatte die Sprache nicht gut genug gekannt.
B: Und das hat die ganze Hypothese in Verruf gebracht. „In Verruf bringen“ heißt: den guten Ruf von etwas beschädigen. Jahrzehntelang galt die Sapir-Whorf-Hypothese unter Linguisten als widerlegt, fast als peinlich.
A: Und ein weiterer Mythos, der damit zusammenhängt, ist der berühmte Mythos von den vielen Wörtern für Schnee in den Sprachen der Inuit.
B: Ah ja, der Klassiker. Angeblich haben die Inuit fünfzig oder hundert Wörter für Schnee.
A: Und das ist ein hartnäckiger Mythos, der immer weiter übertrieben wurde. Die Inuit-Sprachen bilden Wörter durch das Aneinanderhängen von Bausteinen, ähnlich wie das Deutsche mit seinen Zusammensetzungen. Man kann darum unendlich viele Wörter bilden. Auch das Deutsche hat Pulverschnee, Neuschnee, Schneematsch, Harsch, Firn. Und Skifahrer haben noch viel mehr Wörter.
B: Hahaha. Als Österreicher kann ich das bestätigen. Wir haben mindestens zehn Wörter für Schnee! Gut. Man muss also zwischen zwei Versionen der Hypothese unterscheiden.
A: Genau. Es gibt die starke Version, den linguistischen Determinismus. Sie besagt, dass die Sprache das Denken bestimmt. Dass man nur denken kann, wofür man Wörter hat. Und diese starke Version gilt heute als widerlegt.
B: Denn sonst könnte man ja nie etwas Neues denken. Und man könnte nicht übersetzen. Und Babys, die noch nicht sprechen, könnten nicht denken. Was offensichtlich falsch ist.
A: Genau. Und dann gibt es die schwache Version, die linguistische Relativität. Sie besagt, dass die Sprache das Denken beeinflusst. Dass sie bestimmte Denkweisen erleichtert oder nahelegt. Und diese schwache Version hat in den letzten Jahrzehnten ein erstaunliches Comeback erlebt. Mit neuen, sorgfältigen Experimenten.
B: Und da gibt es faszinierende Beispiele. Fangen wir mit den Farben an.
A: Ja. Verschiedene Sprachen teilen das Farbspektrum unterschiedlich ein. Das Russische zum Beispiel hat zwei Grundwörter für Blau. „Goluboj“ für Hellblau und „sinij“ für Dunkelblau. Sie gelten im Russischen als verschiedene Farben, so wie für uns Rot und Rosa.
B: Und haben Russen deshalb eine andere Wahrnehmung?
A: Ein Experiment hat gezeigt, dass russische Sprecher verschiedene Blautöne schneller unterscheiden konnten, wenn sie über die Grenze zwischen „goluboj“ und „sinij“ hinweggingen. Englische Sprecher, die nur „blue“ haben, zeigten diesen Vorteil nicht. Der Effekt ist zwar klein, aber messbar.
B: Interessant. Die Sprache schärft also die Wahrnehmung an bestimmten Grenzen. Das zweite Beispiel ist für mich besonders verblüffend: die Orientierung im Raum.
A: Ja, das ist vielleicht das stärkste Beispiel. Es gibt eine Aborigine-Sprache in Australien, das Guugu Yimithirr. Und diese Sprache hat keine Wörter für links und rechts. Stattdessen benutzen die Sprecher ausschließlich die Himmelsrichtungen. Norden, Süden, Osten, Westen.
B: Also nicht „Das Glas steht links von dir“, sondern „Das Glas steht nordwestlich von dir“?
A: Genau. Selbst bei kleinen Dingen. „Da ist eine Ameise an deinem südlichen Bein.“ Und das bedeutet: Die Sprecher müssen jederzeit wissen, wo Norden ist. Auch in einem fremden Gebäude, auch im Dunkeln. Und tatsächlich haben Studien gezeigt, dass sie eine unglaubliche Orientierungsfähigkeit haben. Sie wissen immer, in welche Richtung sie schauen.
B: Das ist unglaublich. Eine Sprache, die einen inneren Kompass trainiert. Und hier sieht man den Einfluss sehr deutlich. Die Sprache zwingt einen dazu, auf bestimmte Dinge zu achten.
A: Genau das ist der Kern, den der Linguist Roman Jakobson sehr treffend formuliert hat: Sprachen unterscheiden sich nicht in dem, was man in ihnen sagen kann, sondern in dem, was man in ihnen sagen muss.
B: Ein brillanter Satz. Und das Deutsche zwingt uns ja auch zu einigem. Zum Beispiel zum grammatischen Geschlecht.
A: Ja! Und dazu gibt es ein berühmtes Experiment der Psychologin Lera Boroditsky. Sie hat deutsche und spanische Sprecher gebeten, Gegenstände mit Adjektiven zu beschreiben. Gegenstände, die in den beiden Sprachen ein unterschiedliches Geschlecht haben.
B: Zum Beispiel?
A: Die Brücke. Im Deutschen ist sie feminin, „die Brücke“. Im Spanischen maskulin, „el puente“. Und die deutschen Sprecher beschrieben die Brücke eher mit Adjektiven wie „schön“, „elegant“, „schlank“, „zerbrechlich“. Die spanischen Sprecher eher mit „stark“, „groß“, „gefährlich“, „robust“.
B: Hahaha. Das ist ja fast komisch. Die Grammatik färbt die Wahrnehmung.
A: Wobei man fairerweise sagen muss, dass dieses Experiment in Folgestudien nicht immer bestätigt werden konnte. Die Replikationskrise aus Folge neunundachtzig. Die Befunde sind gleichwohl anregend, aber mit Vorsicht zu genießen.
B: Und dann gibt es noch die Frage, die uns in Folge achtundsechzig beschäftigt hat. Warum fühlen sich Menschen in verschiedenen Sprachen wie verschiedene Personen? Das hängt vielleicht auch damit zusammen.
A: Und es gibt eine interessante Studie über moralische Entscheidungen. Menschen wurden vor ein klassisches moralisches Dilemma gestellt. Würdest du einen Menschen opfern, um fünf andere zu retten? Und wenn sie die Frage in einer Fremdsprache beantworteten, entschieden sie sich häufiger für die nüchterne, rationale Lösung. In der Muttersprache entschieden sie emotionaler.
B: Das passt zu dem, was wir in Folge achtundsechzig gesagt haben. Die Fremdsprache schafft eine emotionale Distanz. Man denkt kühler, berechnender.
A: Genau. Man spricht vom Fremdsprachen-Effekt. Und er ist durchaus relevant, wenn man bedenkt, dass viele internationale Verhandlungen und Entscheidungen in einer Fremdsprache stattfinden, meist auf Englisch.
B: Und jetzt das Deutsche selbst. Gibt es Dinge, die das Deutsche besonders gut ausdrücken kann? Die berühmten unübersetzbaren Wörter?
A: Oh ja, die liebt die ganze Welt. „Schadenfreude“, die Freude am Unglück anderer. „Fernweh“, die Sehnsucht nach fernen Orten, das Gegenteil von Heimweh. „Gemütlichkeit“, aus Folge sechs. „Weltschmerz“, die tiefe Traurigkeit über die Unvollkommenheit der Welt.
B: Und „Torschlusspanik“. Die Angst, dass man im Leben etwas verpasst, weil die Zeit abläuft. Das Wort kommt von den Stadttoren im Mittelalter, die abends geschlossen wurden. Wer zu spät kam, musste draußen bleiben.
A: Wunderbar. Und „Verschlimmbessern“, also etwas verbessern wollen und es dabei verschlimmern. Oder „Kummerspeck“, das Gewicht, das man durch Essen aus Kummer zunimmt.
B: Hahaha. Kummerspeck! Wobei man hier fragen muss: Heißt das, dass Deutsche Schadenfreude stärker empfinden als andere? Mitnichten. Das Gefühl kennt jeder Mensch. Die Deutschen haben nur ein praktisches Wort dafür.
A: Genau. Das ist ein wichtiger Punkt. Dass eine Sprache kein eigenes Wort für etwas hat, bedeutet nicht, dass ihre Sprecher es nicht empfinden oder denken können. Sie brauchen nur mehr Wörter, um es zu beschreiben. Wie wir das hier ständig tun.
B: Und das Deutsche hat diese besondere Fähigkeit zur Wortbildung durch Zusammensetzungen, die wir in Folge vierundachtzig besprochen haben. Man kann für fast jedes Konzept spontan ein neues Wort erfinden. Das ist vielleicht der eigentliche Zauber.
A: Gut. Und was bedeutet das für das Lernen einer Fremdsprache? Für dich, Hörer, Hörerin?
B: Ich glaube, es bedeutet etwas Wunderschönes. Wenn man eine neue Sprache lernt, lernt man nicht nur neue Wörter für alte Gedanken. Man gewinnt neue Möglichkeiten, die Welt zu sehen. Man erweitert seinen geistigen Horizont.
A: Und das ist genau die Idee hinter unserem Podcast. Wir übersetzen nicht. Wir versuchen, dich direkt auf Deutsch denken zu lassen. Weil eine Sprache, die man nur über die Übersetzung kennt, eine fremde Sprache bleibt. Erst wenn man in ihr denkt, wird sie zu einer eigenen.
B: Es gibt einen schönen Satz, der Karl dem Großen zugeschrieben wird: „Eine zweite Sprache zu sprechen, heißt, eine zweite Seele zu besitzen.“ Ob er das wirklich gesagt hat, ist fraglich. Aber es ist wahr.
A: Jetzt zur Geschichte. Und diesmal geht es um ein Kind. Den Sohn von Amira und Lukas.
B: Was? Haben die beiden ein Kind bekommen? Das wusste ich ja gar nicht!
A: Hahaha. Doch! Ein Jahr nach der Hochzeit wurde ihr Sohn geboren. Er heißt Adam. Und er wächst dreisprachig auf. Amira spricht mit ihm Arabisch, ihre Muttersprache. Lukas spricht mit ihm Deutsch, mit bayerischen Einschlägen. Und weil Amira und Lukas sich oft auf Französisch unterhalten, hört er auch diese Sprache.
B: Drei Sprachen! Wie Folge achtundsechzig empfohlen. Jeder Elternteil spricht seine stärkste Sprache.
A: Genau. Und Amira hat am Anfang Angst gehabt, dass Adam verwirrt wird. Dass er keine Sprache richtig lernt. Und ihre Mutter in Casablanca sagte, das sei zu viel für ein Kind.
B: Eine verbreitete Sorge, die aber unbegründet ist.
A: Genau. Lukas hat sich als Wissenschaftler informiert und Amira die Studien gezeigt. Kinder können problemlos mehrere Sprachen gleichzeitig lernen. Manchmal fangen sie etwas später an zu sprechen oder mischen die Sprachen am Anfang. Aber das ist ganz normal und geht vorbei.
B: Und wie entwickelt sich Adam?
A: Wunderbar. Mit drei Jahren spricht er alle drei Sprachen. Und er weiß genau, mit wem er welche Sprache spricht. Mit Mama Arabisch, mit Papa Deutsch, mit Oma in Bayern Bayerisch, und mit Kenji, seinem Patenonkel, hat er sogar ein paar Wörter Japanisch gelernt.
B: Kenji ist der Patenonkel! Wie schön. Ein Pate ist eine Person, die bei der Taufe oder Namensgebung die Verantwortung übernimmt, sich um ein Kind zu kümmern.
A: Genau. Und dann ist etwas passiert, das Amira tief berührt hat. Adam hat angefangen, die Sprachen zu benutzen, um seine Gefühle unterschiedlich auszudrücken. Wenn er sich wehtut und weint, ruft er auf Arabisch nach Mama. Wenn er Fußball spielt und jubelt, ruft er auf Bayerisch: „Hob i's gsogt!“
B: Hahaha. „Hab ich's gesagt“ auf Bayerisch! Wunderbar.
A: Und eines Abends, beim Zubettgehen, hat er Amira etwas gefragt. Er hat auf Deutsch gefragt: „Mama, warum heißt der Mond auf Deutsch ‚der‘ Mond, aber die Sonne ‚die‘ Sonne?“
B: Eine philosophische Frage von einem Dreijährigen! Und auf Französisch ist es ja umgekehrt. „La lune“, die Mondin, und „le soleil“, der Sonne.
A: Genau! Und Amira hat ihm geantwortet: „Weil jede Sprache die Welt ein bisschen anders sieht. Und du hast das Glück, sie dreimal zu sehen.“
B: Was für eine wunderschöne Antwort. Die ganze Folge in einem Satz.
A: Jetzt bist du dran, Hörer, Hörerin. Glaubst du, dass deine Muttersprache dein Denken beeinflusst? Und hat sich dein Denken verändert, seit du Deutsch lernst? Formuliere deine Gedanken mit den gehobenen Konnektoren von heute: „Gleichwohl …“, „Mitnichten …“, „… indes …“, „Gewissermaßen …“
B: Und gibt es in deiner Muttersprache ein Wort, das man nicht ins Deutsche übersetzen kann? Versuche, es auf Deutsch zu erklären.
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: mitnichten. Keineswegs, überhaupt nicht.
A: Wort Nummer zwei: gleichwohl. Trotzdem, dennoch.
B: Wort Nummer drei: in Verruf bringen. Den guten Ruf von etwas beschädigen.
A: Wort Nummer vier: das Fernweh. Die Sehnsucht nach fernen Orten.
B: Wort Nummer fünf: die Torschlusspanik. Die Angst, im Leben etwas zu verpassen, weil die Zeit abläuft.
A: Und Wort Nummer sechs: der Pate. Eine Person, die die Verantwortung übernimmt, sich um ein Kind zu kümmern.
B: Noch einmal: mitnichten, gleichwohl, in Verruf bringen, das Fernweh, die Torschlusspanik, der Pate.
A: Was nehmen wir mit? Die Idee, dass die Sprache das Denken prägt, geht auf Wilhelm von Humboldt zurück und wurde durch Sapir und Whorf bekannt.
B: Die starke Version, dass Sprache das Denken bestimmt, ist widerlegt. Die schwache Version, dass Sprache das Denken beeinflusst, wird durch neuere Experimente gestützt.
A: Beispiele: die russischen Blautöne, die Orientierung der Guugu Yimithirr und vielleicht das grammatische Geschlecht. Und Sprachen unterscheiden sich darin, was man sagen muss, nicht was man sagen kann.
B: Und eine neue Sprache zu lernen heißt, die Welt mit neuen Augen zu sehen.
A: Das ist das Ende von Folge einundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und denk daran: Jede Sprache sieht die Welt ein bisschen anders. Servus!
A: Tschüss!
VOCAB: mitnichten | Keineswegs, überhaupt nicht. | 🚫
VOCAB: gleichwohl | Trotzdem, dennoch. | ↪️
VOCAB: in Verruf bringen | Den guten Ruf von etwas beschädigen. | 📉
VOCAB: das Fernweh | Die Sehnsucht nach fernen Orten. | ✈️
VOCAB: die Torschlusspanik | Die Angst, im Leben etwas zu verpassen, weil die Zeit abläuft. | 🚪
VOCAB: der Pate | Eine Person, die die Verantwortung für ein Kind mitübernimmt. | 🤗
QUIZ: Wer vertrat als Erster die Idee, dass jede Sprache eine eigene „Weltansicht“ enthält? | Wilhelm von Humboldt | Karl Marx | Max Weber | 1
QUIZ: Was war Benjamin Lee Whorf im Hauptberuf? | Professor | Brandschutzinspektor | Arzt | 2
QUIZ: Was gilt heute als widerlegt? | Die starke Version: Sprache bestimmt das Denken | Die schwache Version: Sprache beeinflusst das Denken | Beide Versionen | 1
QUIZ: Was ist besonders an der Sprache Guugu Yimithirr? | Sie hat keine Wörter für links und rechts, nur Himmelsrichtungen | Sie hat keine Verben | Sie hat hundert Wörter für Schnee | 1
QUIZ: Was antwortete Amira auf Adams Frage nach dem Mond? | Jede Sprache sieht die Welt ein bisschen anders, und er sieht sie dreimal | Das ist eben so | Er soll schlafen gehen | 1
`;

DATA.podScripts.ep092 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge zweiundneunzig. Heute sprechen wir über etwas, das niemand gern erlebt, das aber zu jedem Leben dazugehört: das Scheitern. Und wir stellen eine provokante These auf: Scheitern kann eine Strategie sein.
A: Wir sprechen über Resilienz, über Innovation und über eine Kultur, die in Deutschland bis heute ein schwieriges Verhältnis zum Scheitern hat. Ganz im Gegensatz etwa zum Silicon Valley, wo das Scheitern fast gefeiert wird.
B: „Resilienz“ ist ein Begriff, der ursprünglich aus der Werkstoffkunde stammt. Er beschreibt die Fähigkeit eines Materials, nach einer Verformung in seinen ursprünglichen Zustand zurückzukehren. Und in der Psychologie bezeichnet er die seelische Widerstandskraft. Die Fähigkeit, Krisen zu bewältigen und gestärkt aus ihnen hervorzugehen.
A: Sprachlich widmen wir uns heute Redewendungen und idiomatischen Ausdrücken rund um Erfolg und Misserfolg. Das Deutsche ist reich an bildhaften Ausdrücken für das Scheitern. „Auf die Nase fallen“, „Schiffbruch erleiden“, „in die Hose gehen“, „den Bach runtergehen“, „sich die Finger verbrennen“, „wieder auf die Beine kommen“.
B: Und viele davon sind wunderbar anschaulich. „Schiffbruch erleiden“ stammt natürlich aus der Seefahrt. Ein Schiff, das zerbricht. „Sich die Finger verbrennen“ heißt: durch eine riskante Handlung Schaden erleiden. Und „etwas geht in die Hose“ ist umgangssprachlich und bedeutet: etwas misslingt.
A: Gut. Fangen wir mit der kulturellen Dimension an. Jonas, warum tun sich die Deutschen so schwer mit dem Scheitern?
B: Ich glaube, das hängt mit dem zusammen, was wir in Folge achtundachtzig über die hohe Unsicherheitsvermeidung gesagt haben. Die Deutschen lieben Planung, Sicherheit, Perfektion. Und das Scheitern ist das Gegenteil davon. Es ist das, was man durch gute Planung vermeiden wollte.
A: Und es gibt eine lange Tradition des Perfektionismus. Die deutsche Ingenieurskunst, „Made in Germany“. Ein deutsches Produkt muss funktionieren. Ein Fehler ist eine Schande. Und das überträgt sich auf das ganze Leben.
B: Und es gibt eine ganz konkrete, rechtliche Seite. Lange Zeit war eine Firmenpleite in Deutschland ein soziales Stigma. Wer mit einem Unternehmen in die Insolvenz ging, galt als Versager. „Die Insolvenz“ ist der juristische Begriff für die Zahlungsunfähigkeit, wenn ein Unternehmen seine Schulden nicht mehr bezahlen kann.
A: Und bis vor einigen Jahren konnte es in Deutschland sehr lange dauern, bis man nach einer Privatinsolvenz schuldenfrei war. Inzwischen hat man das Verfahren auf drei Jahre verkürzt, auch unter dem Einfluss einer europäischen Richtlinie. Aber das Stigma bleibt teilweise bestehen.
B: Im Silicon Valley ist das ganz anders. Dort gilt ein gescheitertes Start-up fast als Qualifikation. Ein Gründer, der schon zweimal gescheitert ist, gilt als erfahren. Er hat aus seinen Fehlern gelernt. Es gibt sogar den Spruch „Fail fast, fail often“. Scheitere schnell, scheitere oft.
A: Wobei man auch diese Kultur kritisch sehen sollte. Sie kann zu einer gewissen Verantwortungslosigkeit führen. Und sie verschleiert, dass sich das Scheitern nicht jeder leisten kann. Ein Gründer mit reichen Eltern kann leichter scheitern als jemand, der sein ganzes Erspartes verliert.
B: Ein wichtiger Punkt. Das Recht auf Scheitern ist auch eine Frage des Privilegs. Gut. Aber jetzt die eigentliche These: Warum kann Scheitern eine Strategie sein?
A: Fangen wir mit der Innovation an. Fast jede große Erfindung ist das Ergebnis unzähliger gescheiterter Versuche. Es gibt den berühmten Satz, der Thomas Edison zugeschrieben wird. Er soll nach Tausenden gescheiterten Versuchen, eine Glühbirne zu bauen, gesagt haben: „Ich bin nicht gescheitert. Ich habe zehntausend Wege gefunden, die nicht funktionieren.“
B: Ob er es wirklich gesagt hat, ist wie so oft fraglich. Aber der Gedanke ist zentral. Jedes Scheitern liefert eine Information. Man lernt, was nicht funktioniert. Und kommt der Lösung näher.
A: Und es gibt Erfindungen, die direkt aus einem Fehler entstanden sind. Das Penicillin zum Beispiel. Der schottische Forscher Alexander Fleming hatte neunzehnhundertachtundzwanzig vergessen, eine Bakterienkultur wegzuräumen, bevor er in den Urlaub fuhr. Als er zurückkam, war ein Schimmelpilz darauf gewachsen, der die Bakterien abgetötet hatte.
B: Eine schlampige Laborarbeit, die Millionen Menschenleben gerettet hat. Und die berühmten gelben Haftnotizen.
A: Ja! Ein Chemiker wollte eigentlich einen besonders starken Klebstoff entwickeln. Aber heraus kam ein ganz schwacher Klebstoff, der kaum hielt. Ein Fehlschlag. Jahrelang wusste niemand, was man damit anfangen sollte. Bis ein Kollege eine Idee hatte. Er sang in einem Kirchenchor und ärgerte sich, dass seine Lesezeichen ständig aus dem Gesangbuch fielen.
B: Und so entstanden die Klebezettel, die heute in jedem Büro hängen. Aus einem misslungenen Klebstoff. Das nennt man Serendipität. Ein schöner Begriff.
A: Erklär ihn.
B: Serendipität ist die zufällige Entdeckung von etwas Wertvollem, nach dem man gar nicht gesucht hat. Aber das Wichtige ist: Der Zufall allein reicht nicht. Man muss offen genug sein, um den Wert des unerwarteten Ergebnisses zu erkennen. Fleming hätte die verschimmelte Kultur auch einfach wegwerfen können.
A: Und das bringt uns zu einem modernen Konzept aus der Start-up-Welt und der Softwareentwicklung: dem schnellen Experimentieren. Man spricht vom „Lean Startup“ oder vom Prototyping. Statt jahrelang ein perfektes Produkt zu planen, baut man schnell eine einfache Version, testet sie mit echten Kunden und lernt aus dem Feedback.
B: Und das Scheitern ist dabei eingeplant. Man scheitert früh und billig, statt spät und teuer. Das ist eigentlich das Gegenteil des deutschen Perfektionismus. Und es erklärt vielleicht, warum Deutschland bei bestimmten digitalen Innovationen hinterherhinkt.
A: „Hinterherhinken“ heißt: zurückbleiben, langsamer sein als andere. Und es gibt ein sehr treffendes Beispiel aus Deutschland. Den Flughafen BER, über den wir in Folge fünfunddreißig gesprochen haben.
B: Ah ja, das Paradebeispiel des Scheiterns! Neun Jahre zu spät, Milliarden über dem Budget.
A: Genau. Und eines der Probleme war, dass man versucht hat, alles perfekt zu planen, aber ständig die Pläne geändert hat. Und als die Probleme auftauchten, hat man sie zu lange vertuscht, statt sie offen anzusprechen. Weil niemand das Scheitern zugeben wollte. Eine Kultur, in der Fehler bestraft werden, führt dazu, dass Fehler versteckt werden.
B: Das ist genau das, was wir in Folge zweiundsiebzig über die psychologische Sicherheit gesagt haben. Die Teams im Krankenhaus, die Fehler meldeten statt sie zu vertuschen, waren die besseren.
A: Genau. Und daraus folgt eine wichtige Unterscheidung. Nicht jedes Scheitern ist gleich. Die Harvard-Professorin Amy Edmondson, die wir aus Folge zweiundsiebzig kennen, unterscheidet drei Arten von Fehlern.
B: Welche?
A: Erstens die vermeidbaren Fehler. Fehler bei Routineaufgaben, durch Unaufmerksamkeit oder mangelnde Sorgfalt. Ein Pilot, der eine Checkliste vergisst. Diese Fehler sind tatsächlich schlecht und sollten vermieden werden.
B: Zweitens?
A: Zweitens die komplexen Fehler. Sie entstehen in komplexen Systemen durch das unglückliche Zusammentreffen mehrerer Faktoren. Niemand ist allein schuld. Man sollte sie analysieren und daraus lernen.
B: Und drittens?
A: Drittens die intelligenten Fehler. Das sind die Fehler, die bei echten Experimenten in neuem Terrain entstehen. Wenn man etwas Neues ausprobiert, dessen Ausgang man nicht kennen kann. Diese Fehler sind nicht nur unvermeidbar, sondern wertvoll. Sie liefern neue Erkenntnisse. Und genau diese Fehler sollte eine gute Kultur fördern.
B: Das ist eine sehr hilfreiche Unterscheidung. Denn „Scheitern feiern“ heißt nicht, schlampige Arbeit zu feiern. Es heißt, mutige Experimente zu ermutigen.
A: Genau. Und jetzt zur Resilienz, also zur persönlichen Seite. Wie geht man mit dem eigenen Scheitern um?
B: Hier gibt es ein sehr einflussreiches Konzept der amerikanischen Psychologin Carol Dweck: das „Mindset“, also die Denkhaltung. Sie unterscheidet zwischen einem statischen und einem wachstumsorientierten Mindset.
A: Erklär den Unterschied.
B: Menschen mit einem statischen Mindset glauben, dass ihre Fähigkeiten festgelegt sind. Man ist intelligent oder nicht, begabt oder nicht. Und für sie ist ein Scheitern ein Beweis dafür, dass sie nicht gut genug sind. Darum vermeiden sie Herausforderungen.
A: Und Menschen mit einem wachstumsorientierten Mindset?
B: Sie glauben, dass man Fähigkeiten durch Anstrengung und Übung entwickeln kann. Für sie ist ein Scheitern keine Aussage über ihren Wert, sondern eine Gelegenheit zu lernen. Und darum suchen sie Herausforderungen, statt sie zu meiden.
A: Und das hat direkte Folgen für das Sprachenlernen! Wer denkt „Ich bin einfach nicht sprachbegabt“, gibt beim ersten Fehler auf. Wer denkt „Ich lerne aus jedem Fehler“, macht weiter.
B: Wobei auch Dwecks Theorie inzwischen kritisch gesehen wird. Groß angelegte Studien haben gezeigt, dass Trainings zum Mindset in der Schule oft nur kleine Effekte haben. Die Idee ist anregend, aber sie ist kein Wundermittel.
A: Wie so vieles, was wir in diesem Podcast besprochen haben. Die Wirklichkeit ist komplexer als die eingängigen Theorien. Und noch ein wichtiger Aspekt der Resilienz: die Trennung von Person und Leistung. Wie in Folge achtundsiebzig beim Feedback. Ich bin nicht mein Scheitern. Ein gescheitertes Projekt macht mich nicht zu einem gescheiterten Menschen.
B: Und es gibt eine schöne japanische Kunstform, die das wunderbar verkörpert: Kintsugi. Kenji hat mir davon erzählt.
A: Erzähl!
B: Kintsugi ist die Kunst, zerbrochene Keramik zu reparieren. Aber nicht, indem man die Bruchstellen versteckt. Sondern indem man sie mit Gold betont. Man klebt die Scherben mit einem Lack zusammen, der mit Goldstaub vermischt ist. Und am Ende ist die reparierte Schale schöner und wertvoller als vorher. Gerade wegen ihrer Brüche.
A: Was für ein wunderschönes Bild für die Resilienz. Die Brüche gehören zu unserer Geschichte. Sie machen uns nicht schwächer, sondern einzigartig.
B: Und es gibt in Deutschland übrigens eine interessante Initiative: die „Fuckup Nights“. Veranstaltungen, bei denen Gründer und Manager auf einer Bühne öffentlich von ihrem größten Scheitern erzählen. Sie stammen ursprünglich aus Mexiko und finden inzwischen auch in vielen deutschen Städten statt.
A: Ein sehr mutiges Format. Und es hilft, das Stigma abzubauen. Wenn erfolgreiche Menschen offen über ihr Scheitern sprechen, merken andere, dass sie nicht allein sind. Jetzt zur Geschichte. Und diesmal geht es um Felix, den Spieleentwickler.
B: Felix! Was ist mit seinem Spiel passiert? Es sollte ja veröffentlicht werden.
A: Das ist genau die Geschichte. Felix' Spiel über das Deutschlernen in Berlin, aus Folge sechsundfünfzig, wurde tatsächlich veröffentlicht. Mit großen Erwartungen. Und es war ein Flop.
B: Oh nein. Ein Flop ist ein Misserfolg, besonders bei einem Produkt oder einem Film.
A: Genau. In den ersten Monaten haben es nur wenige tausend Menschen gekauft. Die Spielefirma hatte mit viel mehr gerechnet. Die Kritiken waren gemischt. Manche fanden es zu kompliziert, andere zu einfach. Und die Firma beschloss, das Spiel nicht weiter zu unterstützen.
B: Das muss für Felix ein harter Schlag gewesen sein. Er hatte ja jahrelang daran gearbeitet.
A: Ja. Er ist tief abgestürzt. Er hat sich wochenlang in seinem Zimmer eingeschlossen. Er hat gedacht, er sei ein Versager. Er hat seinen Eltern, die ja anfangs gegen seine Spielentwicklung gewesen waren, nicht einmal erzählt, dass das Spiel gescheitert war. Er hat sich so geschämt.
B: Das statische Mindset. Er hat das Scheitern des Spiels als sein eigenes Scheitern gesehen.
A: Genau. Und dann hat Kenji ihm die Geschichte vom Kintsugi erzählt. Und er hat ihm eine kleine reparierte Schale geschenkt. Mit goldenen Linien. Und er hat gesagt: „Dein Spiel ist zerbrochen. Aber es ist nicht wertlos. Schau dir an, wo die Brüche sind.“
B: Und hat Felix das verstanden?
A: Zuerst nicht. Aber dann hat er angefangen, die Rückmeldungen der Spieler genauer zu lesen. Nicht die negativen Kritiken, sondern was die wenigen begeisterten Spieler geschrieben hatten. Und er hat etwas Überraschendes entdeckt.
B: Was denn?
A: Die begeisterten Spieler waren fast alle Lehrerinnen und Lehrer. Sprachlehrer, die das Spiel in ihrem Unterricht benutzten. Sie schrieben, es sei ein großartiges Werkzeug, um Deutsch zu unterrichten. Aber es sei als Unterhaltungsspiel vermarktet worden, nicht als Lernwerkzeug. Darum hätten es die richtigen Leute nie gefunden.
B: Serendipität! Die Lösung lag in einem unerwarteten Ergebnis.
A: Genau. Felix hatte das Spiel für die falsche Zielgruppe gemacht. Und er hat beschlossen, es neu auszurichten. Er hat mich kontaktiert, weil ich ja Deutschlehrerin bin. Und zusammen haben wir das Spiel überarbeitet. Für den Unterricht. Mit Übungen, mit verschiedenen Niveaus, mit einer Funktion für Lehrer.
B: Du warst dabei? Das wusste ich nicht!
A: Hahaha. Ja, ein kleines Geheimnis. Und dann haben wir das Spiel nicht über die großen Spieleplattformen, sondern direkt an Sprachschulen und Volkshochschulen angeboten. Und es wurde ein Erfolg. Inzwischen benutzen es Hunderte Schulen in ganz Europa.
B: Wunderbar! Aus einem Flop wurde ein Erfolg, weil er die Brüche genau angeschaut hat.
A: Genau. Und Felix hat bei einer Fuckup Night in Berlin von seiner Geschichte erzählt. Und er hat am Ende die goldene Schale von Kenji hochgehalten und gesagt: „Mein erstes Spiel ist gescheitert. Aber ohne dieses Scheitern hätte ich nie herausgefunden, wofür es eigentlich gut ist.“
B: Und seine Eltern?
A: Er hat ihnen endlich alles erzählt. Und sein Vater hat gesagt: „Ich bin stolzer auf dich, weil du wieder aufgestanden bist, als ich es gewesen wäre, wenn es sofort geklappt hätte.“
B: Jetzt bist du dran, Hörer, Hörerin. Erzähl von einem Scheitern in deinem Leben. Was hast du daraus gelernt? Benutze die Redewendungen von heute: „Ich bin damals auf die Nase gefallen …“, „Das ist völlig in die Hose gegangen …“, „Aber ich bin wieder auf die Beine gekommen …“
A: Und denk an Kintsugi. Welche Bruchstelle in deinem Leben ist vielleicht zu einer goldenen Linie geworden?
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: die Resilienz. Die seelische Widerstandskraft, die Fähigkeit, Krisen zu bewältigen.
B: Wort Nummer zwei: auf die Nase fallen. Einen Misserfolg erleben, scheitern.
A: Wort Nummer drei: hinterherhinken. Zurückbleiben, langsamer sein als andere.
B: Wort Nummer vier: die Serendipität. Die zufällige Entdeckung von etwas Wertvollem, nach dem man nicht gesucht hat.
A: Wort Nummer fünf: wieder auf die Beine kommen. Sich nach einer Krise erholen.
B: Und Wort Nummer sechs: der Flop. Ein Misserfolg, besonders bei einem Produkt.
A: Noch einmal: die Resilienz, auf die Nase fallen, hinterherhinken, die Serendipität, wieder auf die Beine kommen, der Flop.
B: Was nehmen wir mit? In Deutschland gibt es eine lange Tradition des Perfektionismus und ein Stigma des Scheiterns. Im Silicon Valley gilt es fast als Qualifikation, wobei sich das nicht jeder leisten kann.
A: Viele große Innovationen entstanden aus Fehlern, durch Serendipität. Und Amy Edmondson unterscheidet vermeidbare, komplexe und intelligente Fehler. Nur die intelligenten sollte man feiern.
B: Resilienz bedeutet, die eigene Person vom Scheitern zu trennen und es als Gelegenheit zum Lernen zu sehen.
A: Und wie beim Kintsugi können die Brüche zu goldenen Linien werden.
B: Das ist das Ende von Folge zweiundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und hab keine Angst, beim Deutschsprechen Fehler zu machen. Jeder Fehler ist ein Schritt weiter. Tschüss!
B: Servus!
VOCAB: die Resilienz | Die seelische Widerstandskraft, Krisen zu bewältigen. | 🌿
VOCAB: auf die Nase fallen | Einen Misserfolg erleben, scheitern. | 🤕
VOCAB: hinterherhinken | Zurückbleiben, langsamer sein als andere. | 🐢
VOCAB: die Serendipität | Die zufällige Entdeckung von etwas Wertvollem. | 🍀
VOCAB: wieder auf die Beine kommen | Sich nach einer Krise erholen. | 🧍
VOCAB: der Flop | Ein Misserfolg, besonders bei einem Produkt. | 📉
QUIZ: Woher stammt der Begriff „Resilienz“ ursprünglich? | Aus der Werkstoffkunde | Aus der Medizin | Aus der Musik | 1
QUIZ: Wie entstand das Penicillin? | Durch einen geplanten Versuch | Durch einen Fehler: eine vergessene Bakterienkultur | Durch Zufall in einem Restaurant | 2
QUIZ: Welche Fehler sollte eine gute Kultur laut Amy Edmondson fördern? | Vermeidbare Fehler | Intelligente Fehler bei echten Experimenten | Alle Fehler gleich | 2
QUIZ: Was ist Kintsugi? | Eine japanische Kunst, zerbrochene Keramik mit Gold zu reparieren | Ein japanisches Gericht | Eine Kampfkunst | 1
QUIZ: Wer waren die begeisterten Spieler von Felix' Spiel? | Kinder | Sprachlehrerinnen und Sprachlehrer | Professionelle Gamer | 2
`;

DATA.podScripts.ep093 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge dreiundneunzig. Heute widmen wir uns einem Thema, das in Berlin, München, Hamburg und vielen anderen Städten zu den drängendsten sozialen Fragen unserer Zeit gehört: der Wohnungskrise.
A: Wir haben in Folge dreiunddreißig über die Wohnungssuche gesprochen, aus der Perspektive eines Einzelnen. Heute schauen wir uns die strukturellen Ursachen an. Warum fehlen so viele Wohnungen? Warum steigen die Mieten so rasant? Und welche Lösungen werden diskutiert?
B: Und es ist ein Thema, bei dem die Emotionen hochkochen. Für viele Menschen ist eine bezahlbare Wohnung längst keine Selbstverständlichkeit mehr. Familien finden keine größere Wohnung, Studierende zahlen Unsummen für winzige Zimmer, ältere Menschen werden aus ihren Vierteln verdrängt.
A: Sprachlich widmen wir uns heute den sogenannten Passiversatzformen. Das sind Konstruktionen, die eine passivische Bedeutung haben, aber ohne das Hilfsverb „werden“ auskommen. Sie sind in der Schriftsprache und besonders in Sachtexten sehr häufig.
B: Es gibt mehrere Formen. Erstens „sein“ plus „zu“ plus Infinitiv. „Das Problem ist zu lösen.“ Das kann zwei Bedeutungen haben: Das Problem kann gelöst werden. Oder: Das Problem muss gelöst werden. Der Kontext entscheidet.
A: Zweitens „sich lassen“ plus Infinitiv. „Das Problem lässt sich lösen.“ Das heißt: Das Problem kann gelöst werden. Drittens Adjektive auf „-bar“ und „-lich“. „Das Problem ist lösbar.“ „Die Miete ist bezahlbar.“ „Das ist verständlich.“
B: Und viertens das reflexive Verb: „Der Schlüssel findet sich.“ Und fünftens Verben wie „bekommen“ oder „erhalten“: „Die Mieter bekommen eine Entschädigung ausgezahlt.“ Das ist das sogenannte Rezipientenpassiv.
A: Sehr gut. Und bei unserem Thema passt das perfekt, denn in der Politik hört man ständig Sätze wie: „Der Wohnungsmangel lässt sich nicht kurzfristig beheben.“ „Die Mieten sind kaum noch bezahlbar.“ „Es ist dringend zu handeln.“
B: Gut. Fangen wir mit den Zahlen an, um die Dimension zu verstehen. In vielen deutschen Großstädten haben sich die Mieten für neue Verträge in den letzten fünfzehn Jahren in etwa verdoppelt. In Berlin war der Anstieg besonders drastisch, weil die Stadt lange Zeit sehr günstig war.
A: Und viele Haushalte geben inzwischen weit mehr als ein Drittel ihres Einkommens für die Miete aus. Wir haben in Folge dreiunddreißig gesagt, dass ein Drittel als Obergrenze gilt. Für einen erheblichen Teil der Mieter in den Großstädten liegt die Belastung deutlich darüber, manchmal bei der Hälfte des Einkommens.
B: Und es fehlen Hunderttausende Wohnungen. Die Bundesregierung hatte sich zum Ziel gesetzt, vierhunderttausend neue Wohnungen pro Jahr zu bauen. Dieses Ziel wurde Jahr für Jahr deutlich verfehlt.
A: Gut. Kommen wir zu den Ursachen. Und hier ist es wichtig, zu verstehen, dass es nicht eine einzige Ursache gibt, sondern ein ganzes Geflecht. Ein „Geflecht“ ist ein Netz aus vielen miteinander verbundenen Fäden.
B: Erste Ursache: die steigende Nachfrage. Immer mehr Menschen ziehen in die Städte. Wegen der Arbeitsplätze, der Universitäten, der Kultur. Und gleichzeitig leben immer mehr Menschen allein. Die Zahl der Einpersonenhaushalte ist enorm gestiegen. Wo früher eine Familie mit vier Personen in einer Wohnung lebte, leben heute vielleicht zwei Singles in zwei Wohnungen.
A: Dazu kommt die Zuwanderung. Deutschland ist ein Einwanderungsland, und die Menschen, die kommen, brauchen natürlich auch Wohnraum. Wobei man hier vorsichtig sein muss, dass dieses Argument nicht für Hetze missbraucht wird. Die Wohnungskrise ist kein Problem, das sich auf Migration reduzieren lässt.
B: „Hetze“ ist die gezielte Verbreitung von Hass gegen eine Gruppe. Ein sehr wichtiger Punkt. Zweite Ursache: das zu geringe Angebot. Es wird schlicht zu wenig gebaut. Und warum wird zu wenig gebaut?
A: Weil das Bauen in Deutschland sehr teuer und langwierig geworden ist. Die Baukosten sind stark gestiegen, durch teurere Materialien, durch den Fachkräftemangel im Handwerk, den wir in Folge dreiundsechzig besprochen haben. Und durch die gestiegenen Zinsen, die Kredite für Bauprojekte verteuern.
B: Und durch die Bürokratie! Folge neunundsiebzig. Die Bauvorschriften in Deutschland sind extrem umfangreich. Es gibt Tausende Normen und Vorschriften, für den Brandschutz, den Schallschutz, die Energieeffizienz, die Barrierefreiheit, die Anzahl der Parkplätze. Jede einzelne ist für sich genommen sinnvoll. Aber zusammen machen sie das Bauen teuer und langsam.
A: Und die Genehmigungsverfahren dauern oft Jahre. Bis ein Bebauungsplan aufgestellt ist, bis alle Gutachten vorliegen, bis alle Einsprüche geprüft sind. Es gibt Projekte, bei denen zwischen der Idee und dem Einzug der ersten Mieter ein ganzes Jahrzehnt vergeht.
B: Und dann gibt es noch das Phänomen, das man im Englischen „NIMBY“ nennt. „Not in my backyard.“ Auf Deutsch etwa: „Nicht in meinem Hinterhof.“ Viele Menschen sind grundsätzlich dafür, dass mehr Wohnungen gebaut werden. Aber nicht in ihrer Nachbarschaft. Nicht vor ihrem Fenster. Nicht auf der Wiese, auf der sie mit dem Hund spazieren gehen.
A: Das ist ein menschlich verständliches, aber gesellschaftlich problematisches Verhalten. Dritte Ursache: die Spekulation und die Finanzialisierung des Wohnens.
B: Das ist ein wichtiger und umstrittener Punkt. Erklär ihn.
A: In den letzten Jahrzehnten wurden Wohnungen immer stärker zu einer Kapitalanlage. Besonders in der Phase sehr niedriger Zinsen haben Investoren, Fonds und große Wohnungskonzerne massiv in Immobilien investiert. Für sie ist eine Wohnung nicht in erster Linie ein Zuhause, sondern ein Renditeobjekt. Die Rendite ist der Gewinn, den eine Investition bringt.
B: Und in Berlin hat das eine besondere Geschichte. Anfang der Zweitausenderjahre war die Stadt hoch verschuldet. Und sie hat Zehntausende städtische Wohnungen an private Investoren verkauft, um Geld in die Kasse zu bekommen. Damals erschien das als vernünftige Sparmaßnahme.
A: Und heute bereuen das viele. Die Stadt hat damit die Kontrolle über einen großen Teil des Wohnungsmarktes verloren. Und einige dieser Wohnungen musste sie später zu viel höheren Preisen wieder zurückkaufen.
B: Ein klassisches Beispiel für eine Entscheidung, die im Nachhinein als Fehler erscheint. Folge vierundsechzig! Und die vierte Ursache: die Gentrifizierung, über die wir in Folge neunundsechzig gesprochen haben. Wenn ein Viertel attraktiv wird, steigen die Mieten, und die ursprünglichen Bewohner werden verdrängt.
A: Und eine fünfte, oft übersehene Ursache: der Leerstand und die Zweckentfremdung. Manche Wohnungen stehen leer, weil die Besitzer auf höhere Preise warten. Und viele Wohnungen werden als Ferienwohnungen an Touristen vermietet, statt dauerhaft an Bewohner. Wie wir in Folge sechsundsiebzig gesehen haben.
B: Berlin hat deshalb ein Zweckentfremdungsverbot eingeführt. Man darf eine Wohnung nicht einfach ohne Genehmigung dauerhaft als Ferienwohnung vermieten. Wer dagegen verstößt, muss mit hohen Strafen rechnen.
A: Gut. Kommen wir zu den Lösungsansätzen. Und hier wird es politisch, denn die Vorschläge reichen von marktliberal bis sozialistisch. Fangen wir mit den regulierenden Maßnahmen an.
B: Erstens die Mietpreisbremse. Sie wurde in Deutschland zweitausendfünfzehn eingeführt. In Gebieten mit angespanntem Wohnungsmarkt darf die Miete bei einer Neuvermietung höchstens zehn Prozent über der ortsüblichen Vergleichsmiete liegen.
A: Und hat sie funktioniert?
B: Die Bilanz ist gemischt. Sie hat den Anstieg in manchen Fällen leicht gebremst. Aber es gibt viele Ausnahmen, etwa für Neubauten und umfassend modernisierte Wohnungen. Und viele Vermieter halten sich nicht daran, weil viele Mieter ihre Rechte nicht kennen oder sich nicht trauen, sie einzufordern. Aus Angst, die Wohnung zu verlieren.
A: Und Berlin hat einen noch radikaleren Weg versucht: den Mietendeckel. Zweitausendzwanzig wurden die Mieten für fünf Jahre eingefroren und teilweise sogar gesenkt.
B: Und das Bundesverfassungsgericht hat den Mietendeckel zweitausendeinundzwanzig gekippt. „Etwas kippen“ heißt hier: eine Regelung für ungültig erklären. Allerdings nicht, weil die Idee an sich verfassungswidrig war, sondern weil das Land Berlin nicht zuständig war. Das Mietrecht ist Sache des Bundes.
A: Ein typisch deutsches Problem der Zuständigkeit. Und viele Mieter mussten danach die gesparte Miete nachzahlen. Was für manche eine große finanzielle Belastung war.
B: Und dann gab es in Berlin ein noch radikaleres Projekt: das Volksbegehren „Deutsche Wohnen und Co. enteignen“. Benannt nach einem der großen Wohnungskonzerne.
A: Ja, das war ein politisches Erdbeben. Die Initiative forderte, dass große Wohnungsunternehmen mit mehr als dreitausend Wohnungen in Berlin vergesellschaftet werden. Also gegen eine Entschädigung in öffentliches Eigentum überführt werden. Gestützt auf einen Artikel des Grundgesetzes, der so etwas grundsätzlich erlaubt, der aber noch nie angewendet worden war.
B: Und beim Volksentscheid zweitausendeinundzwanzig hat eine deutliche Mehrheit der Berliner dafür gestimmt. Über fünfzig Prozent.
A: Allerdings war das Ergebnis nicht bindend für den Senat. Und die Umsetzung zieht sich seitdem hin. Eine Expertenkommission hat geprüft, ob die Vergesellschaftung rechtlich möglich wäre, und kam zu dem Schluss, dass sie grundsätzlich zulässig sei. Aber politisch ist sie heftig umstritten.
B: Die Befürworter argumentieren, dass Wohnen ein Grundrecht sei und nicht dem Profitstreben unterworfen werden dürfe. Die Kritiker halten dagegen, dass eine Enteignung kein einziges neues Gebäude schaffe, sondern nur Besitzverhältnisse ändere. Und dass sie potenzielle Investoren abschrecke.
A: Und das ist ein wichtiges Argument. Denn die Grundursache bleibt der Mangel an Wohnungen. Und den kann man nur durch Bauen beheben. Was die marktliberale Seite betont.
B: Die marktliberale Seite sagt: Weniger Regulierung, schnellere Genehmigungen, mehr Bauland, und die Mieten sinken von selbst, weil das Angebot steigt. Regulierungen wie die Mietpreisbremse würden das Bauen sogar unattraktiv machen und das Problem verschärfen.
A: Und die Wahrheit liegt vermutlich, wie so oft, irgendwo dazwischen. Man braucht beides: mehr Bauen und gleichzeitig einen Schutz der Mieter, damit sie nicht in der Zwischenzeit aus ihren Wohnungen gedrängt werden.
B: Und hier kommt wieder Wien ins Spiel. Das Wiener Modell, über das wir in Folge achtundzwanzig gesprochen haben.
A: Ja, und zwar als internationales Vorbild. Erzähl, Jonas, du bist der Experte.
B: Gern. Wien hat einen völlig anderen Weg gewählt als Berlin. Wien hat seine städtischen Wohnungen nie verkauft. Im Gegenteil. Seit fast hundert Jahren, seit dem sogenannten „Roten Wien“ der Zwanzigerjahre, baut die Stadt kontinuierlich eigene Wohnungen. Den Gemeindebau.
A: Und das Ergebnis?
B: Etwa ein Viertel der Wiener lebt in städtischen Gemeindewohnungen. Und ein weiteres Viertel in geförderten Wohnungen von gemeinnützigen Bauträgern, die keinen Gewinn machen dürfen. Das heißt, fast die Hälfte der Wiener lebt in Wohnungen, die dem freien Markt weitgehend entzogen sind.
A: Und das dämpft die Mieten in der ganzen Stadt. Weil die privaten Vermieter mit den günstigen öffentlichen Wohnungen konkurrieren müssen.
B: Genau. Und das Besondere: Der Gemeindebau ist nicht nur für Arme. Die Einkommensgrenzen sind so hoch, dass auch die Mittelschicht Anspruch hat. Dadurch entsteht eine soziale Durchmischung. Der Busfahrer wohnt neben der Ärztin. Und es entstehen keine Ghettos wie in manchen anderen Städten.
A: Und es gibt eine berühmte Anlage, den Karl-Marx-Hof. Ein riesiger Gemeindebau aus den Zwanzigerjahren, über einen Kilometer lang. Mit Wäschereien, Kindergärten, Bädern und Bibliotheken. Er war ein Symbol für das Rote Wien.
B: Wobei auch das Wiener Modell seine Probleme hat. Die Wartezeiten sind lang, wie in Folge dreiunddreißig erwähnt. Und manche Menschen bleiben jahrzehntelang in ihrer günstigen Gemeindewohnung, auch wenn sie inzwischen viel verdienen. Und auch in Wien steigen die Mieten auf dem privaten Markt.
A: Aber im internationalen Vergleich gilt Wien zu Recht als Vorbild. Und der entscheidende Punkt ist die langfristige Perspektive. Wien hat in hundert Jahren nie aufgehört, Wohnungen zu bauen. Berlin hat seine verkauft. Das ist der Unterschied.
B: Jetzt zur Geschichte. Diesmal geht es um Julien und seine Wohnung in Friedrichshain. Die Wohnung, die er von Herrn Krüger gemietet hat.
A: Oh nein. Ich ahne, dass etwas passiert ist.
B: Ja. Herr Krüger ist inzwischen achtzig Jahre alt. Und er hat beschlossen, sein Vermögen zu ordnen. Seine Tochter in Kanada möchte das Haus, in dem Julien wohnt, verkaufen. Ein Investor hat ein sehr hohes Angebot gemacht.
A: Und was bedeutet das für Julien?
B: Der Investor plant, das Haus umfassend zu modernisieren und die Wohnungen danach einzeln als Eigentumswohnungen zu verkaufen. Und für Julien hätte das bedeutet, dass seine Miete nach der Modernisierung stark gestiegen wäre. Möglicherweise so stark, dass er sich die Wohnung nicht mehr hätte leisten können.
A: Eine typische Verdrängungsgeschichte. Und Frau Schulze wohnt ja auch in diesem Haus!
B: Genau! Frau Schulze, die seit fünfzig Jahren dort wohnt. Für sie wäre ein Umzug in ihrem Alter eine Katastrophe gewesen. Und auch andere Mieter im Haus waren betroffen. Eine junge Familie mit zwei Kindern, ein Rentnerehepaar.
A: Und was haben sie gemacht?
B: Zuerst waren alle verzweifelt. Aber dann hat Julien sich informiert. Und er hat etwas über das sogenannte Vorkaufsrecht herausgefunden. In bestimmten Gebieten, sogenannten Milieuschutzgebieten, kann die Stadt unter bestimmten Bedingungen ein Haus vor einem privaten Investor kaufen, um die Bewohner zu schützen.
A: Wobei das Bundesverwaltungsgericht dieses Instrument zweitausendeinundzwanzig stark eingeschränkt hat.
B: Genau, darum war das schwierig. Aber es gab eine andere Möglichkeit. Julien hat mit den anderen Mietern eine Mieterversammlung organisiert. Und sie haben sich an eine Genossenschaft gewandt.
A: Eine Wohnungsbaugenossenschaft. Das ist eine Art Gemeinschaft, in der die Mitglieder gemeinsam Wohnungen besitzen. Jedes Mitglied zahlt einen Anteil und hat ein lebenslanges Wohnrecht. Und die Genossenschaft arbeitet nicht gewinnorientiert.
B: Genau. Und die Genossenschaft war interessiert, das Haus zu kaufen. Aber sie konnte nicht so viel zahlen wie der Investor. Und hier kam Herr Krüger ins Spiel.
A: Was hat er gemacht?
B: Julien hat Herrn Krüger besucht und ihm die Situation erklärt. Von Frau Schulze, die seit fünfzig Jahren dort wohnt. Von der jungen Familie. Und Herr Krüger war tief betroffen. Er hatte gar nicht gewusst, was der Investor plante. Er hat mit seiner Tochter in Kanada telefoniert. Lange.
A: Und?
B: Er hat seine Tochter überzeugt, das Haus an die Genossenschaft zu verkaufen. Für weniger Geld, als der Investor geboten hatte. Er sagte zu ihr: „Ich habe genug Geld für mein Alter. Aber ich möchte nicht, dass Menschen meinetwegen ihr Zuhause verlieren. Das Haus soll ein Zuhause bleiben, keine Geldanlage.“
A: Was für ein großherziger Mensch. Herr Krüger hat ja schon in so vielen Folgen geholfen.
B: Ja. Und jetzt gehört das Haus der Genossenschaft. Julien, Frau Schulze und alle anderen Mieter sind Mitglieder geworden und haben ein lebenslanges Wohnrecht. Die Mieten sind stabil. Und Frau Schulze hat bei der Feier im Hof gesagt: „Ich habe die Mauer überlebt, die Wende und die Investoren. Jetzt bleibe ich hier, bis man mich raustragen muss.“
A: Hahaha. Das ist sehr Frau Schulze! Jetzt bist du dran, Hörer, Hörerin. Was sind deiner Meinung nach die wichtigsten Maßnahmen gegen die Wohnungskrise? Formuliere sie mit Passiversatzformen. Zum Beispiel: „Der Wohnungsmangel lässt sich nur durch … beheben.“ „Die Mieten müssen bezahlbar bleiben.“ „Es ist dringend zu prüfen, ob …“
B: Und vergleiche die Situation in deiner Stadt mit Berlin oder Wien.
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: das Geflecht. Ein Netz aus vielen miteinander verbundenen Faktoren.
A: Wort Nummer zwei: sich lassen. Als Passiversatz: Das Problem lässt sich lösen, es kann gelöst werden.
B: Wort Nummer drei: die Rendite. Der Gewinn, den eine Investition bringt.
A: Wort Nummer vier: etwas kippen. Eine Regelung für ungültig erklären.
B: Wort Nummer fünf: die Genossenschaft. Eine Gemeinschaft, in der die Mitglieder gemeinsam etwas besitzen und nicht gewinnorientiert arbeiten.
A: Und Wort Nummer sechs: die Hetze. Die gezielte Verbreitung von Hass gegen eine Gruppe.
B: Noch einmal: das Geflecht, sich lassen, die Rendite, etwas kippen, die Genossenschaft, die Hetze.
A: Was nehmen wir mit? Passiversatzformen: „sein zu“ plus Infinitiv, „sich lassen“, Adjektive auf „-bar“, und das Rezipientenpassiv mit „bekommen“.
B: Die Ursachen der Wohnungskrise: steigende Nachfrage, zu wenig Neubau wegen Kosten und Bürokratie, Spekulation, Gentrifizierung und Zweckentfremdung.
A: Die Lösungsansätze reichen von Mietpreisbremse und Mietendeckel über Enteignung bis zur Deregulierung des Bauens.
B: Und das Wiener Modell zeigt: Langfristiger öffentlicher und gemeinnütziger Wohnungsbau kann die Mieten für alle dämpfen.
A: Das ist das Ende von Folge dreiundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und denk an Herrn Krüger: Ein Haus soll ein Zuhause sein, keine Geldanlage. Servus!
A: Tschüss!
VOCAB: das Geflecht | Ein Netz aus vielen miteinander verbundenen Faktoren. | 🕸️
VOCAB: sich lassen | Als Passiversatz: Das Problem lässt sich lösen. | 🔧
VOCAB: die Rendite | Der Gewinn, den eine Investition bringt. | 💹
VOCAB: etwas kippen | Eine Regelung für ungültig erklären. | ⚖️
VOCAB: die Genossenschaft | Eine Gemeinschaft, die etwas gemeinsam und nicht gewinnorientiert besitzt. | 🏘️
VOCAB: die Hetze | Die gezielte Verbreitung von Hass gegen eine Gruppe. | 📢
QUIZ: Was bedeutet „Das Problem lässt sich lösen“? | Das Problem kann gelöst werden | Das Problem wurde gelöst | Man soll das Problem lassen | 1
QUIZ: Warum wurde der Berliner Mietendeckel gekippt? | Weil das Land Berlin für das Mietrecht nicht zuständig war | Weil die Mieten zu niedrig waren | Weil niemand ihn wollte | 1
QUIZ: Was forderte das Volksbegehren „Deutsche Wohnen und Co. enteignen“? | Mehr private Investoren | Die Vergesellschaftung großer Wohnungsunternehmen gegen Entschädigung | Den Bau von Hochhäusern | 2
QUIZ: Was ist das Besondere am Wiener Modell? | Fast die Hälfte der Wiener lebt in Wohnungen, die dem freien Markt weitgehend entzogen sind | Alle Wohnungen sind privat | Es gibt keine Mieten | 1
QUIZ: An wen wurde Juliens Haus am Ende verkauft? | An den Investor | An eine Wohnungsbaugenossenschaft | An Julien | 2
`;

DATA.podScripts.ep094 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge vierundneunzig. Heute wird es lustig. Hoffentlich. Denn wir sprechen über ein Thema, das zu den schwierigsten Dingen beim Erlernen einer Fremdsprache gehört: den Humor. Und zwar über Humor in verschiedenen Kulturen, über Ironie und Understatement.
A: Man sagt, man beherrsche eine Fremdsprache erst wirklich, wenn man in ihr Witze verstehen und selbst lustig sein kann. Denn Humor setzt ein tiefes Verständnis voraus. Für die Sprache, für Wortspiele, für kulturelle Anspielungen und für das, was zwischen den Zeilen steht.
B: Und wir müssen natürlich gleich mit dem größten Klischee aufräumen. „Mit etwas aufräumen“ heißt hier: einen Irrtum beseitigen. Denn es gibt ein weltweit verbreitetes Vorurteil: Die Deutschen haben keinen Humor.
A: Hahaha. Ja, das hört man überall. Es gibt sogar einen bekannten Witz: Was ist das kürzeste Buch der Welt? „Tausend Jahre deutscher Humor.“
B: Hahaha. Und das Lustige ist: Die Deutschen erzählen diesen Witz selbst über sich. Was schon zeigt, dass sie sehr wohl Humor haben. Selbstironie ist eine der höchsten Formen des Humors.
A: Sprachlich widmen wir uns heute genau diesen feinen Formen: der Ironie, dem Sarkasmus, dem Understatement, der Übertreibung und dem Wortspiel. Und den sprachlichen Signalen, an denen man sie erkennt. Zum Beispiel Modalpartikeln wie „ja“, „wohl“, „schon“ in bestimmten Kontexten, oder die Intonation.
B: Und wir lernen Ausdrücke wie „etwas mit einem Augenzwinkern sagen“, also nicht ganz ernst meinen. Oder „etwas für bare Münze nehmen“, also etwas wörtlich und ernst nehmen, das ironisch gemeint war.
A: Gut. Fangen wir mit einer Unterscheidung an. Ironie, Sarkasmus und Zynismus werden oft verwechselt. Was ist der Unterschied?
B: Ironie bedeutet, etwas zu sagen, aber das Gegenteil zu meinen. Und zwar so, dass der Zuhörer es versteht. Wenn es draußen in Strömen regnet und ich sage: „Herrliches Wetter heute!“, dann ist das ironisch. Ironie ist oft spielerisch und kann liebevoll sein.
A: Sarkasmus ist eine schärfere, bissigere Form der Ironie. Sie ist verletzend und will jemanden treffen oder verspotten. Wenn ein Kollege einen Fehler macht und man sagt: „Großartig, du bist wirklich ein Genie“, dann ist das Sarkasmus.
B: Und Zynismus ist eigentlich keine Form des Humors, sondern eine Haltung. Ein Zyniker glaubt nicht an das Gute, an Ideale, an Moral. Er verspottet alles mit einer bitteren Verachtung. Wir hatten das Wort schon in Folge sechsundsechzig beim Burnout.
A: Sehr gut erklärt. Und jetzt zum deutschen Humor. Ist er wirklich so schlecht wie sein Ruf?
B: Ich glaube, das Problem ist, dass der deutsche Humor oft anders funktioniert, als Außenstehende erwarten. Und zwar wegen der Trennung von Ernst und Spaß, die wir aus Folge achtundachtzig kennen. In Deutschland gibt es eine relativ klare Grenze. Bei der Arbeit ist man ernst, im Privatleben lustig.
A: Das stimmt. Wenn ein Deutscher eine wichtige Besprechung leitet, macht er tendenziell weniger Witze als ein Brite oder Amerikaner. Weil Humor bei ernsten Themen als unpassend, fast respektlos gilt. Man könnte den Eindruck erwecken, man nehme die Sache nicht ernst.
B: Während ein Brite fast jede Rede mit einem Witz beginnt. Auch bei einer Beerdigung. Und das Verblüffende: Gerade deshalb halten viele Briten die Deutschen für humorlos. Weil sie den Humor im falschen Kontext suchen.
A: Und der deutsche Humor ist oft direkter, manchmal derber, oft situationskomisch. Es gibt eine lange Tradition von Komikern wie Loriot. Er ist vielleicht der wichtigste deutsche Humorist des zwanzigsten Jahrhunderts.
B: Loriot! Den lieben alle Deutschen. Erzähl von ihm.
A: Loriot, mit bürgerlichem Namen Vicco von Bülow, war ein Meister der feinen Beobachtung. Seine Sketche zeigen oft ganz alltägliche Situationen in der deutschen Mittelschicht. Ehepaare, die sich nichts mehr zu sagen haben. Spießige Bürger, die sich an Regeln klammern. Und der Humor entsteht daraus, dass die Kommunikation zwischen den Menschen auf absurde Weise scheitert.
B: Ein berühmter Sketch spielt beim Frühstück. Ein Ehepaar streitet sich darüber, wie lange das Frühstücksei gekocht wurde. Der Mann besteht darauf, dass ein Ei viereinhalb Minuten kochen muss, und dass es heute zu hart ist. Und die Frau sagt, sie habe es nach Gefühl gekocht.
A: Und der Streit über das Ei wird immer grotesker. Und es ist eigentlich eine tiefgründige Satire über die Kommunikationsprobleme in einer Ehe und über die deutsche Pedanterie. „Pedanterie“ ist eine übertriebene Genauigkeit und Kleinlichkeit.
B: Und es gibt einen Sketch mit einer Nudel. Ein Mann macht einer Frau in einem Restaurant einen Heiratsantrag. Und dabei hängt ihm eine Nudel im Gesicht. Und die Frau versucht die ganze Zeit, ihn darauf hinzuweisen. Aber er lässt sie nicht zu Wort kommen.
A: Hahaha. Ja. Und Loriot hat auch einen berühmten Satz geprägt: „Ein Leben ohne Mops ist möglich, aber sinnlos.“ Er liebte Möpse, also diese kleine Hunderasse.
B: Hahaha. Der Satz ist zu einem geflügelten Wort geworden. Ein „geflügeltes Wort“ ist ein Zitat, das so bekannt geworden ist, dass jeder es kennt und benutzt.
A: Genau. Und jetzt der österreichische Humor. Der ist ja noch einmal ganz anders, oder?
B: Absolut. Der österreichische, besonders der Wiener Humor, ist tiefschwarz und melancholisch. Wir haben in Folge vierunddreißig über den schwarzen Humor gesprochen und über die besondere Beziehung der Wiener zum Tod. Es gibt den Begriff „der Wiener Schmäh“, aus Folge achtundzwanzig.
A: Erklär ihn noch einmal genauer.
B: Der Schmäh ist schwer zu übersetzen. Es ist eine Mischung aus Charme, Ironie, Witz und einer gewissen Verlogenheit. Man sagt etwas Freundliches, meint aber vielleicht etwas ganz anderes. Und der andere weiß das, und beide genießen das Spiel. Wenn ein Wiener Kellner sagt „Gnä' Frau, Sie schauen heute wieder bezaubernd aus“, ist das Schmäh. Halb ernst, halb Spiel.
A: Und es gibt einen typischen Wiener Witz über den Tod. Kannst du einen erzählen?
B: Gern. Ein Mann liegt im Sterben. Er ruft seine Frau und sagt: „Ich rieche den Apfelstrudel, den du gerade backst. Kann ich noch ein letztes Stück haben?“ Und die Frau antwortet: „Nein, der ist für das Begräbnis.“
A: Hahaha! Das ist so schwarz. Und so wienerisch.
B: Hahaha. Genau. Und es gibt den berühmten österreichischen Kabarettisten Helmut Qualtinger, der eine Figur namens „Herr Karl“ geschaffen hat. Ein opportunistischer, kleinbürgerlicher Wiener, der sich durch alle politischen Systeme laviert. Und durch diese Figur hat Qualtinger auf sehr bissige Weise die Mitschuld vieler Österreicher am Nationalsozialismus thematisiert.
A: Das zeigt etwas Wichtiges: Humor kann ein sehr scharfes politisches Instrument sein. Die Satire.
B: Genau. Und in Deutschland gibt es eine lange Tradition des politischen Kabaretts. Und auch der Satire in Zeitschriften. Die Satirezeitschrift „Titanic“ ist bekannt für ihre provokanten Titelbilder.
A: Gut. Und jetzt der britische Humor, den wir als Kontrast brauchen, um das Konzept des Understatements zu verstehen.
B: Das Understatement ist die Untertreibung. Man stellt etwas als weniger bedeutend dar, als es ist. Und die Briten sind die unbestrittenen Meister darin. Wenn ein Brite in einem schweren Sturm auf dem Schiff steht und sagt „It's a bit windy today“, dann ist das Understatement.
A: Oder das berühmte Beispiel: Während der schlimmen Bombardierungen Londons im Zweiten Weltkrieg hingen in manchen beschädigten Geschäften Schilder mit der Aufschrift „More open than usual“. Also: „Offener als sonst.“ Weil die Fenster und Türen weggesprengt waren.
B: Das ist ein wunderbares Beispiel für Humor als Form der Resilienz. Folge zweiundneunzig! Mit Humor eine unerträgliche Situation erträglich machen.
A: Und hier liegt ein großes Problem für die interkulturelle Kommunikation. Die Deutschen, die tendenziell Low Context sind und Verstärker benutzen, nehmen das britische Understatement oft für bare Münze. Wenn ein Brite sagt „I'm not entirely sure that's a good idea“, versteht der Deutsche „Er hat leichte Bedenken“. Der Brite meint aber: „Das ist eine katastrophale Idee.“
B: Hahaha. Genau wie die Tabelle aus Folge achtundachtzig. Und umgekehrt verstehen die Briten die deutsche Direktheit oft nicht als Humor, selbst wenn sie so gemeint ist.
A: Und das bringt uns zu einem der größten Probleme mit Humor in einer Fremdsprache: der Ironie. Ironie ist für Nicht-Muttersprachler extrem schwer zu erkennen. Weil sie oft nur durch die Intonation oder den Kontext signalisiert wird.
B: Und das kann zu peinlichen Missverständnissen führen. Wenn jemand ironisch sagt „Na toll, schon wieder Verspätung bei der Bahn“, und ein Lernender denkt, die Person freue sich wirklich über die Verspätung.
A: Oder umgekehrt: Wenn ein Lernender etwas ironisch meint, aber die Intonation nicht stimmt, wird er ernst genommen. Darum ist es in einer Fremdsprache oft sicherer, mit Ironie vorsichtig zu sein, bis man sich wirklich sicher fühlt.
B: Und es gibt noch eine besondere Form, die für das Deutsche typisch ist: das Wortspiel. Weil das Deutsche so viele Möglichkeiten hat, Wörter zu kombinieren, sind Wortspiele sehr beliebt. Besonders in der Werbung und bei Friseursalons.
A: Hahaha. Die Friseursalons! Es gibt in Deutschland eine regelrechte Tradition von witzigen Namen für Friseure. „Haarmonie“, von Harmonie und Haar. „Kamm in“, wie „Come in“. „Vier Haareszeiten“, von den vier Jahreszeiten. „Haarscharf“.
B: Hahaha. Und „Schnittstelle“! Und Fischrestaurants mit Namen wie „Fischers Fritz“. Oder der berühmte Zungenbrecher: „Fischers Fritz fischt frische Fische.“
A: Und dann gibt es einen sehr typischen Bereich des deutschen Humors: die Witze über bestimmte Regionen und Berufe. Die Ostfriesenwitze zum Beispiel. Die Ostfriesen leben im äußersten Nordwesten Deutschlands, und sie sind traditionell die Zielscheibe von Witzen über angebliche Einfältigkeit.
B: Und die Ostfriesen nehmen das mit Humor und erzählen inzwischen selbst Ostfriesenwitze. Und in Österreich gibt es die Burgenländerwitze. Das Burgenland ist das östlichste Bundesland.
A: Und Beamtenwitze. Über die Langsamkeit der Bürokratie. Folge neunundsiebzig! „Was ist der Unterschied zwischen einem Beamten und einer Schnecke? Die Schnecke hat einen Schleim, der Beamte hat einen Stempel.“ Ah, nein, das ist ein schlechter Witz. Hahaha.
B: Hahaha. Ein sehr schlechter Witz, Lena. Aber genau das ist auch eine Form von Humor. Der absichtlich schlechte Witz. Der Flachwitz!
A: Ja! Flachwitze sind in Deutschland unglaublich beliebt. Ein Flachwitz ist ein absichtlich simpler, oft sehr dummer Witz, meistens mit einem Wortspiel. Man lacht nicht, weil er lustig ist, sondern weil er so schlecht ist. „Was macht ein Pirat am Computer? Er drückt die Enter-Taste.“
B: Hahaha. Oh nein! Das ist furchtbar. Und darum lustig. Und das sagt vielleicht etwas Tiefes über den deutschen Humor. Eine gewisse Freude am Absurden, am Banalen.
A: Gut. Und jetzt die Frage: Kann man Humor überhaupt übersetzen?
B: Oft nicht. Wortspiele lassen sich fast nie übersetzen. Und Witze, die auf kulturellen Anspielungen beruhen, funktionieren nur, wenn man die Kultur kennt. Übersetzer von Komödien und Comics stehen vor einer unlösbaren Aufgabe. Sie müssen oft ganz neue Witze erfinden.
A: Ein gutes Beispiel sind die Asterix-Comics, die wir in Folge vierundzwanzig erwähnt haben. Die deutschen Übersetzungen sind berühmt dafür, dass sie eigene, neue Wortspiele erfunden haben, die im französischen Original gar nicht vorkommen. Manche halten die deutsche Version sogar für witziger als das Original.
B: Und die Namen! Im Original heißen die Charaktere oft ganz anders. Der Barde heißt im Französischen „Assurancetourix“, im Deutschen „Troubadix“. Ein völlig neues Wortspiel.
A: Jetzt zur Geschichte. Diesmal geht es um Oksana, die ukrainische Data Scientist. Und um ihren ersten großen Auftritt mit Humor.
B: Oksana? Die ja eher als sehr direkt und ernst gilt.
A: Genau das ist der Punkt. Oksana wurde eingeladen, auf einer großen Tech-Konferenz in Berlin einen Vortrag über Fairness in Algorithmen zu halten. Über ihre Arbeit aus Folge einundachtzig. Und ihre Kollegen haben ihr geraten, den Vortrag mit einem Witz zu beginnen, um das Publikum aufzulockern.
B: Ein gängiger Rat. Wie in Folge achtzig mit dem Aufhänger.
A: Genau. Und Oksana hat einen Witz vorbereitet, der in der Ukraine sehr beliebt ist. Ein Witz mit schwarzem Humor über Bürokratie in der Sowjetunion. Und sie hat ihn auf Deutsch übersetzt.
B: Oh je. Ich ahne, was passiert ist.
A: Ja. Sie hat den Witz erzählt. Und es war totenstill im Saal. Niemand hat gelacht. Das Publikum hat sie verwirrt angeschaut. Der Witz beruhte auf einem Wortspiel im Russischen, das auf Deutsch völlig verloren ging. Und auf Anspielungen, die niemand im Publikum verstand.
B: Ein klassischer kultureller Flop. Was hat sie gemacht?
A: Und genau das war der Moment. Oksana hat einen Moment gestutzt. „Stutzen“ heißt: plötzlich innehalten, weil man überrascht ist. Und dann hat sie ganz trocken gesagt: „Okay. Das war ein Experiment. Ich wollte testen, ob mein Algorithmus für ukrainischen Humor auch in Deutschland funktioniert. Er funktioniert offensichtlich nicht. Das Modell braucht mehr Trainingsdaten.“
B: Hahaha! Brillant! Sie hat den Flop in einen Witz verwandelt!
A: Genau! Und der ganze Saal hat gelacht. Laut und lange. Weil es ein Witz über ihr eigenes Thema war, über Algorithmen und Trainingsdaten. Und weil sie mit Selbstironie auf das Scheitern reagiert hat.
B: Die höchste Form des Humors, wie wir am Anfang gesagt haben. Und hat es dem Vortrag geholfen?
A: Enorm. Das Publikum war danach vollkommen auf ihrer Seite. Und sie hat gesagt, das sei eigentlich die perfekte Illustration ihres Themas gewesen. Ein Witz, der in einem Kontext funktioniert, funktioniert in einem anderen nicht. Genau wie ein Algorithmus, der mit den Daten einer Gruppe trainiert wurde und bei einer anderen versagt.
B: Wow. Das ist fast zu perfekt. Ein ungewolltes, aber geniales Gleichnis.
A: Und nach dem Vortrag kam ein älterer Herr zu ihr. Er sagte: „Ich habe jahrelang behauptet, Ukrainer hätten keinen Humor. Sie haben mich vom Gegenteil überzeugt.“ Und Oksana hat geantwortet: „Und ich habe jahrelang behauptet, Deutsche hätten keinen Humor. Sie haben mich heute auch vom Gegenteil überzeugt.“
B: Hahaha. Ein schöner Abschluss. Jetzt bist du dran, Hörer, Hörerin. Erzähle einen Witz auf Deutsch. Vielleicht einen Flachwitz. Und erkläre, warum er lustig ist. Oder warum nicht.
A: Und versuche einmal, etwas ironisch zu sagen. Achte dabei auf die Intonation. Zum Beispiel: „Na super, schon wieder Montag!“
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: das Understatement. Die Untertreibung, etwas als weniger bedeutend darstellen, als es ist.
B: Wort Nummer zwei: etwas für bare Münze nehmen. Etwas wörtlich und ernst nehmen, das ironisch gemeint war.
A: Wort Nummer drei: die Pedanterie. Übertriebene Genauigkeit und Kleinlichkeit.
B: Wort Nummer vier: das geflügelte Wort. Ein Zitat, das so bekannt ist, dass jeder es benutzt.
A: Wort Nummer fünf: der Flachwitz. Ein absichtlich simpler, oft sehr dummer Witz.
B: Und Wort Nummer sechs: stutzen. Plötzlich innehalten, weil man überrascht ist.
A: Noch einmal: das Understatement, etwas für bare Münze nehmen, die Pedanterie, das geflügelte Wort, der Flachwitz, stutzen.
B: Was nehmen wir mit? Ironie meint das Gegenteil, Sarkasmus ist bissig und verletzend, Zynismus ist eine Haltung der Verachtung.
A: Der deutsche Humor trennt oft Ernst und Spaß. Loriot ist der große Meister der feinen Beobachtung. Der Wiener Humor ist schwarz und melancholisch, mit dem Schmäh.
B: Das britische Understatement wird von Deutschen oft für bare Münze genommen. Und Wortspiele lassen sich fast nie übersetzen.
A: Und Selbstironie ist die höchste Form des Humors, wie Oksana gezeigt hat.
B: Das ist das Ende von Folge vierundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und ein Leben ohne Humor ist möglich, aber sinnlos. Tschüss!
B: Servus!
VOCAB: das Understatement | Die Untertreibung, etwas als weniger bedeutend darstellen. | 🤏
VOCAB: etwas für bare Münze nehmen | Etwas wörtlich und ernst nehmen, das ironisch gemeint war. | 🪙
VOCAB: die Pedanterie | Übertriebene Genauigkeit und Kleinlichkeit. | 📏
VOCAB: das geflügelte Wort | Ein Zitat, das so bekannt ist, dass jeder es benutzt. | 🕊️
VOCAB: der Flachwitz | Ein absichtlich simpler, oft sehr dummer Witz. | 🥞
VOCAB: stutzen | Plötzlich innehalten, weil man überrascht ist. | ⏸️
QUIZ: Was ist der Unterschied zwischen Ironie und Sarkasmus? | Sarkasmus ist schärfer und will verletzen | Es gibt keinen Unterschied | Ironie ist immer böse | 1
QUIZ: Wer war Loriot? | Ein bedeutender deutscher Humorist | Ein österreichischer Kabarettist | Ein britischer Komiker | 1
QUIZ: Was ist ein Beispiel für britisches Understatement? | „It's a bit windy today“ während eines schweren Sturms | „Das ist absolut falsch“ | Ein lauter Witz | 1
QUIZ: Was ist ein Flachwitz? | Ein absichtlich simpler, oft dummer Witz | Ein Witz über flache Länder | Ein sehr intelligenter Witz | 1
QUIZ: Wie reagierte Oksana, als niemand über ihren Witz lachte? | Sie verließ die Bühne | Sie machte einen selbstironischen Witz über ihren Algorithmus | Sie erzählte den Witz noch einmal | 2
`;

DATA.podScripts.ep095 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge fünfundneunzig. Heute sprechen wir über etwas, das man oft als das Rückgrat der deutschen Wirtschaft bezeichnet. Und das im Ausland erstaunlich wenig bekannt ist: den Mittelstand.
A: Wenn man im Ausland an die deutsche Wirtschaft denkt, denkt man an große Namen. Volkswagen, Siemens, BMW, Bosch, SAP. Aber die eigentliche Stärke der deutschen Wirtschaft liegt woanders. In Hunderttausenden kleiner und mittlerer Unternehmen, oft in Familienbesitz, oft in kleinen Städten auf dem Land.
B: Und der Begriff „Mittelstand“ ist übrigens so typisch deutsch, dass er in andere Sprachen als Lehnwort übernommen wurde. Im Englischen spricht man manchmal einfach von „the Mittelstand“. Wie „Kindergarten“ oder „Angst“.
A: Sprachlich widmen wir uns heute der Wirtschaftssprache auf hohem Niveau. Und insbesondere der Nominalisierung, die für Wirtschaftstexte so typisch ist. Wir haben sie in Folge neunundsiebzig beim Amtsdeutsch kurz erwähnt. Heute schauen wir genauer hin. Und in Folge neunundneunzig sprechen wir über ihre Vor- und Nachteile.
B: Nominalisierung bedeutet: Man macht aus einem Verb oder Adjektiv ein Nomen. Statt „Das Unternehmen wächst schnell“ sagt man „das schnelle Wachstum des Unternehmens“. Statt „Die Firma exportiert“ sagt man „der Export der Firma“. Und dadurch kann man sehr viele Informationen in einen Satz packen.
A: Typische Endungen für Nominalisierungen sind: „-ung“, wie „die Entwicklung“, „-heit“ und „-keit“, wie „die Wettbewerbsfähigkeit“, „-ion“, wie „die Produktion“, und der substantivierte Infinitiv, wie „das Wachsen“.
B: Gut. Fangen wir mit einer Definition an. Was ist der Mittelstand eigentlich?
A: Das ist gar nicht so einfach, denn es gibt keine einheitliche Definition. Eine gängige Definition, die etwa das Institut für Mittelstandsforschung verwendet, bezieht sich auf die Größe. Unternehmen mit weniger als fünfhundert Mitarbeitern und weniger als fünfzig Millionen Euro Jahresumsatz.
B: Aber der Begriff ist eigentlich mehr als eine Größenangabe. Er beschreibt eine bestimmte Art, ein Unternehmen zu führen. Und viele Unternehmen, die deutlich größer sind, verstehen sich trotzdem als Mittelstand.
A: Genau. Es geht um eine besondere Unternehmenskultur. Und die hat mehrere typische Merkmale. Das wichtigste ist die Einheit von Eigentum und Führung. Das Unternehmen gehört oft einer Familie, und die Familie leitet es auch. Häufig schon in der dritten, vierten oder sogar fünften Generation.
B: Und das hat enorme Folgen für die Art, wie das Unternehmen geführt wird. Ein börsennotiertes Unternehmen muss jedes Quartal gute Zahlen für die Aktionäre liefern. Ein Familienunternehmen denkt in Generationen. Der Inhaber will das Unternehmen an seine Kinder und Enkel weitergeben, nicht schnell Gewinne maximieren.
A: Das ist der zentrale Unterschied: die langfristige Orientierung. Ein Mittelständler investiert lieber in eine Maschine, die sich in zwanzig Jahren auszahlt, als in eine kurzfristige Gewinnsteigerung. Und er entlässt in einer Krise nicht sofort seine Mitarbeiter, weil er sie oft persönlich kennt.
B: Und das zweite Merkmal: die regionale Verwurzelung. Viele Mittelständler sind nicht in Großstädten angesiedelt, sondern in kleinen Städten oder auf dem Land. In der Schwäbischen Alb, im Sauerland, in Ostwestfalen, in Franken. Orte, deren Namen man im Ausland noch nie gehört hat.
A: Und dort sind sie oft der größte Arbeitgeber. Sie prägen das ganze Leben der Region. Sie finanzieren den Sportverein, das Feuerwehrfest, das Altersheim. Das Unternehmen und die Gemeinde sind eng miteinander verflochten.
B: Und das dritte Merkmal, das vielleicht faszinierendste: die sogenannten Hidden Champions.
A: Ja! Der Begriff wurde von dem deutschen Unternehmensberater Hermann Simon geprägt. Hidden Champions sind wenig bekannte Unternehmen, die in ihrer Nische Weltmarktführer sind. „Die Nische“ ist hier ein kleiner, spezialisierter Bereich des Marktes.
B: Und Deutschland hat mit Abstand mehr dieser Hidden Champions als jedes andere Land der Welt. Hermann Simon zählte weltweit etwa dreitausend, und fast die Hälfte davon kommen aus dem deutschsprachigen Raum. Aus Deutschland, Österreich und der Schweiz.
A: Und die Beispiele sind oft verblüffend. Es gibt eine Firma, die weltweit führend bei Dübeln ist. Artur Fischer aus Folge dreiundfünfzig! Mit über tausend Patenten.
B: Es gibt Firmen, die Weltmarktführer sind bei Schrauben, bei Ventilen, bei Industriepumpen, bei Etikettiermaschinen. Bei Präzisionsmessgeräten, bei Spezialklebstoffen, bei Orgelpfeifen.
A: Und ein besonders schönes Beispiel ist eine Firma, die weltweit einen großen Teil der Mundharmonikas herstellt. Hohner aus Trossingen in Baden-Württemberg. Ihre Mundharmonikas wurden von Bluesmusikern auf der ganzen Welt gespielt, von Bob Dylan bis zu den Beatles.
B: Und dann gibt es Firmen, deren Produkte jeder kennt, aber niemand weiß, wer sie herstellt. Zum Beispiel stammen viele der Teile in den Maschinen, mit denen weltweit Computerchips hergestellt werden, von deutschen Spezialfirmen. Eine Firma aus Oberkochen in Baden-Württemberg stellt hochpräzise Optiken her, ohne die die modernsten Chips der Welt nicht produziert werden könnten.
A: Und das zeigt eine interessante Strategie. Diese Firmen konzentrieren sich auf einen sehr kleinen Bereich. Aber in diesem Bereich sind sie die Besten der Welt. Statt viele Produkte mittelmäßig zu machen, machen sie ein einziges Produkt perfekt. Und verkaufen es weltweit.
B: Das ist die Kombination aus Spezialisierung und Globalisierung. Lokal verwurzelt, aber global aktiv. Man spricht manchmal von „glokal“.
A: Und warum ist Deutschland gerade bei dieser Art von Unternehmen so erfolgreich?
B: Es gibt mehrere Erklärungen. Erstens die Geschichte. Deutschland war bis achtzehnhunderteinundsiebzig ein Flickenteppich aus vielen kleinen Staaten. Es gab keine zentrale Hauptstadt wie Paris oder London, die alle Wirtschaft an sich zog. Darum ist die Wirtschaft in Deutschland bis heute dezentral verteilt.
A: „Der Flickenteppich“ ist ein Teppich aus vielen verschiedenen Stoffresten. Ein schönes Bild für das zersplitterte Deutschland vor der Reichsgründung. Zweitens?
B: Zweitens das duale Ausbildungssystem, über das wir in Folge dreizehn gesprochen haben. Die Kombination aus Arbeit im Betrieb und Unterricht in der Berufsschule bringt hochqualifizierte Fachkräfte hervor. Facharbeiter, Mechatroniker, Werkzeugmacher. Und genau diese Fachkräfte braucht man, um hochpräzise Produkte herzustellen.
A: Drittens die Finanzierung. In Deutschland gibt es ein dichtes Netz von regionalen Banken. Die Sparkassen und die Volksbanken. Sie kennen die lokalen Unternehmen oft seit Jahrzehnten und vergeben langfristige Kredite. Man spricht vom „Hausbankprinzip“.
B: Und viertens eine Kultur der Ingenieurskunst und der Qualität. Das berühmte „Made in Germany“. Wobei es eine ironische Geschichte zu diesem Begriff gibt.
A: Ja! Erzähl!
B: Der Begriff „Made in Germany“ wurde ursprünglich gar nicht von den Deutschen erfunden, sondern von den Briten. Achtzehnhundertsiebenundachtzig hat das britische Parlament ein Gesetz beschlossen, nach dem importierte Waren ihr Herkunftsland angeben mussten. Und das war als Warnung gedacht. Deutsche Produkte galten damals als billige, minderwertige Kopien britischer Waren.
A: Der Stempel sollte also die britischen Kunden vor schlechter deutscher Qualität warnen! Und dann hat sich das völlig umgekehrt.
B: Genau. Die deutschen Hersteller haben ihre Qualität so stark verbessert, dass „Made in Germany“ zu einem Gütesiegel wurde. Zu einem weltweiten Synonym für hohe Qualität. Eine der schönsten Ironien der Wirtschaftsgeschichte.
A: Das ist wunderbar. Ein Schimpfwort wird zu einem Ehrentitel. Gut. Und jetzt die Herausforderungen. Denn der Mittelstand steht vor großen Problemen.
B: Das erste und vielleicht größte Problem: die Nachfolge. Viele Mittelständler werden von der Generation der Babyboomer geführt, die jetzt in Rente geht. Und viele finden keinen Nachfolger. Die Kinder wollen das Unternehmen nicht übernehmen. Sie wollen lieber in Berlin in einem Start-up arbeiten oder Ärztin werden.
A: Und das ist ein ernstes Problem. Jedes Jahr müssen Zehntausende Unternehmen einen Nachfolger finden. Und wenn sie keinen finden, müssen sie schließen oder an einen Investor verkaufen. Und dann geht oft die besondere Unternehmenskultur verloren.
B: Das zweite Problem: der Fachkräftemangel. Folge dreiundsechzig. Gerade die Unternehmen in ländlichen Regionen haben große Schwierigkeiten, qualifizierte Mitarbeiter zu finden. Viele junge Menschen ziehen in die Städte und wollen nicht auf dem Land leben.
A: Und das dritte Problem: die Digitalisierung. Viele Mittelständler waren lange auf ihre traditionellen Stärken fokussiert. Auf Maschinenbau, auf mechanische Präzision. Und die Digitalisierung haben einige verschlafen.
B: „Etwas verschlafen“ heißt: eine wichtige Entwicklung oder einen Termin nicht bemerken, zu spät reagieren. Und es gibt die Sorge, dass Deutschland bei der künstlichen Intelligenz und der Softwareentwicklung den Anschluss verliert. Dass die Zukunft nicht in den perfekten Maschinen, sondern in der Software liegt.
A: Und das vierte Problem: die Energiekosten und die geopolitische Lage. Nach dem russischen Angriff auf die Ukraine sind die Energiepreise stark gestiegen. Und gerade energieintensive Mittelständler hatten große Schwierigkeiten.
B: Gut. Aber es gibt auch eine positive Entwicklung. Viele Mittelständler haben gerade ihre langfristige Denkweise genutzt, um sich auf die großen Veränderungen einzustellen. Etwa auf die Energiewende. Es gibt Familienunternehmen, die zu Pionieren bei erneuerbaren Energien geworden sind.
A: Und einige arbeiten inzwischen eng mit Start-ups zusammen. Die Tradition trifft auf die Innovation. Was uns zur Geschichte bringt.
B: Genau. Und diesmal geht es um Ali, den Freelancer aus Ägypten, den wir aus Folge fünfundsechzig kennen.
A: Ali! Der sich auf Webseiten für kleine Geschäfte in Neukölln spezialisiert hat.
B: Genau. Und Ali hat einen ungewöhnlichen Auftrag bekommen. Ein Familienunternehmen aus dem Sauerland hat ihn kontaktiert. Eine Firma, die seit hundertzwanzig Jahren Präzisionsventile für die Industrie herstellt. Ein typischer Hidden Champion. Weltmarktführer in einer kleinen Nische.
A: Und warum ausgerechnet Ali?
B: Der Firmenchef, Herr Brinkmann, ist zweiundsechzig und führt das Unternehmen in der vierten Generation. Und er hatte ein Problem. Seine Firma verkaufte ihre Ventile weltweit, aber fast ausschließlich über persönliche Kontakte und Messen. Es gab keinen Online-Handel, keine moderne Webseite. Und die Kunden in Asien und im Nahen Osten wollten zunehmend online bestellen.
A: Die verschlafene Digitalisierung.
B: Genau. Und Herr Brinkmann hatte gehört, dass Ali besonders gut mit Kunden aus dem arabischen Raum kommunizieren kann. Ein großer Teil seiner Kunden in der Ölindustrie und in Wasseraufbereitungsanlagen sitzen im Nahen Osten. Also hat er Ali eingeladen.
A: Und wie war die erste Begegnung?
B: Ali ist mit dem Zug ins Sauerland gefahren, in ein kleines Dorf mit dreitausend Einwohnern. Und er war zuerst etwas eingeschüchtert. Ein traditionsreiches Unternehmen, ein älterer, sehr förmlicher Chef. Und er dachte: Was will dieser Mann von einem jungen Freelancer aus Neukölln?
A: Und Herr Brinkmann?
B: Herr Brinkmann war zuerst auch skeptisch. Er sprach ihn mit „Sie“ an, sehr förmlich. Er zeigte ihm die Produktion. Und Ali war fasziniert. Er sah, mit welcher Präzision die Ventile hergestellt wurden. Toleranzen von wenigen Tausendstel Millimetern. Und er sah, wie stolz die Mitarbeiter auf ihre Arbeit waren. Viele arbeiteten schon seit dreißig Jahren dort.
A: Und dann?
B: Beim Mittagessen in der Kantine hat Herr Brinkmann etwas Persönliches erzählt. Sein Sohn wollte die Firma nicht übernehmen. Er war Arzt in Hamburg. Und Herr Brinkmann hatte große Sorge, was aus dem Unternehmen und den zweihundert Mitarbeitern werden würde.
A: Das Nachfolgeproblem.
B: Genau. Und Ali hat ihm zugehört. Und er hat erzählt, dass sein eigener Vater in Kairo eine kleine Werkstatt hatte. Und dass er auch nicht dort weitergearbeitet hat, sondern nach Deutschland gegangen ist. Und dass er das manchmal bereut.
A: Eine unerwartete Verbindung. Zwei Väter, zwei Söhne, zwei Länder.
B: Ja. Und nach diesem Gespräch war das Eis gebrochen. „Das Eis ist gebrochen“ heißt: Die anfängliche Distanz und Fremdheit ist verschwunden. Und Ali hat in den nächsten Monaten die digitale Strategie des Unternehmens entwickelt. Eine moderne, mehrsprachige Webseite auf Deutsch, Englisch und Arabisch. Ein Online-System, mit dem die Kunden Ersatzteile direkt bestellen konnten.
A: Und hat es funktioniert?
B: Sehr gut. Die Online-Bestellungen aus dem Nahen Osten haben sich innerhalb eines Jahres verdreifacht. Und Ali hat ein Team junger Programmierer aus der Programmierschule eingestellt, um das System zu betreuen. Darunter Oksana für die Datenanalyse.
A: Und das Nachfolgeproblem?
B: Das ist der überraschende Teil. Herr Brinkmann hat eine ungewöhnliche Lösung gefunden. Er hat beschlossen, das Unternehmen nicht an einen Investor zu verkaufen, sondern in eine Stiftung zu überführen. Eine sogenannte Verantwortungseigentum-Struktur. Das Unternehmen gehört dann sich selbst. Die Gewinne bleiben im Unternehmen, und niemand kann es einfach verkaufen.
A: Das ist ein Modell, das in Deutschland eine lange Tradition hat. Bosch und Zeiss gehören zum Beispiel großen Teilen Stiftungen. So bleibt die langfristige Orientierung über Generationen erhalten.
B: Genau. Und die neue Geschäftsführung? Herr Brinkmann hat eine erfahrene Ingenieurin aus dem eigenen Betrieb zur Geschäftsführerin gemacht. Sie arbeitet seit zwanzig Jahren dort. Und Ali hat er als Berater für die digitale Transformation behalten.
A: Und hat sich Ali mit Herrn Brinkmann angefreundet?
B: Ja, sehr. Am Ende des Projekts hat Herr Brinkmann ihm das „Du“ angeboten. Bei einem Sauerländer Bier. Und er hat gesagt: „Ich habe geglaubt, die Zukunft meiner Firma liege in der Familie. Aber vielleicht liegt sie in den Menschen, die an sie glauben. Egal, woher sie kommen.“
A: Jetzt bist du dran, Hörer, Hörerin. Beschreibe ein Unternehmen, das du kennst, mit möglichst vielen Nominalisierungen. Zum Beispiel: „Die Stärke des Unternehmens liegt in der Spezialisierung auf … Die Herausforderung besteht in der Digitalisierung …“
B: Und denk darüber nach: Würdest du lieber für einen großen Konzern oder für einen Mittelständler arbeiten? Warum?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: das Rückgrat. Hier: die tragende, wichtigste Grundlage von etwas.
A: Wort Nummer zwei: der Hidden Champion. Ein wenig bekanntes Unternehmen, das in seiner Nische Weltmarktführer ist.
B: Wort Nummer drei: die Nische. Ein kleiner, spezialisierter Bereich des Marktes.
A: Wort Nummer vier: der Flickenteppich. Etwas, das aus vielen verschiedenen, nicht zusammenpassenden Teilen besteht.
B: Wort Nummer fünf: etwas verschlafen. Eine wichtige Entwicklung zu spät bemerken.
A: Und Wort Nummer sechs: das Eis ist gebrochen. Die anfängliche Distanz ist verschwunden.
B: Noch einmal: das Rückgrat, der Hidden Champion, die Nische, der Flickenteppich, etwas verschlafen, das Eis ist gebrochen.
A: Was nehmen wir mit? Der Mittelstand besteht aus kleinen und mittleren, oft familiengeführten Unternehmen mit langfristiger Orientierung und regionaler Verwurzelung.
B: Deutschland hat besonders viele Hidden Champions, Weltmarktführer in kleinen Nischen. Gründe sind die dezentrale Geschichte, die duale Ausbildung, die regionalen Banken und die Kultur der Qualität.
A: „Made in Germany“ war ursprünglich eine britische Warnung vor schlechter Qualität und wurde zu einem Gütesiegel.
B: Und die Herausforderungen sind die Nachfolge, der Fachkräftemangel, die Digitalisierung und die Energiekosten.
A: Das ist das Ende von Folge fünfundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und vielleicht ist das nächste Produkt, das du benutzt, von einem Hidden Champion aus einem kleinen Dorf. Servus!
A: Tschüss!
VOCAB: das Rückgrat | Die tragende, wichtigste Grundlage von etwas. | 🦴
VOCAB: der Hidden Champion | Ein wenig bekanntes Unternehmen, das in seiner Nische Weltmarktführer ist. | 🏆
VOCAB: die Nische | Ein kleiner, spezialisierter Bereich des Marktes. | 🧩
VOCAB: der Flickenteppich | Etwas aus vielen verschiedenen, nicht zusammenpassenden Teilen. | 🧶
VOCAB: etwas verschlafen | Eine wichtige Entwicklung zu spät bemerken. | 😴
VOCAB: das Eis ist gebrochen | Die anfängliche Distanz ist verschwunden. | 🧊
QUIZ: Was ist ein typisches Merkmal des Mittelstands? | Die Einheit von Eigentum und Führung und eine langfristige Orientierung | Schnelle Gewinne für Aktionäre | Sitz nur in Großstädten | 1
QUIZ: Was sind Hidden Champions? | Wenig bekannte Weltmarktführer in kleinen Nischen | Große bekannte Konzerne | Erfolgreiche Sportler | 1
QUIZ: Was bedeutete „Made in Germany“ ursprünglich? | Ein deutsches Gütesiegel | Eine britische Warnung vor angeblich schlechter Qualität | Ein Slogan der deutschen Regierung | 2
QUIZ: Was ist ein großes Problem vieler Mittelständler? | Die Nachfolge | Zu viele Mitarbeiter | Zu viel Geld | 1
QUIZ: Wie hat Herr Brinkmann das Nachfolgeproblem gelöst? | Er hat das Unternehmen an einen Investor verkauft | Er hat es in eine Stiftung überführt und eine Ingenieurin zur Geschäftsführerin gemacht | Sein Sohn hat übernommen | 2
`;

DATA.podScripts.ep096 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge sechsundneunzig. Heute widmen wir uns der vielleicht größten Herausforderung unserer Zeit: dem Klimawandel. Und zwar einer Frage, die in der Debatte oft zu kurz kommt: Sollen wir uns vor allem an den Klimawandel anpassen, oder sollen wir ihn vor allem bekämpfen? Klimaanpassung oder Klimaschutz?
A: Zwei Begriffe, die man klar unterscheiden muss. Klimaschutz bedeutet, die Ursachen des Klimawandels zu bekämpfen. Also die Emissionen von Treibhausgasen zu reduzieren, damit sich die Erde weniger erwärmt. Man spricht auch von Mitigation, also Abschwächung.
B: Und Klimaanpassung bedeutet, sich auf die Folgen des Klimawandels einzustellen, die bereits unvermeidlich sind. Deiche erhöhen, Städte gegen Hitze wappnen, Landwirtschaft auf Dürren vorbereiten. „Sich gegen etwas wappnen“ heißt: sich auf eine Gefahr vorbereiten und schützen.
A: Und die Frage, wie man die begrenzten Ressourcen zwischen diesen beiden Strategien aufteilt, ist alles andere als trivial. Sie ist gewissermaßen eine Abwägung zwischen der Gegenwart und der Zukunft, zwischen Vorbeugung und Schadensbegrenzung.
B: Sprachlich widmen wir uns heute den Konzessivsätzen. Das sind Sätze, die einen Gegengrund nennen, der die Hauptaussage aber nicht verhindert. Wir kennen schon „obwohl“. Heute erweitern wir das Repertoire auf gehobenem Niveau.
A: Es gibt viele Möglichkeiten. „Obgleich“ und „obschon“ sind gehobenere Varianten von „obwohl“. „Wenngleich“ ebenso. Dann gibt es „so … auch“: „So wichtig der Klimaschutz auch ist, die Anpassung darf man nicht vernachlässigen.“ Und „wie … auch immer“: „Wie man es auch dreht und wendet, die Kosten bleiben hoch.“
B: Und es gibt „zwar … aber“ aus Folge fünfundsechzig, und präpositionale Formen wie „trotz“ mit Genitiv: „Trotz aller Bemühungen steigen die Emissionen weiter.“ Und „ungeachtet“, ein sehr formelles Wort: „Ungeachtet der Warnungen der Wissenschaft wurde zu wenig unternommen.“
A: „Ungeachtet“ heißt: ohne Rücksicht auf, trotz. Und „so … auch“ ist eine besonders elegante Konstruktion, die man in Leitartikeln oft liest. Gut. Fangen wir mit dem Stand der Dinge an. Jonas, wo stehen wir?
B: Die Lage ist ernst. Die globale Durchschnittstemperatur liegt bereits deutlich über dem vorindustriellen Niveau. Und die letzten Jahre gehörten zu den wärmsten seit Beginn der Wetteraufzeichnungen. Das Ziel des Pariser Klimaabkommens von zweitausendfünfzehn war es, die Erwärmung auf deutlich unter zwei Grad zu begrenzen, möglichst auf eineinhalb Grad.
A: Und das Eineinhalb-Grad-Ziel ist nach Einschätzung vieler Wissenschaftler kaum noch einzuhalten. Es sei denn, die Emissionen würden drastisch und sofort sinken, was derzeit nicht absehbar ist.
B: Und die Folgen spüren wir schon. Auch in Deutschland und Österreich. Die Hitzesommer werden häufiger und intensiver. Es gibt mehr Dürren, die der Landwirtschaft und den Wäldern zusetzen. Und es gibt mehr Starkregen.
A: Das schrecklichste Beispiel in Deutschland war die Flutkatastrophe im Ahrtal im Juli zweitausendeinundzwanzig. Nach extremem Starkregen verwandelte sich der kleine Fluss Ahr in einen reißenden Strom. Über hundertachtzig Menschen kamen in Deutschland ums Leben. Ganze Dörfer wurden zerstört.
B: Eine Katastrophe, die das Land erschüttert hat. Und die Studien zeigten später, dass der Klimawandel die Wahrscheinlichkeit eines solchen Extremregens deutlich erhöht hatte. Das ist die sogenannte Attributionsforschung, die den Einfluss des Klimawandels auf einzelne Wetterereignisse berechnet.
A: Und das Ahrtal hat auch gezeigt, wie mangelhaft die Anpassung war. Die Warnsysteme haben versagt. Viele Menschen wurden zu spät oder gar nicht gewarnt. Und es wurden Häuser in Gebieten gebaut, die eigentlich als Überschwemmungsgebiete hätten freigehalten werden müssen.
B: Und in Österreich? Die Alpen erwärmen sich sogar etwa doppelt so schnell wie der globale Durchschnitt. Die Gletscher schmelzen dramatisch. Und es gibt immer mehr Felsstürze und Murenabgänge, weil der Permafrost auftaut, der die Berge zusammenhält.
A: „Die Mure“ ist ein Strom aus Schlamm, Geröll und Wasser, der einen Berghang hinunterrast. Ein typisch alpines Wort. Und Hias, der Bergführer, erzählt sicher davon.
B: Ja, Hias sagt, dass sich die Berge in seinen fünfundzwanzig Jahren als Bergführer dramatisch verändert haben. Manche klassischen Routen sind heute zu gefährlich geworden, weil der Fels bröckelt. Und Gletscher, über die er früher gelaufen ist, gibt es nicht mehr.
A: Gut. Jetzt die eigentliche Frage. Die Debatte zwischen Klimaschutz und Klimaanpassung. Und hier gibt es interessante historische Wendungen.
B: Ja. Lange Zeit war die Klimaanpassung in der Klimabewegung fast ein Tabu. Man befürchtete, dass die Rede von der Anpassung die Botschaft vermitteln könnte, man könne mit dem Klimawandel leben und müsse ihn nicht bekämpfen. Dass sie also eine Ausrede für Untätigkeit liefern würde.
A: Und tatsächlich haben manche Gegner des Klimaschutzes genau so argumentiert. Sie sagten: Warum sollen wir unsere Wirtschaft mit teuren Klimaschutzmaßnahmen belasten? Die Menschheit hat sich immer an veränderte Bedingungen angepasst. Bauen wir einfach höhere Deiche und Klimaanlagen.
B: Und das ist ein gefährlicher Trugschluss. So wichtig die Anpassung auch ist, sie hat Grenzen. Man kann sich an zwei Grad Erwärmung vielleicht anpassen. Aber an drei, vier oder fünf Grad? Irgendwann werden ganze Regionen unbewohnbar. Und manche Folgen sind unumkehrbar, etwa wenn die großen Eisschilde abschmelzen.
A: Genau. Und es gibt die Gefahr der sogenannten Kipppunkte. Ein Kipppunkt ist eine Schwelle, ab der sich ein System plötzlich und unumkehrbar verändert. Wie ein Stuhl, den man immer weiter nach hinten neigt, bis er plötzlich umkippt.
B: Und es gibt mehrere solcher Kipppunkte im Klimasystem. Das Abschmelzen des grönländischen Eisschildes. Das Absterben des Amazonas-Regenwaldes. Das Auftauen des Permafrosts in Sibirien, der riesige Mengen Methan freisetzen würde. Und wenn ein Kipppunkt überschritten ist, kann er weitere auslösen. Eine Kettenreaktion, ähnlich wie beim Kessler-Syndrom aus Folge neunzig.
A: Und darum sagen fast alle Wissenschaftler heute: Es geht nicht um ein Entweder-oder, sondern um ein Sowohl-als-auch. Man braucht beides. Klimaschutz, um die Erwärmung so gering wie möglich zu halten. Und Anpassung, um mit den bereits unvermeidlichen Folgen zurechtzukommen.
B: Es gibt eine schöne Formulierung dazu: Man muss das Unbeherrschbare vermeiden und das Unvermeidbare beherrschen.
A: Ein sehr treffender Satz. Das Unbeherrschbare vermeiden, durch Klimaschutz. Das Unvermeidbare beherrschen, durch Anpassung. Gut. Aber wie verteilt man die Ressourcen? Und da wird es kompliziert.
B: Ja. Denn es gibt ein strukturelles Problem. Die Vorteile von Klimaschutz und Anpassung verteilen sich sehr unterschiedlich. Wenn Deutschland seine Emissionen senkt, profitiert davon die ganze Welt, und zwar vor allem in der Zukunft. Wenn Deutschland aber einen Deich baut, profitieren davon unmittelbar die Menschen in Deutschland.
A: Das ist ein klassisches Problem der Kollektivgüter. Das Klima ist ein globales Gemeingut, wie wir es in Folge siebenundsechzig genannt haben. Und es gibt die Versuchung, sich als Trittbrettfahrer zu verhalten.
B: Ein „Trittbrettfahrer“ ist jemand, der von den Leistungen anderer profitiert, ohne selbst einen Beitrag zu leisten. Wie jemand, der früher auf dem Trittbrett einer Straßenbahn mitfuhr, ohne einen Fahrschein zu bezahlen.
A: Genau. Jedes Land würde am liebsten von den Klimaschutzmaßnahmen der anderen profitieren, ohne selbst die Kosten zu tragen. Und wenn alle so denken, tut niemand genug. Das nennt man in der Spieltheorie ein Gefangenendilemma.
B: Und dann gibt es die große Frage der globalen Gerechtigkeit. Und die ist für mich der Kern der ganzen Debatte.
A: Erkläre.
B: Die reichen Industrieländer, also Europa, Nordamerika, auch Deutschland, haben seit der Industrialisierung den größten Teil der historischen Emissionen verursacht. Sie haben ihren Wohlstand auf der Verbrennung von Kohle, Öl und Gas aufgebaut.
A: Und die Folgen treffen am härtesten die Länder, die am wenigsten zum Problem beigetragen haben. Die ärmsten Länder im globalen Süden. Inselstaaten im Pazifik, die vom steigenden Meeresspiegel bedroht sind. Länder in Afrika, die unter Dürren leiden. Bangladesch, das immer häufiger überflutet wird.
B: Und diese Länder haben oft nicht die Mittel, um sich anzupassen. Sie können keine Milliarden in Deiche und Klimaanlagen investieren. Wie Deutschland es kann.
A: Und darum gibt es die Forderung nach Klimagerechtigkeit. Die reichen Länder sollen die armen Länder bei der Anpassung unterstützen. Und es wurde auf der Klimakonferenz zweitausendzweiundzwanzig ein Fonds für Verluste und Schäden beschlossen. Auf Englisch „Loss and Damage“. Für Schäden, die sich durch Anpassung nicht mehr verhindern lassen.
B: Wobei die zugesagten Summen weit hinter dem tatsächlichen Bedarf zurückbleiben. Und die reichen Länder haben ihre früheren Finanzierungsversprechen oft nur verspätet oder unvollständig erfüllt.
A: Und hier sieht man, warum die Anpassung auch eine Frage der Gerechtigkeit ist. Wer sich anpassen kann, hängt vom Wohlstand ab. Auch innerhalb Deutschlands. Wer bei einer Hitzewelle in einer schlecht isolierten Dachwohnung ohne Klimaanlage lebt, leidet viel mehr als jemand in einer klimatisierten Villa mit Garten.
B: Und das bringt uns zurück zur Stadt der Zukunft aus Folge neunundsechzig. Die Schwammstadt, die Begrünung, die Bäume. Das ist Klimaanpassung. Und sie sollte gerade den ärmeren Vierteln zugutekommen, die oft am wenigsten Grün haben.
A: Es gibt in Deutschland inzwischen auch Hitzeaktionspläne. Städte richten kühle Räume ein, in die sich ältere Menschen bei Hitzewellen zurückziehen können. Und Pflegeheime und Krankenhäuser werden auf Hitze vorbereitet. Denn Hitze ist eine unterschätzte Gefahr. In Deutschland sterben in heißen Sommern mehrere tausend Menschen zusätzlich an den Folgen der Hitze.
B: Mehr als im Straßenverkehr. Und das wissen viele nicht. Die Hitze ist ein stiller Killer.
A: Gut. Und noch eine wichtige Überlegung: die Überschneidung. Manche Maßnahmen dienen gleichzeitig dem Klimaschutz und der Anpassung. Man spricht von Synergien.
B: Zum Beispiel?
A: Die Renaturierung von Mooren. Ein intaktes Moor speichert riesige Mengen CO2, das ist Klimaschutz. Und es nimmt Wasser auf wie ein Schwamm und schützt vor Überschwemmungen und Dürren, das ist Anpassung. Oder Bäume in der Stadt. Sie binden CO2 und kühlen die Straßen.
B: Und die Wiedervernässung der Moore ist in Deutschland ein großes Thema. Denn viele Moore wurden in der Vergangenheit trockengelegt, um Landwirtschaft zu betreiben. Und die trockenen Moore setzen enorme Mengen CO2 frei.
A: Gut. Jetzt zur Geschichte. Und diesmal geht es um Hias, den Bergführer aus Tirol. Den besten Freund von Jonas.
B: Hias! Was ist mit ihm?
A: Hias erlebt den Klimawandel ja am eigenen Leib. In den Bergen. Und im letzten Sommer ist etwas passiert, das ihn tief erschüttert hat. Bei einer Tour mit einer Gruppe von Wanderern hat sich in der Nähe ein großer Felssturz ereignet. Tausende Kubikmeter Gestein sind einen Hang hinuntergedonnert. Ganz in der Nähe des Weges, den sie gerade genommen hatten.
B: Oh nein. Ist jemandem etwas passiert?
A: Zum Glück nicht. Hias hatte die Gefahr gespürt. Der Fels hatte am Morgen ungewöhnliche Geräusche gemacht, ein leises Knistern und Knacken. Und Hias hatte instinktiv entschieden, eine andere Route zu nehmen. Das hat der Gruppe das Leben gerettet.
B: Seine Erfahrung als Bergführer. Er hat zwischen den Zeilen der Natur gelesen.
A: Genau. Aber der Vorfall hat ihn sehr nachdenklich gemacht. Er hat gemerkt, dass sein ganzes Wissen über die Berge, das er in fünfundzwanzig Jahren gesammelt hatte, nicht mehr zuverlässig war. Die Berge verändern sich so schnell, dass die alten Erfahrungen nicht mehr gelten.
B: Und was hat er gemacht?
A: Er hat zwei Dinge getan. Das eine war Anpassung. Er hat sich mit anderen Bergführern und mit Geologen zusammengetan. Sie haben ein Warnsystem entwickelt. Bergführer, Hüttenwirte und Wanderer melden über eine App Beobachtungen. Neue Risse im Fels, ungewöhnliche Geräusche, kleinere Steinschläge. Und Geologen werten die Daten aus und warnen vor gefährlichen Gebieten.
B: Eine App! Hat er da vielleicht Hilfe bekommen?
A: Hahaha. Natürlich! Von Julien und Oksana. Über dich, Jonas. Du hast sie miteinander bekannt gemacht.
B: Hahaha. Vitamin B, über Ländergrenzen hinweg. Und das zweite?
A: Das zweite war Klimaschutz. Hias hat beschlossen, nicht mehr nur über den Klimawandel zu klagen, sondern etwas dagegen zu tun. Er hat seine Bergtouren verändert. Er bietet keine Touren mehr an, zu denen die Gäste aus fernen Ländern einfliegen müssen. Stattdessen arbeitet er mit der Bahn zusammen. Seine Gäste kommen mit dem Zug, und er holt sie am Bahnhof ab.
B: Das passt zum nachhaltigen Reisen aus Folge sechsundsiebzig.
A: Genau. Und er hat mit anderen Bergführern eine Initiative gegründet. Sie führen Schulklassen und Touristen zu den schmelzenden Gletschern. Und sie erklären dort, vor Ort, was der Klimawandel bedeutet. Er sagt: „Wenn die Menschen mit eigenen Augen sehen, wie ein Gletscher stirbt, verstehen sie es anders als aus einer Statistik.“
B: Das Pathos aus Folge sechsundachtzig. Eine Geschichte statt einer Statistik.
A: Genau. Und Hias hat bei einer dieser Führungen einen Satz gesagt, den die Schüler aufgeschrieben haben: „So sehr wir uns auch anpassen, die Berge können wir nicht anpassen. Wir müssen sie schützen.“
B: Ein sehr starker Satz. Und er bringt die ganze Debatte auf den Punkt. Anpassung ist notwendig, aber sie ersetzt nicht den Schutz.
A: Jetzt bist du dran, Hörer, Hörerin. Wie stehst du zur Frage Klimaschutz oder Klimaanpassung? Formuliere deine Position mit Konzessivsätzen auf gehobenem Niveau. Zum Beispiel: „So wichtig die Anpassung auch ist, …“, „Obgleich …“, „Ungeachtet der Kosten …“, „Wie man es auch dreht und wendet, …“
B: Und denk an deine eigene Region. Wie macht sich der Klimawandel dort bemerkbar? Und welche Anpassungsmaßnahmen gibt es?
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: sich wappnen. Sich auf eine Gefahr vorbereiten und schützen.
A: Wort Nummer zwei: ungeachtet. Ohne Rücksicht auf, trotz. Sehr formell.
B: Wort Nummer drei: der Kipppunkt. Eine Schwelle, ab der sich ein System plötzlich und unumkehrbar verändert.
A: Wort Nummer vier: der Trittbrettfahrer. Jemand, der von den Leistungen anderer profitiert, ohne selbst beizutragen.
B: Wort Nummer fünf: unumkehrbar. So, dass man es nicht mehr rückgängig machen kann.
A: Und Wort Nummer sechs: die Mure. Ein Strom aus Schlamm, Geröll und Wasser, der einen Berghang hinunterrast.
B: Noch einmal: sich wappnen, ungeachtet, der Kipppunkt, der Trittbrettfahrer, unumkehrbar, die Mure.
A: Was nehmen wir mit? Konzessivsätze auf gehobenem Niveau: obgleich, wenngleich, so … auch, wie … auch immer, ungeachtet.
B: Klimaschutz bekämpft die Ursachen, Klimaanpassung bereitet auf die Folgen vor. Und man braucht beides: das Unbeherrschbare vermeiden und das Unvermeidbare beherrschen.
A: Die Anpassung hat Grenzen, besonders wegen der Kipppunkte. Und es gibt das Problem der Trittbrettfahrer und der globalen Gerechtigkeit.
B: Und viele Maßnahmen wie Moore und Stadtbäume dienen beidem zugleich.
A: Das ist das Ende von Folge sechsundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und denk an Hias: Die Berge können wir nicht anpassen. Wir müssen sie schützen. Servus!
A: Tschüss!
VOCAB: sich wappnen | Sich auf eine Gefahr vorbereiten und schützen. | 🛡️
VOCAB: ungeachtet | Ohne Rücksicht auf, trotz. Sehr formell. | 🙅
VOCAB: der Kipppunkt | Eine Schwelle, ab der sich ein System unumkehrbar verändert. | 🪑
VOCAB: der Trittbrettfahrer | Jemand, der von anderen profitiert, ohne selbst beizutragen. | 🚋
VOCAB: unumkehrbar | So, dass man es nicht mehr rückgängig machen kann. | ⛔
VOCAB: die Mure | Ein Strom aus Schlamm, Geröll und Wasser am Berghang. | ⛰️
QUIZ: Was ist der Unterschied zwischen Klimaschutz und Klimaanpassung? | Klimaschutz bekämpft die Ursachen, Anpassung bereitet auf die Folgen vor | Es gibt keinen Unterschied | Anpassung bekämpft die Ursachen | 1
QUIZ: Was bedeutet „Das Unbeherrschbare vermeiden und das Unvermeidbare beherrschen“? | Man braucht nur Klimaschutz | Man braucht sowohl Klimaschutz als auch Anpassung | Man braucht nur Anpassung | 2
QUIZ: Was ist ein Kipppunkt? | Eine Schwelle, ab der sich ein System plötzlich und unumkehrbar verändert | Ein Ort in den Bergen | Eine politische Entscheidung | 1
QUIZ: Was ist ein Problem der globalen Klimagerechtigkeit? | Die ärmsten Länder leiden am meisten, obwohl sie am wenigsten beigetragen haben | Alle Länder sind gleich betroffen | Die reichen Länder leiden am meisten | 1
QUIZ: Was hat Hias zur Anpassung entwickelt? | Ein Warnsystem, bei dem Beobachtungen per App gemeldet werden | Eine neue Seilbahn | Ein Hotel | 1
`;

DATA.podScripts.ep097 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge siebenundneunzig. Heute stellen wir eine Frage, die das Selbstverständnis moderner Gesellschaften im Kern berührt: Ist die Leistungsgesellschaft Mythos oder Realität? Und damit verbunden: Wie steht es um die soziale Mobilität?
A: Die Leistungsgesellschaft, auf Englisch oft „Meritokratie“ genannt, ist eine Gesellschaft, in der der soziale Status, das Einkommen und die Position eines Menschen von seiner Leistung abhängen sollen. Nicht von Herkunft, Geld oder Beziehungen. Wer sich anstrengt und begabt ist, kommt nach oben.
B: Ein schönes Versprechen, das die Grundlage vieler moderner Demokratien bildet. Und die soziale Mobilität beschreibt, wie leicht es Menschen fällt, ihre soziale Position im Vergleich zu ihren Eltern zu verändern. Insbesondere aufzusteigen.
A: Und die Frage, die wir heute stellen, lautet: Stimmt dieses Versprechen? Oder ist es ein Mythos, der bestehende Ungleichheiten rechtfertigt? Wir haben das Thema schon in Folge vierundsiebzig über die Bildung gestreift. Heute gehen wir in die Tiefe.
B: Sprachlich widmen wir uns heute dem Subjektivsatz und dem Objektivsatz mit „wer“, „was“ und „wie“. Und einigen sehr gehobenen Sprichwörtern und Zitaten rund um Leistung und Erfolg. Zum Beispiel: „Wer arbeitet, soll auch essen.“ „Was Hänschen nicht lernt, lernt Hans nimmermehr.“ „Jeder ist seines Glückes Schmied.“
A: „Jeder ist seines Glückes Schmied“ ist ein besonders passendes Sprichwort für heute. Es bedeutet: Jeder ist selbst für sein Glück verantwortlich. Wie ein Schmied, der aus dem Eisen etwas formt. Und genau dieses Sprichwort werden wir heute kritisch hinterfragen.
B: Und Sätze mit „wer“ am Anfang sind eine elegante Konstruktion: „Wer viel arbeitet, verdient viel.“ Das „wer“ leitet einen Nebensatz ein, der als Subjekt des ganzen Satzes dient. Und oft wird das im Hauptsatz mit „der“ wieder aufgegriffen: „Wer reich geboren wird, der hat es leichter.“
A: Gut. Fangen wir mit der Geschichte des Begriffs an. Und die ist überraschend. Denn das Wort „Meritokratie“ war ursprünglich gar nicht positiv gemeint.
B: Erzähl!
A: Der Begriff wurde neunzehnhundertachtundfünfzig von dem britischen Soziologen Michael Young geprägt. In seinem satirischen Roman „The Rise of the Meritocracy“, also „Der Aufstieg der Meritokratie“. Und das Buch war eine Warnung, eine Dystopie. Eine „Dystopie“ ist das Gegenteil einer Utopie, also eine Vorstellung von einer schlechten, bedrohlichen Zukunft.
B: Eine Dystopie? Das hätte ich nicht gedacht. Was war Youngs Warnung?
A: Young beschrieb eine Zukunft, in der die Gesellschaft streng nach Intelligenz und Leistung geordnet ist. Und er zeigte, dass das zu einer neuen, besonders grausamen Form der Ungleichheit führen würde. Denn in einer Meritokratie glauben die Erfolgreichen, dass sie ihren Erfolg vollkommen verdient haben. Und die Erfolglosen müssen glauben, dass sie ihr Scheitern selbst verschuldet haben.
B: Das ist ein bemerkenswerter Gedanke. In einer Adelsgesellschaft wusste ein armer Bauer wenigstens, dass er nicht schuld an seiner Armut war. Er war nur zufällig nicht als Adliger geboren. Aber in einer Meritokratie muss er glauben, dass er einfach nicht gut genug ist.
A: Genau. Und das ist psychologisch sehr belastend. Die Würde der Unterlegenen wird zerstört. Und Young war entsetzt, als Politiker später seinen Begriff als positives Ideal übernahmen. Er hat kurz vor seinem Tod einen wütenden Artikel geschrieben, in dem er sich darüber beschwerte.
B: Eine schöne Ironie der Begriffsgeschichte. Wie bei „Made in Germany“ aus Folge fünfundneunzig. Ein Begriff, der sich ins Gegenteil verkehrt. Gut. Jetzt die Fakten. Wie steht es um die soziale Mobilität in Deutschland?
A: Und hier sind die Zahlen ernüchternd. Deutschland gehört im internationalen Vergleich zu den Ländern, in denen der Bildungserfolg besonders stark von der sozialen Herkunft abhängt. Das zeigen etwa die PISA-Studien der OECD immer wieder.
B: Wir hatten die Zahlen in Folge vierundsiebzig. Von hundert Kindern aus Akademikerfamilien beginnen etwa achtzig ein Studium. Von hundert Kindern aus Nicht-Akademikerfamilien nur etwa fünfundzwanzig.
A: Genau. Und eine OECD-Studie hat einmal berechnet, wie viele Generationen es dauern würde, bis ein Kind aus einer Familie mit niedrigem Einkommen das Durchschnittseinkommen erreicht. Für Deutschland kam sie auf etwa sechs Generationen. Sechs Generationen! Das sind etwa hundertachtzig Jahre.
B: Das ist erschreckend lang. Und wie ist es in anderen Ländern?
A: In den skandinavischen Ländern, etwa Dänemark, sind es nur zwei bis drei Generationen. Dort ist die soziale Mobilität viel höher. Und interessanterweise hat das Land, das am stärksten mit dem Versprechen des sozialen Aufstiegs verbunden ist, die USA mit ihrem „amerikanischen Traum“, eine relativ niedrige Mobilität.
B: Der amerikanische Traum, vom Tellerwäscher zum Millionär. Und er ist in der Realität eher ein Mythos. Viele Studien zeigen, dass die Chance, aus der untersten Einkommensschicht aufzusteigen, in den USA geringer ist als in vielen europäischen Ländern.
A: Und das bringt uns zur zentralen Frage: Warum ist die Mobilität so gering? Warum hängt der Erfolg so stark von der Herkunft ab?
B: Da gibt es verschiedene Erklärungen. Fangen wir mit dem Geld an. Kinder aus wohlhabenden Familien haben einfach mehr Ressourcen. Nachhilfe, wenn sie in der Schule Probleme haben. Bücher und ein ruhiges Zimmer zum Lernen. Musikunterricht, Sportvereine, Auslandsaufenthalte.
A: Und das Wichtigste ist vielleicht das Vermögen. In Deutschland ist das Vermögen noch viel ungleicher verteilt als das Einkommen. Und ein großer Teil des Vermögens wird vererbt, nicht erarbeitet. Wer eine Wohnung erbt, muss keine Miete zahlen und kann viel mehr sparen.
B: Und das widerspricht ja direkt der Idee der Leistungsgesellschaft. Ein Erbe ist per Definition keine eigene Leistung. Es ist das Glück der Geburt.
A: Genau. Es gibt in Deutschland eine heftige Debatte über die Erbschaftssteuer. Viele Ökonomen, auch konservative, argumentieren, dass eine höhere Erbschaftssteuer eigentlich ein Gebot der Leistungsgerechtigkeit wäre. Weil Erbschaften leistungslose Einkommen sind.
B: Aber gerade die Erbschaftssteuer ist politisch sehr umstritten. Besonders wegen der Familienunternehmen aus Folge fünfundneunzig. Man befürchtet, dass eine hohe Erbschaftssteuer den Mittelstand gefährden könnte, weil die Erben das Unternehmen verkaufen müssten, um die Steuer zu bezahlen.
A: Ein echtes Dilemma. Gut. Die zweite Erklärung ist subtiler. Der französische Soziologe Pierre Bourdieu hat sie sehr einflussreich beschrieben. Er sprach von verschiedenen Formen des Kapitals.
B: Erkläre Bourdieus Theorie.
A: Bourdieu sagte, es gibt nicht nur ökonomisches Kapital, also Geld. Sondern auch kulturelles Kapital und soziales Kapital. Das kulturelle Kapital umfasst Bildung, Wissen, aber auch Geschmack, Sprache, Umgangsformen. Wie man spricht, welche Bücher man kennt, wie man sich bei einem Abendessen benimmt.
B: Und das soziale Kapital?
A: Das sind die Beziehungen, das Netzwerk. Wen man kennt. Das Vitamin B, das wir in diesem Podcast so oft erwähnt haben. Und Bourdieu argumentierte, dass diese Kapitalformen in der Familie weitergegeben werden. Und dass das Bildungssystem sie belohnt, ohne dass es auffällt.
B: Das heißt, ein Kind aus einer Akademikerfamilie spricht schon so, wie es in der Schule erwartet wird. Es kennt die Bücher, über die die Lehrer reden. Es fühlt sich in der Universität zu Hause. Und das wird dann als Begabung oder Leistung interpretiert. Obwohl es eigentlich vererbtes kulturelles Kapital ist.
A: Genau. Bourdieu nannte das den „Habitus“. Die verinnerlichten Gewohnheiten und Denkweisen einer sozialen Schicht. Und wer den passenden Habitus mitbringt, hat einen unsichtbaren Vorteil.
B: Und dazu gibt es eine sehr bekannte deutsche Studie. Der Soziologe Michael Hartmann hat die Elite in Deutschland untersucht. Die Vorstandsvorsitzenden der großen Unternehmen. Und er hat herausgefunden, dass ein großer Teil von ihnen aus dem gehobenen Bürgertum stammt.
A: Und das Interessante: Selbst bei gleicher Qualifikation hatten Kinder aus dem Großbürgertum viel bessere Chancen, in Spitzenpositionen zu gelangen. Hartmann erklärte das mit dem Habitus. Die Entscheider in den Unternehmen wählten Menschen aus, die ihnen ähnlich waren. Die die gleiche souveräne Ausstrahlung hatten, die gleichen Codes kannten.
B: Wie Leas Geschichte zeigt. Folge vierundsiebzig. Das stille Mädchen aus einer Arbeiterfamilie. Sie hatte die Fähigkeiten, aber nicht den Habitus. Und darum bekam sie zuerst nur eine Empfehlung für die Realschule.
A: Genau. Und es gibt einen Begriff, der in diesem Zusammenhang wichtig ist: der Bildungsaufsteiger, oder neuerdings auch „Erste-Generation-Studierende“. Menschen, die als Erste in ihrer Familie studieren. Und viele berichten von einem tiefen Gefühl der Fremdheit an der Universität. Sie fühlen sich wie Hochstapler. Folge sechsundsechzig.
B: Und gleichzeitig entfremden sie sich oft von ihrer Herkunftsfamilie. Sie sprechen plötzlich anders, haben andere Interessen. Sie gehören nirgends mehr richtig hin. Zwischen den Stühlen, wie in Folge achtundsechzig.
A: Der französische Autor Didier Eribon hat darüber ein sehr bewegendes Buch geschrieben: „Rückkehr nach Reims“. Über seine Herkunft aus einer Arbeiterfamilie und seinen Aufstieg zum Intellektuellen in Paris. Und über die Scham, die er für seine Herkunft empfand. Das Buch wurde in Deutschland ein großer Erfolg.
B: Gut. Und jetzt die Gegenposition. Denn es wäre zu einfach, die Leistung ganz zu leugnen.
A: Absolut. Leistung spielt natürlich eine Rolle. Anstrengung, Fleiß, Ausdauer machen einen Unterschied. Und Menschen aus schwierigen Verhältnissen können aufsteigen. Unsere Figuren zeigen das ja. Lea, Emre, Amira.
B: Und es gibt ein Argument, das die Verteidiger der Leistungsgesellschaft vorbringen: Wenn man den Menschen sagt, dass ihre Herkunft ihr Schicksal bestimmt, nimmt man ihnen die Motivation. Es kann zu einer sich selbst erfüllenden Prophezeiung werden. Wer glaubt, er habe keine Chance, versucht es gar nicht erst.
A: Das ist ein berechtigter Punkt. Man darf die Strukturen nicht leugnen, aber man darf den Menschen auch nicht ihre Handlungsfähigkeit absprechen. Es ist eine schwierige Balance.
B: Und hier kommt der amerikanische Philosoph Michael Sandel ins Spiel. Er hat ein einflussreiches Buch geschrieben: „Vom Ende des Gemeinwohls“. Im Original: „The Tyranny of Merit“, die Tyrannei der Leistung.
A: Und was ist Sandels These?
B: Sandel argumentiert, dass die meritokratische Denkweise zu einer gefährlichen Hybris der Gewinner geführt hat. „Die Hybris“ ist eine überhebliche, maßlose Selbstüberschätzung. Die Erfolgreichen glauben, sie hätten alles allein verdient, und blicken auf die Verlierer herab. Und die Verlierer fühlen sich gedemütigt und verachtet.
A: Und Sandel sieht darin eine wichtige Ursache für den Aufstieg des Populismus in vielen Ländern. Die Menschen, die sich von den Eliten verachtet fühlen, wenden sich gegen diese Eliten. Und gegen die Demokratie selbst.
B: Und Sandels Lösung?
A: Er plädiert für eine Kultur der Demut. Die Erfolgreichen sollten anerkennen, welche Rolle das Glück in ihrem Leben gespielt hat. Das Glück, in einer bestimmten Familie geboren zu sein, in einem bestimmten Land, mit bestimmten Begabungen, die zufällig in unserer Zeit gefragt sind. Und er plädiert für eine Aufwertung der Arbeit, die keinen Universitätsabschluss erfordert. Die Würde der Arbeit.
B: Das schließt an Folge siebenundachtzig an. Die Pflegekraft, der Müllwerker, der Bäcker. Ihre Arbeit verdient genauso viel Respekt wie die eines Bankmanagers. Vielleicht mehr.
A: Jetzt zur Geschichte. Und diesmal geht es um Emre. Und um eine sehr persönliche Erfahrung.
B: Emre, der inzwischen ein erfolgreicher Entwickler und bekannter Content Creator ist.
A: Genau. Emre wurde zu einer Podiumsdiskussion eingeladen. Ein Podium ist eine erhöhte Bühne, auf der mehrere Experten diskutieren. Das Thema war: „Aufstieg durch Bildung“. Und Emre sollte als Beispiel für einen erfolgreichen Aufsteiger sprechen. Sohn türkischer Einwanderer, aus Kreuzberg, ohne Abitur, und jetzt erfolgreich in der IT.
B: Das perfekte Vorzeigebeispiel für die Leistungsgesellschaft.
A: Genau das hat der Moderator erwartet. Er stellte die Frage: „Emre, Sie sind der lebende Beweis, dass in Deutschland jeder es schaffen kann, wenn er sich nur anstrengt. Was raten Sie jungen Menschen aus Ihrem Viertel?“
B: Und was hat Emre geantwortet?
A: Emre hat lange geschwiegen. Und dann hat er gesagt: „Ich muss Sie korrigieren. Ich bin nicht der Beweis, dass jeder es schaffen kann. Ich bin die Ausnahme. Und Ausnahmen beweisen nicht die Regel.“
B: Wow. Das hat bestimmt niemand erwartet.
A: Nein. Und dann hat er erklärt: „Ja, ich habe hart gearbeitet. Aber ich hatte auch unglaublich viel Glück. Ich hatte eine Mutter, die mich immer unterstützt hat, obwohl sie selbst kaum zur Schule gehen konnte. Ich habe zufällig von einer kostenlosen Programmierschule erfahren. Ich hatte einen Mentor, Julien, der mich nicht aufgegeben hat, als ich zwanzig Absagen bekommen habe. Ich hatte Freunde, die mir geholfen haben.“
B: Er hat das Glück anerkannt. Wie Sandel es fordert.
A: Genau. Und dann hat er etwas gesagt, das den ganzen Saal still gemacht hat: „Aus meiner Klasse in der Hauptschule waren viele genauso klug wie ich. Manche klüger. Einer hat heute einen Job, den er hasst. Einer sitzt im Gefängnis. Einer ist tot. Sie haben sich nicht weniger angestrengt als ich. Sie hatten nur nicht das gleiche Glück. Wenn Sie mich als Beweis benutzen, dass jeder es schaffen kann, dann sagen Sie diesen Jungs, dass sie selbst schuld sind. Und das stimmt nicht.“
B: Das ist ein unglaublich starker Moment. Er hat Michael Youngs Warnung in einem einzigen Satz zusammengefasst.
A: Genau. Und der Moderator war sprachlos. Aber das Publikum hat lange applaudiert. Und Emre hat am Ende gesagt: „Mein Rat an junge Menschen ist nicht: Strengt euch an, dann schafft ihr es. Mein Rat an die Gesellschaft ist: Sorgt dafür, dass nicht nur die Glücklichen eine Chance haben.“
B: Und hat er etwas daraus gemacht?
A: Natürlich! Hahaha. Mit Julien und Lena hat er ein Mentoring-Programm für Jugendliche in seinem alten Viertel gegründet. Jeder Jugendliche bekommt einen Mentor. Jemanden, der an ihn glaubt. So wie Julien an Emre geglaubt hat.
B: Mit dir, Lena? Du bist ja schon wieder dabei!
A: Hahaha. Ja, ich unterrichte dort Deutsch. Ehrenamtlich. Folge siebenundfünfzig lässt grüßen!
B: Jetzt bist du dran, Hörer, Hörerin. Ist die Leistungsgesellschaft für dich Mythos oder Realität? Formuliere deine Gedanken mit Sätzen, die mit „wer“ beginnen: „Wer in eine reiche Familie geboren wird, der …“ „Wer sich anstrengt, …“ Und setz dich kritisch mit dem Sprichwort auseinander: „Jeder ist seines Glückes Schmied.“
A: Und denk an deinen eigenen Weg. Welche Rolle haben Leistung und Glück gespielt?
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: die Leistungsgesellschaft. Eine Gesellschaft, in der der Status von der Leistung abhängen soll.
B: Wort Nummer zwei: die Dystopie. Eine Vorstellung von einer schlechten, bedrohlichen Zukunft.
A: Wort Nummer drei: Jeder ist seines Glückes Schmied. Jeder ist selbst für sein Glück verantwortlich.
B: Wort Nummer vier: der Habitus. Die verinnerlichten Gewohnheiten und Denkweisen einer sozialen Schicht.
A: Wort Nummer fünf: die Hybris. Eine überhebliche, maßlose Selbstüberschätzung.
B: Und Wort Nummer sechs: die Demut. Die Bescheidenheit, die anerkennt, dass man nicht alles allein verdient hat.
A: Noch einmal: die Leistungsgesellschaft, die Dystopie, Jeder ist seines Glückes Schmied, der Habitus, die Hybris, die Demut.
B: Was nehmen wir mit? Der Begriff „Meritokratie“ war ursprünglich eine Warnung von Michael Young. In einer Meritokratie glauben die Verlierer, sie seien selbst schuld.
A: In Deutschland hängt der Bildungserfolg besonders stark von der Herkunft ab. Und das Vermögen, oft vererbt, ist sehr ungleich verteilt.
B: Bourdieu zeigte, dass kulturelles und soziales Kapital und der Habitus unsichtbare Vorteile schaffen.
A: Und Sandel warnt vor der Hybris der Gewinner und plädiert für Demut und die Würde aller Arbeit.
B: Das ist das Ende von Folge siebenundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und denk an Emre: Ausnahmen beweisen nicht die Regel. Tschüss!
B: Servus!
VOCAB: die Leistungsgesellschaft | Eine Gesellschaft, in der der Status von der Leistung abhängen soll. | 🏅
VOCAB: die Dystopie | Eine Vorstellung von einer schlechten, bedrohlichen Zukunft. | 🌑
VOCAB: Jeder ist seines Glückes Schmied | Jeder ist selbst für sein Glück verantwortlich. | ⚒️
VOCAB: der Habitus | Die verinnerlichten Gewohnheiten und Denkweisen einer sozialen Schicht. | 🎩
VOCAB: die Hybris | Eine überhebliche, maßlose Selbstüberschätzung. | 🦚
VOCAB: die Demut | Die Bescheidenheit, die anerkennt, dass man nicht alles allein verdient hat. | 🙏
QUIZ: Wie war der Begriff „Meritokratie“ ursprünglich gemeint? | Als positives Ideal | Als Warnung in einem satirischen Roman | Als wissenschaftlicher Fachbegriff | 2
QUIZ: Wie viele Generationen dauert es laut einer OECD-Studie in Deutschland, bis ein Kind aus einer armen Familie das Durchschnittseinkommen erreicht? | Etwa zwei | Etwa sechs | Etwa zwanzig | 2
QUIZ: Was meinte Bourdieu mit „kulturellem Kapital“? | Geld | Bildung, Wissen, Sprache und Umgangsformen | Kunstwerke | 2
QUIZ: Wofür plädiert Michael Sandel? | Für mehr Wettbewerb | Für eine Kultur der Demut und die Würde aller Arbeit | Für die Abschaffung der Schulen | 2
QUIZ: Was sagte Emre auf dem Podium? | Jeder kann es schaffen, wenn er sich anstrengt | Er sei nicht der Beweis, sondern die Ausnahme | Er habe alles allein geschafft | 2
`;

DATA.podScripts.ep098 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Hier ist Lena.
B: Und hier ist Jonas. Servus! Folge achtundneunzig. Heute schauen wir in unseren eigenen Kopf. Und zwar in die Fallen, die uns unser Gehirn stellt, wenn wir Entscheidungen treffen. Unser Thema: Entscheiden unter Unsicherheit und die kognitiven Verzerrungen.
A: Wir halten uns gern für rationale Wesen. Wir glauben, dass wir Informationen sorgfältig abwägen und dann vernünftig entscheiden. Aber die Psychologie der letzten Jahrzehnte hat gezeigt, dass das eine Illusion ist. Unser Denken ist systematisch verzerrt.
B: Eine „kognitive Verzerrung“, auf Englisch „cognitive bias“, ist ein systematischer Denkfehler. Nicht ein zufälliger Fehler, sondern ein Muster, das bei fast allen Menschen auftritt. Und das uns immer wieder in die gleiche Richtung lenkt.
A: Wir haben in diesem Podcast schon mehrere dieser Verzerrungen kennengelernt. Den Bestätigungsfehler in Folge siebzig, den Ankereffekt in Folge einundsiebzig, den Automation Bias in Folge einundachtzig. Heute bringen wir sie zusammen und lernen weitere kennen.
B: Sprachlich widmen wir uns heute der präzisen Darstellung von Denkprozessen und Kausalzusammenhängen. Und wir üben besonders gehobene Konnektoren und Ausdrücke, die man in wissenschaftlichen und essayistischen Texten findet: „demzufolge“, „infolgedessen“, „ebenda“, „hingegen“, „mitunter“, „gemeinhin“, „zumal“.
A: „Zumal“ ist ein besonders schönes Wort. Es leitet einen zusätzlichen, verstärkenden Grund ein. „Wir sollten vorsichtig sein, zumal die Datenlage dünn ist.“ Also: Wir sollten vorsichtig sein, besonders weil die Datenlage dünn ist. Das Verb steht nach „zumal“ am Ende.
B: Und „mitunter“ heißt: manchmal, gelegentlich. „Gemeinhin“ heißt: allgemein, normalerweise. „Gemeinhin glaubt man, dass Menschen rational entscheiden. Mitunter tun sie das aber nicht.“
A: Gut. Fangen wir mit dem Fundament an. Und das ist die Arbeit zweier israelischer Psychologen: Daniel Kahneman und Amos Tversky. Kahneman bekam dafür zweitausendzwei den Nobelpreis für Wirtschaftswissenschaften. Obwohl er Psychologe war.
B: Und Kahneman hat ein berühmtes Buch geschrieben, das auch in Deutschland ein Bestseller wurde: „Schnelles Denken, langsames Denken“. Und darin beschreibt er zwei Denksysteme.
A: Erkläre sie.
B: Das System eins ist schnell, automatisch, intuitiv und mühelos. Es arbeitet ständig im Hintergrund. Wenn man ein wütendes Gesicht sieht, erkennt man sofort die Wut. Wenn man „zwei plus zwei“ hört, denkt man sofort an „vier“. Man muss nicht nachdenken.
A: Und das System zwei ist langsam, bewusst, anstrengend und logisch. Es schaltet sich ein, wenn wir uns konzentrieren müssen. Wenn wir „siebzehn mal vierundzwanzig“ rechnen. Oder eine schwierige Entscheidung treffen.
B: Und das Problem ist: Das System zwei ist faul. Es ist energieaufwendig und schaltet sich nur ungern ein. Darum überlassen wir die meisten Entscheidungen dem schnellen System eins. Und das macht systematische Fehler.
A: Kahneman hat dazu eine berühmte Testfrage gestellt. Hör gut zu, Hörer, Hörerin. Und versuche, sofort zu antworten. Ein Schläger und ein Ball kosten zusammen einen Euro zehn. Der Schläger kostet einen Euro mehr als der Ball. Wie viel kostet der Ball?
B: Die meisten Menschen antworten sofort: zehn Cent. Das sagt das System eins. Aber es ist falsch.
A: Genau. Wenn der Ball zehn Cent kostet und der Schläger einen Euro mehr, also einen Euro zehn, dann kostet beides zusammen einen Euro zwanzig. Nicht einen Euro zehn. Die richtige Antwort ist: Der Ball kostet fünf Cent. Und der Schläger einen Euro fünf.
B: Hahaha. Ich gebe zu, ich bin beim ersten Mal auch reingefallen. Und das Erstaunliche: Auch Studenten an Eliteuniversitäten geben in großer Zahl die falsche Antwort. Es ist keine Frage der Intelligenz, sondern eine Frage, ob man das System zwei einschaltet.
A: Gut. Jetzt die wichtigsten Verzerrungen. Fangen wir mit der Verfügbarkeitsheuristik an. Eine „Heuristik“ ist eine Daumenregel, eine geistige Abkürzung, um schnell zu einer Entscheidung zu kommen.
B: Bei der Verfügbarkeitsheuristik schätzen wir die Wahrscheinlichkeit eines Ereignisses danach ein, wie leicht uns Beispiele dafür einfallen. Was uns schnell in den Sinn kommt, halten wir für häufiger.
A: Ein klassisches Beispiel ist die Angst vor dem Fliegen. Viele Menschen haben mehr Angst vor einem Flugzeugabsturz als vor einem Autounfall. Obwohl das Autofahren statistisch viel gefährlicher ist. Aber Flugzeugabstürze sind spektakulär, sie stehen tagelang in den Nachrichten. Darum fallen sie uns leicht ein.
B: Und nach den Anschlägen vom elften September zweitausendeins sind viele Amerikaner aus Angst vor dem Fliegen aufs Auto umgestiegen. Und ein Forscher, Gerd Gigerenzer vom Max-Planck-Institut in Berlin, hat berechnet, dass dadurch im folgenden Jahr wahrscheinlich etwa sechzehnhundert zusätzliche Menschen bei Verkehrsunfällen ums Leben gekommen sind. Mehr als im Flugzeug.
A: Das ist erschütternd. Eine kognitive Verzerrung, die Menschenleben gekostet hat. Und Gigerenzer ist übrigens ein wichtiger deutscher Forscher auf diesem Gebiet, mit einer interessanten Gegenposition zu Kahneman, auf die wir gleich kommen.
B: Zweite Verzerrung: der Ankereffekt, den wir aus der Gehaltsverhandlung in Folge einundsiebzig kennen. Eine zuerst genannte Zahl beeinflusst alle folgenden Schätzungen, selbst wenn sie völlig willkürlich ist.
A: Und es gibt dazu ein verblüffendes Experiment mit deutschen Richtern. Erfahrene Richter bekamen einen Fall vorgelegt. Und bevor sie das Strafmaß festlegten, mussten sie würfeln. Die Würfel waren manipuliert und zeigten entweder eine niedrige oder eine hohe Zahl.
B: Und hatte das einen Einfluss?
A: Einen erheblichen! Die Richter, die eine hohe Zahl gewürfelt hatten, verhängten deutlich längere Strafen als die, die eine niedrige Zahl gewürfelt hatten. Obwohl allen bewusst war, dass ein Würfelergebnis nichts mit dem Fall zu tun hat.
B: Das ist ja beängstigend. Selbst erfahrene Profis sind nicht immun. Dritte Verzerrung: die Verlustaversion. Das ist eine zentrale Erkenntnis von Kahneman und Tversky.
A: Die Verlustaversion bedeutet: Verluste schmerzen uns ungefähr doppelt so stark, wie uns gleich große Gewinne freuen. Hundert Euro zu verlieren, tut mehr weh, als es Freude macht, hundert Euro zu gewinnen.
B: Und das führt zu irrationalem Verhalten. Zum Beispiel an der Börse. Viele Anleger halten an Aktien fest, die stark gefallen sind, weil sie den Verlust nicht realisieren wollen. Sie hoffen, dass der Kurs wieder steigt. Und sie verlieren dabei noch mehr.
A: Und das ist verwandt mit der vierten Verzerrung: dem Trugschluss der versunkenen Kosten. Auf Englisch „Sunk Cost Fallacy“.
B: Das kennt jeder. Man hat schon viel Geld oder Zeit in etwas investiert. Und darum macht man weiter, obwohl es keinen Sinn mehr ergibt. Weil man das bereits Investierte nicht verschwendet haben will.
A: Ein Alltagsbeispiel: Man hat ein teures Konzertticket gekauft. Am Abend des Konzerts ist man krank und müde und hat eigentlich keine Lust. Aber man geht trotzdem, weil das Ticket so teuer war. Dabei ist das Geld so oder so weg. Die einzige rationale Frage ist: Würde mir das Konzert jetzt Freude machen?
B: Und im Großen sieht man das bei gescheiterten Großprojekten. Wie beim Flughafen BER aus Folge zweiundneunzig. Wenn schon Milliarden investiert wurden, ist es politisch fast unmöglich, ein Projekt abzubrechen. Auch wenn es vernünftiger wäre. Man spricht manchmal davon, „schlechtem Geld gutes hinterherzuwerfen“.
A: Eine schöne Redewendung. Fünfte Verzerrung: der Rückschaufehler. Auf Englisch „Hindsight Bias“. Im Nachhinein glauben wir, wir hätten ein Ereignis vorhersehen können. „Ich habe es doch gleich gewusst!“
B: Und das ist gefährlich, weil wir dadurch die Unsicherheit der Vergangenheit unterschätzen. Und wir beurteilen Entscheidungen anderer ungerecht. Wir haben in Folge vierundsechzig über das Bedauern gesprochen. Viel Bedauern entsteht durch den Rückschaufehler. Wir hätten es wissen müssen, denken wir. Dabei konnten wir es damals gar nicht wissen.
A: Sechste Verzerrung, und die ist für das Berufsleben besonders relevant: der Überoptimismus und der Planungsfehlschluss. Wir unterschätzen systematisch, wie lange ein Projekt dauern und wie viel es kosten wird.
B: Fast jedes Großprojekt dauert länger und kostet mehr als geplant. Die Elbphilharmonie in Hamburg zum Beispiel. Sie sollte ursprünglich etwa siebenundsiebzig Millionen Euro kosten und wurde zweitausendzehn eröffnet. Tatsächlich kostete sie fast neunhundert Millionen und wurde erst zweitausendsiebzehn eröffnet.
A: Und das liegt nicht nur an Inkompetenz, sondern an einer tiefen psychologischen Neigung. Wir stellen uns den Idealfall vor, nicht die vielen Dinge, die schiefgehen können.
B: Und es gibt eine Gegenstrategie, die Kahneman empfiehlt. Die sogenannte Außenperspektive. Statt sich nur auf das eigene Projekt zu konzentrieren, schaut man sich an, wie lange ähnliche Projekte in der Vergangenheit gedauert haben. Das ist viel realistischer.
A: Und siebte Verzerrung: der Dunning-Kruger-Effekt. Ein sehr bekanntes Phänomen. Menschen mit geringen Kenntnissen auf einem Gebiet überschätzen ihre Fähigkeiten oft massiv. Weil ihnen das Wissen fehlt, um ihre eigene Unwissenheit zu erkennen.
B: Und umgekehrt unterschätzen echte Experten sich oft. Weil sie wissen, wie viel sie noch nicht wissen. Folge sechsundsechzig, das Hochstapler-Syndrom.
A: Und das ist für das Sprachenlernen sehr interessant! Am Anfang denken viele, eine Sprache sei einfach. Dann merkt man, wie komplex sie ist, und das Selbstvertrauen sinkt. Und erst mit der Zeit wächst es wieder, diesmal auf einer realistischen Grundlage. Wobei auch dieser Effekt in der Forschung inzwischen differenzierter gesehen wird als in der populären Darstellung.
B: Gut. Und jetzt die interessante Gegenposition. Gerd Gigerenzer, den wir erwähnt haben, kritisiert Kahneman. Und zwar grundsätzlich.
A: Erkläre seine Kritik.
B: Gigerenzer sagt, Kahneman stelle die Intuition und die Heuristiken zu negativ dar. Als ob sie nur Fehlerquellen wären. Aber in Wirklichkeit seien Heuristiken oft sehr klug. Gerade in einer unsicheren Welt, in der man nicht alle Informationen hat.
A: Gigerenzer unterscheidet zwischen Risiko und Unsicherheit. Bei einem Risiko kennt man alle Möglichkeiten und Wahrscheinlichkeiten. Wie beim Würfeln oder im Kasino. Da hilft komplexe Berechnung. Aber bei echter Unsicherheit, im echten Leben, kennt man die Wahrscheinlichkeiten oft nicht. Und da sind einfache Faustregeln oft besser als komplizierte Berechnungen.
B: Und er nennt das „Bauchentscheidungen“. Er hat ein Buch mit diesem Titel geschrieben. Und er bringt ein schönes Beispiel: Ein Baseballspieler, der einen hohen Ball fangen will, berechnet nicht die Flugbahn mit komplizierten Formeln. Er benutzt eine einfache Heuristik. Er hält den Blickwinkel zum Ball konstant und läuft entsprechend. Und das funktioniert perfekt.
A: Das ist ein wichtiger Gegenpunkt. Die Intuition ist nicht immer schlecht. Bei Experten mit viel Erfahrung ist sie oft sehr zuverlässig. Wie bei Hias in Folge sechsundneunzig, der die Gefahr am Fels instinktiv gespürt hat.
B: Genau! Seine Intuition beruhte auf fünfundzwanzig Jahren Erfahrung. Das System eins eines Experten ist ein ganz anderes als das eines Anfängers.
A: Und vielleicht ist die Synthese aus beiden Positionen: Man muss wissen, wann man seiner Intuition trauen kann und wann nicht. Bei vertrauten Situationen mit schnellem Feedback, wie beim Bergführer oder einer erfahrenen Pflegekraft, ist die Intuition oft gut. Bei neuen, komplexen Situationen ohne Feedback, wie bei langfristigen Finanzentscheidungen, sollte man das System zwei einschalten.
B: Eine kluge Synthese. Und was kann man praktisch tun, um bessere Entscheidungen zu treffen?
A: Erstens: Sich der eigenen Verzerrungen bewusst sein. Allein das Wissen hilft schon ein bisschen. Zweitens: Wichtige Entscheidungen verlangsamen. Eine Nacht darüber schlafen, wie in Folge achtundsiebzig beim Feedback.
B: Drittens: Aktiv nach Gegenargumenten suchen. Gegen den Bestätigungsfehler. Einen Advocatus Diaboli einsetzen, wie in Folge vierundsiebzig. Viertens: Die Außenperspektive einnehmen. Wie lange haben ähnliche Projekte gedauert?
A: Und fünftens, eine sehr wirksame Methode: die Pre-Mortem-Analyse. Sie stammt von dem Psychologen Gary Klein. Bevor man ein Projekt beginnt, stellt man sich vor, es sei ein Jahr später und das Projekt sei gescheitert. Und dann fragt man: Was ist schiefgelaufen?
B: Das ist clever. Ein „Post-Mortem“ ist die Untersuchung nach dem Tod. Und ein Pre-Mortem ist die Untersuchung vor dem Tod. Indem man sich das Scheitern vorstellt, erkennt man Risiken, die man im Optimismus übersehen hätte.
A: Jetzt zur Geschichte. Und diesmal geht es um Herrn Yilmaz, den Leiter der Programmierschule. Vor einer großen Entscheidung.
B: Herr Yilmaz! Was für eine Entscheidung?
A: Die Programmierschule hat ein sehr großzügiges Angebot bekommen. Ein großer amerikanischer Technologiekonzern wollte einen neuen, riesigen Campus in Berlin finanzieren. Für tausend Studierende. Mit modernster Ausstattung. Aber mit Bedingungen.
B: Welche Bedingungen?
A: Der Konzern wollte, dass die Studierenden bevorzugt mit seinen Produkten und seiner Software arbeiten. Und dass die besten Absolventen ein Vorkaufsrecht für Jobs beim Konzern haben. Und er wollte einen Sitz im Beirat der Schule.
B: Ein verlockendes, aber heikles Angebot. Und Herr Yilmaz?
A: Herr Yilmaz war zuerst begeistert. Tausend Studierende! Er sah die großen Möglichkeiten. Sein System eins sagte sofort: Ja! Und alle im Team waren euphorisch. „Euphorisch“ heißt: übertrieben begeistert, in einer Hochstimmung.
B: Die Gefahr des Überoptimismus. Und der Gruppendynamik. Wenn alle begeistert sind, traut sich niemand, Zweifel zu äußern.
A: Genau. Und dann hat Katrin vorgeschlagen, eine Pre-Mortem-Analyse zu machen. Sie hat das Team zusammengerufen und gesagt: „Stellt euch vor, es ist fünf Jahre später. Wir haben das Angebot angenommen, und es war ein Fehler. Was ist passiert?“
B: Und was kam heraus?
A: Plötzlich kamen viele Bedenken auf, die vorher niemand geäußert hatte. Oksana sagte: „Wir haben unsere Unabhängigkeit verloren. Der Konzern bestimmt, was wir unterrichten.“ Julien sagte: „Die Studierenden lernen nur noch die Werkzeuge eines einzigen Konzerns und werden abhängig.“ Und Lea, die als ehemalige Studentin eingeladen war, sagte: „Die Schule war für Leute wie mich da. Für die, die keine Chance haben. Wird sie jetzt zu einer Rekrutierungsmaschine für einen Konzern?“
B: Starke Argumente. Und hat Herr Yilmaz das Angebot abgelehnt?
A: Nicht ganz. Er hat das System zwei eingeschaltet. Er hat sich Zeit genommen. Er hat die Außenperspektive eingenommen und recherchiert, wie es anderen Schulen mit ähnlichen Partnerschaften ergangen war. Und er hat festgestellt, dass einige ihre Unabhängigkeit tatsächlich verloren hatten.
B: Und dann?
A: Er ist zurück zum Konzern gegangen und hat neu verhandelt. Mit den Erkenntnissen aus der Pre-Mortem-Analyse. Er hat gesagt: „Wir nehmen Ihre Unterstützung gern an. Aber ohne Bedingungen für den Lehrplan, ohne Vorkaufsrecht und ohne Sitz im Beirat.“
B: Mutig. Und hat der Konzern das akzeptiert?
A: Zuerst nicht. Und Herr Yilmaz war bereit, auf das Geld zu verzichten. Aber nach einigen Wochen kam der Konzern zurück. Mit einem kleineren, aber bedingungslosen Angebot. Für fünfhundert statt tausend Studierende. Und Herr Yilmaz hat angenommen.
B: Eine kluge Entscheidung. Weniger, aber ohne Abhängigkeit.
A: Genau. Und Herr Yilmaz hat danach im Team gesagt: „Mein Bauch hat Ja gesagt. Mein Kopf hat Vielleicht gesagt. Und unser Team hat mir gezeigt, was ich nicht sehen wollte.“
B: Jetzt bist du dran, Hörer, Hörerin. Denk an eine Entscheidung, die du bald treffen musst. Mach eine Pre-Mortem-Analyse: Stell dir vor, die Entscheidung war ein Fehler. Was ist schiefgelaufen? Und formuliere deine Überlegungen mit gehobenen Konnektoren: „Ich sollte vorsichtig sein, zumal …“, „Mitunter …“, „Infolgedessen …“
A: Und überprüfe, ob du in letzter Zeit einer der kognitiven Verzerrungen zum Opfer gefallen bist.
B: Und jetzt unsere „Wörter des Tages“.
A: Wort Nummer eins: die kognitive Verzerrung. Ein systematischer Denkfehler, der bei fast allen Menschen auftritt.
B: Wort Nummer zwei: zumal. Leitet einen zusätzlichen, verstärkenden Grund ein.
A: Wort Nummer drei: die Heuristik. Eine Daumenregel, eine geistige Abkürzung, um schnell zu entscheiden.
B: Wort Nummer vier: die Verlustaversion. Verluste schmerzen stärker, als gleich große Gewinne freuen.
A: Wort Nummer fünf: mitunter. Manchmal, gelegentlich.
B: Und Wort Nummer sechs: euphorisch. Übertrieben begeistert, in einer Hochstimmung.
A: Noch einmal: die kognitive Verzerrung, zumal, die Heuristik, die Verlustaversion, mitunter, euphorisch.
B: Was nehmen wir mit? Kahneman unterscheidet das schnelle, intuitive System eins vom langsamen, logischen System zwei. Und das System zwei ist faul.
A: Wichtige Verzerrungen: die Verfügbarkeitsheuristik, der Ankereffekt, die Verlustaversion, die versunkenen Kosten, der Rückschaufehler, der Planungsfehlschluss und der Dunning-Kruger-Effekt.
B: Gigerenzer hält dagegen, dass Heuristiken bei echter Unsicherheit oft klug sind, besonders bei Experten.
A: Und gegen die Verzerrungen helfen: Bewusstsein, Verlangsamung, Gegenargumente, die Außenperspektive und die Pre-Mortem-Analyse.
B: Das ist das Ende von Folge achtundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
A: Und vergiss nicht: Der Ball kostet fünf Cent! Tschüss!
B: Servus!
VOCAB: die kognitive Verzerrung | Ein systematischer Denkfehler, der bei fast allen Menschen auftritt. | 🧠
VOCAB: zumal | Leitet einen zusätzlichen, verstärkenden Grund ein. | ➕
VOCAB: die Heuristik | Eine Daumenregel, eine geistige Abkürzung zum schnellen Entscheiden. | 👍
VOCAB: die Verlustaversion | Verluste schmerzen stärker, als gleich große Gewinne freuen. | 📉
VOCAB: mitunter | Manchmal, gelegentlich. | 🔁
VOCAB: euphorisch | Übertrieben begeistert, in einer Hochstimmung. | 🎉
QUIZ: Wie viel kostet der Ball in Kahnemans Testfrage? | Zehn Cent | Fünf Cent | Einen Euro | 2
QUIZ: Was ist die Verfügbarkeitsheuristik? | Man hält für häufiger, was einem leicht einfällt | Man kauft nur verfügbare Produkte | Man entscheidet immer zufällig | 1
QUIZ: Was zeigte das Experiment mit den deutschen Richtern? | Eine gewürfelte Zahl beeinflusste die Länge der Strafen | Richter sind immer neutral | Würfel sind im Gericht verboten | 1
QUIZ: Was ist eine Pre-Mortem-Analyse? | Man stellt sich vor, ein Projekt sei gescheitert, und fragt, warum | Eine Untersuchung nach dem Tod | Eine medizinische Kontrolle | 1
QUIZ: Was sagte Herr Yilmaz am Ende? | „Mein Bauch hat Ja gesagt, mein Kopf Vielleicht, und das Team zeigte mir, was ich nicht sehen wollte.“ | „Ich habe sofort gewusst, was richtig ist.“ | „Geld ist das Wichtigste.“ | 1
`;

DATA.podScripts.ep099 = `
A: Hallo und herzlich willkommen bei „Denk auf Deutsch“! Ich bin Lena.
B: Und ich bin Jonas. Servus! Folge neunundneunzig. Die vorletzte Folge unseres Podcasts. Und für heute haben wir ein Thema gewählt, das uns beiden als Lehrerin und als Journalist besonders am Herzen liegt: die Kunst des klaren Schreibens.
A: Wir sprechen über das Register, also die Stilebene. Über die Struktur eines guten Textes. Und über eine Eigenheit des Deutschen, die wir schon öfter gestreift haben und die zugleich Fluch und Segen ist: den Nominalstil.
B: Das Schreiben in einer Fremdsprache ist eine besondere Herausforderung. Man kann sich nicht hinter Gestik, Mimik oder Intonation verstecken. Der Text muss für sich allein stehen. Und auf dem Niveau C1 erwartet man, dass man nicht nur korrekt, sondern auch stilistisch angemessen schreibt.
A: Und das Deutsche hat einen gewissen Ruf, was das Schreiben betrifft. Einen nicht nur schmeichelhaften. Der amerikanische Schriftsteller Mark Twain hat einen berühmten, sehr witzigen Essay darüber geschrieben: „Die schreckliche deutsche Sprache“.
B: Oh ja! Twain hat sich darin über die langen Sätze lustig gemacht. Er schrieb sinngemäß: Wenn sich der deutsche Schriftsteller in einen Satz stürze, sehe man ihn nicht wieder, bis er auf der anderen Seite des Atlantischen Ozeans mit seinem Verb im Mund wieder auftauche.
A: Hahaha. Das ist eine treffende Beobachtung. Denn im Deutschen steht das Verb im Nebensatz am Ende. Und wenn man viele Nebensätze ineinander verschachtelt, muss der Leser sehr lange auf das entscheidende Verb warten.
B: „Verschachteln“ heißt: Teile ineinanderstecken, wie Schachteln in einer Schachtel. Und genau das ist eines der Probleme, die wir heute besprechen. Sprachlich üben wir heute die Umwandlung zwischen Nominalstil und Verbalstil. Also wie man einen schwerfälligen Text in einen klaren Text verwandelt. Und umgekehrt, wenn ein formeller Text verlangt ist.
A: Gut. Fangen wir mit dem Register an. Das Register ist die Stilebene, die man je nach Situation und Adressat wählt. Und im Deutschen gibt es eine sehr deutliche Unterscheidung zwischen verschiedenen Registern.
B: Ganz grob kann man unterscheiden: die Umgangssprache, also die informelle Alltagssprache. Mit Freunden, in WhatsApp-Nachrichten. „Hey, haste Bock auf Kino?“ Dann die Standardsprache, neutral und korrekt. „Hast du Lust, ins Kino zu gehen?“ Und die gehobene oder formelle Sprache. In offiziellen Briefen, wissenschaftlichen Texten, bei feierlichen Anlässen.
A: Und das Wichtige ist: Kein Register ist besser als das andere. Es kommt darauf an, dass es zur Situation passt. Ein Brief an eine Behörde in Umgangssprache wirkt respektlos. Aber eine WhatsApp-Nachricht an einen Freund im Amtsdeutsch wirkt lächerlich.
B: Hahaha. Stell dir vor, man schreibt einem Freund: „Hiermit möchte ich Ihnen mitteilen, dass ich beabsichtige, mich am Samstag in Ihrer Begleitung zu einer Filmvorführung zu begeben.“
A: Hahaha. Absolut lächerlich. Und genau dieses Gefühl für das passende Register ist ein Zeichen für ein hohes Sprachniveau. Und eine der schwierigsten Dinge für Fremdsprachenlernende. Viele lernen ein einziges, neutrales Register und benutzen es überall.
B: Und das Deutsche hat ja die zusätzliche Unterscheidung zwischen Du und Sie, die eng mit dem Register verbunden ist. Gut, jetzt zum Nominalstil. Lena, erkläre noch einmal genau, was das ist.
A: Der Nominalstil ist eine Schreibweise, bei der man die Handlungen vor allem durch Nomen ausdrückt, statt durch Verben. Das Gegenteil ist der Verbalstil, bei dem die Verben die Handlung tragen.
B: Ein Beispiel. Verbalstil: „Weil die Kosten gestiegen sind, hat das Unternehmen beschlossen, die Preise zu erhöhen.“ Nominalstil: „Aufgrund der Kostensteigerung erfolgte seitens des Unternehmens die Beschlussfassung zur Preiserhöhung.“
A: Hahaha. Das klingt furchtbar. Aber man liest es tatsächlich so in vielen Texten. In Verwaltungsschreiben, in juristischen Texten, in wissenschaftlichen Aufsätzen, in Geschäftsberichten.
B: Und man erkennt den Nominalstil an typischen Merkmalen. Erstens viele Nomen auf „-ung“, „-heit“, „-keit“, „-ion“. „Die Durchführung“, „die Berücksichtigung“, „die Inanspruchnahme“. Zweitens viele Präpositionen mit Genitiv: „aufgrund“, „bezüglich“, „hinsichtlich“, „seitens“, „mittels“.
A: Drittens sogenannte Funktionsverbgefüge. Das sind die Nomen-Verb-Verbindungen aus Folge fünfundachtzig, bei denen das Verb fast keine Bedeutung mehr hat. „Zur Durchführung bringen“ statt „durchführen“. „In Erwägung ziehen“ statt „erwägen“. „Eine Entscheidung treffen“ statt „entscheiden“.
B: Und viertens lange Ketten von Genitivattributen. „Die Prüfung der Voraussetzungen für die Gewährung der Förderung des Projekts.“ Vier Genitive hintereinander! Und am Ende weiß man nicht mehr, worum es eigentlich ging.
A: Gut. Jetzt die faire Frage: Ist der Nominalstil immer schlecht? Und die Antwort ist: Nein. Er hat durchaus Vorteile.
B: Welche?
A: Erstens: Er ist kompakt. Man kann sehr viele Informationen auf wenig Raum verdichten. Das ist in wissenschaftlichen Texten oder in Überschriften praktisch. „Klimawandel: Starke Zunahme der Hitzetage“ ist kürzer als „Der Klimawandel führt dazu, dass es viel mehr heiße Tage gibt.“
B: Zweitens: Er wirkt sachlich und objektiv. Er rückt die handelnde Person in den Hintergrund und den Vorgang in den Vordergrund. Das ist in juristischen und wissenschaftlichen Texten oft gewollt.
A: Und drittens: Er ermöglicht es, komplexe Begriffe zu bilden und über abstrakte Konzepte zu sprechen. „Die Globalisierung“, „die Digitalisierung“, „die Gerechtigkeit“. Ohne Nominalisierungen könnte man über solche Phänomene kaum nachdenken.
B: Aber die Nachteile überwiegen oft, besonders wenn man es übertreibt. Erstens: Der Nominalstil ist schwer verständlich. Er erfordert vom Leser viel Konzentration. Man muss die Nomen im Kopf wieder in Handlungen zurückübersetzen.
A: Zweitens: Er ist leblos, abstrakt und unpersönlich. Ein Text im Nominalstil hat keine Energie, keine Bewegung. Die Verben sind die Muskeln der Sprache. Ohne sie wird ein Text schlaff.
B: Ein schönes Bild. Die Verben sind die Muskeln der Sprache. Und drittens, und das ist politisch wichtig: Der Nominalstil kann Verantwortung verschleiern. Wer hat eigentlich gehandelt? „Es erfolgte eine Erhöhung der Preise.“ Wer hat die Preise erhöht? Man erfährt es nicht.
A: Genau. Und darum benutzen Behörden und Unternehmen den Nominalstil manchmal ganz bewusst. Um unangenehme Entscheidungen zu verschleiern. Es gibt in Deutschland jedes Jahr die Wahl des Unworts des Jahres. Und oft werden dabei solche verschleiernden Begriffe kritisiert.
B: Das Unwort des Jahres ist ein Wort, das gegen die Menschenwürde verstößt oder die Wahrheit verschleiert. Zum Beispiel wurde einmal „Rentnerschwemme“ gewählt, oder „Humankapital“, das Menschen auf einen wirtschaftlichen Faktor reduziert. Und „Entlassungsproduktivität“.
A: Das ist eine schöne Tradition. Sie schärft das Bewusstsein für die Macht der Sprache. Und es gibt eine Bewegung, die sich ganz dem klaren Schreiben verschrieben hat: die sogenannte Leichte Sprache und die einfache Sprache.
B: Erkläre den Unterschied.
A: Die Leichte Sprache ist eine stark vereinfachte Form des Deutschen mit festen Regeln. Kurze Sätze, nur ein Gedanke pro Satz, keine Fremdwörter, schwierige Wörter werden erklärt. Sie ist vor allem für Menschen mit Lernschwierigkeiten gedacht. Viele Behörden und auch die Nachrichtensendungen bieten inzwischen Texte in Leichter Sprache an.
B: Und die einfache Sprache ist etwas weniger streng, aber ebenfalls auf Verständlichkeit ausgerichtet. Und es gibt in Deutschland sogar eine Bewegung für bürgernahe Verwaltungssprache. Einige Städte haben begonnen, ihre Briefe umzuschreiben, damit die Bürger sie verstehen.
A: Endlich! Nach Folge neunundsiebzig wäre das dringend nötig. Gut. Jetzt die praktischen Regeln. Wie schreibt man klar? Ich gebe dir die wichtigsten Tipps.
B: Ich höre, und schreibe mit. Hahaha.
A: Erstens: Verben statt Nomen. Wo es möglich ist, sollte man die Handlung durch ein Verb ausdrücken. Statt „Die Durchführung der Prüfung erfolgt durch die Behörde“ lieber „Die Behörde prüft“.
B: Zweitens: Aktiv statt Passiv. Das Aktiv ist direkter und zeigt, wer handelt. Statt „Es wurde beschlossen“ lieber „Der Vorstand hat beschlossen“. Wobei das Passiv natürlich seine Berechtigung hat, wenn die handelnde Person unwichtig ist, wie wir in Folge dreiundfünfzig gesehen haben.
A: Drittens: kurze Sätze. Eine bekannte Faustregel besagt, dass ein Satz möglichst nicht mehr als etwa zwanzig Wörter haben sollte. Und ein Gedanke pro Satz. Der Journalistenausbilder Wolf Schneider, einer der einflussreichsten Stillehrer Deutschlands, hat das immer wieder gepredigt.
B: Wolf Schneider! Den kenne ich natürlich als Journalist. Er war ein strenger, aber brillanter Lehrer. Er hat viele Bücher über guten Stil geschrieben. Eines heißt „Deutsch für Kenner“. Und er hat einen berühmten Grundsatz formuliert: Wer verstanden werden will, muss sich verständlich ausdrücken. Und das sei eine Pflicht gegenüber dem Leser.
A: Viertens: das Verb nach vorne bringen. Wegen der deutschen Satzklammer sollte man das entscheidende Verb nicht zu weit nach hinten schieben. Man sollte die Klammer kurz halten. Also nicht zu viele Informationen zwischen Hilfsverb und Partizip packen.
B: Ein Beispiel: „Der Minister hat gestern in Berlin auf einer Pressekonferenz vor zahlreichen Journalisten aus dem In- und Ausland nach langen Verhandlungen mit den Gewerkschaften die neuen Pläne vorgestellt.“ Man wartet ewig auf „vorgestellt“.
A: Besser: „Der Minister hat gestern die neuen Pläne vorgestellt. Er tat das in Berlin, nach langen Verhandlungen mit den Gewerkschaften.“ Zwei Sätze, viel klarer.
B: Fünftens: konkret statt abstrakt. Statt „Es kam zu Niederschlägen“ lieber „Es hat geregnet“. Statt „Die Mobilitätssituation ist angespannt“ lieber „Es gibt Stau“. Konkrete Wörter erzeugen Bilder im Kopf.
A: Sechstens: Füllwörter streichen. Viele Texte sind voll mit Wörtern, die nichts beitragen. „Eigentlich“, „sozusagen“, „im Grunde genommen“, „gewissermaßen“. Im gesprochenen Deutsch haben sie ihre Funktion, wie die Modalpartikeln in Folge dreiundachtzig. Aber im geschriebenen Text kann man sie oft streichen.
B: Und siebtens, und das ist vielleicht das Wichtigste: an den Leser denken. Für wen schreibe ich? Was weiß der Leser schon? Was muss er wissen? Ein Text ist kein Selbstzweck, sondern ein Dienst am Leser.
A: Und achtens: die Struktur. Ein guter Text hat einen klaren Aufbau. Wie die Präsentation in Folge achtzig. Eine Einleitung, die zum Thema hinführt. Einen Hauptteil mit klar gegliederten Gedanken. Und einen Schluss. Und Absätze! Jeder neue Gedanke bekommt einen neuen Absatz.
B: Und dann gibt es für Journalisten ein besonderes Prinzip: die umgekehrte Pyramide. Das Wichtigste kommt an den Anfang. Dann die Details, nach abnehmender Wichtigkeit. Damit der Leser sofort das Wesentliche erfährt, auch wenn er nicht bis zum Ende liest.
A: Das ist genau das Gegenteil des klassischen Schulaufsatzes, bei dem man oft mit einer langen Einleitung anfängt und das Wichtigste am Ende kommt.
B: Genau. Und das war übrigens mein Fehler bei meinem ersten Artikel in Folge achtundsiebzig. Die wichtigste Information war auf Seite drei versteckt.
A: Hahaha. Siehst du, alles hängt zusammen! Jetzt zur Geschichte. Und diesmal geht es um Jonas selbst. Und um sein Buch.
B: Oh, mein Buch über die Wiener Kaffeehäuser! Endlich!
A: Genau. Jonas hat es fertig geschrieben. Nach Jahren des Aufschiebens, nach dem Füller seines Großvaters, nach Herrn Franz im Kaffeehaus. Und er hat es an einen Verlag geschickt.
B: Und das war sehr aufregend. Und dann kam die Antwort der Lektorin. Eine Lektorin ist die Person in einem Verlag, die ein Manuskript prüft, kritisiert und verbessert.
A: Und was hat die Lektorin geschrieben?
B: Sie hat geschrieben: „Die Geschichten sind wunderbar. Die Recherche ist hervorragend. Aber der Stil ist zu schwerfällig. Zu viele lange Sätze, zu viel Nominalstil. Sie schreiben über das lebendigste Thema der Welt, die Wiener Kaffeehäuser, aber Ihr Text ist so lebendig wie ein Verwaltungsbericht.“
A: Autsch. Wie fühlt man sich da?
B: Am Boden zerstört. Zuerst. Wie bei meinem ersten Artikel. Ich habe gedacht: Ich bin seit fünfzehn Jahren Journalist, und jetzt sagt mir jemand, ich kann nicht schreiben?
A: Und dann? Hast du die Lektionen aus Folge achtundsiebzig beherzigt?
B: Hahaha. Ja. Ich habe eine Nacht darüber geschlafen. Und am nächsten Tag habe ich mein Manuskript noch einmal gelesen. Mit den Augen eines Lesers. Und ich musste der Lektorin recht geben. Ich hatte beim Schreiben über die Geschichte und die Kultur der Kaffeehäuser unbewusst in einen akademischen, schwerfälligen Stil gewechselt. Weil ich das Thema so ernst nahm.
A: Das passiert vielen. Wenn das Thema wichtig erscheint, wird der Stil steif.
B: Genau. Ich hatte zum Beispiel geschrieben: „Die Etablierung der Kaffeehauskultur in Wien erfolgte im Zuge der Ansiedlung armenischer und griechischer Händler nach der Beendigung der osmanischen Belagerung im Jahr sechzehnhundertdreiundachtzig.“
A: Hahaha. Das ist perfekter Nominalstil.
B: Und die Lektorin hat vorgeschlagen, es so umzuschreiben: „Sechzehnhundertdreiundachtzig zogen die Osmanen von Wien ab. Zurück blieben Säcke mit seltsamen Bohnen. Und Händler aus Armenien und Griechenland wussten, was man daraus machen konnte. So begann die Geschichte des Wiener Kaffeehauses.“
A: Wunderbar! Das ist lebendig, konkret, mit kurzen Sätzen. Und es erzählt eine Geschichte.
B: Genau. Und ich habe das ganze Buch so überarbeitet. Drei Monate lang. Ich habe jeden Satz geprüft. Ich habe Nomen in Verben verwandelt. Ich habe lange Sätze geteilt. Ich habe die Füllwörter gestrichen. Das Buch wurde dreißig Seiten kürzer und hundertmal besser.
A: Und was ist dann passiert?
B: Der Verlag hat es angenommen. Und es ist erschienen! Unter dem Titel „Die Melange des Lebens. Geschichten aus den Wiener Kaffeehäusern“. Und Herr Franz, der grantige Kellner, hat ein eigenes Kapitel bekommen.
A: Herzlichen Glückwunsch, Jonas! Und was hat Herr Franz gesagt?
B: Ich habe ihm ein Exemplar geschenkt. Er hat es eine Woche lang nicht erwähnt. Und dann, eines Morgens, hat er mir ungefragt meine Melange gebracht und gesagt: „Na, Herr Schriftsteller. Gar nicht so schlecht.“ Und für Herrn Franz ist das das höchste Lob, das es gibt.
A: Hahaha. Das typische Wiener Lob! Nicht geschimpft ist genug gelobt, auch in Wien! Jetzt bist du dran, Hörer, Hörerin. Hier ist ein Satz im Nominalstil. Versuche, ihn in einen klaren Verbalstil umzuwandeln: „Die Durchführung der Renovierung des Gebäudes erfolgt nach Erteilung der Genehmigung durch die zuständige Behörde.“
B: Eine mögliche Lösung: „Sobald die Behörde es genehmigt, renovieren wir das Gebäude.“ Und dann nimm einen Text, den du selbst geschrieben hast, und überarbeite ihn mit den Regeln von heute.
A: Und jetzt unsere „Wörter des Tages“.
B: Wort Nummer eins: das Register. Die Stilebene, die man je nach Situation wählt.
A: Wort Nummer zwei: der Nominalstil. Eine Schreibweise, bei der man Handlungen vor allem durch Nomen ausdrückt.
B: Wort Nummer drei: verschachteln. Teile ineinanderstecken, wie Sätze in Sätzen.
A: Wort Nummer vier: schwerfällig. Langsam, umständlich und schwer zu verstehen.
B: Wort Nummer fünf: das Unwort des Jahres. Ein Wort, das gegen die Menschenwürde verstößt oder die Wahrheit verschleiert.
A: Und Wort Nummer sechs: die Lektorin. Die Person in einem Verlag, die ein Manuskript prüft und verbessert.
B: Noch einmal: das Register, der Nominalstil, verschachteln, schwerfällig, das Unwort des Jahres, die Lektorin.
A: Was nehmen wir mit? Das passende Register zu wählen, ist ein Zeichen für ein hohes Sprachniveau.
B: Der Nominalstil ist kompakt und sachlich, aber oft schwer verständlich, leblos und kann Verantwortung verschleiern.
A: Die Regeln für klares Schreiben: Verben statt Nomen, Aktiv statt Passiv, kurze Sätze, das Verb nach vorne, konkret statt abstrakt, Füllwörter streichen, an den Leser denken und eine klare Struktur.
B: Und die Verben sind die Muskeln der Sprache.
A: Das ist das Ende von Folge neunundneunzig. Danke fürs Zuhören! Jetzt kommt das Quiz.
B: Und dann kommt die allerletzte Folge. Wir freuen uns auf dich. Servus!
A: Tschüss!
VOCAB: das Register | Die Stilebene, die man je nach Situation wählt. | 🎚️
VOCAB: der Nominalstil | Eine Schreibweise, bei der man Handlungen vor allem durch Nomen ausdrückt. | 🧱
VOCAB: verschachteln | Teile ineinanderstecken, wie Sätze in Sätzen. | 📦
VOCAB: schwerfällig | Langsam, umständlich und schwer zu verstehen. | 🐘
VOCAB: das Unwort des Jahres | Ein Wort, das gegen die Menschenwürde verstößt oder die Wahrheit verschleiert. | 🚫
VOCAB: die Lektorin | Die Person im Verlag, die ein Manuskript prüft und verbessert. | 📝
QUIZ: Worüber machte sich Mark Twain lustig? | Über die langen deutschen Sätze mit dem Verb am Ende | Über das deutsche Essen | Über die deutsche Bahn | 1
QUIZ: Was ist ein Nachteil des Nominalstils? | Er kann Verantwortung verschleiern | Er ist zu kurz | Er ist zu lustig | 1
QUIZ: Was ist die „umgekehrte Pyramide“ im Journalismus? | Das Wichtigste kommt an den Anfang | Das Wichtigste kommt ans Ende | Ein Text in Form einer Pyramide | 1
QUIZ: Was kritisierte die Lektorin an Jonas' Buch? | Die Recherche | Den schwerfälligen Stil | Die Geschichten | 2
QUIZ: Was sagte Herr Franz über Jonas' Buch? | „Wunderbar!“ | „Gar nicht so schlecht.“ | Nichts | 2
`;
