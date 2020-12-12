<template>
  <div class="container">
    <form @submit.prevent="addProduct">
      <div class="mb-3">
        <label class="form-label">Product Name</label>
        <input v-model="newProduct.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Image URL</label>
        <input v-model="newProduct.image_url" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Price</label>
        <input v-model="newProduct.price" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Stock</label>
        <input v-model="newProduct.stock" type="number" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'AddForm',
    data() {
        return {
            newProduct: {
                name: '',
                image_url: '',
                price: '',
                stock: ''
            }
        }
    },
    methods: {
        addProduct() {
            const payload = {
                name: this.newProduct.name,
                image_url: this.newProduct.image_url,
                price: this.newProduct.price,
                stock: this.newProduct.stock
            }
            this.$store.dispatch("addProduct", payload);

        }
    }
};
</script>

<style>
</style>