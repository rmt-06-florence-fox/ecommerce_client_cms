<template>
  <div>
    <Navbar class="mb-3"></Navbar>
    <h3 class="text-center">Edit a product</h3>
    <div class="container my-5 py-3 border border-dark rounded bg-secondary text-white" style="width: 40%;">
        <div class="container">
            <form id="addForm" v-on:submit.prevent="editProduct">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="name">
                </div>
                <div class="form-group">
                    <label for="image_url">Image URL</label>
                    <textarea class="form-control" rows="1" v-model="image_url"></textarea>
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" v-model="category">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" name="price" v-model="price">
                </div>
                <div class="form-group">
                    <label for="stock">Stock(s)</label>
                    <input type="number" class="form-control" v-model="stock">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Update</button>
                <button type="button" class="btn btn-danger" style="width: 100%;" v-on:click.prevent="home">Cancel</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'EditForm',
  components: {
    Navbar
  },
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  created () {
    console.log(this.$route.params.id, '<<< INI ID DARI ROUTE')
    this.$store.dispatch('fetchProductsById', this.$route.params.id)
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  watch: {
    product () {
      this.name = this.product.name
      this.image_url = this.product.image_url
      this.price = this.product.price
      this.stock = this.product.stock
      this.category = this.product.category
    }
  },
  methods: {
    editProduct () {
      const productId = this.$route.params.id
      const updated = {
        id: productId,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        category: this.category
      }
      this.$store.dispatch('editProduct', updated)
    },
    home () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
