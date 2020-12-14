<template>
  <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Add Form</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Name" v-model="name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Image URL" v-model="image_url">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Stock" v-model="stock">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Price" v-model="price">
              </div>
              <button type="submit" class="btn btn-info" data-dismiss="modal" @click="addProduct">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AddForm',
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
      const addedProduct = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      console.log(addedProduct)
      this.$store.dispatch('addProduct', addedProduct)
    }
  }
}
</script>

<style>

</style>
