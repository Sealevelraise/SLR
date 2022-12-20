<template>
  <div>
    <h1>Spenden</h1>
    <p>Betrag eingeben</p>
    <input v-model="message" placeholder="Spendenbetrag">

    <button>
      <p>Absenden</p>
    </button>

  </div>

</template>

<script>
export default {
  name: 'default',
}
</script>
