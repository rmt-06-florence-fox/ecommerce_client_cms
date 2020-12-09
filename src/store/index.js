import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productById: '',
    categories: []
  },
  mutations: {
    fetchAllProduct (state, payload) {
      state.products = payload
    },
    fetchProductById (state, payload) {
      state.productById = payload
    },
    fetchAllCategory (state, payload) {
      state.categories = payload
    }
  },
  actions: {
    fetchAllProduct (context) {
      axios({
        method: 'get',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllProduct', data.products)
      }).catch(err => {
        console.log(err)
      })
    },
    fetchProductById (context, id) {
      axios({
        method: 'get',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchProductById', data.product)
      }).catch(err => {
        console.log(err)
      })
    },
    addProduct (context, payload) {
      axios({
        method: 'post',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products')
      }).catch(err => {
        console.log(err)
      })
    },
    editProduct (context, payload) {
      const { id, name, price, stock, imageurl, CategoryId } = payload

      axios({
        method: 'put',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name,
          price,
          stock,
          image_url: imageurl,
          CategoryId
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products').catch(() => {})
      }).catch(err => {
        console.log(err)
      })
    },
    deleteProduct (context, id) {
      axios({
        method: 'delete',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.dispatch('fetchAllProduct')
        router.push('/products').catch(() => {})
      }).catch(err => {
        console.log(err)
      })
    },
    fetchAllCategory (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      }).then(({ data }) => {
        context.commit('fetchAllCategory', data.categories)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
