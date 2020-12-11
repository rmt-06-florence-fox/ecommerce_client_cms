<template>
  <div>
    <b-button class="btn-primary" @click="showModal">Add Product</b-button>
    <form @submit.prevent="addProduct">
        <b-modal ref="my-modal" hide-footer title="add new product">
        <div class="d-block text-center">
            <h3>Product Name</h3>
            <input class="text-center" v-model="name"  type="text" required >
            <h3>Image URL</h3>
            <input class="text-center" v-model="image_url"  type="text" required >
            <h3>Price</h3>
            <input class="text-center" v-model="price"  type="text" required >
            <h3>Stock</h3>
            <input class="text-center" v-model="stock"  type="text" required >
            <h3>category</h3>
            <select v-model="categorySelected" required >
              <option select disabled>select</option>
              <option v-for="element in getCategory" :key="element.id" >{{element.name}}</option>
            </select>
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="addProduct" >add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: '',
      categorySelected: ''
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        categoryName: this.categorySelected
      }
      this.$store.dispatch('addProduct', payload)
      this.hideModal()
    },
    fetchCategory () {
      this.$store.dispatch('fetchCategory')
    }
  },
  created () {
    this.fetchCategory()
  },
  computed: {
    getCategory () {
      return this.$store.state.categories
    }
  }
}
</script>

<style>

</style>
