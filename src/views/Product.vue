<template>
<div class="row">
  <Card
  v-for="product in products"
  :key="product.id"
  :product="product"
  />
</div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'ProductPage',
  components: {
    Card
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
