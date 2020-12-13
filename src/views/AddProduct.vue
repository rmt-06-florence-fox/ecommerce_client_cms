<template>
  <div class="container col-md-6">
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label>Name: </label>
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Image URL: </label>
        <input type="text" class="form-control" v-model="image_url">
      </div>
      <div class="form-group">
        <label>Price: </label>
        <input type="number" class="form-control" v-model="price">
      </div>
      <div class="form-group">
        <label>Stock: </label>
        <input type="number" class="form-control" v-model="stock">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
