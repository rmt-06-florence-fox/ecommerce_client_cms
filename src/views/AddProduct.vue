<template>
  <div>
        <h1 class="text-center mt-5">Add Product</h1>
        <form @submit.prevent="addProduct">
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Name"
                v-model="product.name"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Image URL"
                v-model="product.image_url"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Price"
                v-model="product.price"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Stock"
                v-model="product.stock"
                ></div>
            <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.product.name,
        image_url: this.product.image_url,
        price: this.product.price,
        stock: this.product.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>

</style>
