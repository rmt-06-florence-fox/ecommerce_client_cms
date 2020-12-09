<template>
  <div class="home">
    <div class="container" style="min-height: 100vh"></div>
    <navbar/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>
