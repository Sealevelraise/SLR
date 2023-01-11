<template>
  <div id="app">
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <!-- call-contract button is visible if the wallet is connected -->
    <button v-if="connected" @click="createNewProject">Add new Project</button>
    {{ contractResult }}
  </div>
</template>

<script>
import Web3 from 'web3'
import AddProjectJson from '../../truffle-project/build/contracts/AddProject.json'

export default {
  name: "ConnectWallet",

  data() {
    return {
      connected: false,
      AddProjectAddr: AddProjectJson.networks[5777].address,
      contractResult: '',
      connectedAccounts: '',
      addProject_Name: 'Test Projekt',
      addProject_Country: 'Berlin',
      addProject_Amount: 10,
    }
  },

  methods: {
    connect: async function () {
      // this connects to the wallet
      if (window.ethereum) { // first we check if metamask is installed
        try {
            // we save the account id(s) to 'connectedAccounts'
            this.connectedAccounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            this.connected = true
            console.log(this.connectedAccounts.toString())
        } catch (error) {
            console.log(error)

        }
      }
    },
    createNewProject: async function (projectName, country, amount) {
      // method for adding a new project to the blockchain
      const web3 = new Web3(window.ethereum);
      
      const contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      // the parameters of the contract will be filled with the text in the input-fields
      this.contractResult = await contract.methods.addProject(this.addProject_Name, this.addProject_Country, parseInt(this.addProject_Amount)).send({from: this.connectedAccounts[0], gas: 6721975});
    },
  }

}
</script>

<style scoped>

</style>
