<template>
  <section class="absolute top-0 right-0.5 flex items-center justify-center mt-4 mx-2">
    <div class="flex items-center bg-white shadow  rounded mt-6 px-2 mx-8" style="width: 24rem;">
        <div class="mr-6 bg-red-500 rounded px-4 py-2 text-center -ml-3">
            <svg fill="none" viewBox="0 0 24 24" class="w-8 h-8 text-white" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </div>
        <div class="flex items-center rounded-lg rounded-l-none">
            <h2 class="text-red-600 text-lg font-bold mr-2 ">Error</h2>
            <p class="text-sm text-gray-700">{{error}}</p>
        </div>
        <div class="flex justify-end flex-1">
            <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 text-red-600" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </div>
    </div><!--one-->
   </section>
</template>

<script>
export default {
  name: 'errorBanner',
  props: ['error']
}
</script>

<style>

</style>
