<template>
<div class="container">
    <div class="row">
        <div class="card" >
        <img class="card-img-top" :src="products.image_url" >
      <div class="card-body">
      <p class="card-text">
        name : {{products.name}} <br>
        stock : {{products.stock}} <br>
        price : {{products.price}} <br>
      </p>
      <button @click.prevent="editProduct(products.id)" type="button" class="btn btn-info">edit</button>
      <button @click.prevent="deleteData" type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  pageName: 'ProductCard',
  props: ['products'],
  data () {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: '',
      modal: true
    }
  },
  methods: {
    editProduct (id) {
      this.$router.push(`/edit/${id}`)
    },
    deleteData () {
      this.$store.dispatch('deleteData', this.products.id)
    }
  }
}
</script>

<style scoped>
.container {
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
