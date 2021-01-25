<template>
  <div class="h-screen w-screen bg-gray-900 flex justify-center items-center bekgron">
      <div class="bg-black py-24 px-4 bg-opacity-40">
          <h1 class="text-6xl text-white font-black">ERROR 404 NOT FOUND</h1>
          <h1 class="text-xl text-white font-black mx-6">
              Or Something Like That.
          </h1>
          <div class="flex flex-row gap-x-2 justify-center">
          <button class="px-8 py-2 bg-black text-white mt-3 hover:bg-gray-50 hover:text-black" @click="goBack">Go Back</button>
          <button class="px-8 py-2 bg-black text-white mt-3 hover:bg-gray-50 hover:text-black" @click="goHome">Go Homepage</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'errorPage',
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.bekgron {
    background-image: url('https://png2.cleanpng.com/sh/f241c481dee74a7ddf54ae7a155ee6e6/L0KzQYm3UsIzN5N8j5H0aYP2gLBuTfxqb5l5Rd5ybnWwcr38hb11epJziAJqcnXxc8q0gf5lNaV3edD8bIXmdbBqmb1jdKZqReZuY3jxf732hCkua5DzhtdsdHnyfn70ggAuPZI9fqhsNHbocbfthsgvOmg5TKMENkG0RYKCU8Q5QGI6Uag7Nj7zfri=/kisspng-light-line-blue-transparency-and-translucency-blue-technology-connection-map-5a8f6c4feafff8.2744196115193488159626.png');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: contain, cover;
    background-position: center;
}
</style>
