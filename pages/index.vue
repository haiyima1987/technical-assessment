<template>
  <div class="p-4 flex flex-wrap">
    <nuxt-link to="/pokemon" class="mr-12 w-[300px] h-[500px]">
      <h2 class="mb-2 text-xl">
        Pokemon characters!
      </h2>
      <NuxtImg class="w-[300px] h-[480px]" src="/pokemon-image.jpg" :placeholder="[50, 25, 75, 5]" />
    </nuxt-link>
    <nuxt-link to="/rick-and-morty" class="mr-12 w-[300px] h-[500px]">
      <h2 class="mb-2 text-xl">
        Rick and Morty characters!
      </h2>
      <NuxtImg class="w-[300px] h-[480px]" src="/rick-and-morty-image.jpg" :placeholder="[50, 25, 75, 5]" />
    </nuxt-link>
  </div>
</template>
