import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    form: [],
    products: []
  },
  mutations: {
    changeForm (state, payload) {
      state.form = payload
    },
    changeProduct (state, payload) {
      state.products = payload
    }

  },
  actions: {
    getDataUser (context, payload) {
      axios({
        url: '/login',
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          console.log(data.access_token, '<<<<< dari axios')
          context.commit('changeForm', [data])
          localStorage.setItem('access_token', data.access_token)
          router.push('/home')
        })
        .catch(err => {
          console.log('masuk error bossssw')
          console.log(err.message)
          console.log(err)
        })
    },
    getDataProduct (context, payload) {
      console.log('ketrigger')
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('changeProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
