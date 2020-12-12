import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosIns'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editProduct: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setEditProduct (state, payload) {
      state.editProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetch (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data.products)
        })
        .catch(error => {
          console.log(error)
        })
    },
    create (context, payload) {
      // console.log(payload)
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response.data)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    },
    findByPk (context, payload) {
      const id = payload
      console.log(id, '<<< edit')
      axios({
        method: 'get',
        url: `/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setEditProduct', data.product)
        })
        .catch(error => {
          console.log(error)
        })
    },
    update (context, payload) {
      console.log(payload)
      axios({
        method: 'put',
        url: `/products/${payload.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
        })
    },
    delete (context, payload) {
      console.log(payload)
      axios({
        method: 'delete',
        url: `/products/${payload}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetch')
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  modules: {
  }
})
