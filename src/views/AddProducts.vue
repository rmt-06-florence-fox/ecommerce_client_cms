<template>
    <div class="container">
        <div id="add-page" class="bg-light col mt-5 rounded">
            <form id="add-form" class="input-margin" @submit.prevent="add">
                <h1>Add Form</h1>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="add-name" placeholder="name" v-model="addProduct.name">
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" name="image" id="add-image" placeholder="image" v-model="addProduct.image_url">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" name="price" id="add-price" placeholder="price" v-model="addProduct.price">
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input type="stock" class="form-control" name="stock" id="add-stock" placeholder="stock" v-model="addProduct.stock">
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AddProducts',
  data () {
    return {
      addProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    add () {
      const addProduct = this.addProduct
      this.$store.dispatch('add', addProduct)
        .then(() => { this.$router.push('/products') })
        .catch(e => console.log(e))
    }
  }
}
</script>

<style>

</style>
