<template>
  <section class="section pt-2">
    <h1 class="title">Dashboard</h1>
    <div class="field">
      <div class="control" :class="{'is-loading': isLoading}">
        <input v-model="searchQuery" class="input" type="text" placeholder="Filter by name">
      </div>
    </div>
    <div class = "columns is-multiline">
      <ProductCard
        v-for="product in filtered" :key="product.id"
        :product="product"
        @toggleModal='activateModal'
        @destroy='destroy'
      />
    </div>
    <ModalEdit
      v-if="isActive"
      :targetEdit="targetEdit"
    />
  </section>
</template>

<script>
import ModalEdit from '../components/Edit'
import ProductCard from '../components/ProductCard'
// import axios from '../config/axiosInstance'

export default {
  name: 'Dashboard',
  components: {
    ModalEdit,
    ProductCard
  },
  data () {
    return {
      targetEdit: {},
      query: '',
      searchQuery: ''
    }
  },
  methods: {
    activateModal (id) {
      this.$store.dispatch('fetchProductsById', id)
    },
    closeModal () {
      this.$store.commit('changeIsActive')
      this.fetchProducts()
    },
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    destroy (id) {
      this.$store.dispatch('destroy', id)
    }
  },
  created () {
    this.fetchProducts()
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    isActive () {
      return this.$store.state.isActive
    },
    isLoading () {
      return this.$store.state.isLoading
    },
    filtered () {
      return this.$store.getters.filtered(this.query)
    }
  },
  watch: {
    searchQuery: function (val) {
      this.$store.commit('changeIsLoading')
      this.query = val
    }
  }
}
</script>

<style scoped>
</style>
