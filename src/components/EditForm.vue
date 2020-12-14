<template>
  <div class="modal fade" id="EditForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Edit Form</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Name" v-model="product.name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Product Image URL" v-model="product.image_url">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Stock" v-model="product.stock">
              </div>
              <div class="form-group">
                <input type="number" class="form-control" placeholder="Price" v-model="product.price">
              </div>
              <button type="submit" class="btn btn-info" data-dismiss="modal" @click="updatePoduct">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      product: this.populateProduct
    }
  },
  props: {
    populateProduct: Object
  },
  methods: {
    updatePoduct () {
      this.$store.dispatch('updateProduct', this.product)
    }
  }
}
</script>

<style>

</style>
