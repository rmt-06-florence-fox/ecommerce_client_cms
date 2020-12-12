import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsById: {},
    banners: [],
    bannerById: {}
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setProductsById (state, data) {
      state.productsById = data
    },
    setBanners (state, data) {
      state.banners = data
    },
    setBannerById (state, data) {
      state.bannerById = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push({ name: 'Home' })
          this.fetchProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      localStorage.clear()
      router.push('/login')
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('setProducts', data)
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
        .then(data => {
          context.commit('setProductsById', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, obj) {
      axios({
        method: 'PUT',
        url: '/products/' + obj.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: obj.name,
          imageUrl: obj.imageUrl,
          price: obj.price,
          stock: obj.stock
        }
      })
        .then(_ => {
          router.push({ name: 'Home' })
          this.fetchProductsById()
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyProd (context, id) {
      return axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    createProduct (context, obj) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: obj.name,
          imageUrl: obj.imageUrl,
          price: +obj.price,
          stock: +obj.stock
        }
      })
        .then(_ => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    createBanner (context, obj) {
      axios({
        method: 'POST',
        url: '/banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: obj.title,
          imageUrl: obj.imageUrl,
          status: obj.status
        }
      })
        .then(_ => {
          router.push({ name: 'Banner' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchBanners (context) {
      axios({
        method: 'GET',
        url: '/banners',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    destroyBanner (context, id) {
      return axios({
        method: 'DELETE',
        url: '/banners/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    updateBanner (context, obj) {
      return axios({
        method: 'PUT',
        url: '/banners/' + obj.id,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          title: obj.title,
          imageUrl: obj.imageUrl,
          status: obj.status
        }
      })
    },
    fetchBannerById (context, id) {
      return axios({
        method: 'GET',
        url: '/banners/' + Number(id),
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    loginGoogle (context, googleToken) {
      return axios({
        method: 'POST',
        url: 'http://localhost:3000/googleLogin',
        data: {
          googleToken
        }
      })
    }
  },
  modules: {
  }
})
