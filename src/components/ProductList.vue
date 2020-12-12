<template>
 <div>
    <b-card-group deck class="row justify-content-center" id="product-list">
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product" />
    </b-card-group>
 </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
#product-list {
    min-height: 100%;
    background: rgb(229,242,233);
    background: linear-gradient(90deg, rgba(229,242,233,1) 0%, rgba(29,253,32,0.367) 23%, rgba(0,0,0,1) 100%);
}
</style>
