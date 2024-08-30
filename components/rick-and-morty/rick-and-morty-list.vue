<script setup lang="ts">
import apiHandler from '~/utils/ApiHandler'
import { useDomStore } from '~/stores/dom'
import { Layout } from '~/constants'

const searchTerm = ref('')

const { data, fetchNextPage, hasNextPage, refetch } = useRickAndMortyList(searchTerm)

async function fetchData(apiFn: Function) {
  await apiHandler.handleAsyncApi(apiFn)
}

async function handleSearch(textValue: string) {
  searchTerm.value = textValue
  await apiHandler.handleAsyncApi(refetch)
}

const domStore = useDomStore()
const { layout } = storeToRefs(domStore)
</script>

<template>
  <div class="p-4 flex items-center">
    <search-bar class="w-full sm:w-[40ch]" @on-input="handleSearch" />
    <layout-toggle class="ml-auto" />
  </div>
  <div v-if="data">
    <ul v-for="page in data.pages" :key="page.next" class="flex gap-8 flex-wrap p-4">
      <li
        v-for="entity in page.results" :key="entity.id"
        :class="layout === Layout.Grid ? 'min-[520px]:w-[25ch]' : ''"
        class="w-full"
      >
        <nuxt-link :to="`/rick-and-morty/${entity.id}`">
          <rick-and-morty-card v-if="layout === Layout.Grid" :entity="entity" />
          <rick-and-morty-item v-else :entity="entity" />
        </nuxt-link>
      </li>
    </ul>
    <div class="flex items-center justify-center p-20">
      <UButton :disabled="!hasNextPage" size="xl" @click="fetchData(fetchNextPage)">
        Load more
      </UButton>
    </div>
  </div>
</template>
