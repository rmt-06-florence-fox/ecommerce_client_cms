<template>
  <section>
    <Navbar></Navbar>
    <div id="edit-form" class="container col-6" style="background-color: #f3a683; margin-bottom: 5%">
      <h1 class="text-center mt-5">Edit Product</h1>
        <form @submit.prevent="updateProduct" style="padding: 50px">
          <img :src="populate.image_url" alt="" style="margin-top: -5%">
          <div class="form-group mt-5">
            <label for="edit-image">Image Url</label>
            <input v-model="image_url" type="text" placeholder="Image product" class="form-control" id="edit-image">
          </div>
          <div class="form-group">
            <label for="edit-name">Name</label>
            <input v-model="name" type="text" placeholder="Name product" class="form-control" id="edit-name">
          </div>
          <div class="form-group">
            <label for="edit-price">Price</label>
            <input v-model="price" type="number" placeholder="Price product" class="form-control" id="edit-price">
          </div>
          <div class="form-group">
            <label for="edit-stock">Stock</label>
            <input v-model="stock" type="number" placeholder="Stock product" class="form-control" id="edit-stock">
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
import axios from '../config/axiosInstance'

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
      stock: '',
      populate: []
    }
  },
  methods: {
    fetchById () {
      const id = this.$route.params.id
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data, '<<<<<< yoi')
          this.name = data.name
          this.image_url = data.image_url
          this.price = data.price
          this.stock = data.stock
          this.populate = data
        })
        .catch(err => {
          console.log(err.name)
        })
    },
    updateProduct () {
      const id = this.$route.params.id
      axios({
        method: 'PUT',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: this.name,
          image_url: this.image_url,
          price: this.price,
          stock: this.stock
        }
      })
        .then(({ data }) => {
          this.$router.push('/products')
        })
        .catch(err => {
          console.log(err.name)
        })
    }
  },
  created () {
    this.fetchById()
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
