<template>
  <div class="container">
    <h1>edit form</h1>
    <form @submit.prevent="editProduct">
    <div class="form-group">
      <label for="inputProductName">product name</label>
      <input
        v-model="product.name"
        type="text"
        class="form-control"
        id="inputProductName"
        placeholder="input product name"
        >
      <small class="form-text text-muted">input product mu disini</small>
    </div>
    <div class="form-group">
      <label for="inputImage">Image name</label>
      <input
        v-model="product.image_url"
        type="text"
        class="form-control"
        id="inputImage"
        placeholder="input Image name"
      >
      <small class="form-text text-muted">input Image mu disini</small>
    </div>
    <div class="form-group">
      <label for="inputStock">Stock</label>
      <input
        v-model="product.stock"
        type="number"
        class="form-control"
        id="inputStock"
        min="0"
        placeholder="input Stock name"
      >
      <small class="form-text text-muted">input Stock mu disini</small>
    </div>
    <div class="form-group">
      <label for="inputPrice">Price</label>
      <input
        v-model="product.price"
        type="number"
        class="form-control"
        min="0"
        id="inputPrice"
        placeholder="input Price name"
      >
      <small class="form-text text-muted">input Price mu disini</small>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    const id = +this.$route.params.id
    // console.log(id)
    this.$store.dispatch('editProduct', id)
  },
  methods: {
    editProduct () {
      this.$store.dispatch('updateProduct', this.product)
    }
  }
}
</script>

<style>

</style>
