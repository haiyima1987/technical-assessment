<script setup lang="ts">
const toast = useToast()

const domStore = useDomStore()
const { isError, errorMessage } = storeToRefs(domStore)

watch(isError, (newVal: boolean, oldVal: boolean) => {
  if (newVal && !oldVal) {
    toast.add({ title: errorMessage.value, timeout: 2000, color: 'red' })
  }
})
</script>

<template>
  <UNotifications />
</template>
