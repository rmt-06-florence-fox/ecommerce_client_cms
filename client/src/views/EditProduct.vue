<template>
<div class="container-fluid" style="margin-top: 4em">
    <form
      @submit.prevent="editProduct"
      class="form-signin bg-dark text-light rounded shadow-lg text-center"
    >
      <h3>Edit Product</h3>
      <div class="form-group mt-3">
        <label for="product_name">Name</label>
        <input
          v-model="product.name"
          type="text"
          id="product_name"
          class="form-control"
          placeholder="Insert name here"
          required
        >
      </div>
      <div class="form-group">
        <label for="product_url">Image</label>
        <input
          v-model="product.image_url"
          type="url"
          id="product_url"
          class="form-control"
          placeholder="Insert url here"
          required
        >
      </div>
      <div class="form-group">
        <label for="product_price">Price</label>
        <input
          v-model="product.price"
          type="number"
          id="product_price"
          class="form-control"
          placeholder="Insert price here"
          required
        >
        <i>Price must be greater than 0</i>
      </div>
      <div class="form-group">
        <label for="product_stock">Stock</label>
        <input
          v-model="product.stock"
          type="number"
          id="product_stock"
          class="form-control"
          placeholder="Insert Stock here"
          required
        >
        <i>Stock must be greater than 0</i>
      </div>
      <button class="btn btn-red text-light" type="submit">Edit Product</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'EditProduct',
  data () {
    return {
      product: {}
    }
  },
  methods: {
    editProduct () {
      const payload = {
        id: +this.$route.params.id,
        product: this.product
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          this.$router.push({ name: 'Dashboard' })
          Toast.fire({
            icon: 'success',
            title: 'Product has been updated'
          })
        })
        .catch((err) => {
          if (err.response) {
            this.$store.commit('errorChange', err.response.data.msg)
          }
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong..',
            text: this.errorNotification
          })
        })
    },
    fetchProductById () {
      const id = +this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
        .then(({ data }) => {
          this.product = data
        })
        .catch(({ response }) => {
          if (response.status === 404) {
            this.$router.push({ name: 'NotFound' })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Something Went Wrong..',
              text: response.data.msg
            })
          }
        })
    }
  },
  computed: {
    errorNotification () {
      return this.$store.state.errorNotification
    }
  },
  created () {
    this.fetchProductById()
  }
}
</script>

<style scoped>
i{
  font-size: 12px;
}

.btn-red{
  background-color: #B22222;
}

.btn-red:hover{
  background-color: #1ccf1ccc;
}
</style>
