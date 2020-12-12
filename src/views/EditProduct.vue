<template>
  <section>
    <Navbar></Navbar>
    <div id="edit-form" class="container col-6" style="background-color: #f3a683; margin-bottom: 5%">
      <h1 class="text-center mt-5">Edit Product</h1>
        <form @submit.prevent="updateProduct" style="padding: 50px">
          <img :src="productById.image_url" alt="" style="margin-top: -5%">
          <div class="form-group mt-5">
            <label for="edit-image">Image Url</label>
            <input v-model="productById.image_url" type="text" placeholder="Image product" class="form-control" id="edit-image">
          </div>
          <div class="form-group">
            <label for="edit-name">Name</label>
            <input v-model="productById.name" type="text" placeholder="Name product" class="form-control" id="edit-name">
          </div>
          <div class="form-group">
            <label for="edit-price">Price</label>
            <input v-model="productById.price" type="number" placeholder="Price product" class="form-control" id="edit-price">
          </div>
          <div class="form-group">
            <label for="edit-stock">Stock</label>
            <input v-model="productById.stock" type="number" placeholder="Stock product" class="form-control" id="edit-stock">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-secondary mt-3">Edit</button>
          </div>
        </form>
    </div>
  </section>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'EditProduct',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    fetchById () {
      const id = this.$route.params.id
      this.$store.dispatch('findById', id)
    },
    updateProduct () {
      this.$store.dispatch('update', this.productById)
    }
  },
  created () {
    this.fetchById()
  },
  computed: {
    productById () {
      return this.$store.state.product
    }
  }
}
</script>

<style>
  #edit-form {
    font-family: 'Metal Mania', cursive;
    box-shadow: 0px 0px 3px;
    border-radius: 10px;
  }

</style>
