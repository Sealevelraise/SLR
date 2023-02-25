<template>
  <!-- TODO: Infos des eingereichten Projektes anzeigen (später ggf Status: akzeptiert für nächsten Zyklus od. abgelehnt) -->
  <div v-if="connected">
    <!-- information of procejtowner displayed, if procet was registered -->
    <h2>Angemeldet als: Projektowner</h2>
    <div class="content-box bg-slr-blue-box">
      <div class="mx-auto text-center p-10">
        <h3>Hier finden Sie die Angaben zu Ihrem Account</h3>
      </div>
      <div>
        <p>Angemeldetes Projekt:</p>

        <div v-if="connected">
          <p>Connected Account: {{ connectedAccounts[0] }}</p>
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
  name: 'AccountProjekt',

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
