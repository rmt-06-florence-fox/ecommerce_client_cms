<template>
  <b-list-group class="d-flex flex-column">
    <b-list-group-item v-for="banner in banners" :key="banner.id">
      <BannerCard :banner="banner" />
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import BannerCard from './banner-components/BannerCard.vue'
export default {
  name: 'BannerList',
  components: {
    BannerCard
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchBanners()
  }
}
</script>

<style>

</style>
