<template>
  <div>
    <NavbarDashboard></NavbarDashboard>
    <router-view/>
  </div>
</template>

<script>
import NavbarDashboard from '@/components/NavbarDashboard.vue'
export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard
  }
}
</script>

<style>

</style>
