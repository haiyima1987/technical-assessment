<script setup lang="ts">
import apiHandler from '~/utils/ApiHandler'

definePageMeta({
  layout: 'rick-and-morty',
})

const { id }: { [key: string]: string } = useRoute().params

const { data: entity } = await apiHandler.handleAsyncApi(() => useRickAndMortyData<RickAndMorty>(`character/${id}`))

useHead({
  title: `Rick and Morty - ${entity?.value.name}`,
  meta: [
    { name: 'description', content: `Rick and morty character list - Character ${entity?.value.name}` },
  ],
})
</script>

<template>
  <div>
    <div class="p-4 border-b">
      <nuxt-link to="/rick-and-morty" class="flex items-center">
        <Icon
          name="ph:arrow-left-bold" size="1.6rem"
          class="mr-4 text-xl text-lime-700"
        />
        Back to overview
      </nuxt-link>
    </div>
    <rick-and-morty-info v-if="entity" :entity="entity" />
  </div>
</template>

<style scoped>

</style>
