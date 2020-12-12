import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listProducts: [],
    listCategories: [],
    editedData: {},
    access_token: localStorage.getItem('access_token')
  },
  mutations: {
    setListProducts (state, payload) {
      state.listProducts = payload
    },
    setListCategories (state, payload) {
      state.listCategories = payload
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
    fetchCategories (context) {
      return new Promise((resolve, reject) => {
        axios({
          url: '/categories',
          method: 'GET',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
          .then(({ data }) => {
            context.commit('setListCategories', data.data)
            resolve(data.data)
          })
          .catch(e => reject(e))
      })
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
        data: {
          name: addProduct.name,
          image_url: addProduct.image_url,
          price: addProduct.price,
          stock: addProduct.stock
        }
      })
        .then(response => {
          return axios({
            url: '/productCategory',
            method: 'POST',
            data: {
              ProductId: response.data.id,
              CategoryId: addProduct.category
            }
          })
        })
        .then(response => {
          router.push('/products')
        })
        .catch(e => {
          Vue.$vToastify.error(`${e}`)
        })
    },
    addCategory (context, category) {
      axios({
        url: '/categories',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          category: category
        }
      })
        .then(response => {
          router.push('/products')
        })
        .catch(e => {
          Vue.$vToastify.error(`${e}`)
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
        data: {
          name: editData.name,
          image_url: editData.image_url,
          price: editData.price,
          stock: editData.stock
        }
      })
        .then(response => {
          return axios({
            url: `/editProductCategory/${editData.id}`,
            method: 'PUT',
            data: {
              ProductId: editData.id,
              CategoryId: editData.category
            }
          })
        })
        .then(response => {
          router.push('/products')
        })
        .catch(e => {
          Vue.$vToastify.error(`${e}`)
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
