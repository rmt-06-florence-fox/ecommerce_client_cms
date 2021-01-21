<template>
  <div class="addBanner">
    <form @submit.prevent="add">
      <div class="form-group">
        <label>Title</label>
        <input
          v-model="title"
          type="text"
          class="form-control">
      </div>
      <label>Status</label>
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input
          v-model="status"
          type="radio"
          id="active"
          name="status"
          value="active"
          class="form-check-input">
          <label class="form-check-label">Active</label>
        </div>
        <div class="form-check form-check-inline">
          <input
          v-model="status"
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
          v-model="image_url"
          type="text"
          class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddBannerPage',
  data () {
    return {
      pageName: 'Add Banner',
      title: '',
      status: '',
      image_url: ''
    }
  },
  methods: {
    add () {
      const payload = {
        title: this.title,
        status: this.status,
        image_url: this.image_url
      }
      this.$store.dispatch('addBanner', payload)
    },
    setPage () {
      this.$store.commit('setPage', this.pageName)
    }
  },
  created () {
    this.setPage()
  }
}
</script>

<style>
</style>
