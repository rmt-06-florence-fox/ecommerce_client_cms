import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sign: 'login',
    currentPage: 'home',
    serverUrl: 'http://localhost:3000/',
    products: [],
    addForm: true,
    editForm: null
  },
  mutations: {
    changeSign (state, payload) {
      state.sign = payload
    },
    changePage (state, payload) {
      state.currentPage = payload
    },
    fetchProduct (state, payload) {
      state.products = payload
    },
    addFormShow (state) {
      state.addForm = !state.addForm
    },
    editFormShow (state, payload) {
      state.editForm = payload
    }
  },
  actions: {
    changeSign (context, payload) {
      context.commit('changeSign', payload)
    },
    changePage (context, payload) {
      context.commit('changePage', payload)
    },
    login (context, payload) {
      console.log(context)
      return axios({
        method: 'POST',
        url: `${context.state.serverUrl}login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: `${context.state.serverUrl}product`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          context.commit('fetchProduct', response.data)
        })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: `${context.state.serverUrl}product`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        },
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    removeProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: `${context.state.serverUrl}product/${payload}`,
        headers: { access_token: localStorage.getItem('access_token') }
      })
    },
    editProduct (context, payload) {
      context.commit('editFormShow', payload)
    },
    edit (context, { payload, id }) {
      return axios({
        method: 'PUT',
        url: `${context.state.serverUrl}product/${id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        },
        headers: { access_token: localStorage.getItem('access_token') }
      })
      // console.log(payload, id)
    }
  },
  modules: {
  }
})
