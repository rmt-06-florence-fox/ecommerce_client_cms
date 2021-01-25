<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from '../components/nav.vue'
export default {
  name: 'MainHome',
  components: { Nav }
}
</script>

<style>

</style>
