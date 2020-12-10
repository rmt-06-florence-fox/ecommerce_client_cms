import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosinstance'
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
    setProduct (state, payload) {
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
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetch (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data.result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProduct', data)
          router.push('/edit/' + id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
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
