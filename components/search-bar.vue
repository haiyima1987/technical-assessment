<script setup lang="ts">
const emit = defineEmits(['onInput'])

let searchTimeout: ReturnType<typeof setTimeout>
const searchText = ref('')

function handleInput(event: Event) {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    if (event.target) {
      const elem = event.target as HTMLInputElement
      emit('onInput', elem.value)
    }
  }, 1000)
}

function cancel() {
  searchText.value = ''
  emit('onInput', '')
}
</script>

<template>
  <div class="relative">
    <UInput
      v-model="searchText"
      type="text" color="gray" variant="outline"
      placeholder="Search..."
      @input="handleInput"
    />
    <Icon
      v-if="searchText"
      name="ph:x-bold" class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
      @click="cancel"
    />
  </div>
</template>
