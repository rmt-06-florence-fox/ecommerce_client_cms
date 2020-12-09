<template>
  <div class="listProduct">
      <h1>List Product</h1>
      <div class="container">
          <div class="row">
              <ListItems
                v-for="data in listProducts" :key='data.id'
                :data="data"
              ></ListItems>
          </div>
      </div>
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
      console.log(`${this.$store.state.listProducts}`)
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
