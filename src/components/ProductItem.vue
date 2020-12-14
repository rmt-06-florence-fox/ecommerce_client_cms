<template>
  <div class="col-3">
    <div class="card">
      <div class="card-body">
        <img :src="product.image_url" style="width:200px;height:200px;">
        <hr>
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-text"><strong>Price</strong>: {{ product.price }}</p>
        <p class="card-text"><strong>Stock</strong>: {{ product.stock }}</p>
        <button class="btn btn-outline-success" @click="toEditForm" style="margin: 5px">Edit</button>
        <button class="btn btn-outline-secondary" @click="deleteProduct" style="margin: 5px">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product', 'i'],
  methods: {
    deleteProduct () {
      const id = +this.product.id
      this.$store.dispatch('deleteProduct', id)
        .then(res => {
          this.$swal(
            'Delete Success!',
            'success'
          )
          this.fetchProduct()
        })
        .catch(err => {
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
        })
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    },
    toEditForm () {
      this.$router.push(`/edit/${this.product.id}`)
    }
  }
}
</script>

<style>

</style>
