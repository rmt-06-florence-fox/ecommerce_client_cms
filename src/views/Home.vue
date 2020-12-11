<template>
  <div class="home">
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem"/>
      <div class="columns p-5">
        <productSec class="column" v-for= "product in listProducts" :key= "product.id" :list= "product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import productSec from '../components/listProducts'

export default {
  name: 'Home',
  created () {
    this.$store.dispatch('fetchProduct')
  },
  components: {
    productSec
  },
  computed: {
    ...mapState({
      listProducts: 'listProducts'
    })
  }
}
</script>
