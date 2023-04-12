<template>
  <!-- TODO: Infos der abgegebenen Spende(n) hier anzeigen und für welches Projekt abgestimmt wurde? -->
  <div v-if="connected">
    <!-- information of projectowner displayed, if project was registered -->
    <h1>Angemeldet als: Spender</h1>
    <div class="content-box bg-slr-blue-box">
      <div class="mx-auto p-10">
        <h1>Hier finden Sie die Angaben zu Ihrem Account als Spender</h1>
      </div>
      <div>
        <p>Connected Account: {{ connectedAccounts[0] }}</p>

        <div v-if="donatorDetails">
          <h2>Spendenuebersicht:</h2>
      </div>
      </div>
    </div>
  </div>

</template>

<script>
import Web3 from 'web3'
import DonateJson from '../../truffle-project/build/contracts/Donate.json'

export default {
  name: 'AccountSpenden',

  data() {
    return {
      DonateAddr: DonateJson.networks[5777].address,
      amount: '',
      connected: false,
      connectedAccounts: '',
      donatorDetails: false,
    }
  },

  created() {
    this.getDonations();
  },

  methods: {
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
