<template>
  <b-col class="col-9 p-4">
    <div class="d-flex flex-row justify-content-between">
      <b-button
        size="sm"
        class="mb-2 d-flex flex-row"
        variant="primary"
        @click="modalShow = !modalShow"
        >Add Product</b-button
      >
      <b-button size="sm" class="mb-2 d-flex flex-row" variant="primary"
        @click='logout '>Logout</b-button
      >
      <b-modal v-model="modalShow">
        <template #modal-title> Add Product </template>
        <b-container fluid>
          <b-row class="my-1">
            <b-col sm="4">
              <label for="name">Product Name</label>
            </b-col>
            <b-col sm="8">
              <b-form-input v-model="newProduct.name"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="image_url">Image Url</label>
            </b-col>
            <b-col sm="8">
              <b-form-input v-model="newProduct.image_url"> </b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="price">Price</label>
            </b-col>
            <b-col sm="8">
              <b-form-input v-model="newProduct.price"></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="4">
              <label for="stock">Stock</label>
            </b-col>
            <b-col sm="8">
              <b-form-input v-model="newProduct.stock"></b-form-input>
            </b-col>
          </b-row>
        </b-container>
        <template #modal-footer>
          <div class="w-100 d-flex justify-content-center">
            <b-button
              class="m-2"
              variant="primary"
              size="sm"
              @click.prevent="addProduct"
            >
              Submit
            </b-button>
            <b-button
              class="m-2"
              variant="secondary"
              size="sm"
              @click="modalShow = false"
            >
              Cancel
            </b-button>
          </div>
        </template>
      </b-modal>
    </div>
    <!-- Table -->
    <b-table :fields="fields"> </b-table>
    <!-- Product Cards -->
    <ProductCard
      v-for="product in productList"
      :key="product.id"
      :product="product"
    ></ProductCard>
  </b-col>
</template>

<script>
import ProductCard from '../components/ProductCard'
export default {
  name: 'ProductSection',
  data () {
    return {
      fields: [
        { key: 'product', label: 'Product Info', class: 'text-left' },
        { key: 'price', label: 'Price' },
        { key: 'stock', label: 'Stock' },
        { key: 'actions', label: 'Actions' }
      ],
      modalShow: false,
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  components: {
    ProductCard
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    addProduct () {
      this.$store.dispatch('addProduct', this.newProduct)
      this.modalShow = false
    },
    logout () {
      this.$store.dispatch('logout')
    }
  },

  created () {
    this.fetchData()
  },
  computed: {
    productList () {
      return this.$store.state.productList
    }
  }
}
</script>

<style>
</style>
