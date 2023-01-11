<template>
  <div>
    <h1>Projekt anmelden</h1>
    <div class="content-box bg-slr-blue-box">
      <div class="mx-auto w-1/2 py-10">
        <Dropdown
          class="mx-auto"
          :options="smallstates"
          :max-item="100"
          :disabled="false"
          placeholder="please select your state"
          @selected="saveSelection($event)"
        >
        </Dropdown>
        <p :key="selection" class="mx-auto pt-4">
          Your selected state: {{ selection }}
        </p>
      </div>

      <div class="text-center text-black">
          <p>Bitte Projektnamen eintragen: </p>
          <input v-model="projectname" placeholder="Projektnamen eintragen">          
          
          <p>Welchen Spendenbetrag wollen Sie erhalten? </p>
          <input v-model="amount" placeholder="Spendensumme eintragen">          
      </div>

    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import Dropdown from 'vue-simple-search-dropdown'
// Vue.use(Dropdown)

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
      selection: 'test',
    }
  },

  mounted() {},
  methods: {
    saveSelection(event) {
      this.selection = event.name
      // event.preventDefault()
      // event.stopPropagation()
      console.log(this.selection)
    },
  },
}
</script>
