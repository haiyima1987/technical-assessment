<script setup lang="ts">
import { Layout } from '~/constants'

const domStore = useDomStore()
const { setLayout } = domStore
const { layout } = storeToRefs(domStore)

function setPageLayout(layout: Layout) {
  setLayout(layout)
}
</script>

<template>
  <div class="flex item-center">
    <Icon
      name="ph:grid-four-bold" class="mr-4 cursor-pointer link"
      size="1.6rem"
      :color="layout === Layout.Grid ? 'green' : ''"
      @click="() => setPageLayout(Layout.Grid)"
    />
    <Icon
      name="ph:list-dashes-bold" class="cursor-pointer link"
      size="1.6rem"
      :color="layout === Layout.List ? 'green' : ''"
      @click="setPageLayout(Layout.List)"
    />
  </div>
</template>
