<template>
  <section class="edit-product-page">
    <div class="container col-8">
      <h1 class="text-center mb-5 header-edit">Edit Data Product</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-1 row">
          <label for="edit-name" class="col-sm-2 col-2 col-form-label">Name</label>
          <div class="col-sm-10 col-10">
            <input type="text" class="form-control" v-model="product.name" id="edit-name" placeholder="Product's name">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="edit-image" class="col-sm-2 col-2 col-form-label">Image Url</label>
          <div class="col-sm-10 col-10">
            <input type="text" class="form-control" v-model="product.image_url" id="edit-image" placeholder="Product's image url">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="edit-price" class="col-sm-2 col-2 col-form-label">Price</label>
          <div class="col-sm-10 col-10">
            <input type="number" class="form-control" v-model="product.price" id="edit-price" placeholder="Product's price">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="edit-stock" class="col-sm-2 col-2 col-form-label">Stock</label>
          <div class="col-sm-10 col-10">
            <input type="number" class="form-control" v-model="product.stock" id="edit-stock" placeholder="Product's stock">
          </div>
        </div>
        <div class="edit-btn">
          <button type="submit" class="mt-4 btn btn-edit-submit btn-block">Edit</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditProduct',
  methods: {
    fetchProduct () {
      this.$store.dispatch('editProduct', this.$route.params.id)
    },
    onSubmit () {
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
  .btn-edit-submit{
    background-color: #1ee2c8;
    width: 150px ;
  }
  .edit-btn{
    display: flex;
    justify-content: center;
  }
  .edit-product-page label{
    color: #16a592;
  }
  .header-edit{
    color: #16a592;
  }
</style>
