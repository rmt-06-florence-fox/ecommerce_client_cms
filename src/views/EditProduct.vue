<template>
    <div class="container">
        <div id="edit-page" class="bg-light col mt-5 rounded">
            <form id="edit-form" class="input-margin" @submit.prevent="edit">
                <h1>Edit Form</h1>
                <p>{{Detail}}</p>
                <p>{{Detail.name}}</p>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" name="name" id="edit-name" placeholder="name" v-model="editProduct.name">
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" name="image" id="edit-image" placeholder="image" v-model="editProduct.image_url">
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" name="price" id="edit-price" placeholder="price" v-model="editProduct.price">
                </div>
                <div class="form-group">
                    <label for="stock">Stock</label>
                    <input type="stock" class="form-control" name="stock" id="edit-stock" placeholder="stock" v-model="editProduct.stock">
                </div>
                <button type="submit" class="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'EditProduct',
  data () {
    return {
      editProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    filterId () {
      const id = this.$route.params.id
      this.$store.dispatch('filterId', id)
    },
    edit () {
      const id = this.$route.params.id
      const edittedData = this.editProduct
      this.$store.dispatch('edit', id, edittedData)
    }
  },
  computed: {
    Detail () {
      console.log(`${this.$store.state.filteredData}`)
      return this.$store.state.filteredData
    }
  },
  created () {
    this.filterId()
  }
}
</script>

<style>

</style>
