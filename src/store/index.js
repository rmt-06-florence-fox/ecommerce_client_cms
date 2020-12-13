import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axiosconfig'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productData: {}
  },
  mutations: {
    set_products (state, payload) {
      state.products = payload
    },
    set_productData (state, payload) {
      state.productData = payload
    }
  },
  actions: {
    doSignIn (context, payload) {
      axios({
        url: 'admin/signin',
        method: 'post',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    getProducts (context, payload) {
      return axios({
        url: 'products',
        method: 'get'
      })
        .then(({ data }) => {
          context.commit('set_products', data)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      axios({
        url: 'products',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => {
          context.dispatch('getProducts')
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    deleteProduct (context, id) {
      axios({
        url: `products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('getProducts')
        })
        .catch(err => console.log(err))
    },
    editProduct (context, id) {
      axios({
        url: `products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('set_productData', data)
        })
        .catch(err => console.log(err))
    },
    updateProduct (context, payload) {
      axios({
        url: `products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(() => router.push('/'))
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
