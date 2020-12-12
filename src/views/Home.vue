<template>
  <div class="home">
    <Navbar/>
    <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/822/4281206822_be209932-fad6-4caa-8203-807240681ada.png?cb=1607775908" style="margin-top: 70px;">
    <div class="row col-8 mx-auto">
      <ProductCard
        v-for="Product in products"
        :key="Product.id"
        :product="Product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import ProductCard from '@/components/ProductCard.vue'

export default {
  data () {
    return {
      productsList: 'awal'
    }
  },
  components: {
    Navbar,
    ProductCard
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.productList
    }
  }
}
</script>

<style>

</style>
