<template>
  <section>
    <Navbar></Navbar>
    <div id="productId" class="container">
      <table class="table table-striped table-warning">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
          <ProductList
            v-for="(product, i) in products"
            :key="i"
            :product="product"
            :i='i'
          ></ProductList>
      </table>
    </div>
  </section>
</template>

<script>
import axios from '../config/axiosInstance'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductList
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    fetchProducts () {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // console.log(data)
          this.products = data
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<style>
  #productId {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: 'Metal Mania', cursive;
  }

</style>
