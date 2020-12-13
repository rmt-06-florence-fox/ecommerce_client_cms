<template>
    <div class="container rounded-lg text-white">
        <div class="row content d-flex justify-content-center">
            <div class="col-md-4" style="background-color: rgba(120, 212, 255, 0.8); color: black;">
                <h3 class="m-3">Add Product</h3>
                <form @submit.prevent="addProduct">
                    <div class="m-4">
                        <label for="">Name</label>
                        <input v-model="name" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Image URL</label>
                        <input v-model="imageURL" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Price</label>
                        <input v-model="price" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Stock</label>
                        <input v-model="stock" type="text" class="form-control">
                    </div>
                    <button class="btn btn-outline-dark m-2">Add</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      imageURL: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const data = {
        name: this.name,
        image_url: this.imageURL,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', data)
    }
  }
}
</script>

<style>

</style>
