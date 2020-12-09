import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isActive: false,
    targetEdit: {}
  },
  mutations: {
    changeProducts (state, payload) {
      state.products = payload
    },
    changeIsActive (state) {
      if (state.isActive) {
        state.isActive = false
      } else {
        state.isActive = true
      }
    },
    fillTargetEdit (state, payload) {
      state.targetEdit = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios
        .post('/login', {
          email: payload.email,
          password: payload.password
        })
    },
    fetchProducts (context) {
      console.log('fetching')
      axios
        .get('/products', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(response => {
          context.commit('changeProducts', response.data.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    destroy (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          this.dispatch('fetchProducts')
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
        .then(response => {
          console.log(response.data.data)
          this.commit('fillTargetEdit', response.data.data)
          this.commit('changeIsActive')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    addProduct (context, payload) {
      console.log(payload, 'payload add')
      return axios
        .post('/products', {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        {
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
    },
    postEdit (context) {
      axios({
        method: 'PUT',
        url: '/products/' + this.state.targetEdit.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: this.state.targetEdit
      })
        .then(response => {
          this.commit('changeIsActive')
          this.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
