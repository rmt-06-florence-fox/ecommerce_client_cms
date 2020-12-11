<template>
  <div class="home">
    <navbar></navbar>
    <h1>This is Main Page</h1>
    <addProduct></addProduct>
    <product v-for="product in getProduct" :key="product.id" :product="product"></product>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/navbar.vue'
import addProduct from '../components/addProduct.vue'
import product from '../components/product.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    addProduct,
    product
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    getProduct () {
      return this.$store.state.products
    }
  }
}
</script>
