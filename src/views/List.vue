<template>
  <div class="tebodi">
    <table class="table">
      <thead>
        <th>name</th>
        <th>price</th>
        <th>stock</th>
        <th>image</th>
        <th>action</th>
      </thead>
      <tbody>
        <Product v-for="product in products" :key="product.id" :product="product"></Product>
      </tbody>
    </table>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
export default {
  components: { Product },
  name: 'ListProduct',
  data () {
    return {

    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetch')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
.tebodi{
  height: 470px;
  overflow: scroll;
}
</style>
