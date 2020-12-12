<template>
  <div class="row d-flex">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'MainPage',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
