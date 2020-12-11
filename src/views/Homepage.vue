<template>
  <div class="container ui">
    <Navbar/>
    <div class="doubling stackable three column ui grid container">
      <div class="column" v-for="product in products" :key="product.id">
        <div class="ui card">
          <div class="image">
            <img :src="product.image_url">
          </div>
          <div class="content">
            <div class="header">{{ product.name }}</div>
            <div class="meta">
              <a>{{ product.category }}</a>
            </div>
            <div class="description">
              <p>Price: {{ product.price }}</p>
              <p>Stock: {{ product.stock }}</p>
            </div>
          </div>
          <div class="extra content">
            <a class="left floated" >
              <i class="pencil icon"></i>
              Edit
            </a>
            <a class="right floated" @click="deleteProduct(product.id)">
              <i class="trash icon"></i>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Homepage',
  components: {
    Navbar
  },
  methods: {
    fetchAllProducts () {
      this.$store.dispatch('fetchAllProducts')
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.fetchAllProducts()
    }
  },
  created () {
    this.fetchAllProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>
  /* img {
    max-height: 100px;
  } */
  /* .container {
    display: flex;
  } */
</style>
