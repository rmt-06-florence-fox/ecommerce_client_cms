<template>
  <div class="mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <h1>Product List</h1>
      </div>
      <div class="row justify-content-end mr-5">
        <button class="btn btn-info text-right" @click="$router.push('/products/add')">Add Product</button>
      </div>
    </div>
    <ProductItem v-for="product in getProducts" :key="product.id" :product="product"></ProductItem>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'
export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    getProducts: function () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

</style>
