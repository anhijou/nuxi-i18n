<script setup lang="ts">
const { locales , locale, setLocale} = useI18n()

const language = computed({
    get:() => locale.value,
    set:(value) => {
        setLocale(value)
    }
})
 
</script>
<template>
  <div class="flex items-center">
    <h2>Switch language :</h2>
    <select v-model="language" class="ml-2">
        <option v-for="locale in locales" :key="locale" :value="locale.code">{{ locale.name }}</option>
    </select>
</div>

</template>