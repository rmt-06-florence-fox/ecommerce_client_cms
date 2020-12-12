import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editedProduct: {}
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    setEdit (state, payload) {
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
        .then(data => {
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/product')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username or password',
            footer: '<a href>Why do I have this issue?</a>'
          })
        })
    },
    fetchData (context, payload) {
      axios({
        method: 'GET',
        url: '/product',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'POST',
        url: '/product',
        headers: { access_token: token },
        data: payload
      })
        .then(({ data }) => {
          router.push('/product')
          Swal.fire({
            icon: 'success',
            title: 'Yuhuu!',
            text: 'Success Adding new Product!'
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    findByPk (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'GET',
        url: `/product/${payload}`,
        headers: { access_token: token }
      })
        .then(({ data }) => {
          router.push('/edit')
          context.commit('setEdit', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'PUT',
        url: `/product/${payload.id}`,
        headers: { access_token: token },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: 'Dont save'
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              router.push('/product')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'DELETE',
        url: `/product/${payload}`,
        headers: { access_token: token }
      })
        .then(({ data }) => {
          Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.dispatch('fetchData')
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
        })
    }
  }
})
