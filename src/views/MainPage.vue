<template>
  <div>
      <NavBar></NavBar>
      <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'MainPage',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
