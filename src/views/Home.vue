<template>
  <div class="home">
    <!-- {{ productsData.data.length }} -->
    <div class="container w-50">
      <div class="row">
        <ProductCard
        class="mt-2"
        v-for="product in productsData.data"
        :key="product.id"
        :product="product">
        </ProductCard>
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
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    productsData () {
      return this.$store.state.products
    }
  }
}
</script>
