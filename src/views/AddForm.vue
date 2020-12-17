<template>
<div class="container d-flex justify-content-center mt-5">
  <div class="card col-md-5" style="background-color:white; border-color:black;">
    <div class="card-body">
      <h4><strong>ADD FORM</strong></h4>
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
          <label for="inputImage">Image url</label>
          <input
            v-model="inputImage"
            type="text"
            class="form-control"
            id="inputImage"
            placeholder="input ImageURL"
          >
          <small class="form-text text-muted">input ImageURL mu disini</small>
        </div>
        <div class="form-group">
          <label for="inputStock">Stock</label>
          <input
            v-model="inputStock"
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
            v-model="inputPrice"
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
  </div>
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
