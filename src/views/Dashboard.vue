<template>
  <section class="section">
    <h1 class="title">Dashboard</h1>
    <div class = "columns is-multiline">
      <ProductCard
        v-for="product in products" :key="product.id"
        :product="product"
        @toggleModal='activateModal'
        @destroy='destroy'
      />

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>

      <div class="column is-one-quarter">
        <h1 class="title">Test</h1>
      </div>
    </div>
    <ModalEdit
      v-if="isActive"
      :isActive="isActive"
      @closeModal='closeModal'
      :targetEdit="targetEdit"
    />
  </section>
</template>

<script>
import ModalEdit from '../components/Edit'
import ProductCard from '../components/ProductCard'
import axios from '../config/axiosInstance'

export default {
  name: 'Dashboard',
  components: {
    ModalEdit,
    ProductCard
  },
  data () {
    return {
      isActive: false,
      products: {},
      targetEdit: []
    }
  },
  methods: {
    activateModal (id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.targetEdit = response.data.data
          console.log(response)
          console.log(this.targetEdit, '<<<<< targetEdit dashboard')
          if (this.isActive) {
            this.isActive = false
          } else {
            this.isActive = true
          }
        })
    },
    closeModal () {
      this.isActive = false
      this.fetchProducts()
    },
    fetchProducts () {
      axios
        .get('/products', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(response => {
          this.products = response.data.data
          console.log(this.products)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    destroy (id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
