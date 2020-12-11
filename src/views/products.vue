<template>
<div>
  <ProductCard
    v-for="product in products.data"
    :key="product.id"
    :product="product"
  />
</div>
</template>

<script>
import ProductCard from '../components/productCard'
export default {
  name: 'products',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
    console.log('<===')
  }
}
</script>

<style>

</style>
