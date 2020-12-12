<template>
  <div class="container p-3 my-3 bg-dark text-white" id="form">
    <h2> Edit Product </h2>
    <form action="/home">
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
  computed: {
    name: {
      get () {
        return this.$store.state.product.name
      },
      set (data) {
        this.$store.commit('updateName', data)
      }
    },
    image_url: {
      get () {
        return this.$store.state.product.image_url
      },
      set (data) {
        this.$store.commit('updateImage_url', data)
      }
    },
    price: {
      get () {
        return this.$store.state.product.price
      },
      set (data) {
        this.$store.commit('updatePrice', data)
      }
    },
    stock: {
      get () {
        return this.$store.state.product.stock
      },
      set (data) {
        this.$store.commit('updateStock', data)
      }
    },
    description: {
      get () {
        return this.$store.state.product.description
      },
      set (data) {
        this.$store.commit('updateDescription', data)
      }
    }
  },
  methods: {
    fetchProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDataById', id)
    },
    editData () {
      const id = this.$route.params.id
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editData', id, data)
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
