<template>
  <div id="nav">
      <router-link to="/dashboard">Home</router-link> |
       <router-link to="/add">Add Product</router-link> |
      <a href="#" @click="logout"> Logout </a>
      <!-- <router-link to="/register">Register</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>
export default {
  pageName: 'Navbar',
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
