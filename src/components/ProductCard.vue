<template>
  <div class="">
    <div class="card m-3" style="width: 18rem;">
      <img :src="product.image_url" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">{{product.price}}</p>
        <p class="card-text">{{product.stock}}</p>
        <div>
          <a @click.prevent="editProduct(product.id)" class="btn btn-primary text-white m-1">Edit</a>
          <a @click.prevent="deleteProduct(product.id)" class="btn btn-primary text-white m-1">Delete</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (id) {
      this.$router.push(`/editproduct/${id}`)
    }
  }
}
</script>

<style>

</style>
