import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Gibson',
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
    login (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          // this.products = data
          context.commit('setProducts', data)
        })
        .catch(err => console.log(err))
    },
    fetchProductById (context, id) {
      console.log(id, '>>>> payload from component detai.vue')
      axios({
        method: 'GET',
        url: `http://localhost:3000/products/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: 'not found' })
          }
        })
    },
    addProduct (context, payload) {
      console.log(payload, '<<<< berupa object dari component addProduct.vue')
      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          // context.dispatch('fetchProduct')
          router.push('/products')
        })
        .catch(console.log)
    },
    editProduct (context, id) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProduct', data)
          router.push('/edit/' + id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: 'http://localhost:3000/products/' + payload.id,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: 'http://localhost:3000/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
  // getters: {
  //   filteredProduct (state) {
  //     return state.products.filter(el => {
  //       return el.name !== 'Standard'
  //     })
  //   }
  // }
})
