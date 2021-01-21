<template>
  <table
    v-if="banners.length"
    class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <BannerItem
      v-for="(banner, i) in banners"
      :key="banner.id"
      :banner="banner"
      :i="i+1"></BannerItem>
    </tbody>
  </table>
  <div v-else>
    <h1>Data Not Found</h1>
  </div>
</template>

<script>
import BannerItem from './BannerItem.vue'
export default {
  name: 'BannersTabel',
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
