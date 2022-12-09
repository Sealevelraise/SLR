<template>
  <div id="app">
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <!-- call-contract button is visible if the wallet is connected -->
    <button v-if="connected" @click="callContract">Call contract</button>

    <button @click="createNewProject">AddNewProject</button>
    {{ contractResult }}
  </div>
</template>

<script>
import Web3 from 'web3'
//import DonateJsonFile from './Donate.json'
import AddProjectJson from './AddProject.json'
//import VoteJsonFile from './Vote.json'

export default {
  name: 'App',

  data() {
    return {
      connected: false,
      contractResult: '',
    }
  },

  methods: {
    connect: function () {
      // this connects to the wallet
      if (window.ethereum) { // first we check if metamask is installed
        window.ethereum.request({method: 'eth_requestAccounts'})
            .then(() => {
              this.connected = true; // If users successfully connected their wallet
              //TODO erfolgreich verbunden ausgeben
            });
      }
    },
    callContract: function () {
      // method for calling the contract method
      let web3 = new Web3(window.ethereum);
      let contractAddress = '0x9d01fE4313C9ef0D0B3BAb5fCf14d6548f5E4a18';

      //let abi = JSON.parse(AddProjectJsonFile);
      let contract = new web3.eth.Contract(AddProjectJson.abi, contractAddress);

      contract.methods.getNumberOfProjects().call()
          .then(result => this.contractResult = result);
    },
    createNewProject: function () {
      // method for calling the contract method
      let web3 = new Web3(window.ethereum);
      let contractAddress = '0x9d01fE4313C9ef0D0B3BAb5fCf14d6548f5E4a18cd';
      
      //let abi = JSON.parse(AddProjectJsonFile);
      let contract = new web3.eth.Contract(AddProjectJson.abi, contractAddress);

      contract.methods.addProject('HilfeFuerCharlie', 'Berlin', 10).send({from: '0x3feed9809DffbbAc15adF4C57bD8A12cc0599aaB', gas: 6721975})
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
