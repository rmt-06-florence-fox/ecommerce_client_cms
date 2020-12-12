<template>
  <div class="editBanner">
      <form @submit.prevent="editPostBanner">
      <div class="form-group">
        <label>Title</label>
        <input
          v-model="banner.title"
          type="text"
          class="form-control">
      </div>
      <label>Status</label>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input
          v-model="banner.status"
          type="radio"
          id="active"
          name="status"
          value="active"
          class="form-check-input">
          <label class="form-check-label">Active</label>
        </div>
        <div class="form-check form-check-inline">
          <input
          v-model="banner.status"
          type="radio"
          id="active"
          name="status"
          value="inactive"
          class="form-check-input">
          <label class="form-check-label">Inactive</label>
        </div>
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input
          v-model="banner.image_url"
          type="text"
          class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditBannerPage',
  data () {
    return {
      pageName: 'Edit Banner'
    }
  },
  computed: {
    banner () {
      return this.$store.state.banner
    }
  },
  methods: {
    getBanner () {
      const id = this.$route.params.idBanner
      this.$store.dispatch('getBanner', id)
    },
    editPostBanner () {
      const payload = {
        id: this.banner.id,
        title: this.banner.title,
        status: this.banner.status,
        image_url: this.banner.image_url
      }
      this.$store.dispatch('editPostBanner', payload)
    },
    setPage () {
      this.$store.commit('setPage', this.pageName)
    }
  },
  created () {
    this.getBanner()
    this.setPage()
  }
}
</script>

<style>
</style>
