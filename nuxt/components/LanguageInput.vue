<template>

  <div>

    <select v-model="$i18n.locale" class="bg-gray-500 w-10 rounded-2xl text-center appearance-none">

      <option

        v-for="lang in $i18n.locales"

        :key="lang.code"

        :value="lang.code"

      >{{ lang.name }}</option

      >

    </select>

  </div>

</template>

<script>

export
default {}

</script>
