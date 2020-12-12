import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Products' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetch (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    add (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          context.dispatch('fetch')
        })
        .catch(err => {
          console.log(err)
        })
    },
    findById (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setById', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    update (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    delete (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetch')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
