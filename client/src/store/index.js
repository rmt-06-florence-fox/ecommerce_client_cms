import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    loggedIn: false,
    errorNotification: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    loggedIn (state, payload) {
      state.loggedIn = payload
    },
    errorChange (state, payload) {
      state.errorNotification = payload
    }
  },
  actions: {
    loginAdmin (context, payload) {
      return axios({
        method: 'POST',
        url: 'login/admin',
        data: payload
      })
    },
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'GET',
        url: `products/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'DELETE',
        url: `/products/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      if (+payload.stock >= 0 && +payload.price >= 0) {
        return axios({
          method: 'POST',
          url: '/products',
          headers: {
            access_token: token
          },
          data: payload
        })
      } else {
        context.commit('errorChange', 'stock or price is a minus')
        return Promise.reject(new Error('stock or price is a minus'))
      }
    },
    editProduct (context, payload) {
      console.log(payload)
      const token = localStorage.getItem('access_token')
      if (+payload.product.stock >= 0 && +payload.product.price >= 0) {
        return axios({
          method: 'PUT',
          url: `/products/${payload.id}`,
          headers: {
            access_token: token
          },
          data: payload.product
        })
      } else {
        context.commit('errorChange', 'stock or price is a minus')
        return Promise.reject(new Error('stock or price is a minus'))
      }
    }
  },
  modules: {
  }
})
