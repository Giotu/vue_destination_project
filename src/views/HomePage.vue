<template>
  <h1></h1>
  <div class="destinations">
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <h2>{{ destination.name }}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import sourseData from '@/data.json'
import { RouterLink } from 'vue-router'
const { destinations } = sourseData
</script>

<style scoped></style>
