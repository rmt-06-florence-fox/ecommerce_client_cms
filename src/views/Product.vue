<template>
  <div class="container mt-3">
    <button v-if="loginStatus" type="button" class="btn btn-info mb-3" data-toggle="modal" data-target="#myModal">Add Item</button>
    <AddForm></AddForm>
    <div class="row">
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product">
      </ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard.vue'
import AddForm from '../components/AddForm.vue'
export default {
  name: 'Product',
  components: {
    ProductCard,
    AddForm
  },
  data () {
    return {
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    },
    products () {
      return this.$store.state.products
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('changeLoginStatus', true)
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>
