<template>
  <div class="col-6 align-self-start mt-5 rounded justify-content-center">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="edit">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="data.name">
          </div>
          <div class="form-group">
            <label>Category</label>
            <input type="text" class="form-control" v-model="data.category">
          </div>
          <div class="form-group">
            <label>Stock</label>
            <input type="number" class="form-control" v-model="data.stock">
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="data.price">
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="text" class="form-control" v-model="data.image_url">
          </div>
          <div class="row justify-content-center">
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      data: {
        name: '',
        category: '',
        stock: '',
        price: '',
        image_url: ''
      },
      id: this.$route.params.id
    }
  },
  created () {
    const id = this.$route.params.id
    const a = this.$store.getters.productById(id)
    this.data = a
  },
  methods: {
    edit () {
      this.$store.dispatch('putProduct', { id: this.id, data: this.data })
    }
  }
}
</script>

<style>

</style>
