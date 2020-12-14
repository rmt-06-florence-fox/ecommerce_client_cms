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
                    <input type="number" class="form-control" name="stock" id="add-stock" placeholder="stock" v-model="addProduct.stock">
                </div>
                <div class="form-group">
                    <label for="add-category">Category</label>
                    <select class="form-control" id="add-category" v-model="addProduct.category">
                      <option selected disabled>Select Category</option>
                      <SelectCategory
                        v-for="category in listCategories"
                        :key="category.id"
                        :category="category"
                      ></SelectCategory>
                    </select>
                </div>
                <button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#exampleModalLong">
                  <i class="far fa-plus-square"> Add Category</i>
                </button> <br>
                <button type="submit" class="btn btn-primary" >Submit</button>
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Add Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="name">Add Category Book</label>
                          <input type="text" class="form-control" placeholder="category" v-model="addCategory">
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="getAdd" data-dismiss="modal">Save Category</button>
                      </div>
                    </div>
                  </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import SelectCategory from '../components/SelectCategory'
export default {
  name: 'AddProducts',
  data () {
    return {
      addProduct: {
        name: '',
        image_url: '',
        price: '',
        stock: '',
        category: ''
      },
      addCategory: ''
    }
  },
  methods: {
    add () {
      const addProduct = this.addProduct
      this.$store.dispatch('addProduct', addProduct)
        .then(() => { console.log(this.addProduct) })
        .catch(e => console.log(e))
    },
    fetchCategories () {
      this.$store.dispatch('fetchCategories')
    },
    getAdd () {
      const category = this.addCategory
      this.$store.dispatch('addCategory', category)
    }
  },
  components: {
    SelectCategory
  },
  computed: {
    listCategories () {
      return this.$store.state.listCategories
    }
  },
  created () {
    this.fetchCategories()
  }
}
</script>

<style>

</style>
