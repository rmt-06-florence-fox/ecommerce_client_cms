<template>
    <div class=" w-full flex overflow-hidden">
    <main
      class="flex-1 flex flex-col bg-gray-100 transition duration-1000 ease-in-out overflow-y-auto
              justify-center place-items-center w-full"
    >
    <div v-if="onErrorCat">
             <errorBanner v-for="(error, index) in onCatError"
                          :key="index"
                          :error="error"></errorBanner>
      </div>
    <div class="text-4xl font-bold">
        Category List
    </div>
    <div class="w-full flex flex-row flex-wrap py-5 space-x-5 justify-center mt-8 text-center">
        <button v-for="cat in categories" :key="cat.id"
                @click="editCat(cat)"
                class="bg-transparent py-3 px-10 text-gray-800 text-xl font-bold transform hover:-translate-y-2 transition duration-500">
          {{cat.name}}
        </button>
    </div>

    <div class="w-full flex flex-row justify-around mt-20">
      <transition name="slide-fade">
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 transition ease-in-out duration-1000"
        v-if="onEdit">
            <h1 class="text-xl font-semibold">Edit {{name}}</h1>
            <form class="mt-6" @submit.prevent="postUpdatCat">
              <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category Name</label>
              <input id="name" type="text" name="name" placeholder="Category Name"
                    class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    v-model="name"
                    />
              <div class="w-full flex flex-row gap-x-2">
              <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Update
              </button>
              <button type="button"
                      @click="deleteCat"
                      class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-yellow-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                Delete
              </button>
              <button type="button"
                    @click="away"
                    class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Cancel</button>
              </div>
            </form>
        </div>
      </transition>

      <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12"
            >
          <h1 class="text-xl font-semibold">Add New Category</h1>
          <form class="mt-6" @submit.prevent="addCat">
            <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Category Name</label>
            <input id="name" type="text" name="name" placeholder="Category Name"
                  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                  v-model="newName"/>
            <div class="w-full flex flex-row gap-x-2">
            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-gray-600 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
              Add Category
            </button>
            </div>
          </form>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { directive as onClickaway } from 'vue-clickaway'
import errorBanner from './errorBanner'

export default {
  name: 'categories',
  components: {
    errorBanner
  },
  directives: {
    onClickaway: onClickaway
  },
  data () {
    return {
      onEdit: false,
      name: '',
      id: '',
      newName: ''
    }
  },
  methods: {
    editCat (cat) {
      this.onEdit = true
      this.name = cat.name
      this.id = cat.id
    },
    away () {
      this.onEdit = false
    },
    postUpdatCat () {
      const data = {
        name: this.name,
        id: this.id
      }
      this.$store.dispatch('postUpdatCat', data)
      this.onEdit = false
    },
    addCat () {
      this.$store.dispatch('addCat', this.newName)
    },
    deleteCat () {
      this.$store.dispatch('deleteCat', this.id)
      this.onEdit = false
    }
  },
  computed: {
    ...mapState({
      categories: 'categories',
      onErrorCat: 'onErrorCat',
      onCatError: 'onCatError'
    })
  },
  created () {
    this.$store.dispatch('loadCategories')
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
