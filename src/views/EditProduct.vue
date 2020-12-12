<template>
  <div v-if="product.id" class="container rounded-lg text-white">
        <div class="row content d-flex justify-content-center">
            <div class="col-md-4" style="background-color: rgba(120, 212, 255, 0.8); color: black;">
                <h3 class="m-3">Edit Product</h3>
                <form @submit.prevent="editData">
                    <div class="m-4">
                        <label for="">Name</label>
                        <input v-model="product.name" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Image URL</label>
                        <input v-model="product.image_url" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Price</label>
                        <input v-model="product.price" type="number" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Stock</label>
                        <input v-model="product.stock" type="number" class="form-control">
                    </div>
                    <button class="btn btn-outline-dark m-2">Edit</button>
                </form>
            </div>
        </div>
    </div>
    <div v-else>
        404 NOT FOUND
    </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
    }
  },
  methods: {
    editData () {
      this.$store.dispatch('editProduct', this.product)
    }
  },
  created: function () {
    this.$store.dispatch('fetchDataProductById', this.$route.params.id)
  },
  computed: {
    product: {
      get: function () {
        return this.$store.state.product
      },
      // setter
      set: function (newValue) {
        return newValue
      }
    }
  }
}
</script>

<style>

</style>
