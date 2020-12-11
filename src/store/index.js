import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/config'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchData (state, payload) {
      console.log(payload, '<<<< yoooi')
      state.products = payload
    }
  },
  actions: {
    // context untuk manggil state/mutation/action
    adminLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'admin/login',
        data: payload
      })
        .then((data) => {
          console.log(data.data)
          localStorage.setItem('access_token', data.data.access_token)
          localStorage.setItem('role', 'admin')
          router.push('/admin')
        })
        .catch(err => console.log(err))
    },
    // function fetch
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then((data) => {
          console.log(data.data)
          context.commit('fetchData', data.data)
        })
        .catch(err => console.log(err))
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
          role: localStorage.getItem('role')
        }
      })
        .then(_ => {
          console.log('successfully deleted')
          context.dispatch('fetchProduct')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
