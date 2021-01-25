<template>
  <div class="text-center d-flex flex-column justify-content-center bg-dark h-100 text-light">
    <h1>404</h1>
    <h3>PAGE IS NOT FOUND</h3>
    <small>please check your url browser</small>
    <small>or</small>
    <router-link to='/dashboard' class="text-white">Go to dashboard</router-link>
  </div>
</template>

<script>
export default {
  name: 'Error404Page'
}
</script>

<style>

</style>
