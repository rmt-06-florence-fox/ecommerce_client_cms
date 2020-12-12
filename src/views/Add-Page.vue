<template>
    <div>
        <h1>Add Form</h1>
        <form @submit.prevent="postProduct">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" id="name">
            </div>
            <div class="mb-3">
                <label class="form-label">Image</label>
                <input v-model="image_url" type="text" class="form-control" id="image_url">
            </div>
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input v-model="price" type="number" class="form-control" id="price">
            </div>
            <div class="mb-3">
                <label class="form-label">Stock</label>
                <input v-model="stock" type="number" class="form-control" id="stock">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <a href="#" @click="backProduct" id="back" class="btn btn-warning">Back To Product</a>
        </form>
    </div>
</template>

<script>
export default {
  name: 'PostProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    postProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock
      }
      this.$store.dispatch('addProduct', payload)
    },
    backProduct () {
      this.$router.push('/main-page/product')
    }
  }
}
</script>

<style>
#back {
    margin-left: 10px;
}
</style>
