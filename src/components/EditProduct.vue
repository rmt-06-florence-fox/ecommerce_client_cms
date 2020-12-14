<template>
  <div class="container">
    <div class="row justify-content-center mt-5 mb-5">
      <h1>Edit Product</h1>
    </div>
    <div class="row-md justify-content-center">
      <form @submit.prevent="editProduct">
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
  name: 'EditProduct',
  data () {
    return {
      name: '',
      imageUrl: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    editProduct () {
      const idProduct = this.$router.currentRoute.params.id
      const payload = {
        idProduct,
        name: this.name,
        image_url: this.imageUrl,
        price: +this.price,
        stock: +this.stock
      }
      this.$store.dispatch('editProduct', payload)
    }
  },
  created () {
    this.$store.dispatch('fetchById', this.$router.currentRoute.params.id)
  },
  watch: {
    '$store.state.product': function () {
      this.name = this.$store.state.product.name
      this.imageUrl = this.$store.state.product.image_url
      this.price = this.$store.state.product.price
      this.stock = this.$store.state.product.stock
    }
  }
}

</script>

<style>

</style>
