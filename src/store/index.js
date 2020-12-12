import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance.js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    products: [],
    EditStatus: false
  },
  mutations: {
    changeLoginStatus (state, status) {
      state.loginStatus = status
    },
    changeProducts (state, products) {
      state.products = products
    },
    changeEditedProduct (state, product) {
      state.populate = product
    },
    changeEditStatus (state, payload) {
      state.EditStatus = payload.status
      state.populate = payload.product
    }
  },
  actions: {
    login (context, payload) {
      axios({
        url: '/admin/login',
        method: 'post',
        data: payload
      })
        .then(response => {
          console.log(response.data)
          localStorage.setItem('access_token', response.data.access_token)
          context.commit('changeLoginStatus', true)
          context.dispatch('fetchProducts')
          router.push('/admin/products')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    logout (context) {
      localStorage.removeItem('access_token')
      context.commit('changeLoginStatus', false)
      router.push('/')
    },
    fetchProducts (context) {
      axios({
        url: '/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('changeProducts', response.data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },

    addProduct (context, payload) {
      axios({
        url: '/admin/products',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response)
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },

    deleteProduct (context, payload) {
      const swalWithBootstrapButtons = Vue.swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          axios({
            url: `/admin/products/${payload}`,
            method: 'delete',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
            .then(response => {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              context.dispatch('fetchProducts')
            })
        } else {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your product is safe :)',
            'error'
          )
        }
      }).catch(err => {
        console.log(err)
      })
    },

    updateProduct (context, payload) {
      axios({
        url: `/admin/products/${payload.id}`,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(response => {
          console.log(response)
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  },
  modules: {
  }
})
