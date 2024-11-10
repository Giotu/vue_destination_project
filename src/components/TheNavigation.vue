<template>
  <div id="nav">
    <RouterLink id="logo" :to="{ name: 'home' }">Travel App</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import sourseData from '@/data.json'
const { destinations } = sourseData
</script>

<style scoped></style>
