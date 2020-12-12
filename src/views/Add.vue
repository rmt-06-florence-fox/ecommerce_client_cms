<template>
  <div class="container-add">
    <form @submit.prevent="addProduct">
      <h3>Add new Products</h3>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="name" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Image URL</label>
        <input v-model="image_url" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Price</label>
        <input v-model="price" type="number" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Stock</label>
        <input v-model="stock" type="number" class="form-control">
      </div>
      <button type="submit" class="btn btn-outline-dark">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPage',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
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
      console.log(payload)
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>
.container-add {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
}
</style>
