<template>
  <section id="add-form-page" class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-4">
                <div class="shadow-lg p-5 mb-5 bg-white rounded">
                    <h5 class="mb-4"><b>Add Product</b></h5>
                    <form @submit.prevent="addProduct" id="form-add">
                        <div class="form-group">
                            <label for="add-name">Name</label>
                            <input type="text" class="form-control" id="name-input">
                        </div>
                        <div class="form-group">
                            <label for="add-imageurl">Image Url</label>
                            <input type="text" class="form-control" id="imageurl-input">
                        </div>
                        <div class="form-group">
                            <label for="add-price">Price</label>
                            <input type="text" class="form-control" id="price-input">
                        </div>
                        <div class="form-group">
                            <label for="add-stock">Stock</label>
                            <input type="text" class="form-control" id="stock-input">
                        </div>
                        <div class="form-group">
                            <label for="add-category">Category</label>
                            <select class="form-control" id="category-input">
                                <option selected disabled>Select Category</option>
                                <option>Standard</option>
                                <option>Traditional</option>
                                <option>Classic</option>
                                <option>Anniv</option>
                            </select>
                        </div><br>
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </form><br>
                    <button id="back-add" class="btn btn-secondary btn-block">Back</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      category: ''
    }
  },
  methods: {
    addProduct () {
      this.$store.dispatch('addProduct', this.payload)
    }
  }
  // computed: {
  //   name () {
  //     return this.$store.state.title
  //   }
  // }
}
</script>

<style>

</style>
