<template>
  <div class="container-fluid ">
    <div class="row"><br>
      <h3 class="display-3 font-weight-bold">Edit Product</h3>
          <form class="edit-product-form" @submit.prevent="editProduct">
            <div class="form-group">
              <label for="image_url" class="font-weight-bold">Image URL: </label>
              <input v-model="editProductPayload.image_url" type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="name" class="name font-weight-bold" >Name: </label>
              <input v-model="editProductPayload.name" type="text" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="price" class="price font-weight-bold">Price: </label>
              <input v-model="editProductPayload.price" type="number" class="form-control" min="0"/>
            </div>
            <div class="form-group">
              <label for="stock" class="stock font-weight-bold">Stock: </label>
              <input v-model="editProductPayload.stock" type="number" class="form-control" min="0"/>
            </div>
            <div class="form-group">
              <label for="category" class="font-weight-bold">Category: </label>
              <select v-model="editProductPayload.CategoryId" name="category" class="form-control">
                <EditOptionValue
                  v-for="category in categories"
                  :key="category.id"
                  :category="category"
                  :CategoryId="editProductValue.CategoryId"
                />
              </select>
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import EditOptionValue from '../components/EditOptionValue'
export default {
  name: 'EditProductForm',
  data () {
    return {
      editProductPayload: {
        id: '',
        image_url: '',
        name: '',
        price: 0,
        stock: 0,
        CategoryId: ''
      }
    }
  },
  created () {
    this.editProductPayload.id = this.$route.params.id
    this.editProductPayload.image_url = this.editProductValue.image_url
    this.editProductPayload.name = this.editProductValue.name
    this.editProductPayload.price = this.editProductValue.price
    this.editProductPayload.stock = this.editProductValue.stock
    this.editProductPayload.CategoryId = this.editProductValue.CategoryId
  },
  computed: {
    editProductValue () {
      return this.$store.state.editProductValue
    },
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    editProduct () {
      this.$store.dispatch('editProduct', this.editProductPayload)
        .then(() => {
          this.$store.dispatch('getProducts')
          this.$router.push({ name: 'Main' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message + '!'
          })
        })
    }
  },
  components: {
    EditOptionValue
  }
}
</script>

<style scoped>
.container-fluid {
  display: flex;
  justify-content: center;
}

div .font-weigth-bold {
  display: flex;
  justify-content: flex-start;
}

.row {
  display: flex;
  flex-direction: column;
}
</style>
