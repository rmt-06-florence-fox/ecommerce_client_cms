<template>
  <table
    v-if="products.length"
    class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Price</th>
        <th scope="col">Stock</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <ProductItem
      v-for="(product, i) in products"
      :key="product.id"
      :product="product"
      :i="i+1"></ProductItem>
    </tbody>
  </table>
  <div v-else>
    <h1>Data Not Found</h1>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'ProductsCard',
  components: { ProductItem },
  data () {
    return {
      pageName: 'Home'
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
    setPage () {
      this.$store.commit('setPage', this.pageName)
    }
  },
  created () {
    this.fetchProducts()
    this.setPage()
  }
}
</script>

<style>
</style>
