<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-2xl md:text-3xl uppercase text-center">Account</h1>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box py-10 md:py-12 px-6 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-4 md:pb-8">Werde Teil von SLR!</h2>
      <!-- p class="text-center pb-4">Ich möchte...</p>

      <div
        class="flex flex-col items-center md:flex-row md:place-content-between"
      >
        <button
          class="w-11/12 md:w-2/5 bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
          @click="selectRole('spender')"
        >
          Spenden und abstimmen
        </button>
        <p class="text-center py-4">oder</p>
        <button
          class="w-11/12 md:w-2/5 bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
          @click="selectRole('projektinhaber')"
        >
          Spenden erhalten
        </button>
      </div-->
      <p class="text-center">
        Mit Klick auf den Connect Wallet Button kannst Du Deine Wallet
        verbinden. Mehr Infos dazu gibt es
        <nuxt-link to="/spendenprozess"> hier </nuxt-link>. Nach erfolgreichem
        verbinden kannst Du spenden und abstimmen oder deine Spenden und
        Abstimmungen einsehen (als Spender) oder ein Projekt anlegen bzw. dein
        angelegtes Projekt ansehen (als Projektinhaber).
      </p>
      <ConnectWallet class="mx-auto text-center mt-4" />
    </div>
  </div>
</template>

<script>
import ConnectWallet from '../components/ConnectWallet.vue'
export default {
  components: { ConnectWallet },
  name: 'default',
  methods: {
    selectRole(role) {
      const auswahlButton = document.getElementById('auswahlButton')
      const spendenButton = document.getElementById('spendenButton')
      const projektButton = document.getElementById('projektButton')

      auswahlButton.classList.add('hidden')

      if (role === 'spender') {
        spendenButton.classList.remove('hidden')
        if (!projektButton.classList.contains('hidden')) {
          projektButton.classList.add('hidden')
        }
      } else if (role === 'projektinhaber') {
        projektButton.classList.remove('hidden')
        if (!spendenButton.classList.contains('hidden')) {
          spendenButton.classList.add('hidden')
        }
      }
    },
  },
}
</script>
