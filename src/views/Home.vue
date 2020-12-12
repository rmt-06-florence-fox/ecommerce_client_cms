<template>
  <div class="home">
    <div class="page-title">Welcome Home</div>
    <button @click="jumpToAddProduct" type="button" class="btn btn-success">Add New Product</button>
    <div class="container">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :products="product"
      ></ProductCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  data() {
    return {
      pageName: ''
    }
  },
  components: {
    ProductCard
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    products () {
      return this.$store.state.products;
    }
  },
  methods: {
    jumpToAddProduct() {
      this.$router.push({ name: 'AddProduct' })
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>