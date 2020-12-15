import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosinstance'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setDetail (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/login',
        method: 'POST',
        data: { email: payload.email, password: payload.password }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/home')
        })
        .catch((error) => {
          Swal.fire('Login Failed', `${error.response.data.message}`, 'error')
        })
    },
    fetchProductList (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          context.commit('setProducts', response.data.products)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(response => {
          Swal.fire(
            'Done',
            'Product has been added!',
            'success'
          )
          router.push('/products')
        })
        .catch((error) => {
          Swal.fire('Failed', `${error.response.data.message}`, 'error')
        })
    },
    toEditPage (context, id) {
      return axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    updateProduct (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          Swal.fire(
            'Done',
            'Product has been updated!',
            'success'
          )
          router.push('/products')
        })
        .catch((error) => {
          Swal.fire('Failed',
            `${error.response.data.message}`,
            'error'
          )
        })
    },
    deleteProduct (context, id) {
      axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          Swal.fire(
            'Done',
            'Product has been deleted!',
            'success'
          )
          context.dispatch('fetchProductList')
        })
        .catch((error) => {
          Swal.fire('Unauthorized',
          `${error.response.data.message}`,
          'error'
          )
        })
    },
    fetchBannerList (context) {
      axios({
        url: '/banners',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          context.commit('setProducts', response.data.banners)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    addBanner (context, payload) {
      axios({
        url: '/banners',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(response => {
          Swal.fire(
            'Done',
            'Banner has been added!',
            'success'
          )
          router.push('/banners')
        })
        .catch((error) => {
          Swal.fire('Failed', `${error.response.data.message}`, 'error')
        })
    },
    toEditBannerPage (context, id) {
      return axios({
        url: `/banners/${id}`,
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    updateBanner (context, payload) {
      axios({
        url: `/banners/${payload.id}`,
        method: 'PUT',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          Swal.fire(
            'Done',
            'Banner has been updated!',
            'success'
          )
          router.push('/banners')
        })
        .catch((error) => {
          Swal.fire('Failed',
            `${error.response.data.message}`,
            'error'
          )
        })
    },
    deleteBanner (context, id) {
      axios({
        url: `/banners/${id}`,
        method: 'DELETE',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          Swal.fire(
            'Done',
            'Banner has been deleted!',
            'success'
          )
          context.dispatch('fetchBannerList')
        })
        .catch((error) => {
          Swal.fire('Unauthorized',
          `${error.response.data.message}`,
          'error'
          )
        })
    }
  },
  modules: {
  }
})
