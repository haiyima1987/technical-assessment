<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ProgressBar from './components/progress-bar.vue'
import { appName } from '~/constants'
import { useDomStore } from '~/stores/dom'

useHead({
  title: appName,
})

const domStore = useDomStore()
const { isLoading } = storeToRefs(domStore)
</script>

<template>
  <VitePwaManifest />
  <ProgressBar v-show="isLoading" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <app-error />
</template>
