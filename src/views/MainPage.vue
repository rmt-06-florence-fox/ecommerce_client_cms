<template>
  <div>
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  pageName: 'MainPage',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
