import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchAllProducts (context) {
      const accessToken = localStorage.getItem('access_token')

      return axios
        .get('products', {
          headers: {
            access_token: accessToken
          }
        })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    login (context, payload) {
      return axios({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout () {
      localStorage.clear()
      router.push({ name: 'Login' })
    },

    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      return axios({
        url: 'products',
        method: 'POST',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(res => {
          console.log(res)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteProduct (context, id) {
      console.log(id)
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then(res => {
          this.fetchAllProducts()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
