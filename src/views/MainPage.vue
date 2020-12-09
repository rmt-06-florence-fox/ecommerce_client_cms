<template>
  <div>
    <Sidebar></Sidebar>
    <h1>Main</h1>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'MainPage',
  components: {
    Sidebar
  }
}
</script>

<style>

</style>
