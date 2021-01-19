<template>
  <div class="home-page">
    <navbar></navbar>
    <div class="home-container">
      <div class="home-left">
        <addCategory v-if="toggle"></addCategory>
        <div class="category-list">
          <category @lemparCategoryName="lemparCategoryName"></category>
        </div>
      </div>
      <div class="home-right">
        <div class="container-product">
          <product v-for="product in getProduct" :key="product.id" :product="product"></product>
        </div>
        <addProduct v-if="toggle"></addProduct>
      </div>
    </div>
    <button @click="changeToggle" class="btnPlus"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/navbar.vue'
import addProduct from '../components/addProduct.vue'
import product from '../components/product.vue'
import addCategory from '../components/addCategory'
import category from '../components/category.vue'

export default {
  name: 'Home',
  components: {
    navbar,
    addProduct,
    product,
    addCategory,
    category
  },
  data () {
    return {
      filterCategory: '',
      toggle: false
    }
  },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    lemparCategoryName (name) {
      console.log(name, 'ini dari home')
      this.filterCategory = name
    },
    changeToggle () {
      this.toggle = !this.toggle
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    getProduct () {
      return this.$store.getters.filteredProduct(this.filterCategory)
    }
  }
}
</script>
<style scoped>
.home-container {
  display: flex;
}
.home-left {
  /* background: #24001e; */
  width: 20%;
}
.container-product {
  display: flex;
  justify-content:left;
  margin-left: 1rem;
  flex-wrap: wrap;
}
.btnPlus {
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #8c0000; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 100%; /* Rounded corners */
  width: 5vw;
  height: 5vw;
  font-size: 1.5rem; /* Increase font size */
}
</style>
