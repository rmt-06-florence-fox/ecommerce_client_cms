<template>
<div class="container">

<BannerCard class="col-md-3 mt-4 ml-10"
    v-for="banner in banners"
    :key="banner.id"
    :banners="banner"> </BannerCard>
</div>
</template>

<script>
import BannerCard from './BannerCard'
export default {
  name: 'Banner',
  components: {
    BannerCard
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
