<template>
  <section class="section">
    <div class="container has-text-left">
      <h1 class="title has-text-centered"> Add Product</h1>
      <form action="" @submit.prevent='addProduct'>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input v-model="productName" class="input" type="text" placeholder="Product Name">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Image Url</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <input v-model="imageUrl" class="input" type="text" placeholder="Link Image">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Price</label>
          </div>
          <div class="field-body">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">Rp</a>
              </p>
              <p  class="control">
                <input v-model="productPrice" class="input" type="number" placeholder="Product Price">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Stock</label>
          </div>
          <div class="field-body">
            <div class="field has-addons">
              <p  class="control">
                <input v-model="productStock" class="input" type="number" placeholder="Product Stock">
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <button class="button is-primary">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// import axios from '../config/axiosInstance'
import Swal from 'sweetalert2'

export default {
  name: 'Add Product',
  data () {
    return {
      productName: '',
      productPrice: '',
      productStock: '',
      imageUrl: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.productName,
        image_url: this.imageUrl,
        price: this.productPrice,
        stock: this.productStock
      }
      this.$store.dispatch('addProduct', payload)
        .then(response => {
          console.log(response)
          Swal.fire({
            icon: 'success',
            title: 'Add Product Success',
            showConfirmButton: false,
            timer: 1000
          })

          const self = this
          setTimeout(function () {
            self.$router.push({ name: 'Dashboard' })
          }, 1100)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  }
}
</script>

<style>

</style>
