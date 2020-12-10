import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: []
  },
  mutations: {
    getProductData (state, payload) {
      state.productData = payload
    }
  },
  actions: {
    fetchData (context) {
      axios
        .get('/product')
        .then(({ data }) => {
          context.commit('getProductData', data)
        })
        .catch(console.log)
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
        .catch((err) => {
          console.log(err.msg, 'ini eror')
        })
    },
    logout () {
      localStorage.removeItem('access_token')
      router.push('/')
    },
    deleteProduct (context, id) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `product/${id}`,
        headers: {
          access_token: accessToken
        }
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addNewProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'post',
        url: '/product',
        headers: {
          access_token: accessToken
        },
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
