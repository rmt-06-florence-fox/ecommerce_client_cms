<template>
  <section class="section pt-2">
    <h1 class="title">Dashboard</h1>
    <div class = "columns is-multiline">
      <ProductCard
        v-for="product in products" :key="product.id"
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
      targetEdit: {}
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
    }
  }
}
</script>

<style>

</style>
