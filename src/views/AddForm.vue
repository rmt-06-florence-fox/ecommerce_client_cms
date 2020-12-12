<template>
  <div>
    <img src="../assets/pattern-bg.jpg" alt="" id="bg">
      <form @submit.prevent="addProduct">
        <div class="form-group">
            <label for="exampleInputEmail1">Name :</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="name" placeholder="Input your product name here">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Image Url :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="image_url" placeholder="Input your product image url here">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Price :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="price" placeholder="Input your product price here">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Stock :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="stock" placeholder="Input your product stock here">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'add',
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
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style >
form {
  width: 75%;
  margin-left: 13%;
}
</style>
