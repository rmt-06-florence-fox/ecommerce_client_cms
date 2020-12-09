<template>
  <div class="card col-md-3 col-sm-6 mt-3" style="width: 18rem;">
    <img
    :src="data.image_url"
    class="card-img-top img-fluid img-thumbnail">
    <div class="card-body">
        <h5 class="card-title">{{ data.name }}</h5>
        <p class="card-text">Price = {{ data.price }}</p>
        <p class="card-text">Stock = {{ data.stock }}</p>
        <button class="btn btn-primary" @click="goDetail(data.id)">Detail</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    goDetail (id) {
      this.$router.push(`/products/${id}`)
    }
  }
}
</script>
<style>
</style>
