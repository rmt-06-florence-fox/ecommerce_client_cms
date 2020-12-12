<template>
  <div class="container">
  <form id="form-edit" @submit.prevent="editProduct">
        <div class="form-group">
            <label for="name-edit">Name</label>
            <input type="text" class="form-control" id="name-edit" v-model="product.name">
        </div>
        <div class="form-group">
            <label for="imageurl-edit">Image_url</label>
            <input type="text" class="form-control" id="imageurl-edit" v-model="product.imageurl">
        </div>
        <div class="form-group">
            <label for="price-edit">Price</label>
            <input type="text" class="form-control" id="price-edit" v-model="product.price">
        </div>
        <div class="form-group">
            <label for="stock-edit">Stock</label>
            <input type="text" class="form-control" id="stock-edit" v-model="product.stock">
        </div>
        <div class="form-group">
            <label for="category-edit">Category</label>
            <select class="form-control" id="category-edit" v-model="product.category">
                <option selected disabled>Select Category</option>
                <option>Standard</option>
                <option>Traditional</option>
                <option>Classic</option>
                <option>Anniv</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  methods: {
    fetchProduct () {
      this.$store.dispatch('editProduct', this.$route.params.id)
    },
    editProduct () {
      this.$store.dispatch('updateProduct', this.product)
    }
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style>

</style>
