<script setup lang="ts">
const { entity } = defineProps<{
  entity: RickAndMorty
}>()
</script>

<template>
  <div class="py-8 px-4 grid grid-cols-2 gap-10 border-top-1">
    <div class="rounded-md overflow-hidden">
      <NuxtImg class="image w-full" :src="entity.image" :placeholder="[50, 25, 75, 5]" />
    </div>
    <div class="p-4">
      <h3 class="text-3xl mb-7">
        Name: {{ entity.name }}
      </h3>
      <p class="text-xl my-7">
        Gender: {{ entity.gender }}
      </p>
      <p class="font-bold my-7">
        Status: {{ entity.status }}
      </p>
      <p class="mb-7">
        Species: {{ entity.species }}
      </p>
    </div>
  </div>
</template>
