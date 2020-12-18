import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/config'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_EDIT_PRODUCT (state, payload) {
      state.product = payload
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
          localStorage.setItem('access_token', data.data.access_token)
          localStorage.setItem('role', 'admin')
          router.push('/admin')
        })
        .catch(err => console.log(err))
    },
    // function fetch
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then((data) => {
          context.commit('SET_PRODUCTS', data.data)
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
          context.dispatch('fetchProducts')
        })
        .catch(err => console.log(err))
    },
    createProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token'),
          role: localStorage.getItem('role')
        },
        data: payload
      })
        .then((data) => {
          console.log(data, 'masuk pak datanya')
          context.dispatch('fetchProducts')
          router.push('/admin')
        })
        .catch(err => console.log(err))
    },
    editProduct (context, id) {
      axios({
        method: 'GET',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
          role: localStorage.getItem('role')
        }
      })
        .then((data) => {
          console.log(data.data)
          context.commit('SET_EDIT_PRODUCT', data.data)
        })
        .catch(err => console.log(err))
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token'),
          role: localStorage.getItem('role')
        },
        data: payload
      })
        .then(() => {
          router.push('/admin')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
