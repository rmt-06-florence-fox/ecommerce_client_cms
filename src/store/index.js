import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    access_token: ''
  },
  mutations: {
    productList (state, payload) {
      state.productList = payload
    }
  },
  actions: {
    login () {
    },
    addProduct (context, payload) {
      axios({
        url: 'http://localhost:3000/product',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          imageUrl: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        }
      })
    },
    fetchProduct (context) {
      axios({
        url: 'http://localhost:3000/product',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('productList', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteProduct (id) {
      console.log(id)
      axios({
        url: `http://localhost:3000/product/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editProduct () {

    }
  },
  modules: {
  }
})
