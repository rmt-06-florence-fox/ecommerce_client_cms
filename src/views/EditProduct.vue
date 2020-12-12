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
    <div class="button-add-form">
      <button type="button" class="btn btn-primary col-5 p-1 m-2 btn-add" @click.prevent="editProduct">Save</button>
      <button type="button" class="btn btn-danger col-4 p-1 m-2 btn-add" @click.prevent="cancel">Cancel</button>
    </div>
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
    fetchDetailProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDataById', id)
        .then(response => {
          this.name = response.data.name
          this.image_url = response.data.image_url
          this.price = response.data.price
          this.stock = response.data.stock
        })
        .catch(error => {
          console.log(error)
        })
    },
    editProduct () {
      const id = this.$route.params.id
      this.$store.dispatch('editData', {
        id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      })
        .then(response => {
          this.$router.push('/home')
        })
        .catch(error => {
          this.$alert(error.response.data.message)
        })
    },
    cancel () {
      this.$router.push('/home')
    }
  },
  created () {
    this.fetchDetailProduct()
  }
}
</script>

<style>

</style>
