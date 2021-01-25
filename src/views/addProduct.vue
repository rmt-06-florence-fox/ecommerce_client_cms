<template>
    <div>
        <div class="col-sm-5 container" style="box-shadow: 0px 0px 10px;">
            <div style="height: 100px;"></div>
            <h2 class="row justify-content-md-center">Add Product</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-8" style="margin: 20%">
        <form @submit.prevent="addProduct">
        <div class="form-group">
            <input type="text" class="form-control" v-model="newProduct.name" required placeholder="Name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="newProduct.image_url" placeholder="Image URL">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="newProduct.price" required placeholder="Price">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" v-model="newProduct.stock" required placeholder="Stock">
        </div><br>
        <button type="submit" class="btn btn-primary">Add Product</button><br>
        </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      newProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.newProduct)
        .then(() => {
          this.$router.push('/products')
          this.$store.dispatch('fetchProduct')
        })
        .catch(error => console.log(error))
    }
  }

}
</script>

<style>

</style>
