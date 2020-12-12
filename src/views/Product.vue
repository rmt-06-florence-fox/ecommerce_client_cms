<template>
  <section>
    <Navbar />
    <div class="row no-gutters" style="margin-top: 3%">
      <navVertical />
      <div class="col-md-10 container-fluid" style="box-shadow: 0px 0px 10px;">
          <h3>
              <i class="fas fa-ad me-2 mt-5"></i>Product
          </h3>
              <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" data-whatever="@mdo"><i class="fas fa-folder-plus"></i> add product</button><hr>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">
                  <form @submit.prevent="searchId()">
                    <input class="form-control form-control-sm" type="text" placeholder="id-Product" aria-label=".form-control-sm example" style="width: 17%; margin-left: 42%" v-model="idSearch">
                  </form>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Image URL</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
              <ProductList
                v-for= 'product in products'
                :key= 'product.id'
                :product= 'product'
              />
          </table>
      </div>
    </div>
    <AddProduct />
  </section>
</template>

<script>
import ProductList from '../components/ProductList.vue'
import AddProduct from '../components/AddProduct.vue'
import navVertical from '../components/navVertical'
import Navbar from '../components/Navbar'

export default {
  name: 'Product',
  data () {
    return {
      idSearch: null
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    ProductList,
    AddProduct,
    navVertical,
    Navbar
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    searchId () {
      const id = this.idSearch
      this.$store.dispatch('searchByid', id)
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>

</style>
