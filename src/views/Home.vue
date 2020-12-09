<template>
  <!-- component -->
  <div class="h-screen w-full flex overflow-hidden">
    <navbar></navbar>
    <router-view/>
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
