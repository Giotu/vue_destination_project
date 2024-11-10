<template>
  <div class="experience">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <span class="card__text">
      {{ experience.description }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { Experience } from '@/types'

defineProps<{ experience: Experience }>()
</script>

<style scoped>
.experience {
  margin-top: 40px;
  border: 1px solid #000;
  padding: 20px 40px;
}
</style>
