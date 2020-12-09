import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axiosInstance.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'EG Store',
    products: [],
    idEdit: '',
    nameEdit: '',
    priceEdit: '',
    stockEdit: '',
    imageEdit: '',
    descriptionEdit: '',
    banners: [],
    bannerId: '',
    titleEdit: '',
    statusEdit: '',
    image_urlEdit: ''
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_EDIT_INFO (state, payload) {
      state.idEdit = payload.id
      state.nameEdit = payload.name
      state.priceEdit = payload.price
      state.stockEdit = payload.stock
      state.imageEdit = payload.image
      state.descriptionEdit = payload.description
    },
    SET_BANNERS (state, payload) {
      state.banners = payload
    },
    SET_EDIT_BANNER_INFO (state, payload) {
      state.titleEdit = payload.title
      state.bannerId = payload.id
      state.statusEdit = payload.status
      state.image_urlEdit = payload.image_url
    }
  },
  actions: {
    fetchProducts (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: '/products',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_PRODUCTS', data)
          // this.products = data
        })
        .catch(err => console.log(err))
    },
    erase (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'delete',
        url: `/products/${id}`,
        headers: { access_token: token }
      })
    },
    login (context, payload) {
      return axios({
        method: 'post',
        url: '/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    addProduct (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'post',
        url: '/products',
        headers: { access_token: token },
        data: {
          image: payload.image,
          stock: payload.stock,
          name: payload.name,
          description: payload.description,
          price: payload.price
        }
      })
    },
    editProduct (context, payload) {
      const id = this.state.idEdit
      // console.log(id)
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'put',
        url: `/products/${id}`,
        headers: { access_token: token },
        data: {
          image: payload.image,
          stock: payload.stock,
          name: payload.name,
          description: payload.description,
          price: payload.price
        }
      })
    },
    findOne (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'get',
        url: `/products/${id}`,
        headers: { access_token: token }
      })
    },
    fetchBanners (context) {
      const token = localStorage.getItem('access_token')
      axios({
        method: 'get',
        url: '/banner',
        headers: { access_token: token }
      })
        .then(({ data }) => {
          context.commit('SET_BANNERS', data)
          // console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanners (context, payload) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'post',
        url: '/banner',
        headers: { access_token: token },
        data: {
          image_url: payload.image_url,
          status: payload.status,
          title: payload.title
        }
      })
    },
    deleteBanner (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'delete',
        url: `/banner/${id}`,
        headers: { access_token: token }
      })
    },
    findOneBanner (context, id) {
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'get',
        url: `/banner/${id}`,
        headers: { access_token: token }
      })
    },
    editBanner (context, payload) {
      const id = this.state.bannerId
      // console.log(id)
      const token = localStorage.getItem('access_token')
      return axios({
        method: 'put',
        url: `/banner/${id}`,
        headers: { access_token: token },
        data: {
          title: payload.title,
          status: payload.status,
          image_url: payload.image_url
        }
      })
    }
  },
  modules: {
  }
})
