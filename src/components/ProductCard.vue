<template>
  <div class="col-3">
     <div class="card">
        <img class="card-img-top" :src="product.image_url" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <div>Price: {{ product.price }}</div>
          <div>Stock: {{ product.stock }}</div>
          <button v-if="loginStatus" class="btn btn-info mb-3 mt-3">Edit</button>
          <button v-if="loginStatus" class="btn btn-danger mb-3 mt-3">Delete</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  computed: {
    loginStatus () {
      return this.$store.state.loginStatus
    }
  }
}
</script>

<style>

</style>
