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
      <div class="form-group">
        <label>Status</label>
        <input
          v-model="status"
          type="radio"
          id="active"
          name="status"
          class="form-control"
          value="active">
          <label>Active</label>
        <input
          v-model="status"
          type="radio"
          id="active"
          name="status"
          class="form-control"
          value="inactive">
          <label>Inactive</label>
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
