<template>
  <div class="col-3">
     <div class="card">
        <img class="card-img-top" :src="product.image_url" :alt="product.name">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <div>Price: {{ product.price }}</div>
          <div>Stock: {{ product.stock }}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}
</script>

<style>

</style>
