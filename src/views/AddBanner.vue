<template>
  <div>
        <h1 class="text-center mt-5">Add Banner</h1>
        <form @submit.prevent="addBanner">
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="banner.title"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Status"
                v-model="banner.status"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Image URL"
                v-model="banner.image_url"
                ></div>
            <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      banner: {
        title: '',
        status: '',
        image_url: ''
      }
    }
  },
  methods: {
    addBanner () {
      const payload = {
        title: this.banner.title,
        status: this.banner.status,
        image_url: this.banner.image_url
      }
      this.$store.dispatch('addBanner', payload)
    }
  }
}
</script>

<style>

</style>
