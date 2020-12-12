import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listProducts: [],
    editedData: {},
    access_token: localStorage.getItem('access_token')
  },
  mutations: {
    setListProducts (state, payload) {
      state.listProducts = payload
    },
    setFilterId (state, payload) {
      state.editedData = payload
    }
  },
  actions: {
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setListProducts', data)
        })
        .catch(err => console.log(err))
    },
    login (context, user) {
      axios
        .post('/login', user)
        .then(response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          router.push('/products')
        })
        .catch(e => {
          console.log(e)
        })
    },
    addProduct (context, addProduct) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: addProduct
      })
        .then(response => {
          router.push('/products')
        })
        .catch(e => {
          console.log(e)
        })
    },
    filterId (context, id) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/products/${id}`,
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            context.commit('setFilterId', data)
            resolve(data)
          })
          .catch(err => reject(err))
      })
    },
    editProduct (context, editData) {
      axios({
        url: `/products/${editData.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: editData
      })
        .then(response => {
          router.push('/products')
        })
        .catch(e => {
          console.log(e)
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
        .then(response => {
          context.dispatch('fetchProducts')
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  modules: {
  }
})
