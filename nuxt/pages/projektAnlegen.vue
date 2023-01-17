<template>
  <div>
    <h1>Bewerbung</h1>
    <!-- connect-wallet button is visible if the wallet is not connected -->
    <button v-if="!connected" @click="connect">Connect wallet</button>
    <div
      v-if="connected"
      class="content-box bg-slr-blue-box flex flex-col justify-center"
    >
      <div class="mx-auto w-1/2 p-10">
        <Dropdown
          class="mx-auto"
          :options="smallstates"
          :max-item="100"
          :disabled="false"
          placeholder="Staat auswählen"
          id="selection"
          v-model="selection"
          @selected="saveSelection($event)"
        >
        </Dropdown>
        <p class="mx-auto pt-4">Ausgew&auml;hlter Staat: {{ selection }}</p>

        <p class="mx-auto pt-4">Name des Projekts: {{ projectname }}</p>
        <div class="mx-auto">
          <input
            v-model="projectname"
            placeholder="Projektnamen eintragen"
            class="input-field"
          />
        </div>

        <p class="mx-auto pt-4">
          Projektbeschreibung: {{ projectdescription }}
        </p>
        <input
          v-model="projectdescription"
          placeholder="Projektbeschreibung eintragen"
          class="input-field"
        />

        <p class="mx-auto pt-4">Benötigter Spendenbetrag: {{ amount }} €</p>
        <div class="mx-auto">
          <input
            v-model="amount"
            placeholder="Spendensumme eintragen"
            class="input-field"
          />
        </div>

        <p class="mx-auto pt-4">E-Mail: {{ email }}</p>
        <div class="mx-auto">
          <input
            v-model="email"
            placeholder="dein.projekt@spenden.de"
            class="input-field"
          />
        </div>
        <div class="mx-auto pt-4">
          <button
            @click="sendForm()"
            class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
            style="width: 9rem"
          >
            Anmelden
          </button>
        </div>
        <div class="mx-auto pt-4">
          <p id="alert" class="text-center hidden text-red-300">
            Bitte alle Felder ausf&uuml;llen!
          </p>
        </div>
        {{ contractResult }}
        <button @click="createNewProject">Add new Project</button>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
// import Vue from 'vue'
import Dropdown from 'vue-simple-search-dropdown'
// Vue.use(Dropdown)
import AddProjectJson from '../../truffle-project/build/contracts/AddProject.json'

export default {
  name: 'MyComponent',
  components: {
    Dropdown,
  },
  data() {
    return {
      smallstates: [
        { abbr: 'AG', name: 'Antigua und Barbuda' },
        { abbr: 'BS', name: 'Bahamas' },
        { abbr: 'BH', name: 'Bahrain' },
        { abbr: 'BB', name: 'Barbados' },
        { abbr: 'BZ', name: 'Belize' },
        { abbr: 'BT', name: 'Bhutan' },
        { abbr: 'BW', name: 'Botswana' },
        { abbr: 'BN', name: 'Brunei Darussalam' },
        { abbr: 'CV', name: 'Cape Verde' },
        { abbr: 'KM', name: 'Comoros' },
        { abbr: 'CY', name: 'Cyprus' },
        { abbr: 'DJ', name: 'Djibouti' },
        { abbr: 'DM', name: 'Dominica' },
        { abbr: 'GQ', name: 'Equatorial Guinea' },
        { abbr: 'EE', name: 'Estonia' },
        { abbr: 'SZ', name: 'Eswatini' },
        { abbr: 'FJ', name: 'Fiji' },
        { abbr: 'GA', name: 'Gabon' },
        { abbr: 'GM', name: 'Gambia' },
        { abbr: 'GD', name: 'Grenada' },
        { abbr: 'GW', name: 'Guinea-Bissau' },
        { abbr: 'GY', name: 'Guyana' },
        { abbr: 'IS', name: 'Iceland' },
        { abbr: 'JM', name: 'Jamaica' },
        { abbr: 'KE', name: 'Kiribati' },
        { abbr: 'LS', name: 'Lesotho' },
        { abbr: 'MV', name: 'Maldives' },
        { abbr: 'MT', name: 'Malta' },
        { abbr: 'MH', name: 'Marshall Islands' },
        { abbr: 'MU', name: 'Mauritius' },
        { abbr: 'FM', name: 'Micronesia' },
        { abbr: 'ME', name: 'Montenegro' },
        { abbr: 'NA', name: 'Namibia' },
        { abbr: 'NR', name: 'Nauru' },
        { abbr: 'PW', name: 'Palau' },
        { abbr: 'QA', name: 'Qatar' },
        { abbr: 'WS', name: 'Samoa' },
        { abbr: 'SM', name: 'San Marino' },
        { abbr: 'ST', name: 'Sao Tome and Principe' },
        { abbr: 'SC', name: 'Seychelles' },
        { abbr: 'SB', name: 'Solomon Islands' },
        { abbr: 'KN', name: 'St. Kitts and Nevis' },
        { abbr: 'LC', name: 'St. Lucia' },
        { abbr: 'VC', name: 'St. Vincent and the Grenadines' },
        { abbr: 'SR', name: 'Suriname' },
        { abbr: 'TL', name: 'East Timor' },
        { abbr: 'TO', name: 'Tonga' },
        { abbr: 'TT', name: 'Trinidad and Tobago' },
        { abbr: 'TV', name: 'Tuvalu' },
        { abbr: 'VU', name: 'Vanuatu' },
      ],
      selection: '',
      projectname: '',
      projectdescription: '',
      amount: '',
      email: '',
      // for connecting the wallet
      connected: false,
      AddProjectAddr: AddProjectJson.networks[5777].address,
      contractResult: '',
      connectedAccounts: '',
    }
  },

  mounted() {},
  methods: {
    saveSelection(event) {
      if (event.name) this.selection = event.name
    },
    sendForm() {
      const p = document.getElementById('alert')
      if (!this.selection || !this.projectname || !this.amount || !this.email) {
        p.classList.remove('hidden')
      } else {
        p.classList.add('hidden')
      }
    },
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
    createNewProject: async function (projectName, country, amount) {
      // method for adding a new project to the blockchain
      const web3 = new Web3(window.ethereum)

      const contract = new web3.eth.Contract(
        AddProjectJson.abi,
        this.AddProjectAddr
      )
      // the parameters of the contract will be filled with the text in the input-fields
      console.log(this.projectname)
      console.log(this.selection)
      console.log(this.projectdescription)
      console.log(parseInt(this.amount))
      this.contractResult = await contract.methods
        .addProject(
          this.projectname,
          'test',
          this.projectdescription,
          parseInt(this.amount)
        )
        .send({ from: this.connectedAccounts[0], gas: 6721975 })
    },
  },
}
</script>
