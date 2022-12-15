<template>
  <div id="app">
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <!-- other buttons and fields are visible if the wallet is connected -->
    <button v-if="connected" @click="getNumberOfProjects">get number of current projects</button>
    <p v-if="connected">project name:</p><input type="text" v-model="htmlProjectName" placeholder="type in project name here" v-if="connected">
    <p v-if="connected">country:</p><input type="text" v-model="htmlCountry" placeholder="type in country here" v-if="connected">
    <p v-if="connected">amount:</p><input type="text" v-model="htmlAmount" placeholder="type in amount here" v-if="connected">
    <button v-if="connected" @click="createNewProject">add new project</button>
    <button v-if="connected" @click="getProjectInformation">get project infos</button>
    <!-- Output -->
    {{ contractResult }}
    <h1 v-if="connected">Current Projects:</h1>

    <template v-for="(project, i) in projectInfos">
      <!-- Render all project properties -->
      <span :key="i">
      <h2 >{{ project.name }}</h2>
      <p>State: {{ project.state }}</p>
      <p>Amount: {{ project.amount }}</p>
      <p>Start: {{ new Date(parseInt(project.startDate * 1000)) }}</p>
      <p>End: {{ new Date(parseInt(project.endDate * 1000)) }}</p>
    </span>
    </template>
  </div>
</template>

<script>
import Web3 from 'web3'
//import abi for contracts
import AddProjectJson from './AddProject.json'
//import DonateJson from './Donate.json'
//import VoteJson from './Vote.json'

export default {
  name: 'App',

  data() {
    return {
      htmlProjectName: '',
      htmlCountry: '',
      htmlAmount: '',
      AddProjectAddr: '0x15B4D7135Fa9f60a54c40Fd47a151db037601351',
      DonateAddr: '0x14Ad1d0B54E2408b6Fb1Efd500E1D190FCcD35Cc',
      VoteAddr: '0x44DA498252e4Da3B9d2C8Df6A9313395930b8928',
      connected: false,
      connectedAccounts: '', //account-IDs will be safed in this variable
      contractResult: '',
      projectInfos: [],
    }
  },

  methods: {
    connect: async function () {
      // this connects to the wallet
      if (window.ethereum) { // first we check if metamask is installed
        try {
            //we save the account id(s) to 'connectedAccounts'
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
    getNumberOfProjects: async function () {
      // method for getting the number of projects on the blockchain
      let web3 = new Web3(window.ethereum);

      let contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      
      await contract.methods.getNumberOfProjects().call()
        .then(result => this.contractResult = result);
    },
    createNewProject: async function () {
      // method for adding a new project to the blockchain
      let web3 = new Web3(window.ethereum);
      
      let contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      //the parameters of the contract will be filled with the text in the input-fields
      await contract.methods.addProject(this.htmlProjectName, this.htmlCountry, parseInt(this.htmlAmount)).send({from: this.connectedAccounts[0], gas: 6721975})
        .then(result => this.contractResult = result);
    },
    getProjectInformation: async function() {
      // methode for getting infos of all the projects currently saved on the blockchain
      let web3 = new Web3(window.ethereum);
      let contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
      let numberOfProjects;
      //get the number of projects to iterate over every project in the next step
      await contract.methods.getNumberOfProjects().call()
        .then(result => numberOfProjects = result);

      this.projectInfos = [];
      for(var i=0; i<numberOfProjects; i++){
        await contract.methods.getProjectDetails(i).call()
          .then(result => this.projectInfos.push(result));
      }
      this.contractResult = this.projectInfos;
    },
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
