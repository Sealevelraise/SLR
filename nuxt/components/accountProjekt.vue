<template>
    <div>
      <!--page to display project info, entered at "projektAnlegen"-->
      <h1>Angemeldet als: Projektowner</h1>
      <div class="content-box bg-slr-blue-box">
        <div class="mx-auto p-10">
          <h2>Hier finden Sie die Angaben zu Ihrem Account</h2>
          <p>Connected Account: {{ connectedAccounts[0] }}</p>

        </div>
      </div>
    </div>
  </template>
  
  <script>
import Web3 from 'web3'
import DonateJson from '../../truffle-project/build/contracts/Donate.json'

export default {
  name: 'default',

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
  