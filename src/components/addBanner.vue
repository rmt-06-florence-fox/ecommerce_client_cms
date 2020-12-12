<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="fixed inset-0 overflow-hidden">
  <div class="absolute inset-0 overflow-hidden">
    <!--
      Background overlay, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex" aria-labelledby="slide-over-heading">
      <!--
        Slide-over panel, show/hide based on slide-over state.

        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-full"
          To: "translate-x-0"
        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
          From: "translate-x-0"
          To: "translate-x-full"
      -->
      <div class="relative w-screen max-w-md">
        <!--
          Close button, show/hide based on slide-over state.

          Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
          <button class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    @click="closeThis">
            <span class="sr-only">Close panel</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="h-full flex flex-col py-6 bg-gray-50 shadow-xl overflow-y-scroll">
          <div class="px-4 sm:px-6">
            <h2 id="slide-over-heading" class="text-lg font-medium text-gray-900">
              Add Banner
            </h2>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <!-- Replace with your content -->
            <div class="absolute inset-0 px-4 sm:px-6">
              <div class="h-full" aria-hidden="true">
                  <form>
                      <label for="title" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Title</label>
                        <input id="title" type="text" name="title" placeholder="Banner Title"
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                        v-model="price"/>
                      <label for="image" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Banner Image</label>
                        <input id="image" type="text" name="image" placeholder="Banner image"
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                        v-model="price"/>
                      <label for="status" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Banner status</label>
                        <input id="status" type="text" name="status" placeholder="Banner status"
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                        v-model="price"/>
                  </form>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'addBanner',
  methods: {
    closeThis () {
      this.$emit('closeThis')
    }
  }
}
</script>

<style>

</style>
