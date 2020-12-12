import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: []
  },
  mutations: {
  },
  actions: {
    login () {

    },
    addProduct () {

    },
    fetchProduct (context) {
      axios
      .get('/product')
      .then(({ data }) => {

      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteProduct () {

    },
    editProduct () {

    }
  },
  modules: {
  }
})
