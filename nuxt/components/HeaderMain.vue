<template>
  <div>
    <nav
      class="bg-slr-blue md:h-28 shadow flex flex-col md:flex-row md:items-center md:justify-between font-roboto px-4 text-blue-200"
    >
      <!-- MOBILE -->
      <div class="md:hidden flex flex-row justify-between items-center">
        <a href="/">
          <img
            class="object-cover h-14 inline"
            src="../assets/images/slrLogo.jpg"
            alt="logo"
          />
        </a>
        <nuxt-link v-if="store.spender" to="/spenden" id="spendenButton">
          <button
            class="bg-red-500 text-sm text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
            style="width: 9rem"
          >
            Spenden
          </button>
        </nuxt-link>
        <nuxt-link
          v-else-if="store.projectowner"
          to="/projektAnlegen"
          id="projektButton"
        >
          <button
            class="text-sm bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-4 rounded-md"
            style="width: 9rem"
          >
            Projekt anmelden
          </button>
        </nuxt-link>
        <nuxt-link v-else to="/" id="auswahlButton">
          <button
            class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
            style="width: 9rem"
          >
            Rolle wählen
          </button>
        </nuxt-link>
        <nuxt-link to="/account">
          <img
            src="../assets/images/accounticon.png"
            alt="Account"
            class="h-10"
          />
        </nuxt-link>
      </div>


      <!-- DESKTOP -->
      <div class="hidden md:block items-center shrink-0">
        <!-- flex justify-between  -->
        <span
          class="text-xl md:text-2xl pr-5 hover:text-blue-400 duration-500 cursor-pointer md:items-center flex flex-row"
        >
          <a href="/">
            <img
              class="object-cover h-28 inline"
              src="../assets/images/slrLogo.jpg"
              alt="logo"
            />
          </a>

          <NuxtLink :to="{ path: '/' }"> SEA LEVEL R(A)ISE </NuxtLink>
        </span>
        <!----
                                <span class="cursor-pointer text-3xl mx-2 md:hidden block">
                    <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Menu</title><path fill="none"
                        stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"
                        />
                    </svg>
                </span>
                -->
      </div>
      <!---->
      <ul
        class="text-center text-lg flex flex-col md:flex-row md:flex-nowrap md:space-x-4 md:pl-10 md:items-center mb-4 md:mb-0"
      >
        <!--   my-6 md:my-0 z-[-1]
            md:z-auto md:static absolute bg-slr-blue w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7
            md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 -->
        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/projects">Projekte</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/dao">DAO- und Spendenübersicht</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/spendenprozess">Spendenprozess</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/about">Über Uns</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>

        <div class="hidden md:flex space-x-4 items-center">
          <nuxt-link v-if="store.spender" to="/spenden" id="spendenButton">
            <button
              class="bg-red-500 text-sm text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
              style="width: 9rem"
            >
              Spenden
            </button>
          </nuxt-link>
          <nuxt-link
            v-else-if="store.projectowner"
            to="/projektAnlegen"
            id="projektButton"
          >
            <button
              class="text-sm bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-4 rounded-md"
              style="width: 9rem"
            >
              Projekt anmelden
            </button>
          </nuxt-link>
          <nuxt-link v-else to="/" id="auswahlButton">
            <button
              class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
              style="width: 9rem"
            >
              Rolle wählen
            </button>
          </nuxt-link>
          <nuxt-link to="/account">
            <img src="../assets/images/accounticon.png" alt="Account" />
          </nuxt-link>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
import { store } from '../store/store.js'

export default {
  name: 'HeaderMain',

  data() {
    return {
      store,
    }
  },

  methods: {
    reloadPage() {
      window.location.reload()
    },
  },
}
</script>
