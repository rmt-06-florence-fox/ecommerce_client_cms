import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosIns'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
