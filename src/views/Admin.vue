<template>
  <div>
    <h1>admin dashboard page</h1>
    <button
      type="button"
      class="btn btn-primary btn-sm mb-3"
      @click.prevent="createProduct"
    >create</button>
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
  methods: {
    createProduct () {
      this.$router.push('/addform')
    }
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
