import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageName: '',
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    },
    setPage (state, payload) {
      state.pageName = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data.products)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Show Products Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Add Product Success!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Add Product Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    getProduct (context, id) {
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data.product)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Get Product Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    editPost (context, payload) {
      axios({
        method: 'put',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          Swal.fire({
            icon: 'success',
            title: 'Edit Product Success!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Edit Product Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    delProduct (context, id) {
      axios({
        method: 'delete',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Delete Product Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success!',
            showConfirmButton: false,
            timer: 1500
          })
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          })
        })
    }
  },
  modules: {
  },
  getters: {
    rupiahCurrency: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
