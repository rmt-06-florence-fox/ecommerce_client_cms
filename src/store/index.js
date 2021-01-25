import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Tadika Mesra',
    allProducts: []
  },
  mutations: {
    setAllProducts (state, payload) {
      state.allProducts = payload
    }
  },
  actions: {
    fetchData (context) {
      axios({
        method: 'GET',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          const data = response.data.data
          // this.allProducts = data
          // console.log(this.allProducts)
          context.commit('setAllProducts', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getProductById (context, id) {
      return axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addProduct (context, obj) {
      return axios({
        method: 'post',
        url: '/products',
        data: {
          name: obj.name,
          stock: obj.stock,
          price: obj.price,
          image_url: obj.image_url
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteProduct (context, id) {
      return axios({
        method: 'delete',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    updateProduct (context, obj) {
      return axios({
        method: 'put',
        url: '/products/' + obj.id,
        data: {
          name: obj.name,
          stock: obj.stock,
          price: obj.price,
          image_url: obj.image_url
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
