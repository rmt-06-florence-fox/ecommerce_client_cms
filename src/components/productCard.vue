<template>
  <div
          class="mt-2 flex px-4 py-4 justify-between bg-white shadow-xl rounded-lg cursor-pointer hover:bg-green-500"
        >
          <!-- Card -->

          <div class="flex justify-between">
            <!-- Left side -->

            <img
              class="h-16 w-16 rounded-full object-cover"
              :src="product.image_url"
              alt=""
            />

            <div
              class="ml-4 flex flex-col capitalize text-gray-600"
            >
              <!-- <span>name</span> -->
              <span class="mt-2 text-black">
                {{product.name}}
              </span>
            </div>

          </div>

          <div class="grid grid-cols-4 w-8/12 justify-items-start">
            <!-- Rigt side -->

            <div
              class="mr-16 flex flex-col capitalize text-gray-600 "
            >
              categories
            </div>

            <div
              class="mr-16 flex flex-col capitalize text-gray-600 "
            >
             Rp. {{product.price}}
            </div>

            <div
              class="mr-16 flex flex-col capitalize text-gray-600 "
            >
              {{product.stock}}
            </div>

            <div
              class="mr-8 flex flex-col capitalize text-gray-600 "
            >
              {{product.updatedAt}}
            </div>
          </div>
    </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product']
}
</script>

<style>

</style>
