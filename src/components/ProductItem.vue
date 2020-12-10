<template>
  <div class="container">
    <h2>product</h2>
    <div
      v-if="product.length !== 0"
      class="card"
      style="width: 18rem;">
      <img class="card-img-top" :src="product.image_url" :alt="product.name" />
      <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.price }}</p>
      <p class="card-text">Stock: {{ product.stock }}</p>
      <button @click="editProduct(product.id)" class="btn btn-secondary">Edit</button>
      <button @click="delProduct(product.id)" class="btn btn-danger">Delete</button>
      </div>
    </div>
    <div v-else>
      <h3>Data Not Found</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    editProduct (id) {
      this.$router.push('/edit/' + id)
    },
    delProduct (id) {
      this.$store.dispatch('delProduct', id)
    }
  }
}
</script>

<style>

</style>
