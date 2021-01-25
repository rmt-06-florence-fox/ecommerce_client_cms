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
        <div class="h-full flex flex-col py-6 bg-gray-50 shadow-xl overflow-y-scroll"
              v-on-clickaway="closeThis">
          <div class="px-4 sm:px-6 mt-8">
            <div v-if="onError">
             <errorBanner v-for="(error, index) in errorData"
                          :key="index"
                          :error="error"></errorBanner>
            </div>
            <h2 id="slide-over-heading" class="text-2xl font-bold text-gray-900">
              Add Banner
            </h2>
          </div>
          <div class="mt-6 relative flex-1 px-4 sm:px-6">
            <!-- Replace with your content -->
            <div class="absolute inset-0 px-4 sm:px-6">
              <div class="h-full" aria-hidden="true">
                  <form @submit.prevent="postBanner">
                      <label for="title" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Title</label>
                        <input id="title" type="text" name="title" placeholder="Banner Title"
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required
                        v-model="title"/>
                      <label for="image" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Banner Image</label>
                        <input id="image" type="text" name="image" placeholder="Banner image"
                        class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                        v-model="image_url"/>
                        <img v-if="image_url" :src="image_url" class="h-auto w-full">
                      <label for="status" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Banner status</label>
                        <div class="flex flex-row w-full gap-x-3 justify-center pb-2">
                        <label class="inline-flex items-center mt-3">
                            <input type="radio" value="1" v-model="status" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">Published</span>
                        </label>
                        <label class="inline-flex items-center mt-3">
                            <input type="radio" value="0" v-model="status" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">Unpublished</span>
                        </label>
                        </div>
                      <label for="status" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Banner Size</label>
                        <div class="flex flex-row w-full gap-x-3 justify-center pb-2">
                        <label class="inline-flex items-center mt-3">
                            <input type="radio" value="sm" v-model="size" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">Small</span>
                        </label>
                        <label class="inline-flex items-center mt-3">
                            <input type="radio" value="md" v-model="size" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">Medium</span>
                        </label>
                        <label class="inline-flex items-center mt-3">
                            <input type="radio" value="lg" v-model="size" class="form-radio h-5 w-5 text-gray-600"><span class="ml-2 text-gray-700">Large</span>
                        </label>
                        </div>
                    <div class="w-full flex flex-row gap-x-2">
                        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-900 shadow-lg focus:outline-none hover:bg-gray-100 hover:text-black hover:shadow-none">
                        Add Banner
                        </button>
                        <button type="button"
                                @click="closeThis"
                                class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-gray-100 hover:text-black hover:shadow-none">
                            Cancel</button>
                    </div>
                  </form>
                  <div class="invisible h-6">
                    <span></span>
                  </div>
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
import axios from '../config/axios'
import errorBanner from './errorBanner'
import { directive as onClickaway } from 'vue-clickaway'

export default {
  name: 'addBanner',
  directives: {
    onClickaway: onClickaway
  },
  components: {
    errorBanner
  },
  data () {
    return {
      status: '',
      title: '',
      image_url: '',
      size: '',
      onError: false,
      errorData: ''
    }
  },
  methods: {
    closeThis () {
      this.$emit('closeThis', 'add')
    },
    postBanner () {
      axios({
        method: 'post',
        url: '/banner',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: this.title,
          status: this.status,
          image_url: this.image_url,
          size: this.size
        }
      })
        .then(res => {
          console.log(res.data)
          this.$emit('closeThis', 'add')
          this.$emit('reload')
        })
        .catch(err => {
          console.log(err)
          this.onError = true
          setTimeout(() => { this.onError = false }, 2000)
          this.errorData = err.response.data.errors
          console.log(err.response)
        })
    }
  }
}
</script>

<style>

</style>
