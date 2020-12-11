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
          <!-- <div class="flex">
            <a
              href="users-dashboard/"
              class="py-2 block text-gray-500 border-gray-500
              focus:outline-none border-b-2 font-medium capitalize
              transition duration-500 ease-in-out"
            >
              users
            </a>
            <button
              class="ml-6 py-2 block border-b-2 border-transparent
              focus:outline-none font-medium capitalize text-center
              focus:text-gray-500 focus:border-gray-500
              dark-focus:text-gray-200 dark-focus:border-gray-200
              transition duration-500 ease-in-out"
            >
              role
            </button>
            <button
              class="ml-6 py-2 block border-b-2 border-transparent
              focus:outline-none font-medium capitalize text-center
              focus:text-gray-500 focus:border-gray-500
              dark-focus:text-gray-200 dark-focus:border-gray-200
              transition duration-500 ease-in-out"
            >
              access rights
            </button>
          </div> -->

          <!-- <div class="flex items-center select-none">
            <span
              class="hover:text-gray-500 dark-hover:text-gray-300 cursor-pointer mr-3 transition duration-500 ease-in-out"
            >
              <svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
                <path
                  d="M505 442.7L405.3
                  343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
                  44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
                  208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
                  2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
                  0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
                  0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
                  128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </span>

            <input
              class="w-12 bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div> -->
        </nav>
        <h2 class="my-10 text-4xl font-semibold ">
          Banner list
        </h2>
        <div
          class="pb-2 flex items-center justify-between text-gray-600 "
        >
          <!-- Header -->

          <div>
            <span>
              <span class="text-gray-500 ">
                {{countStocks}}
              </span>
              items;
            </span>
            <span>
              <span class="text-gray-500 ">
                {{countProducts}}
              </span>
              products;
            </span>
            <span>
              <span class="text-gray-500 ">
                {{countCategories}}
              </span>
              categories
            </span>
          </div>
          <div>
            <span class="capitalize">
              project
              <span
                class="text-gray-500  cursor-pointer"
              >
                all
              </span>
            </span>
            <span class="capitalize ml-12">
              date added
              <span
                class="text-gray-500  cursor-pointer"
              >
                all time
              </span>
            </span>
            <span class="capitalize ml-12">
              role
              <span
                class="text-gray-500  cursor-pointer"
              >
                all
              </span>
            </span>
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <div class="mt-6 flex justify-between text-gray-600 w-11/12">
          <!-- List sorting -->

          <div class="ml-12 pl-4 flex capitalize select-none">
            <!-- Left side -->
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
          </div>

          <div class="grid grid-cols-4 capitalize w-8/12 justify-items-start">
            <!-- Right side -->

            <span class="mr-16 pr-1 flex items-center select-none"
                  @click="sortCategories">
              Categories
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changeCategories"
                ></path>
              </svg>
            </span>

            <span class="mr-16 pr-2 flex items-center select-none"
                  @click="sortPrice">
              Price
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changePrice"
                ></path>
              </svg>
            </span>

            <span class="mr-12 flex items-center select-none"
                  @click="sortStocks">
              Stocks
              <svg class="ml-1 h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path
                  :d="changeStocks"
                ></path>
              </svg>
            </span>
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
  </div>
</template>

<script>
export default {
  name: 'users',
  created () {
    this.$store.dispatch('loadUsers')
  }
}
</script>

<style>

</style>
