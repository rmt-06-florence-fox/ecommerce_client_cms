import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/config/axiosInstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    productsByCategory: [],
    banners: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProductByCategory (state, payload) {
      state.productsByCategory = payload
    },
    setBanners (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    fetchAllProducts (context) {
      const accessToken = localStorage.getItem('access_token')

      return axios
        .get('products', {
          headers: {
            access_token: accessToken
          }
        })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchAllBanners (context) {
      const accessToken = localStorage.getItem('access_token')

      return axios
        .get('banners', {
          headers: {
            access_token: accessToken
          }
        })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    login (context, payload) {
      return axios({
        url: 'users/login',
        method: 'POST',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    logout () {
      localStorage.clear()
      router.push({ name: 'Login' })
    },

    addProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      return axios({
        url: 'products',
        method: 'POST',
        headers: {
          access_token: accessToken
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
        .then(res => {
          console.log(res)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    addBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')

      return axios({
        url: 'banners',
        method: 'post',
        headers: {
          access_token: accessToken
        },
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        }
      })
        .then(res => {
          console.log(res)
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteProduct (context, id) {
      console.log(id)
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/${id}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then(res => {
          this.fetchAllProducts()
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteBanner (context, id) {
      console.log(id)
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `banners/${id}`,
        method: 'DELETE',
        headers: {
          access_token: accessToken
        }
      })
        .then(res => {
          this.fetchAllBanners()
        })
        .catch(err => {
          console.log(err)
        })
    },

    fetchProductsById (context, id) {
      const accessToken = localStorage.getItem('access_token')

      console.log(id)
      return axios({
        url: `products/${id}`,
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
    },

    fetchBannersById (context, id) {
      const accessToken = localStorage.getItem('access_token')

      console.log(id)
      return axios({
        url: `banners/${id}`,
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
    },

    editProduct (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/${payload.id}`,
        method: 'PUT',
        data: {
          name: payload.name,
          category: payload.category,
          image_url: payload.image_url,
          price: +payload.price,
          stock: +payload.stock
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(res => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    editBanner (context, payload) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `banners/${payload.id}`,
        method: 'PUT',
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        },
        headers: {
          access_token: accessToken
        }
      })
        .then(res => {
          router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    },

    searchProductByCategory (context, category) {
      const accessToken = localStorage.getItem('access_token')
      return axios({
        url: `products/category/?category=${category}`,
        method: 'GET',
        headers: {
          access_token: accessToken
        }
      })
    }
  },
  modules: {
  }
})
