<template>
  <div class=" w-full flex overflow-hidden">
    <main
      class="flex-1 flex flex-col bg-gray-200 transition duration-500 ease-in-out overflow-y-auto"
    >
      <div class="mx-10 my-2 ">
        <nav
          class="flex flex-row justify-between border-b
          transition duration-500
          ease-in-out"
        >
        </nav>
        <h2 class="my-10 text-4xl font-semibold ">
          Banner list
        </h2>
        <div
          class="pb-2 flex items-center justify-between w-11/12"
        >
          <div>
            <span>
              <span class="text-gray-500 ">
                <!-- {{countStocks}} -->
              </span>
              items;
            </span>
            <span>
              <span class="text-gray-500 ">
                <!-- {{countProducts}} -->
              </span>
              products;
            </span>
            <span>
              <span class="text-gray-500 ">
                <!-- {{countCategories}} -->
              </span>
              categories
            </span>
          </div>
          <div class="px-5 py-2 hover:bg-black hover:text-white transform hover:-translate-x-3 transition duration-300 ease-in-out">
            <button class="focus:outline-none"
                  @click="addingBanner">
              Add Banner
            </button>
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <div class="mt-6 flex justify-between text-gray-600 w-11/12">

          <!-- <div class="ml-12 pl-4 flex capitalize select-none">
            <span class="ml-8 flex items-center"
                  @click="sortProduct">
              Product's Name
              <svg class="ml-1 h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path :d="changeProduct">
                  </path>
                  </svg>
            </span>
          </div> -->

          <div class="grid grid-cols-4 capitalize w-8/12 justify-items-start">
            <!-- Right side -->

            <!-- <span class="mr-16 pr-1 flex items-center select-none"
                  @click="sortCategories">
              Categories
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changeCategories"
                ></path>
              </svg>
            </span> -->

            <!-- <span class="mr-16 pr-2 flex items-center select-none"
                  @click="sortPrice">
              Price
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changePrice"
                ></path>
              </svg>
            </span> -->

            <!-- <span class="mr-12 flex items-center select-none"
                  @click="sortStocks">
              Stocks
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changeStocks"
                ></path>
              </svg>
            </span> -->
            <span class="mr-16 flex items-center select-none">
              Actions
            </span>
          </div>
        </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <productCard v-for="banner in bannerList"
                    :key="banner.id"
                    :product="product"
                    class="w-11/12">
        </productCard>
        </div>
      </div>
    </main>
    <addBanner v-if="onAdd"
                @closeThis="closeThis">
    </addBanner>
  </div>
</template>

<script>
import axios from '../config/axios'
import addBanner from './addBanner.vue'

export default {
  name: 'banners',
  components: {
    addBanner
  },
  data () {
    return {
      bannerList: [],
      onAdd: false
    }
  },
  methods: {
    loadBanners () {
      axios({
        methods: 'get',
        url: ''
      })
    },
    addingBanner () {
      this.onAdd = !this.onAdd
    },
    closeThis () {
      this.onAdd = !this.onAdd
    }
  },
  created () {

  }
}
</script>

<style>

</style>
