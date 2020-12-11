<template>
  <div
          class="mt-2 flex px-4 py-4 text-black justify-between bg-white shadow-xl rounded-lg cursor-pointer transition duration-300 hover:text-white hover:bg-gray-900 hover:shadow-inner"
        @click="goEdit">
          <!-- Card -->

          <div class="flex justify-between">
            <!-- Left side -->

            <img
              class="h-16 w-16 rounded-full object-cover"
              :src="product.image_url"
              alt=""
            />

            <div
              class="ml-4 flex flex-col capitalize text-current"
            >
              <!-- <span>name</span> -->
              <span class="mt-2 text-current">
                {{product.name}}
              </span>
            </div>

          </div>

          <div class="grid grid-cols-4 w-8/12 justify-items-start">
            <!-- Rigt side -->

            <div
              class="mr-16 flex flex-col capitalize text-current text-left"
            >
              <span class="mt-2 text-current"
                  v-for="category in product.Categories"
                  :key="category.id">
                {{category.name}}
              </span>
            </div>

            <div
              class="mr-16 flex flex-col capitalize text-current "
            >
             Rp. {{product.price}}
            </div>

            <div
              class="mr-16 flex flex-col capitalize text-current "
            >
              {{product.stock}}
            </div>

            <div
              class="mr-8 flex flex-row capitalize text-gray-600 text-sm space-x-1 items-center w-full"
            >
              <button class="bg-yellow-500 py-1 px-3 text-white rounded-sm transform scale-100 hover:scale-110"
                      >
                Re-stock
              </button>
              <button class="bg-red-500 py-1 px-3 text-white rounded-sm transform scale-100 hover:scale-110"
                      @click.stop="deleteThis">
                Delete
              </button>
            </div>
          </div>
    </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    goEdit () {
      this.$router.push({
        name: 'edit-product',
        params: { id: this.product.id }
      })
    },
    deleteThis () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
}
</script>

<style>

</style>
