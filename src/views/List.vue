<template>
  <div>
      <img src="../assets/pattern-bg.jpg" alt="" id="bg">
      <router-link to="/add"><button type="submit" class="btn btn-primary btn-add">Add Product</button></router-link>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <itemProduct v-for="(product, i) in products" :key="product.id" :i="i" :product="product"></itemProduct>
        </tbody>
      </table>
  </div>
</template>

<script>
import itemProduct from '../components/ItemProduct'
export default {
  name: 'list',
  components: { itemProduct },
  methods: {
    fetchProduct () {
      this.$store.dispatch('fetchData')
    }
  },
  created () {
    this.fetchProduct()
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>
<style scoped>

button {
  margin: 20px;
  margin-left: 83%;
}

.table {
  width: 85%;
  margin-left: 8%;
}

#bg {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
</style>
