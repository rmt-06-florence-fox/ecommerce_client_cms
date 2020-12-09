<template>
  <div class="banner">
      <NavBar />
      <h1>Banners </h1>
      <button class="btn btn-primary mt-3 mb-3" @click="goToAddBanner">add new banner</button>
      <BannerCard
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
      />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import BannerCard from '../components/BannerCard'
export default {
  name: 'Banners',
  components: {
    NavBar,
    BannerCard
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      console.log(this.$store.state.banners)
      this.$store.dispatch('fetchBanners')
    },
    goToAddBanner () {
      this.$router.push({ name: 'AddBanner' })
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
