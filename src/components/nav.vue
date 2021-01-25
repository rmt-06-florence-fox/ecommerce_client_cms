<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid" id="nav">
      <router-link class="navbar-brand" to="/home">E-Commerce</router-link>
      <router-link class="nav-link" to="/home">Home</router-link>
      <router-link class="nav-link" to="/create">Add Product</router-link>
      <button class="btn btn-dark" @click="logout" v-if="token">Log Out</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  computed: {
    token () {
      if (localStorage.access_token) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>
  #nav a {
    font-weight: bold;
    color: grey;
  }
  #nav a.router-link-exact-active {
    color: white;
  }
</style>
