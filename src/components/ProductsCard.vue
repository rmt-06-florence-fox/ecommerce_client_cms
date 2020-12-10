<template>
  <div>
    <h2>Produd</h2>
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"></ProductItem>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'ProductsCard',
  components: { ProductItem },
  computed: {
    products () {
      return this.$store.state.products
    }
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

<style>

</style>
