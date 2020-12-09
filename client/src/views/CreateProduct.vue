<template>
  <section class="create-product-page">
    <div class="container col-8">
      <h1 class="text-center mb-5 header-create">Create New Product</h1>
      <form @submit.prevent="onSubmit">
        <div class="form-group mt-1 row">
          <label for="input-name" class="col-sm-2 col-2 col-form-label">Name</label>
          <div class="col-sm-10 col-10">
            <input type="text" class="form-control" v-model="payload.name" id="input-name" placeholder="Product's name">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-image" class="col-sm-2 col-2 col-form-label">Image Url</label>
          <div class="col-sm-10 col-10">
            <input type="text" class="form-control" v-model="payload.image_url" id="input-image" placeholder="Product's image url">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-price" class="col-sm-2 col-2 col-form-label">Price</label>
          <div class="col-sm-10 col-10">
            <input type="number" class="form-control" v-model="payload.price" id="input-price" placeholder="Product's price">
          </div>
        </div>
        <div class="form-group mt-1 row">
          <label for="input-stock" class="col-sm-2 col-2 col-form-label">Stock</label>
          <div class="col-sm-10 col-10">
            <input type="number" class="form-control" v-model="payload.stock" id="input-stock" placeholder="Product's stock">
          </div>
        </div>
        <div class="create-btn">
          <button type="submit" class="mt-4 btn btn-create btn-block">Create</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreateProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$store.dispatch('createProduct', this.payload)
    }
  }
}
</script>

<style>
  .btn-create{
    background-color: #1ee2c8;
    width: 150px;
  }
  .create-btn{
    display: flex;
    justify-content: center;
  }
  .create-product-page label{
    color: #16a592;
  }
  .header-create{
    color: #16a592;
  }
</style>
