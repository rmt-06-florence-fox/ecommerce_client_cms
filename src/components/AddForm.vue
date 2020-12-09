<template>
<div class="container justify-content-center">
    <form @submit.prevent="addProduct">
    <div class="form-group">
      <label >Name</label>
      <input v-model="name" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Category</label>
      <input v-model="category" type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Stock</label>
      <input v-model="stock" type="number" class="form-control">
    </div>
    <div class="form-group">
      <label>Price</label>
      <input v-model="price" type="number" class="form-control">
    </div>
    <div class="form-group">
      <label>Image URL</label>
      <input v-model="image_url" type="text" class="form-control">
    </div>
    <div class="row justify-content-center">
      <button type="submit" class="btn btn-info">Submit</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        category: this.category,
        stock: this.stock,
        price: this.price,
        image_url: this.image_url
      }
      this.$store.dispatch('postProduct', data)
    }
  },
  data () {
    return {
      name: '',
      image_url: '',
      category: '',
      stock: '',
      price: ''
    }
  }
}
</script>

<style>

</style>
