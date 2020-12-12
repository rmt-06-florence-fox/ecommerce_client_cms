<template>
  <div class="container row justify-content-center mt-5">
    <div class="card shadow col-4">
      <div class="card-header">
        <h1>Edit Product</h1>
      </div>
      <div class="card-body">
        <form @submit.prevent="editProduct">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" class="form-control mb-3 mt-1" v-model="name" placeholder="input product name">
          </div>
          <div class="form-group">
            <label for="image_url">Image Url:</label>
            <input type="text" class="form-control mb-3 mt-1" v-model="image_url" placeholder="input image url">
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" class="form-control mb-3 mt-1" v-model="price" placeholder="input product price">
          </div>
          <div class="form-group">
            <label for="stock">Stock:</label>
            <input type="number" class="form-control mb-3 mt-1" v-model="stock" placeholder="input product stock">
          </div>
          <div class="row mt-4">
            <div class="">
              <button type="submit" class="btn col-3 btn-primary mb-3">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditItem',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    findProduct () {
      this.$store.dispatch('findProductById', this.$route.params.id)
        .then(res => {
          console.log(res)
          this.name = res.data.name
          this.image_url = res.data.image_url
          this.price = res.data.price
          this.stock = res.data.stock
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct () {
      const payload = {
        id: this.$route.params.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('editProduct', payload)
    }
  },
  computed: {
    getItem () {
      return this.$store.state.product
    }
  },
  created () {
    this.findProduct()
  }
}
</script>

<style>

</style>
