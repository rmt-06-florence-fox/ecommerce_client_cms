import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedInUser: { email: localStorage.getItem('email') },
    products: [],
    product: {},
    idSearch: null
  },
  mutations: {
    showProducts (state, payload) {
      state.products = payload
    },
    updateDataSearch (state, payload) {
      state.products = [payload]
    },
    setById (state, payload) {
      state.product = payload
    }
  },
  actions: {
    Login (context, payload) {
      axios({
        method: 'POST',
        url: 'login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('email', data.email)
          router.push({ name: 'Home' })
        })
        .catch(xhr => {
          console.log(xhr)
        })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: 'products',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('showProducts', data)
        })
        .catch(err => {
          console.log(err.name)
        })
    },
    searchByid (context, id) {
      if (!id) {
        context.dispatch('fetchProducts')
      } else {
        axios({
          method: 'GET',
          url: `products/${id}`,
          headers: { access_token: localStorage.getItem('access_token') }
        })
          .then(({ data }) => {
            context.commit('updateDataSearch', data)
          })
          .catch(err => {
            console.log(err.response)
          })
      }
    },
    fetchDetailById (context, id) {
      axios({
        method: 'GET',
        url: `products/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setById', data)
        })
        .catch(err => {
          console.log(err.name)
        })
    },
    updateProduct (context, payload) {
      console.log(payload)
      axios({
        method: 'PUT',
        url: `products/${payload.id}`,
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addNewProduct (context, payload) {
      axios({
        method: 'POST',
        url: 'products',
        headers: { access_token: localStorage.getItem('access_token') },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteId (context, id) {
      axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
