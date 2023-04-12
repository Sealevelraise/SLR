<template>
  <div>
    <h1>Spenden</h1>
    <div v-if="!spendenDone">
      <!-- connect-wallet button is visible if the wallet is not connected -->
      <div
        v-if="!connected"
        class="content-box bg-slr-blue-box flex flex-col justify-center"
      >
        <div class="p-8 flex justify-center">
          <button
            class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
            style="width: 10rem"
            @click="connect"
          >
            Connect your wallet
          </button>
        </div>
      </div>
      <div
        v-if="connected"
        class="content-box bg-slr-blue-box flex flex-col justify-center p-8 items-center"
      >
        <p class="py-2">
          Attention: You can donate multiple times but only once per donation cycle!
        </p>
        <p class="py-2">Connected Account: {{ connectedAccounts[0] }}</p>
        <button
          class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
          style="width: 20rem"
          @click="connect"
        >
          Connect diffenrent account
        </button>
        <!-- input field for amout to be donated -->
        <p class="py-2">Enter donation amount (ETH)</p>
        <input
          v-model="amount"
          class="text-slr-blue"
          placeholder="Spendenbetrag in ETH"
        />
        <div class="mx-auto pt-4">
          <p id="betragAlert" class="text-center hidden text-red-300">
            Please enter a donation amount!
          </p>
        </div>

        <!-- if wanted, e-mail input from user -->
        <p class="py-2">Newsletter Anmeldung: E-Mail eingeben (optional)</p>
        <input v-model="mail" class="text-slr-blue" placeholder="E-Mail" />

        <button
          class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md mt-4"
          style="width: 9rem"
          @click="donateEther"
        >
          Absenden
        </button>
      </div>
    </div>
    <div
      v-else-if="spendenDone"
      class="content-box bg-slr-blue-box flex flex-col justify-center p-8 items-center"
    >
      <p>Tank you! Your donation was successful!</p>
      <!-- TODO: Weiterleitung zu Projektabstimmung, falls es die erste Spende im Quartal war -->
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import DonateJson from '../../truffle-project/build/contracts/Donate.json'

export default {
  name: 'Spenden',

  data() {
    return {
      DonateAddr: DonateJson.networks[5777].address,
      amount: '',
      connected: false,
      connectedAccounts: '',
      mail: '',
      spendenDone: false,
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
      const p = document.getElementById('betragAlert')
      this.connect()
      if (!this.amount) {
        // wenn nichts bei betrag eingegeben wurde
        console.log('Bitte Betrag eingeben!')
        p.classList.remove('hidden')
      } else if (this.connectedAccounts.length){
        p.classList.add('hidden')
        const web3 = new Web3(window.ethereum)
        await web3.eth.sendTransaction({
          from: this.connectedAccounts[0],
          to: this.DonateAddr,
          value: web3.utils.toWei(this.amount, 'ether'),
        })
        const contract = new web3.eth.Contract(DonateJson.abi, this.DonateAddr)
        // todo: check if can be send without second transaction in metamask
        await contract.methods.updateDonatedAmount(this.mail, parseInt(this.amount)).send({ from: this.connectedAccounts[0], gas: 6721975 })

        this.spendenDone = true
        // todo: redirect
      } else {
        console.log('No account connected to wallet')
      }
    },
   
  },
}
</script>
