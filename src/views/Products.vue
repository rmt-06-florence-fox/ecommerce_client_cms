<template>
  <div class="products">
    <NavBar />
    <h1>Products</h1>
    <div class="container">
      <div class="row">
        <div class="col-12">embed </div>
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="ml-3"
          @fetchProducts=fetchProducts
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'Product',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductCard,
    NavBar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
