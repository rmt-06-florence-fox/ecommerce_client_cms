import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosIntance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    fetchData (state, payload) {
      state.products = payload
    },
    DataProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (commit, payload) {
      // console.log(payload)
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/main-page')
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchData (context) {
      axios({
        url: 'product',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('fetchData', response.data)
          console.log(response.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      // console.log(payload)
      axios({
        url: 'product',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          console.log(response.data)
          router.push('/main-page/product')
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    },
    deleteProduct (context, id) {
      // console.log(context)
      axios({
        url: 'product/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.dispatch('fetchData')
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    },
    DataProduct (context, id) {
      axios({
        url: 'product/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          console.log(response.data)
          context.commit('DataProduct', response.data)
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    },
    UpdateProduct (context, payload) {
      // console.log(payload, 'dari store')
      axios({
        url: 'product/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
        .then(response => {
          // console.log(response.data)
          router.push('/main-page/product')
        })
        .catch(err => {
          console.log(err.response.data.msg)
        })
    }
  },
  modules: {
  }
})
