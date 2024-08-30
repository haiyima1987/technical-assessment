<script setup lang="ts">
definePageMeta({
  layout: 'rick-and-morty',
})

useHead({
  title: 'Rick and Morty',
  meta: [
    { name: 'description', content: 'Rick and morty character list' },
  ],
})
</script>

<template>
  <article>
    <header class="block sm:flex align-center justify-center border-b border-b-4 border-slate-500 p-6 bg-slate-950 items-center">
      <h1 class="text-xl mb-4 sm:mb-0">
        Rick and Morty
      </h1>
      <nuxt-link to="/" class="ml-auto">
        Go back to the home page
      </nuxt-link>
    </header>
    <main>
      <rick-and-morty-list />
    </main>
  </article>
</template>
