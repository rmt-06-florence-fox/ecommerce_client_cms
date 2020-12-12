<template>
  <div>
    <h1 class="text-center mt-5">Edit Product</h1>
    <form @submit.prevent="updateProduct">
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
      <button type="submit" class="btn btn-primary btn-center">Edit</button>
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
          this.product.name = response.data.product.name
          this.product.image_url = response.data.product.image_url
          this.product.price = response.data.product.price
          this.product.stock = response.data.product.stock
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    updateProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('updateProduct', payload)
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style></style>
