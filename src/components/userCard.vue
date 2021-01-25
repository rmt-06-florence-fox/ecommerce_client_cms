<template>
    <div
          class="mt-2 flex px-4 py-4 text-black justify-between bg-white shadow-xl rounded-lg cursor-pointer transition duration-300 hover:text-white hover:bg-gray-900 hover:shadow-inner"
        >
          <!-- Card -->

          <div class="grid grid-cols-2 justify-items-start w-6/12">
            <div
              class=" capitalize text-current"
            >
            <span class="mt-2 text-current">
                {{user.username}}
            </span>
            </div>
            <div
              class=" capitalize text-current"
            >
              <!-- <span>name</span> -->
              <span class="mt-2 text-current">
                {{user.email}}
              </span>
            </div>

          </div>

          <div class="grid grid-cols-1 w-6/12 justify-items-start">
            <!-- Rigt side -->

            <div
              class="capitalize text-left"
            >
              <span class="mt-2">
                {{user.address}}
              </span>
            </div>
          </div>
    </div>
</template>

<script>
export default {
  name: 'userCard',
  props: ['user']
}
</script>

<style>

</style>
