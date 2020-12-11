<template>
  <div class="container">
    <Navbar/>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Add new Product
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <label for="">Product Name</label>
              <input v-model="product.name" type="text" name="name" placeholder="Product name" required="required" autocomplete="current-name">
            </div>
            <div class="field">
              <label for="">Product Category</label>
              <input v-model="product.category" type="text" name="category" placeholder="Product category" required="required" autocomplete="current-category">
            </div>
            <div class="field">
              <label for="">Image Link</label>
              <input v-model="product.image_url" type="text" name="image_url" placeholder="Product image link" required="required" autocomplete="current-link">
            </div>
            <div class="field">
              <label for="">Product Stock</label>
              <input v-model="product.stock" type="number" name="stock" placeholder="Product stock" required="required" autocomplete="current-price">
            </div>
            <div class="field">
              <label for="">Product Price</label>
              <input v-model="product.price" type="number" name="price" placeholder="Product price" required="required" autocomplete="current-stock">
            </div>
            <div class="ui fluid large teal submit button" @click="addProduct">Add Product</div>
          </div>
          <div class="ui error message"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'AddForm',
  components: {
    Navbar
  },
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        category: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.product)
    }
  }
}
</script>

<style scoped>
  body {
    background-color: #DADADA;
  }
  body > .grid {
      height: 100%;
  }
  .image {
      margin-top: -100px;
  }
  .column {
      max-width: 450px;
  }
  .container {
    align-items: center;
  }
</style>
