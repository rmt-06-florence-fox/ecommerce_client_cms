<template>
  <div class="container">
    <div class="row">
      <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  methods: {
    getProducts () {
      this.$store.dispatch('getProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
