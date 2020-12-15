<template>
  <b-container fluid class="d-flex">
    <b-col class="col-3">
      <h1>Ini Navbar Kiri</h1>
    </b-col>
    <ProductSection></ProductSection>
    <!-- <b-col class="col-9 p-4">
      <div class="d-flex flex-row justify-content-between">
        <b-button
          size="sm"
          class="mb-2 d-flex flex-row"
          variant="primary"
          @click="modalShow = !modalShow"
          >Add Product</b-button
        >
        <b-button size="sm" class="mb-2 d-flex flex-row" variant="primary"
          >Logout</b-button
        >
        <b-modal v-model="modalShow">
          <template #modal-title> Add Product </template>
          <b-container fluid>
            <b-row class="my-1">
              <b-col sm="4">
                <label for="name">Product Name</label>
              </b-col>
              <b-col sm="8">
                <b-form-input v-model="newProduct.name"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="4">
                <label for="image_url">Image Url</label>
              </b-col>
              <b-col sm="8">
                <b-form-input v-model="newProduct.image_url"> </b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="4">
                <label for="price">Price</label>
              </b-col>
              <b-col sm="8">
                <b-form-input v-model="newProduct.price"></b-form-input>
              </b-col>
            </b-row>

            <b-row class="my-1">
              <b-col sm="4">
                <label for="stock">Stock</label>
              </b-col>
              <b-col sm="8">
                <b-form-input v-model="newProduct.stock"></b-form-input>
              </b-col>
            </b-row>
          </b-container>
          <template #modal-footer>
            <div class="w-100 d-flex justify-content-center">
              <b-button   class="m-2" variant="primary" size="sm" @click.prevent="addProduct">
                Submit
              </b-button>
              <b-button class="m-2"  variant="secondary" size="sm" @click="modalShow=false">
                Cancel
              </b-button>
            </div>
          </template>
        </b-modal>
      </div>
       Table
       <b-table :fields="fields"> </b-table>
      <!Product Cards
      <ProductCard
        v-for="product in productList"
        :key="product.id"
        :product="product"
      ></ProductCard>
    </b-col>
    -->
  </b-container>
</template>

<script>
// import ProductCard from "../components/ProductCard";
import ProductSection from '../components/ProductsSection'
export default {
  name: 'MainPage',

  components: {
    ProductSection
  }

}
</script>

<style>
</style>
