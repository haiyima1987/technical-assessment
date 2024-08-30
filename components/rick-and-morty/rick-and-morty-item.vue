<script setup lang="ts">
const { entity } = defineProps<{
  entity: RickAndMorty
}>()
</script>

<template>
  <div class="list-elem border-lime-600 bg-slate-800">
    <NuxtImg class="max-h-[12ch]" :src="entity.image" :placeholder="[50, 25, 75, 5]" />
    <div class="grow">
      <header class="list-elem-header bg-lime-950 border-lime-600">
        <Icon name="ph:lightning-fill" class="mr-2 text-xl text-lime-700" />
        <h2 class="font-bold text-lg capitalize text-lime-700">
          <span>
            {{ entity.name }}
          </span>
        </h2>
      </header>
      <div class="p-4 flex items-center">
        <p class="mr-4">
          Gender: {{ entity.gender }}
        </p>
        <p class="mr-4">
          Status: {{ entity.status }}
        </p>
      </div>
    </div>
  </div>
</template>
