<template>
  <div id="nav">
    <nav class="navbar navbar-light justify-content-between fixed-top" style="background-color: black;">
      <div style="padding-left: 20px;">
        <router-link to="/" style="margin: 5px;">Home</router-link>
        <router-link to="/products" style="margin: 5px;">Products</router-link>
        <router-link to="/products/add" style="margin: 5px;">Add Product</router-link>
      </div>
      <div style="padding-right: 10px">
        <button class="btn btn-outline-danger" @click="logout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
      console.log('hello')
    }
  }
}
</script>

<style>

</style>
