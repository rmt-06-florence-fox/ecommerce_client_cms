<template>
  <form @submit.prevent="edit">
    <div class="form-group">
      <label for="name">Product Name</label>
      <input type="text" class="form-control" id="name" v-model="name">
    </div>
    <div class="form-group">
      <label for="name">Product Stock</label>
      <input type="text" class="form-control" id="stock" v-model="stock">
    </div>
    <div class="form-group">
      <label for="name">Product Price</label>
      <input type="text"
        class="form-control"
        id="price"
        v-model="price">
    </div>
    <div class="form-group">
      <label for="name">Product Image Url</label>
      <input type="text"
        class="form-control"
        id="price"
        v-model="image_url">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" @click.prevent="cancel" class="btn btn-danger ml-2">Cancel</button>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'EditForm',
  props: ['product'],
  data () {
    return {
      name: this.product.name,
      stock: this.product.stock,
      price: this.product.price,
      image_url: this.product.image_url
    }
  },
  methods: {
    cancel () {
      this.$store.dispatch('editProduct', null)
    },
    edit () {
      const payload = {
        name: this.name,
        stock: this.stock,
        price: this.price,
        image_url: this.image_url
      }
      const id = this.product.id
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure want to edit this product?',
        showCancelButton: true,
        confirmButtonText: 'A hundred percent sure',
        cancelButtonText: 'Actually, no',
        cancelButtonColor: 'red'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('edit', { payload, id })
              .then(() => {
                Swal.fire({
                  icon: 'success',
                  title: 'Edited!'
                })
                this.$store.dispatch('fetchProduct')
                this.$store.dispatch('editProduct', null)
              })
              .catch((error) => {
                if (error.response.status === 400) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oppss...',
                    text: `${error.response.data.error[0]}`
                  })
                } else if (error.response.status === 401) {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oppss...',
                    text: `${error.response.data.message}`
                  })
                }
                console.log(error.response)
              })
          }
        })
    }
  }
}
</script>

<style>

</style>
