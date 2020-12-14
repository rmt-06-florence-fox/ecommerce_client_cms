import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'
import router from '../router/index'

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
          router.push({ name: 'Home' })
          Vue.swal(
            'Success!',
            'Welcome',
            'success'
          )
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          Vue.swal(
            'Success!',
            'Add Product!',
            'success'
          )
          console.log(data)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    deleteProduct (context, payload) {
      axios({
        method: 'DELETE',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.dispatch('fetchProducts')
          Vue.swal(
            'Success!',
            'Delete Product Success',
            'success'
          )
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    fetchProductsById (context, payload) {
      axios({
        method: 'GET',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    },
    editProduct (context, payload) {
      const productId = payload.id
      axios({
        method: 'PUT',
        url: `/products/${productId}`,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          router.push({ name: 'Home' })
          Vue.swal(
            'Success!',
            'Edit Product Success!',
            'success'
          )
        })
        .catch(err => {
          console.log(err)
          Vue.swal(
            'Error!',
            err.response.data.msg,
            'error'
          )
        })
    }
  },
  modules: {
  }
})
