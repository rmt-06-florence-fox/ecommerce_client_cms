<template>
  <div class="container">
    <h2>product</h2>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="product.image_url" :alt="product.name" />
      <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }}</p>
      <p class="card-text">Stock: {{ product.stock }}</p>
      <button @click="getProduct(product.id)" class="btn btn-secondary">Edit</button>
      <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    getProduct (id) {
      this.$store.dispatch('getProduct', id)
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
