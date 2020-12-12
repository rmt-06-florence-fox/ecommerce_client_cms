<template>
  <div class=" w-full flex overflow-hidden">
    <main
      class="flex-1 flex flex-col bg-gray-100 transition duration-700 ease-in-out overflow-y-auto
              justify-center place-items-center w-full"
    >
    <div v-if="onProductError">
             <errorBanner v-for="(error, index) in errorProductList"
                          :key="index"
                          :error="error"></errorBanner>
      </div>
      <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 class="text-xl font-semibold">Edit Product</h1>
          <form class="mt-6" @submit.prevent="postProduct">
            <div class="flex justify-between gap-3">
              <span class="w-1/2">
                <label for="product-name" class="block text-xs font-semibold text-gray-600 uppercase">Product's Name</label>
                <input id="product-name" type="text" name="product-name" placeholder="Product's Name"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                      v-model="name"/>
              </span>
              <span class="w-1/2">
                <label for="stock" class="block text-xs font-semibold text-gray-600 uppercase">Stock</label>
              <input id="stock" type="number" name="stock" placeholder="Input Stocks"
                      class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                      v-model="stock"/>
              </span>
            </div>
            <label for="price" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Price</label>
            <input id="price" type="number" name="price" placeholder="Input Product's Price"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                  v-model="price"/>
            <label for="image" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Image URL</label>
            <input id="image" type="text" name="image" placeholder="Image URL"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                  v-model="image_url"/>
            <img v-if="image_url" :src="image_url" class="h-auto w-28">
            <span class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Add Categories</span>
            <div class="mt-2 w-full">
              <select class="w-full focus:outline-none focus:bg-gray-300 focus:shadow-inner py-2 px-3" size="5" multiple v-model="catSelected">
              <option v-for="cat in categories" :key="cat.id" :value="cat.id" class="py-2">{{cat.name}}</option>
              </select>
              <span class="text-sm text-left italic subpixel-antialiased text-gray-500">use drag, control, or shift to select multiple categories</span>
            </div>
            <div class="w-full flex flex-row gap-x-2">
            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-900 shadow-lg focus:outline-none hover:bg-gray-100 hover:text-black hover:shadow-none">
              Update Product
            </button>
            <button type="button"
                    @click="getBack"
                    class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-gray-100 hover:text-black hover:shadow-none">
                Cancel</button>
            </div>
          </form>
        </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import errorBanner from './errorBanner'

export default {
  name: 'editProduct',
  components: {
    errorBanner
  },
  data () {
    return {
      id: '',
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      catSelected: []
    }
  },
  methods: {
    loadData () {
      const data = this.$store.getters.getOneToEdit(this.$route.params.id)
      this.name = data.name
      this.image_url = data.image_url
      this.price = data.price
      this.stock = data.stock
      this.id = data.id
      data.Categories.forEach(el => {
        this.catSelected.push(el.id)
      })
    },
    getBack () {
      this.$router.back()
    },
    postProduct () {
      const data = {
        id: this.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        catSelected: this.catSelected
      }
      this.$store.dispatch('updateProduct', data)
    }
  },
  beforeCreate () {
    this.$store.dispatch('loadProducts')
  },
  created () {
    // this.$store.dispatch('loadProducts')
    //   .then(() => {
    this.loadData()
    // })
  },
  computed: {
    ...mapState({
      categories: 'categories',
      onProductError: 'onProductError',
      errorProductList: 'errorProductList'
    })
  }
}
</script>

<style>

</style>
