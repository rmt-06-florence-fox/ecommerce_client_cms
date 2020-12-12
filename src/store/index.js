import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    fetchProduct (state, payload) {
      state.products = []
      state.products = payload
    }
  },
  actions: {
    login (context, data) {
      axios({
        url: '/login',
        method: 'POST',
        data: data
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    getProducts (context, data) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('fetchProduct', data.products)
        })
        .catch(err => console.log(err))
    },
    postProduct (context, data) {
      axios({
        url: '/products',
        method: 'POST',
        data: data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('getProducts')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          router.push('/')
        })
    },
    logout (context) {
      context.commit('fetchProduct', [])
      localStorage.removeItem('access_token')
      router.push('/login')
    },
    putProduct (context, data) {
      axios({
        url: `/products/${data.id}`,
        method: 'PUT',
        data: data.data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('getProducts')
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          context.dispatch('getProducts')
          router.push('/')
        })
    },
    deleteProduct (context, id) {
      axios({
        url: `/products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.dispatch('getProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  },
  getters: {
    productById: (state) => (id) => {
      return state.products.find(el => el.id === +id)
    }
  }
})
