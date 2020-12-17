<template>
      <div>
        <div class="col-sm-5 container" style="box-shadow: 0px 0px 10px;">
            <div style="height: 100px;"></div>
            <h2 class="row justify-content-md-center">Edit Product</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-8" style="margin: 20%">
        <form @submit.prevent="editData">
        <div class="form-group">
            <input type="text" class="form-control" v-model="editProduct.name" required placeholder="Name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="editProduct.image_url" placeholder="Image URL">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="editProduct.price" required placeholder="Price">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" v-model="editProduct.stock" required placeholder="Stock">
        </div><br>
        <button type="submit" class="btn btn-primary">Update Product</button><br>
        </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditPage',
  data () {
    return {
      editProduct: {
        id: 0,
        name: '',
        image_url: '',
        price: 0,
        stock: 0
      }
    }
  },
  methods: {
    editData () {
      const updateData = this.editProduct
      this.$store.dispatch('editProduct', updateData)
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('findById', id)
      .then(Response => {
        console.log(this.$store.state.editedProduct)
        this.editProduct.id = this.$store.state.editedProduct.id
        this.editProduct.name = this.$store.state.editedProduct.name
        this.editProduct.image_url = this.$store.state.editedProduct.image_url
        this.editProduct.price = this.$store.state.editedProduct.price
        this.editProduct.stock = this.$store.state.editedProduct.stock
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style>

</style>
