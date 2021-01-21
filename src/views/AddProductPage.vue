<template>
  <div class="addProduct">
    <form @submit.prevent="add">
      <div class="form-group">
        <label>Name</label>
        <input
          v-model="name"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Image Url</label>
        <input
          v-model="image_url"
          type="text"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          v-model="price"
          type="number"
          class="form-control">
      </div>
      <div class="form-group">
        <label>Stock</label>
        <input
          v-model="stock"
          type="number"
          class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProductPage',
  data () {
    return {
      pageName: 'Add Product',
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    add () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    },
    setPage () {
      this.$store.commit('setPage', this.pageName)
    }
  },
  created () {
    this.setPage()
  }
}
</script>

<style>
</style>
