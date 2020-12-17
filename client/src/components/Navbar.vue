<template>
  <div id="nav">
    <router-link to="/home">Home</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/add">Add Product</router-link> |
    <router-link to="/login">Login</router-link> |
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
