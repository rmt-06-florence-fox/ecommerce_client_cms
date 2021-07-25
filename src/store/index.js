import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import instance from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    productList: '',
    message: ''
  },
  mutations: {
    SET_LOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_DATA (state, payload) {
      state.productList = payload
    },
    SET_MESSAGE (state, payload) {
      state.message = payload
    },
    SET_ERR_MESSAGE (state, payload) {
      state.message = payload
    }

  },
  actions: {
    login ({ commit }, payload) {
      instance.post('/login', {
        email: payload.email,
        password: payload.password

      })
        .then(({ data }) => {
          commit('SET_LOGIN', true)
          localStorage.access_token = data.access_token
          localStorage.role = data.role
          router.push('/')
        })
        .catch(err => {
          const message = err.response.data.message
          commit('SET_ERR_MESSAGE', message)
        })
    },
    fetchData ({ commit }) {
      instance.get('/products', {
        headers: { access_token: localStorage.access_token }
      })
        .then(({ data }) => {
          commit('SET_DATA', data)
        })
        .catch(err => {
          const message = err.response.data.message
          commit('SET_ERR_MESSAGE', message)
        })
    },
    addProduct ({ dispatch }, payload) {
      instance.post('/products', {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchData')
          dispatch('success', data.message)
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('errors', message)
        })
    },
    updateProduct ({ dispatch }, payload) {
      instance.put(`/products/${payload.id}`, {
        name: payload.name,
        image_url: payload.image_url,
        price: payload.price,
        stock: payload.stock
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchData')
          dispatch('success', data.message)
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('errors', message)
        })
    },
    deleteProduct ({ dispatch }, payload) {
      instance.delete(`/products/${payload}`, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          dispatch('fetchData')
          dispatch('success', data.message)
        })
        .catch(err => {
          const message = err.response.data.message
          dispatch('errors', message)
        })
    },
    success ({ commit }, payload) {
      commit('SET_MESSAGE', payload)
    },
    errors ({ commit }, payload) {
      commit('SET_ERR_MESSAGE', payload)
    },
    logout ({ commit }) {
      localStorage.clear()
      commit('SET_LOGIN', false)
      router.push('/login')
    }

  },
  modules: {
  }
})
