<template>
  <div class="container p-3 my-3 bg-dark text-white" id="form">
    <h2> Edit Product </h2>
    <form @submit.prevent="editData">
      <div class="form-group">
      <label for="name"> Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" v-model="name">
      </div>
      <div class="form-group">
      <label for="name"> Description:</label>
      <input type="text" class="form-control" id="description" placeholder="Enter description" name="description" v-model="description">
      </div>
      <div class="form-group">
      <label for="image_url"> Image Url:</label>
      <input type="text" class="form-control" id="image_url" placeholder="Enter image url" name="image_url" v-model="image_url">
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
      <button @click="editData" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'editProduct',
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
    fetchProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDataById', id)
        .then(({ data }) => {
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
          this.description = data.description
        })
        .catch(({ err }) => {
          console.log(err)
        })
    },
    editData () {
      const data = {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        description: this.description
      }
      this.$store.dispatch('editData', data)
        .then(({ data }) => {
          this.$router.push('/home')
        })
        .catch(({ err }) => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>
  .container {
    justify-content: space-around;
  }
</style>
