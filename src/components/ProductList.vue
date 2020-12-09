<template>
  <div class="row justify-content-center">
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
     
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    name : 'ProductList',
    components : {
        ProductCard
    }
}
</script>

<style>

</style>