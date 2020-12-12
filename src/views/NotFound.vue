<template>
  <div class="notFound">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column">
        <h1 class="title is-1">404</h1>
        <h2 class="subtitle is-2">Ooops... Page not found</h2>
        <p class="subtitle is-5">You can back to home by click <router-link class="subtitle is-5 has-text-danger" to="/">here</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style>

</style>
