<template>
  <div class=" w-full flex overflow-hidden">
    <main
      class="flex-1 flex flex-col bg-gray-100 transition duration-500 ease-in-out overflow-y-auto
              justify-center place-items-center w-full"
    >
      <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
          <h1 class="text-xl font-semibold">Add New Product</h1>
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
            <span class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Add Categories</span>
            <div class="grid grid-cols-3 justify-items-start">
              <div v-for="cat in categories" :key="cat.id">
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" :value="cat.id"
                          v-model="catSelected"><span class="ml-2 text-gray-700">{{cat.name}}</span>
              </label>
              </div>
            </div>
            <div class="w-full flex flex-row gap-x-2">
            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-green-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
              Update Product
            </button>
            <button type="button"
                    @click="getBack"
                    class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Cancel</button>
            </div>
          </form>
        </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'addProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      catSelected: []
    }
  },
  methods: {
    postProduct () {
      const data = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock,
        catSelected: this.catSelected
      }
      this.$store.dispatch('postProduct', data)
    },
    getBack () {
      this.$router.back()
    }
  },
  computed: {
    ...mapState({
      categories: 'categories'
    })
  }
}
</script>

<style>

</style>
