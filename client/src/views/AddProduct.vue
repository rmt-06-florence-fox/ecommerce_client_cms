<template>
  <div class="container-add card">
    <div class="card-header">
        <h1>Add New Product</h1>
    </div>
    <div class="card-body">
        <form @submit.prevent="addProduct">
            <div class="name mb-3">
                <h5>Name</h5>
                <input v-model="name" type="text" name="email" class="container-fluid">
            </div>
            <div class="image-url mb-3">
                <h5>Image Url</h5>
                <input v-model="image_url" type="text" name="email" class="container-fluid">
            </div>
            <div class="price mb-3">
                <h5>Price</h5>
                <input v-model="price" type="number" name="email" class="container-fluid">
            </div>
            <div class="stock mb-3">
                <h5>Stock</h5>
                <input v-model="stock" type="number" name="email" class="container-fluid">
            </div>
            <div class="button-login row">
                <button class="btn btn-primary mt-3">ADD</button>
                <button @click="backHome" class="btn btn-danger mt-3">Cancel</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  methods: {
    backHome () {
      this.$router.push('/')
    },
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addNewProduct', payload)
    }
  }
}
</script>

<style>

</style>
