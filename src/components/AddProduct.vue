<template>
  <div class="AddTask">
    <!-- Modal Add New Todo-->
    <div
      class="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-light">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLongTitle">Add New Product</h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="addtodoform" @submit.prevent="addProduct">
              <div class="form-group">
                <label for="title">Name</label>
                <input v-model="name" id="name" class="form-control" type="text" placeholder="Product Name"/>
              </div>
              <div class="form-group">
                <label for="image_url">Image url</label>
                <input v-model="image_url" id="image_url" class="form-control" type="text" placeholder="Image URL"/>
              </div>
              <div class="form-group">
                <label for="stock">Stock</label>
                <input v-model="stock" id="stock" class="form-control" type="number" placeholder="Stock"/>
              </div>
              <div class="form-group">
                <label for="price">Price</label>
                <input v-model="price" id="price" class="form-control" type="number" placeholder="Price"/>
              </div>
              <div class="modal-footer">
                <button id="add" type="submit" class="btn btn-outline-success">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
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
      stock: '',
      price: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        stock: this.stock,
        price: this.price
      }
      this.$store.dispatch('addProduct', payload)
        .then(() => {
          this.$swal(
            'Add Product Success!',
            'Success Add Product',
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
      this.clearForm()
    },
    clearForm () {
      this.name = ''
      this.image_url = ''
      this.stock = ''
      this.price = ''
    },
    fetchProduct () {
      this.$store.dispatch('fetchProduct')
    }
  }
}
</script>

<style>

</style>
