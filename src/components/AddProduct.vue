<template>
  <div class="modal fade" id="exampleModal" tabindex="-1">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header" style="background-color: #f3a683">
                  <h3 class="modal-title">Add Product</h3>
              </div>
              <div class="modal-body" style="background-color: #f3a683">
                  <form @submit.prevent="addProduct">
                      <div class="form-group">
                          <label for="title" class="col-form-label">Product Name:</label>
                          <input type="text" class="form-control" v-model="name">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Product Image:</label>
                          <input type="text" class="form-control" v-model="image_url">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Product Price:</label>
                          <input type="text" class="form-control" v-model="price">
                      </div>
                      <div class="form-group">
                          <label for="title" class="col-form-label">Product Stock:</label>
                          <input type="text" class="form-control" v-model="stock">
                      </div>
                      <div class="form-group mt-3">
                          <button type="button" class="btn btn-outline-danger me-3" data-bs-dismiss="modal">Cancel</button>
                          <button type="submit" class="btn btn-outline-success" >Save</button>
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
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('add', payload)
      this.name = ''
      this.image_url = ''
      this.price = ''
      this.stock = ''
    }
  }
}
</script>

<style>
  #exampleModal {
    font-family: 'Metal Mania', cursive;
  }
</style>
