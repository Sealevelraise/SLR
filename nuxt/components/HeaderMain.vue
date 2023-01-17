<template>
  <div>
    <nav
      class="bg-slr-blue h-28 shadow md:flex md:items-center md:justify-between font-roboto px-4 text-blue-200"
    >
      <div class="items-center shrink-0">
        <!-- flex justify-between  -->
        <span
          class="text-xl md:text-2xl pr-5 hover:text-blue-400 duration-500 cursor-pointer md:items-center"
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
        class="text-xl hidden md:flex lg:opacity-100 opacity-0 space-x-4 pl-10 md:items-center"
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
          <NuxtLink to="/partner">Spendenprozess</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/about">Über Uns</NuxtLink>
        </li>

        <li class="hover:text-blue-400 duration-500">
          <NuxtLink to="/faq">FAQ</NuxtLink>
        </li>

        <nuxt-link to="/" id="auswahlButton">
          <button
            class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
            style="width: 9rem"
          >
            Rolle wählen
          </button>
        </nuxt-link>
        <nuxt-link to="/spenden" id="spendenButton" class="hidden">
          <button
            class="bg-red-500 text-sm text-white hover:bg-red-800 duration-500 py-2 px-6 rounded-md"
            style="width: 9rem"
          >
            Spenden
          </button>
        </nuxt-link>
        <nuxt-link to="/projektAnlegen" id="projektButton" class="hidden">
          <button
            class="text-sm bg-red-500 text-white hover:bg-red-800 duration-500 py-2 px-4 rounded-md"
            style="width: 9rem"
          >
            Projekt anmelden
          </button>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderMain',

  methods: {
    reloadPage() {
      window.location.reload()
    },
  },
}
</script>
