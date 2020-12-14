<template>
  <div class="container">
    <div class="row">
      <ProductCard
        v-for="product in getProducts" :key="product.id"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'

export default {
  name: 'ProductFetch',
  components: { ProductCard },
  computed: {
    getProducts () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
