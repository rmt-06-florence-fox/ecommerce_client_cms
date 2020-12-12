<template>
  <div class="row justify-content-md-center">
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
