import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signinStatus: false,
    products: []
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    setStatus (state, payload) {
      state.signinStatus = payload
    },
    changeTemp (state, payload) {
      state.temp = payload
    }
  },
  actions: {
    signin (context, payload) {
      return axios({
        method: 'post',
        url: '/signin',
        data: payload
      })
    },
    fetchProduct (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: token
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
    },
    deleteProduct (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: {
          access_token: token
        }
      })
    },
    editProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'put',
        url: `/products/${payload.id}`,
        headers: {
          access_token: token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
    },
    fetchProductById (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'get',
        url: `/products/${id}`,
        headers: {
          access_token: token
        }
      })
    }
  },
  modules: {
  }
})
