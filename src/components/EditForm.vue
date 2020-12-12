<template>
  <div class="container">
    <form @submit.prevent="editProduct">
      <div class="mb-3">
        <label class="form-label">Product Name</label>
        <input v-model="newProductData.name" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Image URL</label>
        <input v-model="newProductData.image_url" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Price</label>
        <input v-model="newProductData.price" type="number" class="form-control" />
      </div>
      <div class="mb-3">
        <label class="form-label">Stock</label>
        <input v-model="newProductData.stock" type="number" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Confirm</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'EditForm',
    // computed: {
    //     productData () {
    //         return this.$store.state.product;
    //     }
    // },
    data() {
        return {
            newProductData: {
                id: this.$store.state.product.id,
                name: this.$store.state.product.name,
                image_url: this.$store.state.product.image_url,
                price: this.$store.state.product.price,
                stock: this.$store.state.product.stock
            }
        }
    },
    methods: {
        editProduct() {
            const payload = {
                id: this.newProductData.id,
                name: this.newProductData.name,
                image_url: this.newProductData.image_url,
                price: this.newProductData.price,
                stock: this.newProductData.stock
            }
            this.$store.dispatch("editProduct", payload);
        }
    }
};
</script>

<style>
</style>