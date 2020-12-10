<template>
<div class="container">
  <!-- {{products}} -->
  <ProductCard
    v-for="product in products"
    :key="product.id"
    :products="product"> </ProductCard>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ProductCard from './ProductCard.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style scoped>

.container {
  border-left-width: 40px;
}
</style>
