<template>
  <div>
    <Navbar class="mb-3"></Navbar>
    <h2 class="text-center">List Product</h2>
    <div class="container">
      <button type="button" class="btn btn-primary my-3 d-flex justify-content-end" v-on:click.prevent="toAddForm">Add Product</button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col" class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <ListProducts
          v-for="(product, i) in products"
          :key="i"
          :product="product"
          :index="i"></ListProducts>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ListProducts from '../components/ListProducts'

export default {
  name: 'Home',
  components: {
    Navbar,
    ListProducts
  },
  methods: {
    toAddForm () {
      this.$router.push({ name: 'AddForm' })
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
