<template>
  <div class="listProduct">
      <h1>List Product</h1>
      <table>
          <thead>
              <tr>
                  <td>Image</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Stock</td>
                  <td>Action</td>
              </tr>
          </thead>
          <tbody>
              <dataProduct v-for="product in products" :key="product.id" :product="product"></dataProduct>
          </tbody>
      </table>
  </div>
</template>

<script>
import dataProduct from '../components/productList'
export default {
  name: 'ListProduct',
  components: { dataProduct },
  data () {
    return {

    }
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
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
