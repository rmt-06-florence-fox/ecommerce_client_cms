<template>
  <div class="home">
    <NavbarHome></NavbarHome>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavbarHome from '@/components/NavbarHome.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    NavbarHome
  }
}
</script>
<style>

</style>
