<template>
  <div>
    <h2 class="text-center">Edit Product</h2>
    <form style="text-align:left;" class="mt-4" @submit.prevent="editProduct">
      <div class="form-group">
        <label for="name">Name: </label>
        <input
          class="form-control"
          type="text"
          placeholder="Name"
          id="name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="name">Image Url: </label>
        <input
          class="form-control"
          type="text"
          placeholder="Image Url"
          id="image-url"
          v-model="image_url"
        />
      </div>
      <div class="form-group">
        <label for="name">stock: </label>
        <input
          class="form-control"
          type="number"
          placeholder="stock"
          id="stock"
          v-model="stock"
        />
      </div>
      <div class="form-group">
        <label for="name">Price: </label>
        <input
          class="form-control"
          type="number"
          placeholder="Price"
          id="price"
          v-model="price"
        />
      </div>
      <button
        class="btn btn-block text-white"
        type="submit"
        style="background-color: #42b0f8"
      >
        Submit
      </button>
    </form>
    <!-- <br> -->
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    editProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        stock: this.stock,
        price: this.price,
        id: this.$route.params.id
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$swal(
            'Update Success',
            `Success Updating Product with id ${payload.id}`,
            'success'
          )
          this.$router.push({ name: 'Home' })
        })
        .catch(err => (
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
        ))
    },
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
        .then(({ data }) => {
          this.name = data.name
          this.image_url = data.image_url
          this.stock = data.stock
          this.price = data.price
        })
        .catch((err) => {
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
          this.$router.push({ name: 'Home' })
        })
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style>
</style>
