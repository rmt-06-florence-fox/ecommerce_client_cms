<template>
  <div>
      <br><h1>List Product</h1><br>
      <br><table>
          <thead style="width: 200px;">
              <tr>
                  <th>Image</th>
                  <th style="width: 200px;">Name</th>
                  <th style="width: 200px;">Price</th>
                  <th style="width: 200px;">Stock</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody>
              <DataProduct v-for="product in products" :key="product.id" :product="product"></DataProduct>
          </tbody>
      </table>
  </div>
</template>

<script>
import DataProduct from '../components/productList'
export default {
  components: { DataProduct },
  name: 'ListProduct',
  data () {
    return {

    }
  },
  created () {
    // this.fetchProduct()
    this.$store.dispatch('fetchProduct')
  },
  computed: {
    products () {
      return this.$store.state.product
    }
  }
}
</script>

<style>

</style>
