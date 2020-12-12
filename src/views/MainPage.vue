<template>
  <div>
    <div id="nav">
    <Navbar></Navbar>
    </div>
    <router-view />
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
