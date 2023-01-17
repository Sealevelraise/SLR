<template>

<div  class="p-10 w-10/12 mx-auto">
  <vsa-list>
  <vsa-item>
    <vsa-heading>
      Wie gebe ich eine Spende ab?
    </vsa-heading>

    <vsa-content>
      Der Ablauf des Spendenprozesses wird
      <nuxt-link to="/spendenprozess">hier</nuxt-link>
      erklärt.
    </vsa-content>
  </vsa-item>
  
  <vsa-item>
    <vsa-heading>
      Wie kann ich mein Projekt einreichen?
    </vsa-heading>

    <vsa-content>
      Der Anmeldungsprozess wird hier erklärt.
    </vsa-content>
  </vsa-item>

  <vsa-item>
    <vsa-heading>
      Mein Land ist nicht in der Smallstate-Liste zu sehen. Kann ich trotzdem mein Projekt anmelden?
    </vsa-heading>

    <vsa-content>
      Nein. Nur Projekte aus Ländern, welche als Smallstates definiert sind, können eingereicht werden. Mehr darüber erfährst du hier.
    </vsa-content>
  </vsa-item>

  <vsa-item>
    <vsa-heading>
      Really?
    </vsa-heading>

    <vsa-content>
      Yes
    </vsa-content>
  </vsa-item>

  <vsa-item>
    <vsa-heading>
      Really?
    </vsa-heading>

    <vsa-content>
      Yes
    </vsa-content>
  </vsa-item>

  <vsa-item>
    <vsa-heading>
      Really?
    </vsa-heading>

    <vsa-content>
      Yes
    </vsa-content>
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
} from 'vue-simple-accordion';
import 'vue-simple-accordion/dist/vue-simple-accordion.css';

  export default {
    name: 'default',
    components: {
    VsaList,
    VsaItem,
    VsaHeading,
    VsaContent,
    // VsaIcon
  }
  }
</script>
  