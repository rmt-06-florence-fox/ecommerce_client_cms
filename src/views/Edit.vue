<template>
  <div class="container-edit">
      <form @submit.prevent="updateProduct">
        <h3>Edit Products</h3>
      <div class="mb-3">
          <label for="name">Name: </label>
          <input v-model="name" type="text" class="form-control">
      </div>
      <div class="mb-3">
          <label for="image_url">Image URL:</label>
          <input v-model="image_url" type="text" class="form-control">
      </div>
      <div class="mb-3">
          <label for="price">Price:</label>
          <input v-model="price" type="number" class="form-control">
      </div>
      <div class="mb-3">
          <label for="stock">Stock:</label>
          <input v-model="stock" type="number" class="form-control">
      </div>
      <button type="submit" class="btn btn-outline-dark">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'EditPage',
  data () {
    return {
      id: this.$route.params.id,
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('getEditProduct', this.$route.params.id)
    },
    updateProduct () {
      const payload = {
        id: this.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      console.log(payload)
      this.$store.dispatch('updateProduct', payload)
    }
  },
  computed: {
    editProduct () {
      return this.$store.state.editedProduct
    }
  },
  created () {
    this.fetchProduct()
    console.log('awal ini')
  },
  watch: {
    editProduct (val) {
      this.name = val.name
      this.image_url = val.image_url
      this.price = val.price
      this.stock = val.stock
    }
  }
}
</script>

<style>
.container-edit {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-family: "Courier New", Courier, monospace;
}
</style>
