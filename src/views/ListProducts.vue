<template>
    <div class="container">
        <table class="table">
  <thead style="background-color: black; color: white;">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody style="background-color: rgba(80, 147, 179, 0.9)">
    {{allProducts.data}}
    <ProductCard v-for="(product, index) in allProducts" :key="index" :product="product" :index="index"></ProductCard>
  </tbody>
</table>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ListProducts',
  components: {
    ProductCard
  },
  methods: {
  },
  created: function () {
    this.$store.dispatch('fetchDataProducts')
  },
  computed: {
    allProducts: function () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
