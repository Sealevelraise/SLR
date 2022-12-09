<template>
  <div id="app">
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <!-- call-contract button is visible if the wallet is connected -->
    <button v-if="connected" @click="callContract">get number of current projects</button>
    <p v-if="connected">project name:</p><input type="text" v-model="htmlProjectName" placeholder="type in project name here" v-if="connected">
    <p v-if="connected">country:</p><input type="text" v-model="htmlCountry" placeholder="type in country here" v-if="connected">
    <p v-if="connected">amount:</p><input type="text" v-model="htmlAmount" placeholder="type in amount here" v-if="connected">
    <button v-if="connected" @click="createNewProject">add new project</button>
    {{ contractResult }}
  </div>
</template>

<script>
import Web3 from 'web3'
//import DonateJson from './Donate.json'
import AddProjectJson from './AddProject.json'
//import VoteJson from './Vote.json'

export default {
  name: 'App',

  data() {
    return {
      htmlProjectName: '',
      htmlCountry: '',
      htmlAmount: '',
      AddProjectAddr: '0x9d01fE4313C9ef0D0B3BAb5fCf14d6548f5E4a18',
      DonateAddr: '0x5a2b07D8cBF5687B2cA8E09429771e992211A6e2',
      VoteAddr: '0xCF722672e49a37149bD57575b2E674c4720bfF82',
      connected: false,
      connectedAccounts: '', //account-IDs will be safed in this variable
      contractResult: '',
    }
  },

  methods: {
    connect: async function () {
      // this connects to the wallet
      if (window.ethereum) { // first we check if metamask is installed
        try {
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
    callContract: function () {
      // method for calling the contract method
      let web3 = new Web3(window.ethereum);

      let contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      
      contract.methods.getNumberOfProjects().call()
          .then(result => this.contractResult = result);
    },
    createNewProject: function () {
      // method for calling the contract method
      let web3 = new Web3(window.ethereum);
      
      let contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);

      contract.methods.addProject(this.htmlProjectName, this.htmlCountry, parseInt(this.htmlAmount)).send({from: this.connectedAccounts[0], gas: 6721975})
          .then(result => this.contractResult = result);
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
