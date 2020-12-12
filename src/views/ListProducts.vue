<template>
  <div class="listProduct">
      <h1>List Product</h1>
      <table class='table'>
        <thead class='thead-dark'>
          <tr>
            <td>Image</td>
            <td>Name Product</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <ListItems
            v-for="data in listProducts"
            :key='data.id'
            :data='data'
          ></ListItems>
        </tbody>
      </table>
  </div>
</template>

<script>
import ListItems from '../components/ListItems'
export default {
  name: 'ListProducts',
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  components: {
    ListItems
  },
  computed: {
    listProducts () {
      return this.$store.state.listProducts.data
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
