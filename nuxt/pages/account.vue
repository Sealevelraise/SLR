<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-2xl md:text-3xl uppercase text-center">Account</h1>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box py-10 md:py-12 px-6 md:px-32 rounded-[24px] text-white"
    >
      <div v-if="store.donatorConnected">
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
        </p>
        <ConnectWallet class="mx-auto text-center mt-4" />
      </div>
    </div>
  </div>
</template>

<script>
import ConnectWallet from '../components/ConnectWallet.vue'
import { store } from '../store/store.js'

export default {
  components: { ConnectWallet },
  name: 'default',
  data() {
    return {
      store,
    }
  },
  methods: {},
}
</script>
