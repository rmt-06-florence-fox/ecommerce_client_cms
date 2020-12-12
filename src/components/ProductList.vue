<template>
 <div>
    <b-modal id="errors-modal" title="Ooops, error(s) happened" hide-footer>
      <ErrorPage />
    </b-modal>
    <b-modal id="success-modal" title="Edited" hide-footer>
      <Success />
    </b-modal>
    <b-card-group deck class="row justify-content-center" id="product-list">
      <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product" />
    </b-card-group>
 </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import ErrorPage from './ErrorPage.vue'
import Success from './Success.vue'
export default {
  name: 'ProductList',
  components: {
    ProductCard,
    ErrorPage,
    Success
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    errors () {
      return this.$store.state.errors
    },
    message () {
      console.log('computed kepanggil', this.$store.state.successMessage)
      return this.$store.state.successMessage
    }
  },
  watch: {
    errors () {
      if (this.errors.length) this.$bvModal.show('errors-modal')
      else this.$bvModal.hide('errors-modal')
    },
    message () {
      console.log('watch kepanggil')
      if (this.successMessage.length) this.$bvModal.show('success-modal')
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
#product-list {
    min-height: 100%;
    background: rgb(229,242,233);
    background: linear-gradient(90deg, rgba(229,242,233,1) 0%, rgba(29,253,32,0.367) 23%, rgba(0,0,0,1) 100%);
}
</style>
