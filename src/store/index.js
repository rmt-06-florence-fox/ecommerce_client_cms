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
    descriptionEdit: ''
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
    }
  },
  modules: {
  }
})
