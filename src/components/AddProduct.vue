<template>
  <div class="container">
    <div class="row justify-content-center mt-5 mb-5">
      <h1>Add New Product</h1>
    </div>
    <div class="row-md justify-content-center">
      <form @submit.prevent="addProduct">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input type="text" name="name" id="name" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label for="imageUrl">Image Url</label>
          <input type="text" name="imageUrl" id="imageUrl" class="form-control" v-model="imageUrl">
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" name="price" id="price" class="form-control" v-model="price">
        </div>
        <div class="form-group">
          <label for="stock">Stock</label>
          <input type="number" name="stock" id="stock" class="form-control" v-model="stock">
        </div>
        <div class="form-group text-right">
          <button class="btn btn-success mx-3">Submit</button>
          <button class="btn btn-danger" @click.prevent="$router.push('/products')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      imageUrl: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
