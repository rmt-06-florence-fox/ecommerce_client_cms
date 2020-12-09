import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import router from '../router/index'

const baseUrl = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    editData: null
  },
  mutations: {
    getData (state, data) {
      state.productData = data
    },
    logout (state) {
      state.productData = []
    },
    editData (state, data) {
      state.editData = data
    }
  },
  actions: {
    getData ({ commit, state }) {
      axios({
        method: 'GET',
        url: `${baseUrl}/products`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          commit('getData', data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
