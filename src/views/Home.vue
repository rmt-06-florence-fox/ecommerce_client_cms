<template>
  <section class="body">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Navbar></Navbar>
    <router-view/>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
