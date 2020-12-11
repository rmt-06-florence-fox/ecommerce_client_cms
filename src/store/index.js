import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../config/axios'
import router from '../router'
import swal from 'sweetalert'

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
          swal('Invalid Account !', 'try again', 'error')
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
          swal('Wrong Input !', 'Empty field or minus price/stock', 'error')
        })
    },
    editProduct (context, payload) {
      const accesstoken = localStorage.accesstoken
      axios
        .put(`/products/${payload.id}`,
          {
            name: payload.name,
            image_url: payload.image_url,
            price: payload.price,
            stock: payload.stock
          },
          { headers: { accesstoken } })
        .then(data => {
          context.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
          swal('Wrong Input !', 'Empty field or minus price/stock', 'error')
        })
    },
    destroyProduct (context, destroyId) {
      const accesstoken = localStorage.accesstoken
      axios
        .delete(`/products/${destroyId}`, { headers: { accesstoken } })
        .then(data => {
          context.dispatch('fetchProducts')
        })
        .catch(err => console.log(err, 'ke error bosque'))
    }
  },
  modules: {
  }
})
