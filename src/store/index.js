import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    selectedCategory: null
  },
  mutations: {
    fetchProduct (state, data) {
      state.products = data
    },
    fetchCategory (state, data) {
      state.categories = data
    },
    setCategory (state, id) {
      state.selectedCategory = id
    }
  },
  actions: {
    login (context, obj) {
      return axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: {
          email: obj.email,
          password: obj.password
        }
      })
    },
    addProduct (context, obj) {
      return axios({
        url: 'http://localhost:3000/product',
        method: 'POST',
        data: {
          name: obj.name,
          image_url: obj.image_url,
          price: obj.price,
          stock: obj.stock,
          CategoryId: obj.CategoryId
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    fetchProduct (context) {
      axios({
        url: 'http://localhost:3000/productAdmin',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('fetchProduct', response.data)
        })
        .catch(error => {
          this.$alert(error.response.data.message)
        })
    },
    fetchDataById (context, id) {
      return axios({
        url: 'http://localhost:3000/product/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    editData (context, payload) {
      return axios({
        url: 'http://localhost:3000/product/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategoryId: payload.CategoryId
        }
      })
    },
    deleteData (context, id) {
      return axios({
        url: 'http://localhost:3000/product/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    getCategory (context) {
      axios({
        url: 'http://localhost:3000/categoryAdmin',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(response => {
          context.commit('fetchCategory', response.data)
        })
        .catch(error => {
          this.$alert(error.response.data.message)
        })
    },
    editCategory (context, payload) {
      return axios({
        url: 'http://localhost:3000/category/' + payload.id,
        method: 'PUT',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: payload.name
        }
      })
    },
    addCategory (context, name) {
      return axios({
        url: 'http://localhost:3000/category',
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name
        }
      })
    },
    fetchDetailCategory (context, id) {
      return axios({
        url: 'http://localhost:3000/category/' + id,
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    deleteCategory (context, id) {
      return axios({
        url: 'http://localhost:3000/category/' + id,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
