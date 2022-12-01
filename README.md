# SLR - Sea Level Raise
Web3 BUI Master prototype project 

## Rollen
* UX-Managerin: Franziska Schicks
* Integration: Jonas Just
* Architekt und Integration: Josua Benz
* Developerin & Assistentin PM: Charlotte Lau
* Developer: Benjamin Loncarevic
* Developer: Nicolas von der Ahe
* Tester: Fardin Khan, Saskia Heller
* Projektmanagerin und Developerin: Laura Schoenherr
* Trainer: Frank
* Scrum Master: Phillip

## Smart Contract ausführen
Um den Smart Contract zu testen, muss zuerst nodejs installiert werden: https://nodejs.org/de/.
Danach muss über die PowerShell Truffle installiert werden:

    npm install truffle --global

Zum Ausführen einer lokalen Blockchian wird noch Ganache benötigt. Dieses kann hier heruntergeladen werden: https://trufflesuite.com/ganache/

In Ganache muss ein neues Projekt angelegt werden, in welchem die `truffle-config.js` aus diesem Projekt hinterlegt werden muss.

Mit dem Befehl

    truffle migrate

innerhalb des Projektordners werden die Contracts aus dem Ordner `contracts` compiliert und als .json-Datei im Ordner `build` abgelegt. Anschließend werden dies Contracts auf die lokale Ganache-Blockchain geschrieben.