<template>
  <div class="container ui">
    <Navbar/>
    <div v-if="products.length > 0" class="doubling stackable three column ui grid container">
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
            <a class="left floated" @click="goToEditProduct(`/edit-product/${product.id}`)">
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

    <div v-else>
      <h1>
        Ooops. No products match your search criteria. Please search again.
      </h1>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'SearchResults',
  data () {
    return {
      products: []
    }
  },
  components: {
    Navbar
  },
  methods: {
    fetchAllProductsByCategory () {
      const category = this.$route.params.category
      this.$store.dispatch('searchProductByCategory', category)
        .then(({ data }) => {
          console.log(data)
          this.products = data
        }).catch((err) => {
          console.log(err)
        })
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
      this.fetchAllProducts()
    },
    goToEditProduct (route) {
      this.$router.push(route)
    }
  },
  created () {
    this.fetchAllProductsByCategory()
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
