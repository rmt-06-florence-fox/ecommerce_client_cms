<template>
  <div class="product">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <table class="table table-image">
            <thead>
              <tr>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  No
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Image
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Name
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Price
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Stock
                </th>
                <th
                  scope="col"
                  style="text-align: center; font-size: 20px"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <ProductItem
                v-for="(product, idx) in products" :key="idx"
                :product="product"
              ></ProductItem>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  methods: {
    fetchProductList () {
      this.$store.dispatch('fetchProductList')
    }
  },
  created () {
    this.fetchProductList()
  }

}
</script>

<style>

</style>
