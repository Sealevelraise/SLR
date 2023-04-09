<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-2xl md:text-3xl uppercase text-center">
      {{ $t('welcome')}}<br />
      {{ $t('at SEA LEVEL R(A)ISE')}}
    </h1>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box py-10 md:py-12 px-6 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-4 md:pb-8">Werde Teil von SLR!</h2>
      <p class="text-center pb-4">Ich möchte...</p>

      <div
        class="flex flex-col items-center md:flex-row md:place-content-between"
      >
        <button
          class="w-11/12 md:w-2/5 bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
          @click="selectRole('spender')"
        >
          <NuxtLink to="/spenden">Spenden und abstimmen</NuxtLink>

        </button>
        <p class="text-center py-4">oder</p>
        <button
          class="w-11/12 md:w-2/5 bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
          @click="selectRole('projektinhaber')"
        >
        <NuxtLink to="/projektAnlegen">Spenden erhalten</NuxtLink>
        </button>
      </div>
    </div>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box py-10 md:py-12 px-6 md:px-32 rounded-[24px] text-white"
    >
      <h2 class="text-2xl text-center pb-4 md:pb-12">
        Was ist Sea Level R(a)ise
      </h2>
      <p class="text-justify">
        Was ist SLR? ... Whereas disregard and contempt for human rights have
        resulted Everyone has the right to freedom of thought, conscience and
        religion; this right includes freedom to change his religion or belief,
        and freedom, either alone or in community with others and in public or
        private, to manifest his religion or belief in teaching, practice,
        worship and observance. Everyone has the right to freedom of opinion and
        expression; this right includes freedom to hold opinions without
        interference and to seek, receive and impart information and ideas
        through any media and regardless of frontiers. Everyone has the right to
        rest and leisure, including reasonable limitation of working hours and
        periodic holidays with pay.
      </p>
    </div>

    <div
      class="w-11/12 md:w-3/4 mx-auto bg-slr-blue-box md:pb-12 px-0 rounded-[24px] text-white"
    >
      <img
        class="pb-8 md:pb-12 px-0 rounded-t-[24px]"
        src="../assets/images/tuvalu.jpeg"
        alt="Minister of Tuvalu gives COP26 speech from the sea"
      />
      <h2 class="text-2xl text-center pb-4 md:pb-12 md:py-12 px-6 md:px-32">
        "Wir gehen unter..."
      </h2>
      <p
        id="roleAnchor"
        class="text-justify md:py-12 px-6 md:px-32 pb-8 md:pb-12"
      >
        ...sind die ersten Worte des Außenministers des Inselstaats Tuvalu bei
        seiner Rede zur Klimakonferenz 2021. Um den Ernst der Lage deutlich zu
        machen, hält Simon Kofe seine Videoansprache aus dem Wasser. Sein
        eindringlicher Appel: "Wir gehen unter, aber das tun alle anderen auch."
        <br />
        Er spricht von der existenziellen Bedrohung die durch den
        Meeresspiegelansteig hervorgeht, und vor allem die kleinen und
        finanziell schwachen "Small States" betrifft. <br />
        Um Ihnen die Hilfe zur Verfügung zu stellen, die sie benötigen,
        beschäftigt sich das Projekt "Sea Level R(a)ise" mit einer
        Blockchain-basierten Spendengeldsammlung und -verteilung, die sich durch
        Transparenz, globale Unabhängigkeit und Dezentralität auszeichnet.
      </p>
    </div>

    <!-- 3 Info Cards-->
    <div
      class="w-11/12 overflow-x-auto md:w-3/4 mx-auto text-white flex flex-row gap-8"
    >
      <!-- Card 1: About Us-->
      <div
        class="md:basis-1/3 text-center bg-slr-blue-box py-4 px-8 rounded-[24px]"
      >
        <h2 class="pb-6 text-xl">Wer sind wir?</h2>
        <nuxt-link to="/about">
          <img
            class="pb-8 rounded-md object-scale-down h-56 mx-auto"
            src="../assets/images/slrLogo.jpg"
            alt="Minister of Tuvalu gives COP26 speech from the sea"
        /></nuxt-link>
        <p class="text-justify pb-8">
          Im Zuge der Klimaerwärmung steigt der Meeresspiegel kontinuierlich an.
          Das Projekt Sea Level R(a)ise nimmt es sich deshalb zur Aufgabe den
          sogenannten "Small States" - kleine, hilfebedürftige Inselstaaten -
          Unter-stützung zu bieten. Wer wir sind und was es sonst noch über das
          Projekt zu sagen gibt....
        </p>
      </div>
      <!-- Card 2: Projects-->
      <div
        class="basis-11/12 md:basis-1/3 text-center bg-slr-blue-box py-4 px-8 rounded-[24px]"
      >
        <h2 class="pb-6 text-xl">Aktuelle Projekte?</h2>
        <nuxt-link to="/projects">
          <img
            class="pb-8 rounded-md object-cover h-56 mx-auto"
            src="../assets/images/demo_project_1.jpg"
            alt="Minister of Tuvalu gives COP26 speech from the sea"
        /></nuxt-link>
        <p class="text-justify pb-8">
          Sei es die Küstenbefestigung der Insel Kiribati durch das Aufschütten
          von Landmasse, das Errichten von Steinmauern oder die Unterstützung
          der Philippinen beim Ausbau der Windenergie. Sea Level R(a)ise
          unterstützt viele Projekte. Hier sehen sie eine Übersicht über aktuell
          laufende, umgesetzte und zur Ab-stimmung freigegebene Projekte...
        </p>
      </div>
      <!-- Card 3: DAO-->
      <div
        class="md:basis-1/3 text-center bg-slr-blue-box py-4 px-8 rounded-[24px]"
      >
        <h2 class="pb-6 text-xl">DAO Voting Prinzip?</h2>
        <nuxt-link to="/dao">
          <img
            class="pb-8 rounded-md object-cover h-56 mx-auto"
            src="../assets/images/DAO_voting_principle.jpg"
            alt="Minister of Tuvalu gives COP26 speech from the sea"
        /></nuxt-link>
        <p class="text-justify pb-8">
          Wir bieten Ihnen die Möglichkeit, direkt an der Entscheidung
          mitzuwirken. Mit einer Spende erhalten Sie eine Stimme in jedem
          Abstimmungszyklus (quartalsweise) für die DAO Abstimmung. Diese bietet
          eine faire Möglichkeit über die umzusetzenden Projekte zu bestimmen.
          Weitere Informationen darüber, wie das genau funktioniert, finden sich
          hier...
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
  name: 'Default',
  data() {
    return {
      store,
    }
  },
  methods: {
    selectRole(role) {
      if (role === 'spender') {
        store.spenderSelected()
      } else if (role === 'projektinhaber') {
        store.projectownerSelected()
      }
      /* const auswahlButton = document.getElementById('auswahlButton')
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
      } */
    },
  },
}
</script>
