<template>
  <div class="card col-md-5 login-form mt-3">
    <img :src="image_url" class="card-img-top" alt="Cart Logo" height="200px" width="1500px">
    <div class="card-body p-0">
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Name</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="name" required>
      </div>
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Image URL</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="image_url" required>
      </div>
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Price</span>
        </div>
        <input type="number" class="form-control" aria-describedby="basic-addon3" v-model="price" required>
      </div>
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Stock</span>
        </div>
        <input type="number" class="form-control" aria-describedby="basic-addon3" v-model="stock" required>
      </div>
    </div>
    <button type="button" class="btn btn-primary col-3 p-1 mb-2 btn-add" @click.prevent="addProduct">Add Product</button>
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
      const obj = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', obj)
        .then(response => {
          console.log(response)
          this.$router.push('/home')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    picture: () => {
      return this.image_url
    }
  }
}
</script>

<style>

</style>
