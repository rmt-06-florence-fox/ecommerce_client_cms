import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsById: {}
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setProductsById (state, data) {
      state.productsById = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ name: 'Home' })
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProductsById (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('setProductsById', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, obj) {
      axios({
        method: 'PUT',
        url: '/products/' + obj.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: obj.name,
          imageUrl: obj.imageUrl,
          price: obj.price,
          stock: obj.stock
        }
      })
        .then(_ => {
          router.push({ name: 'Home' })
          this.fetchProductsById()
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyProd (context, id) {
      return axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    createProduct (context, obj) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: obj.name,
          imageUrl: obj.imageUrl,
          price: +obj.price,
          stock: +obj.stock
        }
      })
        .then(_ => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
