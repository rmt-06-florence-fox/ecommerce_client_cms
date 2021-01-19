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
    <div>
      <label>Select Category:</label>
      <select class="form-control form-control-sm select-category" id="basic-addon3" v-model="selectedCategory">
        <option :value="null" selected>All</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <br>
    <div class="button-add-form">
      <button type="button" class="btn btn-primary col-5 p-1 m-2 btn-add" @click.prevent="addProduct">Add Product</button>
      <button type="button" class="btn btn-danger col-4 p-1 m-2 btn-add" @click.prevent="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
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
      const obj = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        CategoryId: this.selectedCategory
      }
      this.$store.dispatch('addProduct', obj)
        .then(response => {
          this.$router.push('/home')
        })
        .catch(error => {
          this.$alert(error.response.data.message)
        })
        .finally(() => {
          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
        })
    },
    cancel () {
      this.$router.push('/home')
    },
    fetchCategory () {
      this.$store.dispatch('getCategory')
    }
  },
  computed: {
    picture () {
      return this.image_url
    },
    categories () {
      return this.$store.state.categories
    },
    selectedCategory: {
      get () {
        return this.$store.state.selectedCategory
      },
      set (value) {
        this.$store.commit('setCategory', Number(value))
      }
    }
  },
  created () {
    this.fetchCategory()
  }
}
</script>

<style>

</style>
