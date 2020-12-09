<template>
  <div class="editProduct">
      <h1>Edit Product</h1>
      <form @submit.prevent="editPost">
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="product.name"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input
          v-model="product.image_url"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          v-model="product.price"
          type="number"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input
          v-model="product.stock"
          type="number"
          class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProductPage',
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProduct')
    }
  }
}
</script>

<style>

</style>
