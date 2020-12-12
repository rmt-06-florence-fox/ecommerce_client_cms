<template>
  <div class="d-flex">
    <div class="m-5" v-for="(product, i) in getProduct" :key="i">
      <div class="card fit shadow mr-2">
        <div class="card-header">
          <img :src="product.image_url" class="img" alt="">
        </div>
        <div class="card-body row mr-5">
          <div class="">
            <h3>Name: {{ product.name }}</h3>
            <h3>Product: {{ product.price }}</h3>
            <h3>Stock: {{ product.stock }}</h3>
          </div>
          <div class="d-flex">
            <button class="btn btn-primary m-2" @click.prevent="editProduct(product.id)">Edit</button>
            <button class="btn btn-danger m-2" @click.prevent="deleteProduct(product.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    editProduct (id) {
      this.$router.push('edititem/' + id)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(res => {
          this.fetchData()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    getProduct () {
      return this.$store.state.products
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style>
  .img {
    width: 200px;
    height: 200px;
  }
  .fit {
    width: 400px;
    height: 450px;
  }
</style>
