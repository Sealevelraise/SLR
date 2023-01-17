<template>
  <div>
    <h1>Spenden</h1>
    <p>Betrag eingeben</p>
    <input v-model="message" placeholder="Spendenbetrag" />

    <button
      class="bg-slr-page-bg text-sm text-slr-blue hover:bg-blue-200 duration-500 py-2 px-6 rounded-md"
      style="width: 9rem"
    >
      Absenden
    </button>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>
