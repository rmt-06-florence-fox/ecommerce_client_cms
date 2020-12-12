<template>
  <div
    v-if="banners.length"
    class="row justify-content-md-center">
      <BannerItem
      v-for="banner in banners"
      :key="banner.id"
      :banner="banner"></BannerItem>
  </div>
  <div v-else>
    <h1>Data Not Found</h1>
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'BannersCard',
  components: { BannerItem },
  data () {
    return {
      pageName: 'Banners'
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    setPage () {
      this.$store.commit('setPage', this.pageName)
    }
  },
  created () {
    this.fetchBanners()
    this.setPage()
  }
}
</script>

<style>
</style>
