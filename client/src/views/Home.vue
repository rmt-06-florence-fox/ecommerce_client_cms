<template>
  <div class="home">
    <router-view/>
    <div class="container-product row">
      <ProductCard
        v-for="(product,index) in productData.data"
        :key="index"
        :product="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>

import ProductCard from '../components/ProductCard.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  created () {
    this.$store.dispatch('fetchData')
  },
  computed: {
    ...mapState({
      productData: 'productData'
    })
  }

}
</script>
