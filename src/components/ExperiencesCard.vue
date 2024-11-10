<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <span class="card__text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types.ts'

defineProps<{ experience: Experience }>()
</script>

<style scoped></style>
