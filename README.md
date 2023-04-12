# Sea Level Raise
Das Projekt ist Teil des Moduls _M3 Methoden und Werkzeuge in BUI-Projekten_ im WiSe 2022/2023 des Masters BUI.

Sea Level Raise ist eine Spendenplattform für Projekte in sogenannten Small States, Staaten mit einer kleiner Einwohnerzahl und einer kleinen Landesfläche, die besonders vom Klimawandel betroffen sind.
Diese Staaten haben aufgrund ihrer geringen Bedeutung im globalen Länderranking bislang ein Problem, gehört zu werden.

Durch Sea Level Raise wird dieses Problem angegangen, das sind unsere drei Grundsätze:

* __Faire Partizipation:__ SLR möchte, dass die Stimmen der Small States Beachtung finden. Durch SLR können Small States die durch den Klimawandel existenzbedrohenden Folgen sichtbar machen und ihre eigenen Lösungsvorschläge präsentieren.

* __Faire Förderung:__ SLR möchte erreichen, dass auch kleinere Projekte gefördert werden können und so auch Projekte von Small States Beachtung finden. Des weiteren ist SLR als partizipativer Verteilungsmechanismus attraktiv für Spendengeldern aus verschiedenen Quellen, da bspw. Unternehmen Klima-Projekte fördern können, ohne dass Einzelpersonen Angst haben müssen, dass diese zu viel Entscheidungsgewalt innehaben.

* __Faire Verteilung:__ Durch die Organisation von SLR als DAO, sollen faire Verteilungsmechanismen aufgesetzt werden, sodass jede und jeder Spender:in mitentscheiden kann, wie ihr/sein Geld verwendet wird.

## Entwicklerteam:
* __UX-Managerin:__ Franziska Schicks
* __Dokumentation und Integration:__ Jonas Just
* __Architekt, Integration, Developer:__ Josua Benz
* __Developerin & Assistentin PM:__ Charlotte Lau
* __Developer:__ Benjamin Loncarevic
* __Developer:__ Nicolas von der Ahe
* __Projektmanagerin und Developerin:__ Laura Schoenherr
* __Trainer:__ Frank


## Inhalt des Repositories
Folgender Inhalt gibt es in diesem Repository:
* __nuxt:__ "Frontend", Eine Webapplikation, mit dem Framework __Vue__ und dem Metaframework __nuxt__ entwickelt
* __truffle-project:__ "Backend", Smart Contracts, welche auf eine Ethereum-Blockchain migriert werden können.

Für das Ausführen der beiden Projektteile gibt es jeweils eine Anleitung im Unterordner.

## Projekt Set-up
 
 ### Benötigte Programme 
    * Ganache
    * Nodejs
    * optional: Metamask
 
 ### Ablauf
 Zunächst alle Arbeitsschritte im 
 [README-truffle.md](./truffle-project/README-truffle.md#smart-contract-lokal-auf-blockchain-ausführen)
 befolgen. Damit sind nun im Backend alle Smart Contracts auf einer lokalen Blockchain hinterlegt. 
 Im Folgenden wird das Frontend aktiviert. Dazu müssen alle Schritte 
 im [README-nuxt.md](./nuxt/README-nuxt.md#How-to-start-the-nuxt-project-on-your-localhost) ausgeführt werden.

Das Projekt sollte nun lokal auf dem Rechner laufen. 
Um die Funktionen zu nutzen und zu testen,
sollte Metamask im Browser installiert sein.

## mit Metamask und Ganache verbinden
Metamask in Browser öffnen und sich anmelden. Dann das Localhost 7545 Netzwerk auswählen,
in der echten oberen Ecke den Kreis (das Account-Symbol) auswählen und 
bei den Funktionen auf 'Account importieren' klicken. Es wird ein 'Private Key' verlangt. Um 
diesen zu erhalten, muss in Ganache auf einem Account das 'Show Keys' angeklickt werden 
und der Private Key kopiert werden. 
TODO: add method
