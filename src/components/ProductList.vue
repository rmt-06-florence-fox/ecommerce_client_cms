<template>
  <div class="row justify-content-center" id="product-list">
      <product-card></product-card>
      <product-card></product-card>
      <product-card></product-card>
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
#product-list {
    background: rgb(229,242,233);
    background: linear-gradient(90deg, rgba(229,242,233,1) 0%, rgba(29,253,32,0.367) 23%, rgba(0,0,0,1) 100%);
}
</style>