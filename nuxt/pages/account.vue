<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-2xl md:text-3xl uppercase text-center">Account</h1>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box py-10 md:py-12 px-6 md:px-32 rounded-[24px] text-white"
    >
    <div class="mx-auto p-10">
        <h1>Hier finden Sie die Angaben zu Ihrem Account als Spender</h1>
      </div>
      <div>
        <p>Connected Account: {{ connectedAccounts[0] }}</p>

        <div v-if="donatorDetails">
          <h2>Spendenuebersicht:</h2>

          <p>Spendensumme: {{ donatorDetails.donatedAmount }}</p>
          <p>Mail: {{ donatorDetails.mail }}</p>
        </div>
        <div v-if="!donatorDetails">
          <p>noch keine Spende abgegeben.</p>
        </div>
        
      </div>

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

      <!-- TODO: donatorConnected und pConnected auf true setzen nachdem gespendet bzw projekt angelegt -->
      <!-- <div v-if="store.donatorConnected">
        <accountSpenden />
      </div>
      <div v-else-if="store.pConnected">
        <accountProjekt />
      </div>
      <div v-else>
        <h2 class="text-2xl text-center pb-4 md:pb-8">Werde Teil von SLR!</h2>

        <p class="text-center">
          Mit Klick auf den Connect Wallet Button kannst Du Deine Wallet
          verbinden. Mehr Infos dazu gibt es
          <nuxt-link to="/spendenprozess"> hier</nuxt-link>. Nach erfolgreichem
          verbinden kannst Du spenden und abstimmen oder deine Spenden und
          Abstimmungen einsehen (als Spender) oder ein Projekt anlegen bzw. dein
          angelegtes Projekt ansehen (als Projektinhaber).
        </p> -->
        <!-- TODO: Nach klick auf connect wallet hier checken ob person spender oder projektowner ist und dementsprechend die store variablen anpassen (donatorConnected und pConnected) -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import DonateJson from '../../truffle-project/build/contracts/Donate.json'
import AddProjectJson from '../../truffle-project/build/contracts/AddProject.json'

export default {
  name: 'Account',
  data() {
    return {
      DonateAddr: DonateJson.networks[5777].address,
      AddProjectAddr: AddProjectJson.networks[5777].address,
      projectDetails: false,
      connected: false,
      connectedAccounts: '',
      donatorDetails: false,
    }
  },
  created() {
    this.getProject();
    this.getDonations();
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
    getDonations: async function () {
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
        console.log("getDonation ausfuehren")
        try {
          const web3 = new Web3(window.ethereum)
          console.log("web3")
          const contract = new web3.eth.Contract(DonateJson.abi, this.DonateAddr);
          console.log("contract")
          this.donatorDetails = await contract.methods.getDonaterDetails().call();
          console.log("donatorDetails")
        } catch (error) {
          console.log(error)
        }
      }
    },
  },
}
</script>
