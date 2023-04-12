<template>
  <div class="md:p-10 mx-auto">
    <h1 class="mb-8">FAQ</h1>
    <vsa-list class="mx-auto text-center">
      <vsa-item>
        <vsa-heading>How does the donation process work?</vsa-heading>

        <vsa-content>
          In order to donate, you need to follow the steps described
          <nuxt-link to="/spendenprozess"><em>here</em></nuxt-link>.
        </vsa-content>
      </vsa-item>

      <vsa-item>
        <vsa-heading>How can i register a new project?</vsa-heading>

        <vsa-content>The project registration process is described
          <nuxt-link to="/spendenprozess"><em>here</em></nuxt-link>.
        </vsa-content>
      </vsa-item>

      <vsa-item>
        <vsa-heading>
          My country is not listed. Can I still register my project?
        </vsa-heading>

        <vsa-content>
          Only projects in the so called "Smallstates" are allowed to be registered.
          Detailed information about the "Smallstates" can be found
          <a href="https://data.worldbank.org/country/S1" target="_blank"><em>here</em></a>.
        </vsa-content>
      </vsa-item>

      <vsa-item>
        <vsa-heading> Really? </vsa-heading>

        <vsa-content> Yes </vsa-content>
      </vsa-item>

      <vsa-item>
        <vsa-heading> Really? </vsa-heading>

        <vsa-content> Yes </vsa-content>
      </vsa-item>

      <vsa-item>
        <vsa-heading> Really? </vsa-heading>

        <vsa-content> Yes </vsa-content>
      </vsa-item>
    </vsa-list>
  </div>
</template>

<script>
import {
  VsaList,
  VsaItem,
  VsaHeading,
  VsaContent,
  // VsaIcon
} from 'vue-simple-accordion'
import 'vue-simple-accordion/dist/vue-simple-accordion.css'

export default {
  name: 'default',
  components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    // VsaIcon
  },
}
</script>
