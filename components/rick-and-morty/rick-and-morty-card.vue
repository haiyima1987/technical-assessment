<script setup lang="ts">
const { entity } = defineProps<{
  entity: RickAndMorty
}>()
</script>

<template>
  <div class="card border-lime-600 bg-slate-800">
    <header class="card-header bg-lime-950 border-lime-600">
      <Icon name="ph:lightning-fill" class="mr-2 text-xl text-lime-700" />
      <h2 class="font-bold text-lg capitalize text-lime-700">
        <span>
          {{ entity.name }}
        </span>
      </h2>
    </header>
    <NuxtImg class="w-full" :src="entity.image" :placeholder="[50, 25, 75, 5]" />
  </div>
</template>
