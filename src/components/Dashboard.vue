<template>
  <div class="container">
      <h1 class="text-white">Products</h1>
    <table class="table table-borderless text-white">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Stock</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
    <tbody>
        <tr v-for="(product, index) in productList" :key="index">
            <td>{{product.id}}</td>
            <td>{{product.image_url}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.stock}}</td>
            <td><button class="btn btn-primary"> Edit </button> <button class="btn btn-danger">Delete</button></td>
        </tr>
    </tbody>
</table>
  </div>
</template>
<script>
// import DashboardList from './DashboardList'
export default {
  name: 'Dashboard',
  components: {
    // DashboardList
  },
  methods: {
    getDataProduct () {
      this.$store.dispatch('getDataProduct')
    }
  },
  computed: {
    productList () {
      return this.$store.state.products
    }
  },
  created () {
    console.log(this.productList, '<<<<< created store')
    this.getDataProduct()
  }
}
</script>
