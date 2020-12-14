<template>
  <div>
    <NavbarMain></NavbarMain>
    <router-view/>
  </div>
</template>

<script>
import NavbarMain from '../components/NavbarMain.vue'
export default {
  components: {
    NavbarMain
  }
}
</script>

<style>

</style>
