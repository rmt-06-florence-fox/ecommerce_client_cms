import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setDetail (state, payload) {
      state.products = payload
    }
  },
  actions: {
    fetchProductList (context) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          context.commit('setProducts', response.data.product)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // fetchProduct (context, id) {
    //   axios
    //     .get('/products'+id)
    //     .then(data => {
    //       this.products = data
    //     })
    //     .catch(err => console.log(err))
    // },
    addProduct (context, payload) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'POST',
        data: payload,
        headers: { access_token: localStorage.getItem('access_token') }
      })
        .then((response) => {
          router.push('/products')
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    toEditPage (context, id) {
      return axios({
        url: `http://localhost:3000/products/${id}`,
        method: 'GET',
        headers: { access_token: localStorage.getItem('access_token') }
      })
    }
    // deleteProduct () {
    //   axios
    //     .delete('/products'+id)
    //     .then(data => {
    //       // this.products = data
    //     })
    //     .catch(err => console.log(err))
    // }
  },
  modules: {
  }
})
