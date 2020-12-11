<template>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="product.image_url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">Price: {{product.price}}</p>
        <p class="card-text">Stock: {{product.stock}}</p>
        <a href="#" class="btn btn-primary m-2" @click="deleteProduct(product.id)">Delete</a>
        <editProduct :product="product"></editProduct>
      </div>
    </div>
</template>

<script>
import editProduct from './editProduct'
export default {
  name: 'product',
  props: ['product'],
  components: {
    editProduct
  },
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
