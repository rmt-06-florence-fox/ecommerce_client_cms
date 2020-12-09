import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    populateProducts (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProducts (context) {
      const accesstoken = localStorage.accesstoken
      axios
        .get('/products', { headers: { accesstoken } })
        .then(data => {
          context.commit('populateProducts', data)
        })
        .catch(err => console.log(err, 'ke error bosque'))
    },
    login (context, payload) {
      axios
        .post('/login', payload)
        .then(data => {
          localStorage.setItem('accesstoken', data.data.accesstoken)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const accesstoken = localStorage.accesstoken
      axios
        .post('/products', payload, { headers: { accesstoken } })
      // ({
      //   method: 'POST',
      //   url: '/products',
      //   headers: { accessToken },
      //   data: payload
      // })
        .then(data => {
          console.log('masuk dataaa')
          router.push('/')
        })
        .catch(err => {
          console.log('masuk eror client')
          console.log(err)
        })
    }
  },
  modules: {
  }
})
