<template>
  <div class="container p-3 my-3 bg-dark text-white" id="form">
    <h2> Add Product </h2>
    <form @submit.prevent="createProduct">
      <div class="form-group">
      <label for="name"> Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" v-model="name">
      </div>
      <div class="form-group">
      <label for="image_url"> Image Url:</label>
      <input type="text" class="form-control" id="image_url" placeholder="Enter image url" name="image_url" v-model="image_url">
      </div>
       <div class="form-group">
      <label for="image_url"> Description:</label>
      <input type="text" class="form-control" id="image_url" placeholder="Enter description" name="description" v-model="description">
      </div>
      <div class="form-group">
      <label for="price"> Price:</label>
      <input type="number" class="form-control" id="price" placeholder="Enter price" name="price" v-model="price">
      </div>
      <div class="form-group">
      <label for="stock"> Stock:</label>
      <input type="number" class="form-control" id="stock" placeholder="Enter stock" name="stock" v-model="stock">
      </div>
      <div class="form-group form-check">
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      description: ''
    }
  },
  methods: {
    createProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        description: this.description
      }
      this.$store.dispatch('createProduct', payload)
        .then(({ data }) => {
          this.$router.push('/home')
        })
        .catch(({ err }) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
