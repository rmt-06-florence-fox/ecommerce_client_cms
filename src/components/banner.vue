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
          class="pb-2 flex items-center justify-between w-full"
        >
          <div class="px-5">
            <button class="py-2 px-3 focus:outline-none hover:bg-black hover:text-white"
                  @click="publishAll">
              Publish All Banner
            </button>
            <button class="py-2 px-3 focus:outline-none hover:bg-black hover:text-white"
                  @click="unpublishAll">
              Unpublish All Banner
            </button>
          </div>
          <div class="px-5 py-2 hover:bg-black hover:text-white transform hover:-translate-x-3 transition duration-300 ease-in-out">
            <button class="px-2 focus:outline-none"
                  @click="addingBanner">
              Add Banner
            </button>
          </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <div
          class="mt-2 flex px-4 py-2 text-gray-600 justify-between w-11/12  select-none"
        >
          <!-- Card -->

          <div class="grid grid-cols-3 justify-items-center w-6/12">
            Image
            <div
              class=" capitalize text-current"
            >
            <span class="mt-2 text-current">
                Title
            </span>
            </div>
            <div
              class=" capitalize text-current"
            >
              <!-- <span>name</span> -->
              <span class="mt-2 text-current">
                Status
              </span>
            </div>

          </div>

          <div class="grid grid-cols-2 w-6/12 justify-items-center">
            <!-- Rigt side -->

            <div
              class="capitalize text-left"
            >
              <span class="mt-2">
                Size
              </span>
            </div>
            <div
              class="flex flex-row justify-around items-center capitalize text-left w-full"
            >
              Actions
            </div>
          </div>
    </div>
        </div>
        <div class="w-full flex flex-col items-center">
        <bannerCard v-for="banner in bannerList"
                    :key="banner.id"
                    :banner="banner"
                    class="w-11/12"
                    @reload="loadBanners"
                    @editThis="editThis">
        </bannerCard>
        </div>
      </div>
    </main>
    <addBanner v-if="onAdd"
                @closeThis="closeThis"
                @reload="loadBanners">
    </addBanner>
    <editBanner v-if="onEdit"
                @closeThis="closeThis"
                @reload="loadBanners"
                :banner="bannerToEdit">
    </editBanner>
  </div>
</template>

<script>
import axios from '../config/axios'
import addBanner from './addBanner.vue'
import bannerCard from './bannerCard'
import editBanner from './editBanner'

export default {
  name: 'banners',
  components: {
    addBanner,
    bannerCard,
    editBanner
  },
  data () {
    return {
      bannerRaw: [],
      onAdd: false,
      onEdit: false,
      bannerToEdit: null
    }
  },
  methods: {
    loadBanners () {
      axios({
        method: 'get',
        url: '/banner',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          this.bannerRaw = res.data
        })
    },
    addingBanner () {
      this.onAdd = !this.onAdd
    },
    closeThis (val) {
      if (val === 'add') {
        this.onAdd = !this.onAdd
      } else {
        this.onEdit = !this.onEdit
      }
    },
    editThis (banner) {
      this.onEdit = !this.onEdit
      this.bannerToEdit = banner
      // axios({
      //   methods: 'get',
      //   url: '/banner',
      //   headers: {
      //     access_token: localStorage.getItem('access_token')
      //   }
      // })
      //   .then(res => {
      //     this.bannerRaw = res.data
      //   })
    },
    publishAll () {
      console.log('publishAll')
      axios({
        method: 'put',
        url: '/banner',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status: true
        }
      })
        .then(res => {
          this.loadBanners()
        })
    },
    unpublishAll () {
      axios({
        method: 'put',
        url: '/banner',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status: false
        }
      })
        .then(res => {
          this.loadBanners()
        })
    }
  },
  created () {
    this.loadBanners()
  },
  computed: {
    bannerList () {
      return this.bannerRaw
    }
  }
}
</script>

<style>

</style>
