import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editedProduct: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setEditProduct (state, payload) {
      state.editedProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/products')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
        })
        .catch((err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    fetchProduct (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((data) => {
          console.log(data.data.product)
          context.commit('setProducts', data.data.product)
        })
        .catch((err) => {
          console(err)
        })
    },
    addProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(_ => {
          console.log('masuk ga?')
          this.dispatch('fetchProduct')
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    getEditProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          console.log(data.data.product)
          context.commit('setEditProduct', data.data.product)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (contex, payload) {
      console.log(payload)
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: payload
      })
        .then(_ => {
          router.push('/products')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(_ => {
          context.dispatch('fetchProduct')
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully to delete products',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
        })
    }
  },
  modules: {
  }
})
