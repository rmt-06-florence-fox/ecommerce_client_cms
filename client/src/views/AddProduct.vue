<template>
<div>
  <form @submit.prevent="addData" class="addproduct">
    <div class="form-floating mb-3">
      <input  v-model="name" type="text" class="form-control" id="name" placeholder="Produk Name" >
      <label for="name" id="name" >Name</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="image_url" type="text" class="form-control" id="image_url" placeholder="Image-Url">
      <label for="image_url">Image URL</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="stock" type="number" class="form-control" id="stock" placeholder="2">
      <label for="stock">Stock</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="price" type="text" class="form-control" id="price" placeholder="20000">
      <label for="price">Price</label>
      <button type="sumbit" class="btn btn-outline-success"> Submit </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  pageName: 'AddPage',
  data () {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    addData () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        stock: this.stock,
        price: this.price
      }
      console.log(data)
      this.$store.dispatch('addData', data)
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
