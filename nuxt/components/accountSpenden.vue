<template>
  <!-- TODO: Infos der abgegebenen Spende(n) hier anzeigen und für welches Projekt abgestimmt wurde? -->
  <div v-if="connected">
    <!-- information of projectowner displayed, if project was registered -->
    <h1>Angemeldet als: Spender</h1>
    <div class="content-box bg-slr-blue-box">
      <div class="mx-auto p-10">
        <h2>Hier finden Sie die Angaben zu Ihrem Account</h2>
        <div>
          <div v-if="connected">
            <p>Connected Account: {{ connectedAccounts[0] }}</p>
          </div>
        </div>
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
import DonateJson from '../../truffle-project/build/contracts/Donate.json'

export default {
  name: 'AccountSpenden',

  data() {
    return {
      DonateAddr: DonateJson.networks[5777].address,
      amount: '',
      connected: false,
      connectedAccounts: '',
    }
  },

  methods: {
    connect: async function () {
      // this connects to the wallet
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
      }
    },
    // Function to Donate Ether
    donateEther: async function () {
      const web3 = new Web3(window.ethereum)
      await web3.eth.sendTransaction({
        from: this.connectedAccounts[0],
        to: this.DonateAddr,
        value: web3.utils.toWei(this.amount, 'ether'),
      })
    },
  },
}
</script>
