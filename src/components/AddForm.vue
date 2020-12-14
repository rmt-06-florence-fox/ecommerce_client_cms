<template>
  <div class="container mt-2">
    <form @submit.prevent="add">
      <div class="form-group">
        <input type="text" class="form-control" id="name" v-model="name" placeholder="Product Name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="stock" v-model="stock" placeholder="Product Stock">
      </div>
      <div class="form-group">
        <input type="text"
          class="form-control"
          id="price"
          v-model="price"
          placeholder="Product price e.g. 200000">
      </div>
      <div class="form-group">
        <input type="text"
          class="form-control"
          id="price"
          v-model="image_url"
          placeholder="Product image url">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="button" @click.prevent="cancel" class="btn btn-danger ml-2">Cancel</button>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'AddForm',
  data () {
    return {
      name: '',
      stock: '',
      price: '',
      image_url: ''
    }
  },
  methods: {
    cancel () {
      this.$store.commit('addFormShow')
    },
    add () {
      const payload = {
        name: this.name,
        stock: this.stock,
        price: this.price,
        image_url: this.image_url
      }
      this.$store.dispatch('addProduct', payload)
        .then((response) => {
          this.$store.dispatch('fetchProduct')
          this.$store.commit('addFormShow')
          Swal.fire({
            icon: 'success',
            title: 'Product Added!'
          })
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
  }
}
</script>

<style>

</style>
