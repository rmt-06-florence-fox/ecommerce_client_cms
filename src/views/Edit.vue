<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="p-5 bg-light shadow" style="width: 30%; height: 115%; border-radius: 10px;">
    <h2 class="text-center">Edit Product</h2>
    <img class="w-100" src="@/assets/undraw_edit_photo_2m6o.png" alt="new product">
    <form class="mt-4" @submit.prevent="edit">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" v-model="name" type="text" placeholder="product's name" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea class="form-control" v-model="description" type="text" placeholder="product's description" required>
          </textarea>
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
        <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;"> Edit</button>
        <button class="btn btn-block btn-danger" @click.prevent="cancel" > Cancel</button>
    </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Edit',
  data () {
    return {
      image: this.$store.state.imageEdit,
      stock: Number(this.$store.state.stockEdit),
      name: this.$store.state.nameEdit,
      description: this.$store.state.descriptionEdit,
      price: Number(this.$store.state.priceEdit)
    }
  },
  methods: {
    edit () {
      //   console.log(this.image)
      console.log(this.description)
      console.log(this.name)
      const payload = {
        image: this.image,
        stock: this.stock,
        name: this.name,
        description: this.description,
        price: this.price
      }
      this.$store.dispatch('editProduct', payload)
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Nice',
            text: 'Product sucessfully created'
          })
          this.$router.push({ name: 'Products' })
        })
        .catch(err => {
          console.log(err, 'masuk ke sini')
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
