## Smart Contract auf Blockchain speichern
Um den Smart Contract zu testen, muss zuerst nodejs installiert werden: https://nodejs.org/de/.
Danach muss über die PowerShell Truffle installiert werden:

    npm install truffle --global

Zum Ausführen einer lokalen Blockchian wird noch Ganache benötigt. Dieses kann hier heruntergeladen werden: https://trufflesuite.com/ganache/

In Ganache muss ein neues Projekt angelegt werden, in welchem die `truffle-config.js` aus diesem Projekt hinterlegt werden muss.

Mit dem Befehl

    truffle migrate

innerhalb des Projektordners werden die Contracts aus dem Ordner `contracts` compiliert und als .json-Datei im Ordner `build` abgelegt. Anschließend werden dies Contracts auf die lokale Ganache-Blockchain geschrieben. Die Adressen fuer die Smart Contracts aendern sich dadurch.

## Smart Contracts ausführen
Zum Ausführen von Smart Contracts muss zusätzlich noch web3.js installiert werden.

    npm install web3js
