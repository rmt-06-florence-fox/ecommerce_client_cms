<template>
<div class="container item">
  <!-- {{products}} -->
  <!-- <ul> -->
  <ProductCard class="col-md-3 mt-4 mr-auto"
    v-for="product in products"
    :key="product.id"
    :products="product"> </ProductCard>
  <!-- <ul> -->
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
  justify-content: flex-start;
  align-self: auto;
  flex-wrap: wrap;
}
.item {
   align-self: auto;
}
</style>
