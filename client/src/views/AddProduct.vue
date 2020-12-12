<template>
  <div class="container-fluid bg-light" style="margin-top: 4em">
    <div class="row">
      <div class="col-6">
        <img src="../assets/add.png" alt="#" width="80%" style="margin-left:10em; margin-top: 5em">
      </div>
      <div class="col-6">
        <form
        @submit.prevent="addProduct"
        class="form-signin bg-ight text-dark rounded shadow-lg text-center"
        >
          <h3><strong>Add A New Product</strong></h3> <br>
          <div class="form-group">
            <label for="product_name">Name</label>
            <input
              v-model="product.name"
              type="text"
              id="product_name"
              class="form-control"
              placeholder="Insert name here"
              required
            >
          </div>
          <div class="form-group">
            <label for="product_url">Image</label>
            <input
              v-model="product.image_url"
              type="url"
              id="product_url"
              class="form-control"
              placeholder="Insert url here"
              required
            >
          </div>
          <div class="form-group">
            <label for="product_price">Price</label>
            <input
              v-model="product.price"
              type="number"
              id="product_price"
              class="form-control"
              placeholder="Insert price here"
              required
            >
            <i>Price must be greater than 0</i>
          </div>
          <div class="form-group">
            <label for="product_stock">Stock</label>
            <input
              v-model="product.stock"
              type="number"
              id="product_stock"
              class="form-control"
              placeholder="Insert Stock here"
              required
            >
            <i>Stock must be greater than 0</i>
          </div>
          <button class="btn btn-red text-light" type="submit">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'AddProduct',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
        .then(({ data }) => {
          this.$router.push({ name: 'Dashboard' })
          Toast.fire({
            icon: 'success',
            title: `${data.name} has been added`
          })
        })
        .catch(err => {
          if (err.response) {
            this.$store.commit('errorChange', err.response.data.msg)
          }
          Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong..',
            text: this.errorNotification
          })
        })
    }
  },
  computed: {
    errorNotification () {
      return this.$store.state.errorNotification
    }
  }
}
</script>

<style scoped>
i{
  font-size: 12px;
}

.btn-red{
  background-color: #B22222;
}

.btn-red:hover{
  background-color: #1ccf1ccc;
}

label{
  font-weight: bold;
}
</style>
