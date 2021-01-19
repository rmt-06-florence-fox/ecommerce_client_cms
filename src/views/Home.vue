<template>
  <div>
    <h1>List Product</h1>
    <button class="btn btn-primary btn-add p-1 mb-2" @click.prevent="addProduct">Add Product</button>
    <div class="container">
      <div class="row">
        <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    addProduct () {
      this.$router.push('/addProduct')
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>
