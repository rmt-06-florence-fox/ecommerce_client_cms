<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
}

</script>
<style>
 #app {
   font-family: Georgia, 'Times New Roman', Times, serif;
 }
</style>
