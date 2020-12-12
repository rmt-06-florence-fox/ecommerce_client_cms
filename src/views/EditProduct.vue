<template>
  <div class="container col-md-6">
    <form @submit.prevent="updateProduct">
      <div class="form-group">
        <label>Name: </label>
        <input type="text" class="form-control" v-model="getDataById.name">
      </div>
      <div class="form-group">
        <label>Image URL: </label>
        <input type="text" class="form-control" v-model="getDataById.image_url">
      </div>
      <div class="form-group">
        <label>Price: </label>
        <input type="number" class="form-control" v-model="getDataById.price">
      </div>
      <div class="form-group">
        <label>Stock: </label>
        <input type="number" class="form-control" v-model="getDataById.stock">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    editProduct (id) {
      this.$store.dispatch('editProduct', id)
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', this.getDataById)
    }
  },
  computed: {
    getDataById () {
      return this.$store.state.productData
    }
  },
  created () {
    this.editProduct(+this.$route.params.id)
  }
}
</script>

<style>

</style>
