<template>
    <div class="mainpage">
        <Navbar/>
        <router-view/>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'MainPage',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
