<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">e-Commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#" @click.prevent="productList">Product List</a>
        <a class="nav-link" href="#" @click.prevent="addProduct">Add Product</a>
      </div>
    </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-outline-danger ml-auto" type="submit" @click="logout">Logout</button>
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
      this.$router.push('/login').catch(() => {})
    },
    productList () {
      this.$router.push('/products').catch(() => {})
    },
    addProduct () {
      this.$router.push('/add').catch(() => {})
    }
  }
}
</script>

<style>

</style>
