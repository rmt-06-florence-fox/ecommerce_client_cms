<template>
  <div>
    <div class="nav-client">
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/create">Create Product</router-link> |
      <a @click='logout' href="#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
