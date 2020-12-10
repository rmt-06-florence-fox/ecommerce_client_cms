<template>
  <div>
    <h1 class="text-center mt-5">Edit Product</h1>
    <form @submit.prevent="editProduct">
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Name"
          v-model="product.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Image URL"
          v-model="product.image_url"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Price"
          v-model="product.price"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Stock"
          v-model="product.stock"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('toEditPage', id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style></style>
