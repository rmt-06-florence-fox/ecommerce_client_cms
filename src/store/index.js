import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Ecommerce',
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data.products)
        })
        .catch(err => console.log(err))
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          console.log('add success')
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    getProduct (context, id) {
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProduct', data.product)
        })
        .catch(err => console.log(err))
    },
    editPost (context, payload) {
      axios({
        method: 'put',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(({ data }) => {
          console.log('edit success')
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    delProduct (context, id) {
      axios({
        method: 'delete',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log('data deleted succesfuly')
          router.push()
        })
        .catch(err => console.log(err))
    },
    login (context, payload) {
      axios({
        method: 'post',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => console.log(err))
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    }
  },
  modules: {
  }
})
