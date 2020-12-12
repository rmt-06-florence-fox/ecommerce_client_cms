import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    listProducts: [],
    product: {}
  },
  mutations: {
    CHANGEISLOGIN (state, payload) {
      state.isLogin = payload
    },
    FETCHPRODUCTS (state, payload) {
      state.listProducts = payload
    },
    GETPRODUCT (state, payload) {
      state.product = payload
    },
    CHANGENAME (state, payload) {
      state.product.name = payload
    },
    CHANGEIMAGE (state, payload) {
      state.product.image_url = payload
    },
    CHANGEPRICE (state, payload) {
      state.product.price = payload
    },
    CHANGESTOCK (state, payload) {
      state.product.stock = payload
    }
  },
  actions: {
    login (context, obj) {
      return axios({
        url: '/adminLogin',
        method: 'post',
        data: {
          email: obj.email,
          password: obj.password
        }
      })
    },
    addProduct (context, obj) {
      return axios({
        url: '/products',
        method: 'post',
        data: {
          name: obj.name,
          image_url: obj.image_url,
          price: obj.price,
          stock: obj.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('FETCHPRODUCTS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getProduct (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('GETPRODUCT', res.data)
        })
        .catch(err => {
          this.$swal.fire({
            icon: 'error',
            title: `${err.response.status} ${err.response.statusText}`,
            text: `${err.response.message}`,
            timer: 5000
          })
        })
    },
    editProduct (context, payload) {
      return axios({
        url: `/products/${payload.id}`,
        method: 'put',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    destroyProduct (context, payload) {
      return axios({
        url: `/products/${payload}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
