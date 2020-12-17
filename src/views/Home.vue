<template>
  <div class="home">
    <div class="container p-3 my-3 bg-dark text-white">
      <h1> Product List </h1>
      <div id="card">
        <productCard v-for="product in products" :key="product.id" :product="product" @editPage="editPage" @deleted="deleted"/>
      </div>
    </div>
  </div>
</template>

<script>
import productCard from '../components/productCard.vue'

export default {
  components: { productCard },
  name: 'Home',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    editPage (id) {
      console.log(id, 'dari home')
      this.$store.dispatch('editData', id)
    },
    deleted (id) {
      this.$store.dispatch('deleted', id)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
  .card {
    color: black;
  }
  #card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
