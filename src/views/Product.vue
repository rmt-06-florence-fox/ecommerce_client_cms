<template>
  <div class="container mt-3">
    <button v-if="loginStatus" type="button" class="btn btn-info mb-3" data-toggle="modal" data-target="#myModal">Add Item</button>
    <AddForm></AddForm>
    <EditForm
    v-if="EditStatus"
    :populateProduct="populateProduct"></EditForm>
    <div class="row">
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @populate="populate">
      </ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '../components/ProductCard.vue'
import AddForm from '../components/AddForm'
import EditForm from '../components/EditForm'
export default {
  name: 'Product',
  components: {
    ProductCard,
    AddForm,
    EditForm
  },
  data () {
    return {
      populateProduct: ''
    }
  },
  methods: {
    populate (value) {
      this.populateProduct = value
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    },
    products () {
      return this.$store.state.products
    },
    EditStatus () {
      return this.$store.state.EditStatus
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
