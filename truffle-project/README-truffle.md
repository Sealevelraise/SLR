# Smart Contracts
Dies ist das Arbeitsverzeichnis von Truffle.
Dateistruktur:
* __build__: JSON Dateien, die beim Bauen der Contracts entstehen
* __contracts__: Solidity-Contracts
* __migrations__: Skripte die beschreiben, welche Contracts auf die Blockchain übertragen werden
* __test__: Unit-Tests für Contracts
* __truffle-config.js__: Konfigurationsdatei, wird von Ganache und Truffe benötigt

## Smart Contract lokal auf Blockchain ausführen
Um den Smart Contract zu testen, muss zuerst nodejs installiert werden: https://nodejs.org/de/.
Danach muss über die PowerShell Truffle installiert werden:

    npm install -g truffle

Zum Ausführen einer lokalen Blockchain wird noch Ganache benötigt. 
Dieses kann hier heruntergeladen werden: https://trufflesuite.com/ganache/

In Ganache muss ein neues Projekt angelegt werden, 
in welchem die `truffle-config.js` aus diesem Projekt hinterlegt werden muss.

Mit dem Befehl

    truffle compile

innerhalb des Projektordners werden die Contracts aus dem
Ordner `contracts` compiliert und als .json-Datei im Ordner `build` abgelegt. 

Mit dem Befehl

    truffle migrate

Werden die Contracts kompiliert und zusätzlich werden die Contracts 
auf die lokale Ganache-Blockchain geschrieben. Die Adressen für die Smart Contracts ändern sich dadurch.
Wenn es Änderungen an den Contracts gab und `truffle migrate` ausgeführt wird, 
müssen die .json-Dateien unter build\contracts in den Ordner vue-web3js-project 
verschoben werden, damit das Frontend auf die neuen Smart Contracts zugreifen kann.


Mit dem Befehl 

    truffle test

werden die Test aus dem Ordner `test` ausgeführt. Truffle benutzt das Mocha Testing Framework für die Erstellung und Ausführung von Unit Test in Javascript.
Truffle bietet dabei eine Clean-Room Environment mit der die Contracts für die Tests in einer Testumgebung neu compiled werden. 