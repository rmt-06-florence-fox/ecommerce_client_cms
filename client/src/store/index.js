import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productData: [],
    editedProductData: {}
  },
  mutations: {
    getProductData (state, payload) {
      state.productData = payload
    },
    dataSendToEditForm (state, payload) {
      state.editedProductData = payload
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
      router.push('/login')
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
          context.dispatch('fetchData')
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
    },
    editForm (context, payload) {
      context.commit('dataSendToEditForm', payload)
      router.push('/edit')
    },
    editProduct (context, payload) {
      const id = payload.id
      const accessToken = localStorage.getItem('access_token')
      axios({
        method: 'put',
        url: `/product/${id}`,
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      }).then((res) => {
        console.log(res)
        router.push('/')
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
