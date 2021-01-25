import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
Vue.use(VueSweetalert2)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editproduct: {},
    banners: []
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setBanners (state, data) {
      state.banners = data
    },
    setEditProduct (state, data) {
      state.editproduct = data
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
          Vue.swal('Login Success')
          localStorage.setItem('access_token', data.access_token)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          Vue.swal('Failed to Login', `${err.response.data.message}`, 'error')
        })
    },
    fetchData (context) {
      console.log('difetc')
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context) {
      axios({
        url: '/banners',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteData (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('fetchData')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addData (context, data) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: data
      })
        .then((response) => {
          Vue.swal('Success', 'Add new product succeed', 'success')
          router.push('/dashboard')
        })
        .catch(({ response }) => {
          console.log(response.data.message)
          Vue.swal('Failed Add Product', `${response.data.message}`, 'error')
        })
    },
    getEdit (context, id) {
      console.log('diget edit')
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setEditProduct', data)
          router.push('/edit/' + id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, data) {
      console.log('dupdate')
      console.log(data)
      axios({
        method: 'PUT',
        url: '/products/' + data[0].id,
        data: {
          name: data[0].name,
          image_url: data[0].image_url,
          stock: data[0].stock,
          price: data[0].price
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          console.log(data)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
          Vue.swal('Failed edit Product', `${err.response.data.message}`, 'error')
        })
    }
  },
  modules: {
  }
})
