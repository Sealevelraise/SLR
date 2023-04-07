<template>
  <div>
    <div class="content-box bg-slr-blue-box">
      <div class="mx-auto text-center p-10">
        <h1>Hier finden Sie die Angaben zu Ihrem Account als Projektowner</h1>
      </div>
      <div>
        <p>Connected Account: {{ connectedAccounts[0] }}</p>

        <div v-if="projectDetails">
          <h2>Angemeldetes Projekt:</h2>

          <p>Projektinfos: {{ projectDetails.name }}</p>
          <p>State: {{ projectDetails.state }}</p>
          <p>Description: {{ projectDetails.description }}</p>
          <p>Amount: {{ projectDetails.amount }}</p>
          <p>Mail: {{ projectDetails.mail }}</p>
          <p>State: {{ projectDetails.state }}</p>
        </div>
        <div v-if="!projectDetails">
          <p>noch kein Projekt angelegt. Sie koennen mit Ihrem Account ein Projekt anlegen.</p>
        </div>
        
      </div>
    </div>

  <!-- if wallet connected but no action done (nicht gespendet / kein Projekt angelegt) this shows -->

  <div v-else>
    <h2>Noch keine Rolle ausgewählt!</h2>
    <P>
      Sie haben noch keine Rolle ausgewählt. Mit dem Knopf "Rolle wählen" können
      Sie entscheiden, ein Projket anzumelden oder Geld an ein eingereichtes
      Projekt spenden.
    </P>
    <h3>Jetzt auf "Rolle wählen" klicken und dabei sein!</h3>
  </div>
</template>

<script>
import Web3 from 'web3'
import AddProjectJson from '../../truffle-project/build/contracts/AddProject.json'

export default {
  name: 'AccountProjekt',

  data() {
    return {
      AddProjectAddr: AddProjectJson.networks[5777].address,
      amount: '',
      connected: false,
      connectedAccounts: '',
      projectDetails: false,
    }
  },

  created() {
    this.getProject();
  },

  methods: {
    getProject: async function () {
      if (window.ethereum) {
        // first we check if metamask is installed
        try {
          // we save the account id(s) to 'connectedAccounts'
          this.connectedAccounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
          })
          this.connected = true
          console.log(this.connectedAccounts.toString())
        } catch (error) {
          console.log(error)
        }
        // first we check if metamask is installed
        console.log("getProject ausfuehren")
        try {
          const web3 = new Web3(window.ethereum)
          console.log("web3")
          const contract = new web3.eth.Contract(AddProjectJson.abi, this.AddProjectAddr);
          console.log("contract")
          const projectID = await contract.methods.getProjectOwner().call();
          console.log(projectID)
          this.projectDetails = await contract.methods.getProjectDetails(projectID).call();
          console.log("projectDetails")
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>
