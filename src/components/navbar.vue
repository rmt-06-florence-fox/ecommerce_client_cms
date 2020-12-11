<template>
  <nav
      class="flex flex-col bg-gray-900 w-64 px-12 pt-4 pb-6 place-content-between"
    >
      <!-- SideNavBar -->

      <div class="flex flex-row border justify-center py-2 w-full">
        <!-- Hearder -->
        <span class="text-lg font-bold capitalize flex flex-row bg-clip-text text-transparent bg-gradient-to-b from-gray-50 to-white">
          {{siteTitle}}
        </span>
      </div>

      <div class="mt-8">
        <h2 class="mt-4 text-xl  font-extrabold capitalize text-white">
          {{user.username}}
        </h2>
        <span class="text-sm ">
          <span class="font-semibold text-gray-600 ">
            {{user.email}}
          </span>
          AdminId{{user.id}}
        </span>
      </div>
      <div class="h-full flex flex-col justify-center">
      <router-link to="/add-product" router-link-active="translate-x-2">
        <button
          class="mt-8 flex items-center justify-between py-3 px-2 text-white rounded-lg shadow bg-yellow-500 hover:bg-gray-100 hover:text-black"
        >
          <!-- Action -->
          <span>Add Product</span>
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </router-link>

      <ul class="flex flex-col mt-2 text-gray-300 justify-items-start space-y-3">
        <!-- Links -->
        <li class="mt-8">
          <router-link to="/dashboard" class="flex" router-link-active="translate-x-2">
            <svg
              class="fill-current h-5 w-5 "
              viewBox="0 0 24 24"
            >
              <path
                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                4h4v-4h-4M4 8h4V4H4v4z"
              ></path>
            </svg>
            <span
              class="ml-2 capitalize font-medium text-white "
            >
              dashboard
            </span>
          </router-link>
        </li>

        <li class="mt-8">
          <router-link to="/banners" class="flex ">
            <svg
              class="fill-current h-5 w-5 "
              viewBox="0 0 24 24"
            >
              <path
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
                2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
                00-2-2h-1V1m-1 11h-5v5h5v-5z"
              ></path>
            </svg>
            <span
              class="ml-2 capitalize font-medium text-white "
            >
              banners
            </span>
          </router-link>
        </li>

        <li
          class="mt-8"
        >
        <router-link to="/users" class="flex ">
            <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                8-4z"
              ></path>
            </svg>
            <span class="ml-2 capitalize font-medium text-white">users</span>
        </router-link>
        </li>

        <li class="mt-8">
          <router-link to="/categories" class="flex ">
            <svg
              class="fill-current h-5 w-5 "
              viewBox="0 0 24 24"
            >
              <path
                d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                9v2h-4v-2h4m2-2h-8v6h8v-6z"
              ></path>
            </svg>
            <span
              class="ml-2 capitalize font-medium text-white "
            >
              categories
            </span>
          </router-link>
        </li>
      </ul>
      </div>

      <div class="mt-auto  py-2 px-3 rounded-md flex items-center text-gray-50 transform hover:translate-x-4 transition duration-300 ease-in-out hover:bg-gray-50 hover:text-black"
            @click="logout">
        <!-- important action -->
        <a href="#home" class="flex items-center w-full">
          <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
              2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
              0 012-2h9z"
            ></path>
          </svg>
          <span class="ml-2 capitalize font-medium">log out</span>
        </a>
      </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      siteTitle: 'siteTitle',
      user: 'user'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li:hover {
  /* background-color: #1F2937; */
  transform: translate(0.5rem);
  transition-duration: 0.4s;
}

</style>
