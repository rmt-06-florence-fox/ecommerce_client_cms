<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="p-5 bg-light shadow" style="width: 30%; height: 90%; border-radius: 10px;">
    <h2 class="text-center">Edit Banner</h2>
    <img class="w-100" src="@/assets/undraw_fill_forms_yltj.png" alt="new banner">
    <form class="mt-4" @submit.prevent="editBanner">
        <div class="form-group">
          <label for="name">Title</label>
          <input class="form-control" v-model="title" type="text" placeholder="banner's title" required>
        </div>
        <div class="form-group">
          <label for="last_name">Status</label>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Options</label>
              </div>
              <select v-model="status" class="custom-select" id="inputGroupSelect01">
                <option selected disabled>Banner status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
        </div>
        <div class="form-group">
          <label for="stock">Image</label>
          <input class="form-control" type="text" v-model="image_url" placeholder="banner's image url" required>
        </div>
        <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;"> Edit</button>
        <button class="btn btn-block btn-danger" @click.prevent="cancel" > Cancel</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBanner',
  data () {
    return {
      title: this.$store.state.titleEdit,
      image_url: this.$store.state.image_urlEdit,
      status: this.$store.state.statusEdit
    }
  },
  methods: {
    cancel () {
      this.$router.push({ name: 'Banners' })
    },
    editBanner () {
      const payload = {
        title: this.title,
        image_url: this.image_url,
        status: this.status
      }
      this.$store.dispatch('editBanner', payload)
        .then(() => {
          this.$router.push({ name: 'Banners' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
