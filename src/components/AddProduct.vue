<template>
  <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Add Product</h5>
              </div>
              <div class="modal-body">
                  <form @submit.prevent="addNewProduct()">
                      <div class="form-group">
                          <label for="title" class="col-form-label">Product Name:</label>
                          <input type="text" class="form-control" v-model="name">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Image Url:</label>
                          <input type="text" class="form-control" v-model="image_url">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Price:</label>
                          <input type="text" class="form-control" v-model="price">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Stock:</label>
                          <input type="text" class="form-control" v-model="stock">
                      </div>
                      <div class="form-group mt-3">
                          <button type="button" class="btn btn-outline-secondary me-3" data-bs-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-outline-success" >save</button>
                      </div>
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
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addNewProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addNewProduct', payload)
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    }
  }
}
</script>

<style>

</style>
