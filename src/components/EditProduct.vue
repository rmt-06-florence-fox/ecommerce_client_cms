<template>
  <div>
    <h1 class="text-center mt-5">Add Product</h1>
    <form @submit.prevent="editProduct">
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Name"
          v-model="product.name"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Image URL"
          v-model="product.image_url"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Price"
          v-model="product.price"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control col-3 btn-center"
          placeholder="Stock"
          v-model="product.stock"
        />
      </div>
      <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  props: ['updating'],
  data () {
    return {
      task: {
        id: this.updating.id,
        title: this.updating.title,
        category: this.updating.category
      }
    }
  },
  methods: {
    editProduct () {
    }
  }
}
</script>

<style></style>
