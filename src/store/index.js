import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    product: '',
    products: ''
  },
  mutations: {
    getProducts (state, payload) {
      state.products = payload
    },

    getProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: 'https://cryptic-wildwood-90967.herokuapp.com/users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          return Swal.fire({
            title: 'Logged In',
            text: 'Login Successfull!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        })
        .then(_ => {
          router.push('/products')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },

    fetchProducts (context) {
      axios({
        url: 'https://cryptic-wildwood-90967.herokuapp.com/products',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response.data)
          context.commit('getProducts', response.data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },

    fetchById (context, payload) {
      axios({
        url: `https://cryptic-wildwood-90967.herokuapp.com/products/${payload}`,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response.data)
          context.commit('getProduct', response.data)
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },

    addStock (context, payload) {
      axios({
        url: `https://cryptic-wildwood-90967.herokuapp.com/products/${payload.idProduct}`,
        method: 'PATCH',
        data: {
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          return Swal.fire({
            title: 'Add Stock',
            text: 'Stock added successfully!',
            confirmButtonText: 'Ok',
            icon: 'success'
          })
        })
        .then(_ => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },

    addProduct (context, payload) {
      axios({
        url: 'https://cryptic-wildwood-90967.herokuapp.com/products',
        method: 'POST',
        data: {
          name: payload.name,
          image_url: payload.imageUrl,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response.data)
          context.dispatch('fetchProducts')
          return Swal.fire({
            title: 'Add Product',
            text: 'Product added successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
        })
        .then(_ => {
          router.push('/products')
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },

    editProduct (context, payload) {
      axios({
        url: `https://cryptic-wildwood-90967.herokuapp.com/products/${payload.idProduct}`,
        method: 'PUT',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response.data)
          Swal.fire({
            title: 'Edit Product',
            text: 'Product edited successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
            .then(_ => {
              context.dispatch('fetchProducts')
              router.push('/products')
            })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    },

    deleteProduct (context, payload) {
      axios({
        url: `https://cryptic-wildwood-90967.herokuapp.com/products/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          // console.log(response)
          Swal.fire({
            title: 'Delete Product',
            text: 'Product deleted successfully!',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
            .then(_ => {
              context.dispatch('fetchProducts')
            })
        })
        .catch(err => {
          Swal.fire({
            title: 'Error',
            text: err.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    }
  },
  modules: {
  }
})
