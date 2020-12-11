<template>
  <div>
    <h1>admin dashboard page</h1>
    <TableProduct
      :products="products"
    ></TableProduct>
  </div>
</template>

<script>
import TableProduct from '../components/TableProduct'

export default {
  name: 'Admin',
  components: {
    TableProduct
  },
  created () {
    this.$store.dispatch('fetchProduct')
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
