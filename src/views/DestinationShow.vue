<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <ButtonBack />
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section v-if="destination" class="experiences">
    <div class="cards">
      <RouterLink
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :to="{
          name: 'experience.show',
          params: { experienceSlug: experience.slug },
        }"
      >
        <ExperiencesCard :experience="experience" />
      </RouterLink>
    </div>
    <RouterView
      :experience="
        route.params.experienceSlug &&
        destination.experiences.find(
          e => e.slug === route.params.experienceSlug,
        )
      "
    />
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Destination } from '@/types'
import ExperiencesCard from '../components/ExperiencesCard.vue'
import ButtonBack from '@/components/ButtonBack.vue'
const route = useRoute()

const destination = ref<Destination | null>(null)

const getData = async () => {
  try {
    const response = await fetch(`/api/${route.params.slug}.json`)
    if (!response.ok) throw new Error('Failed to fetch destination data')
    destination.value = await response.json()
  } catch (e) {
    console.log(e)
    destination.value = null
  }
}
onMounted(getData)

watch(() => route.params.slug, getData)
</script>
