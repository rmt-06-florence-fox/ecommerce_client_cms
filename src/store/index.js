import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setProduct (state, data) {
      console.log(data, 'setproduct')
      state.product = data
    }
  },
  actions: {
    fetchData (context) {
      axios({
        url: ' https://e-commerce-marcella.herokuapp.com/products',
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(({ err }) => {
          console.log(err, '<err')
        })
    },
    editData ({ context, state }, payload) {
      const { id } = payload
      return axios({
        url: ` https://e-commerce-marcella.herokuapp.com/products/${id}`,
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          description: payload.description,
          stock: payload.stock,
          price: payload.price
        }
      })
    },
    fetchDataById (context, id) {
      return axios({
        url: ` https://e-commerce-marcella.herokuapp.com/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleted ({ context }, id) {
      return axios({
        url: ` https://e-commerce-marcella.herokuapp.com/products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    login (context, payload) {
      console.log(payload, '<data pl')
      return axios({
        url: ' https://e-commerce-marcella.herokuapp.com/loginadm',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    createProduct (context, payload) {
      return axios({
        url: ' https://e-commerce-marcella.herokuapp.com/products',
        method: 'post',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          description: payload.description
        }
      })
    }
  },
  modules: {
  }
})
