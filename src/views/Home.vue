<template>
  <!-- component -->
  <div class="h-screen w-full flex overflow-hidden">
    <navbar></navbar>
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    navbar
  },
  created () {
    this.$router.push('dashboard')
  }
}
</script>

<style  scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .08s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
