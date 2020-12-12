<template>
  <div class="card col-md-4">
    <div class="m-1 p-0">
      <img :src="product.image_url" class="card-img-top" :alt="product.name">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">Harga: {{product.price}}</p>
        <p class="card-text">Stock: {{product.stock}}</p>
        <a href="#" class="btn btn-primary mr-1" @click.prevent="edit(product.id)">Edit</a>
        <a href="#" class="btn btn-danger ml-1" @click.prevent="destroy(product.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    edit (id) {
      this.$router.push(`editProduct/${id}`)
    },
    destroy (id) {
      this.$store.dispatch('deleteData', id)
        .then(response => {
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
