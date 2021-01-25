<template>
    <div
          class="mt-2 flex px-4 py-4 text-black justify-between bg-white shadow-xl rounded-lg cursor-pointer transition duration-300 hover:text-white hover:bg-gray-900 hover:shadow-inner"
        >
          <!-- Card -->

          <div class="grid grid-cols-3 justify-items-start w-6/12">
            <img
              class="h-16 w-16 rounded-md object-cover"
              :src="banner.image_url"
              alt=""
            />
            <div
              class=" capitalize text-current"
            >
            <span class="mt-2 text-current">
                {{banner.title}}
            </span>
            </div>
            <div
              class=" capitalize text-current"
            >
              <!-- <span>name</span> -->
              <span class="mt-2 text-current">
                {{bannerStat}}
              </span>
            </div>

          </div>

          <div class="grid grid-cols-2 w-6/12 justify-items-start">
            <!-- Rigt side -->

            <div
              class="capitalize text-left"
            >
              <span class="mt-2">
                {{bannerSize}}
              </span>
            </div>
            <div
              class="flex flex-row justify-around items-center capitalize text-left w-full"
            >
              <button class="bg-gray-400 py-1 px-3 text-white rounded-sm transform scale-100 hover:scale-110"
                      @click="editThis">
                Edit
              </button>
              <button :class="butCol"
                      @click="updateStat">
                {{bannerPatch}}
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
import axios from '../config/axios'

export default {
  name: 'bannerCard',
  props: ['banner'],
  methods: {
    deleteThis () {
      axios({
        method: 'delete',
        url: `/banner/${this.banner.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          this.$emit('reload')
        })
    },
    editThis () {
      this.$emit('editThis', this.banner)
    },
    updateStat () {
      axios({
        method: 'put',
        url: `/banner/${this.banner.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          status: !this.banner.status
        }
      })
        .then(res => {
          this.$emit('reload')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    bannerStat () {
      if (this.banner.status) {
        return 'Published'
      } else {
        return 'Unpublished'
      }
    },
    bannerSize () {
      if (this.banner.size === 'sm') {
        return 'Small'
      } else if (this.banner.size === 'md') {
        return 'Medium'
      } else {
        return 'Large'
      }
    },
    bannerPatch () {
      if (this.banner.status) {
        return 'Unpublish'
      } else {
        return 'Publish'
      }
    },
    butCol () {
      if (this.banner.status) {
        return 'bg-yellow-500 py-1 px-3 text-white rounded-sm transform scale-100 hover:scale-110'
      } else {
        return 'bg-green-500 py-1 px-3 text-white rounded-sm transform scale-100 hover:scale-110'
      }
    }
  }
}
</script>

<style>

</style>
