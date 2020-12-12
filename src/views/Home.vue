<template>
  <div>
    <div class="bg-secondary container-fluid">
      <div class="row justify-content-center align-self-center p-2">
        <h1 class="text-dark">ADMIN PANEL E-COMMERCE</h1>
      </div>
    </div>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  methods: {
    fetchAllProduct () {
      this.$store.dispatch('fetchAllProduct')
    },
    fetchAllCategory () {
      this.$store.dispatch('fetchAllCategory')
    },
    fetchAllBanner () {
      this.$store.dispatch('fetchAllBanner')
    }
  },
  created () {
    this.fetchAllProduct()
    this.fetchAllCategory()
    this.fetchAllBanner()
  }
}
</script>

<style>
</style>
