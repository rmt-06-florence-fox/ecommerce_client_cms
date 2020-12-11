<template>
<div class="container">
  <form @submit.prevent="createProduct">
    <div class="form-group">
      <label for="inputProductName">product name</label>
      <input
        v-model="inputProductName"
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
        v-model="inputImage"
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
        v-model="inputStock"
        type="number"
        class="form-control"
        id="inputStock"
        placeholder="input Stock name"
      >
      <small class="form-text text-muted">input Stock mu disini</small>
    </div>
    <div class="form-group">
      <label for="inputPrice">Price</label>
      <input
        v-model="inputPrice"
        type="number"
        class="form-control"
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
  name: 'AddForm',
  data () {
    return {
      inputProductName: '',
      inputImage: '',
      inputStock: 0,
      inputPrice: 0
    }
  },
  methods: {
    createProduct () {
      const payload = {
        name: this.inputProductName,
        image_url: this.inputImage,
        stock: +this.inputStock,
        price: +this.inputPrice
      }
      console.log(payload)
      this.$store.dispatch('createProduct', payload)
    }
  }
}
</script>

<style>

</style>
