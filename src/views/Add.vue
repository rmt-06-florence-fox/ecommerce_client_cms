<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="p-5 bg-light shadow" style="width: 30%; height: 110%; border-radius: 10px;">
    <h2 class="text-center">Add new Product</h2>
    <img class="w-100" src="@/assets/undraw_fill_forms_yltj.png" alt="new product">
    <form class="mt-4" @submit.prevent="add">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" v-model="name" type="text" placeholder="product's name" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input class="form-control" v-model="description" type="text" placeholder="product's description" required>
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input class="form-control" type="number" v-model="stock" min="1" placeholder="available stock" required>
        </div>
        <div class="form-group">
          <label for="stock">Image</label>
          <input class="form-control" type="text" v-model="image" placeholder="product's image url" required>
        </div>
        <div class="form-group">
          <label for="stock">price</label>
          <input class="form-control" type="number" v-model="price" min="1" placeholder="product's price" required>
        </div>
        <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;"> Add</button>
        <button class="btn btn-block btn-danger" @click.prevent="cancel" > Cancel</button>
    </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Add',
  data () {
    return {
      image: '',
      stock: '',
      name: '',
      description: '',
      price: ''
    }
  },
  methods: {
    add () {
      //   console.log(this.image)
      console.log(this.description)
      console.log(this.name)
      const payload = {
        image: this.image,
        stock: this.stock,
        description: this.description,
        price: this.price,
        name: this.name
      }
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$store.dispatch('fetchProducts')
          this.$router.push({ name: 'Products' })
          Swal.fire({
            icon: 'success',
            title: 'Nice',
            text: 'Product sucessfully created'
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please do not leave any field empty'
          })
        })
    },
    cancel () {
      this.$router.push({ name: 'Products' })
    }
  }
}
</script>

<style>

</style>
