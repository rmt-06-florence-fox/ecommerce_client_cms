import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listProducts: [],
    filteredData: [],
    access_token: localStorage.getItem('access_token')
  },
  mutations: {
    setListProducts (state, payload) {
      state.listProducts = payload
    },
    setFilterId (state, payload) {
      state.filteredData = payload
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
        })
        .catch(e => {
          console.log(e)
        })
    },
    add (context, addProduct) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: addProduct
      })
        .then(response => {
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    filterId (context, id) {
      axios({
        url: `/products/${id}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setFilterId', data)
        })
        .catch(err => console.log(err))
    },
    edit (context, id, edittedData) {
      axios({
        url: `/products/${id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: edittedData
      })
        .then(response => {
          console.log(response.data)
          this.$router.push('/products')
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  modules: {
  }
})
