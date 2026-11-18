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
