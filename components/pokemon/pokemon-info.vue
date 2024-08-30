<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const { data } = usePokemonData<Pokemon>(`pokemon/${props.name}`)

const { addPokemon } = usePokeballStore()

function onClick() {
  if (data.value)
    addPokemon(data.value!)
}
</script>

<template>
  <div class="card border-pink-600 bg-slate-800">
    <header class="card-header bg-pink-950 border-pink-600">
      <Icon name="ph:lightning-fill" class="mr-2 text-xl text-pink-700" />
      <h2 class="font-bold text-lg capitalize text-pink-700">
        <span v-if="!data">...</span>
        <span v-else>

          {{ data.name }}
        </span>
      </h2>
    </header>
    <div class="p-2">
      <p>Height: <span v-if="data">{{ data.height }}</span><span v-else>...</span></p>
      <p>Weight: <span v-if="data">{{ data.weight }}</span><span v-else>...</span></p>
    </div>
    <div class="h-[23ch]">
      <pokemon-image v-if="data" :pokemon="data" class="w-full" />
    </div>
    <footer class="flex p-2">
      <UButton class="ml-auto" :disabled="!data" @click="onClick">
        Add pokemon
      </UButton>
    </footer>
  </div>
</template>
