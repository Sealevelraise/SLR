const web3 = new Web3('http://127.0.0.1:7545')

//Funktion welche die Anzahl an Bloecken in der Blockchain zurueck gibt
async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber()
    console.log(latestBlockNumber)
    document.getElementsByTagName('span')[0].innerHTML = latestBlockNumber
}
getBlockNumber();


// Here's how we would access our contract:
var abi = [
{
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "state",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endDate",
        "type": "uint256"
      }
    ],
    "name": "ProjectAdded",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projectToOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "projects",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "state",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "startDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endDate",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_state",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "addProject",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNumberOfProjects",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }]
var AddProject = new web3.eth.Contract(abi, '0xC30B3b3A267FDA8Ab36a1c1C521C4A10631d3f47')
// `AddProject` has access to our contract's public functions and events


$(document).ready(function() {
  // some sort of event listener to take the text input:
  $("#button1").click(function(e) {
    var name = "TestProjekt"
    var state = "Vanuatu"
    var amount = 1000
    // Call our contract's `addProject` function:
    AddProject.addProject(name, state, amount)
  })

  // some sort of event listener to take the text input:
  $("#button2").click(function(e) {
    // Call our contract's `addProject` function:
    console.log(AddProject.getNumberOfProjects())
  })
})


// Listen for the `AddProject` event, and update the UI
//var event = AddProject.ProjectAdded(function(error, result) {
//  if (error) return
//  updateProjectPage(result.id, result.name, result.state, result.amount, result.startDate, result.endDate)
//})

// Update the content with the new Project
//function updateProjectPage(id, name, state, amount, startDate, endDate) {
  //TODO auf das Event muss reagiert werden

//  return true
//}