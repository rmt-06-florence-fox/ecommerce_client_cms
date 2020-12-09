<template>
  <div>
    <Navbar></Navbar>
    ini dash board
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'DashBoard'
}
</script>

<style>

</style>
