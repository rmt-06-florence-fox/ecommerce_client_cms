<template>
  <div>
    <NavbarDashboard></NavbarDashboard>
    <div class="container">
      <div class="row mt-3">
        <div class="col-2"></div>
        <div class="col-10 card">
          <div class="row px-3 d-flex">
            <div class="col-2"><h3>Gambar</h3></div>
            <div class="col-3"><h3>Nama</h3></div>
            <div class="col-3"><h3>Stock</h3></div>
            <div class="col-3"><h3>Price</h3></div>
            <div class="col-1 align-self-center"><i class="fa fa-edit fa-fw p-0"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-2 mt-5">
          <div class="container">
            <div class="col">
              <button @click="goToAddProduct" class="btn btn-success">Add New Product</button>
            </div>
          </div>
          <br><br><br><br>
          <div class="container">
            <div class="row">
              <h5 class="text-white">Action Button Explanation</h5>
              <i class="w3-xxlarge text-white fa fa-hand-o-down"></i>
              <br><br>
              <button class="btn-warning shadow p-0">
                <i class="fa fa-edit"><small class="mt-1 mb-3">Edit Product</small></i>
              </button>
              <button class="btn-success shadow p-1">
                <i class="fa fa-check-square"><small class="mt-1 mb-3">Update Stock</small></i>
              </button>
              <button class="btn-danger shadow p-0">
                <i class="fa fa-trash-o"><small class="mt-1 mb-3">Delete Product</small></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-10 overflow-auto p-3 bg-content p-0 m-0" style="height: 500px">
          <ItemCard v-for="product in products" :key="product.id" :product='product' />
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import NavbarDashboard from '../components/NavbarDashboard'
import ItemCard from '../components/ItemCard'

export default {
  name: 'Dashboard',
  components: {
    NavbarDashboard,
    ItemCard
  },
  data () {
    return {
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    goToAddProduct () {
      this.$router.push('/createProduct')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
