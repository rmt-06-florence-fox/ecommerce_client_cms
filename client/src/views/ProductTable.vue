<template>
  <div>
    <section class="table-product container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <ProductList v-for="(product, index) in products" :key="index" :index="index" :product="product"></ProductList>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  name: 'ProductTable',
  components: {
    ProductList
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchData')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
