<template>
  <div>
    <h1>Product List</h1>
    <div class="container">
        <!-- <div class="row">
            <div class="col-12" v-if="embed">
                <iframe :src="embed" frameborder="0" width="100%" heigth="90"></iframe>
            </div>
        </div> -->
        <div class="row">
            <!-- <ProductCard v-for="product in products" :key="product.id" :product="product"/> -->
            <ProductCard />
        </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosInstance.js'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'Product',
  data () {
    return {
      products: [],
      embed: ''
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchProduct () {
      axios
        .get('/products')
        .then(({ data }) => {
          this.products = data
        })
        .catch(console.log)
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
