<template>
  <div class="container ui">
    <Navbar/>
    <div class="doubling stackable three column ui grid container">
      <div class="column" v-for="banner in banners" :key="banner.id">
        <div class="ui card">
          <div class="image">
            <img :src="banner.image_url">
          </div>
          <div class="content">
            <div class="header">{{ banner.title }}</div>
            <div class="meta">
              <a>{{ banner.status }}</a>
            </div>
          </div>
          <div class="extra content">
            <a class="left floated" @click="goToEditBanner(`/edit-banner/${banner.id}`)">
              <i class="pencil icon"></i>
              Edit
            </a>
            <a class="right floated" @click="deleteBanner(banner.id)">
              <i class="trash icon"></i>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'BannerPage',
  components: {
    Navbar
  },
  methods: {
    fetchAllBanners () {
      this.$store.dispatch('fetchAllBanners')
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
      this.fetchAllBanners()
    },
    goToEditBanner (route) {
      this.$router.push(route)
    }
  },
  created () {
    this.fetchAllBanners()
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
