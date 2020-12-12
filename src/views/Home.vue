<template>
  <div class="home">
    <router-view/>
    <div class="container" style="min-height: 100vh">
      <div style="height: 4.5rem"/>
      <h3 class="title is-3 pt-5 pl-5">List Products</h3>
      <div class="pl-5">
        <productSec v-for= "product in listProducts" :key= "product.id" :list= "product"/>
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
