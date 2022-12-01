const Web3 = require('web3');
const web3= new Web3('http://127.0.0.1:7545');
const MyAddProject = require('../build/contracts/AddProject.json');
const MyDonate = require('../build/contracts/Vote.json');
const MyVote = require('../build/contracts/Vote.json');
web3.eth.accounts.wallet.add('2f61010172852bca40b1ab40534880ad2251735cf7fd456330f2350a30d6b737')
//Anzeigen, wie viel Ether mein Account hat
web3.eth.getBalance('0x3feed9809DffbbAc15adF4C57bD8A12cc0599aaB').then(balance => console.log(balance));

const contractAddProject = new web3.eth.Contract(MyAddProject.abi, '0xC30B3b3A267FDA8Ab36a1c1C521C4A10631d3f47')
const contractDonate = new web3.eth.Contract(MyDonate.abi, '0x1593d176304936b3143c3586Cc196a6064930A27')
const contractVote = new web3.eth.Contract(MyVote.abi, '0xF2b9F4DB82518479405D3D8Ab8561af7044B1c8f')

//Ausgeben, wie viele Projekte es gibt. call() ohne Modifizierung Blockchain
contractAddProject.methods.getNumberOfProjects().call().then(result => console.log(result));
//Ein neues Project anlegen. send() mit Modifizierung Blockchain
contractAddProject.methods.addProject('Test Project', 'Vanuatu', 10).send({from: '0x3feed9809DffbbAc15adF4C57bD8A12cc0599aaB', gas: 6721975}).then(receipt => console.log(receipt))
//100 wei an Vote senden
//contractDonate.methods.voteForProject(1).send({from: '0x3feed9809DffbbAc15adF4C57bD8A12cc0599aaB', gas: 6721975, value: 100})