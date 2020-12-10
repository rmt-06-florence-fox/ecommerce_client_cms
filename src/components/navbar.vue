<template>
  <nav
      class="flex flex-col bg-gray-200 w-64 px-12 pt-4 pb-6 place-content-between"
    >
      <!-- SideNavBar -->

      <div class="flex flex-row border-b items-center justify-between pb-2">
        <!-- Hearder -->
        <span class="text-lg font-semibold capitalize  flex flex-row"
              v-html="siteTitle">
        </span>
      </div>

      <!-- <div class="mt-8">
        <h2 class="mt-4 text-xl  font-extrabold capitalize">
          Hello Enoshima
        </h2>
        <span class="text-sm ">
          <span class="font-semibold text-green-600 ">
            Admin
          </span>
          id789038
        </span>
      </div> -->
      <div class="h-full flex flex-col justify-center">
      <router-link to="/add-product">
        <button
          class="mt-8 flex items-center justify-between py-3 px-2 text-white rounded-lg shadow bg-green-600 hover:bg-gray-900"
        >
          <!-- Action -->
          <span>Add Product</span>
          <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </svg>
        </button>
      </router-link>

      <ul class="flex flex-col mt-2 text-gray-600 justify-items-start space-y-3">
        <!-- Links -->
        <li class="mt-8">
          <router-link to="/dashboard" class="flex ">
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
              class="ml-2 capitalize font-medium text-black  site-title"
            >
              dashboard
            </span>
          </router-link>
        </li>

        <li class="mt-8">
          <a href="#home" class="flex">
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
              class="ml-2 capitalize font-medium text-black "
            >
              categories
            </span>
          </a>
        </li>

        <li
          class="mt-8 shadow py-2 bg-white rounded-lg-ml-4"
        >
          <a href="#home" class="flex pl-4">
            <svg class="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
                014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
                8-4z"
              ></path>
            </svg>
            <span class="ml-2 capitalize font-medium">users</span>
          </a>
        </li>

        <li class="mt-8">
          <a href="#home" class="flex">
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
              class="ml-2 capitalize font-medium text-black "
            >
              banner
            </span>
          </a>
        </li>
      </ul>
      </div>

      <div class="mt-auto flex items-center text-red-700 transform hover:translate-x-4 transition duration-300 ease-in-out"
            @click="logout">
        <!-- important action -->
        <a href="#home" class="flex items-center">
          <svg class="fill-current h-5 w-5 text-red-700" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
              2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
              0 012-2h9z"
            ></path>
          </svg>
          <span class="ml-2 capitalize font-medium text-red-700">log out</span>
        </a>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  },
  computed: {
    siteTitle () {
      return this.$store.state.siteTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
