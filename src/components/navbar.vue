<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">e-Commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#" @click="productList">Product List</a>
        <a class="nav-link" href="#" @click="addProduct">Add Product</a>
        <button class="btn btn-outline-danger" type="submit" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    productList () {
      this.$router.push('/products')
    },
    addProduct () {
      this.$router.push('/add')
    }
  }
}
</script>

<style>

</style>
