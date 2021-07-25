<template>
  <div>
    <h1 class="text-center mt-5">Edit Banner</h1>
    <form @submit.prevent="updateBanner">
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Title"
          v-model="banner.title"
        />
      <div class="form-group">
      </div>
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Status"
          v-model="banner.status"
        />
      <div class="form-group">
      </div>
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Image URL"
          v-model="banner.image_url"
        />
      <button type="submit" class="btn btn-primary btn-center">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
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
    fetchBannerById () {
      const id = this.$route.params.id
      this.$store.dispatch('toEditBannerPage', id)
        .then(response => {
          this.banner.title = response.data.banner.title
          this.banner.status = response.data.banner.status
          this.banner.image_url = response.data.banner.image_url
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    updateBanner () {
      const payload = {
        id: this.$route.params.id,
        title: this.banner.title,
        status: this.banner.status,
        image_url: this.banner.image_url
      }
      this.$store.dispatch('updateBanner', payload)
    }
  },
  created () {
    this.fetchBannerById()
  }
}
</script>

<style></style>
