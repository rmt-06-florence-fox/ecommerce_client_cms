<template>
<div class="container-add card">
    <div class="card-header">
        <h1>Edit Product</h1>
    </div>
    <div class="card-body">
        <form @submit.prevent="saveEditedData" >

            <div class="name mb-3">
                <h5>Name</h5>
                <input v-model="editedData.name" type="text" name="email" class="container-fluid">
            </div>

            <div class="image-url mb-3">
                <h5>Image Url</h5>
                <input v-model="editedData.image_url" type="text" name="email" class="container-fluid">
            </div>

            <div class="price mb-3">
                <h5>Price</h5>
                <input v-model="editedData.price" type="number" name="email" class="container-fluid">
            </div>

            <div class="stock mb-3">
                <h5>Stock</h5>
                <input v-model="editedData.stock" type="number" name="email" class="container-fluid">
            </div>
            <div class="button-login row">
                <button class="btn btn-primary mt-3">Edit</button>
                <button @click="backHome" class="btn btn-danger mt-3">Cancel</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'EditProduct',
  methods: {
    backHome () {
      this.$router.push('/')
    },
    saveEditedData () {
      const payload = {
        id: this.editedData.id,
        name: this.editedData.name,
        image_url: this.editedData.image_url,
        price: this.editedData.price,
        stock: this.editedData.stock
      }
      this.$store.dispatch('editProduct', payload)
    }
  },
  computed: {
    ...mapState({
      editedData: 'editedProductData'
    })
  }
}
</script>

<style>

</style>
