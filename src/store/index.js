import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosInstance'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    banners: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setCategories (state, payload) {
      state.categories = payload
    },
    setBanner (state, payload) {
      state.banners = payload
    }
  },
  actions: {
    login (context, payload) {
      return axios
        .post('/login', {
          email: payload.email,
          password: payload.password
        })
    },
    fetchProduct (context) {
      axios({
        url: '/products',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setProducts', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      axios({
        url: '/products',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          categoryName: payload.categoryName
        }
      })
        .then(res => {
          Swal.fire(' Add Product Success')
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire(' Add Product Failed')
          console.log(err)
        })
    },
    fetchCategory (context) {
      axios({
        url: '/category',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setCategories', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    editProduct (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          categoryName: payload.categoryName
        }
      })
        .then(res => {
          Swal.fire(' Edit Product Success')
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          Swal.fire('Edit Product Failed')
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      axios({
        url: `/products/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          this.dispatch('fetchProduct')
        })
        .catch(err => {
          console.log(err)
          Swal.fire(' Delete Failed')
        })
    },
    addCategory (context, payload) {
      axios({
        url: '/category',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          name: payload
        }
      })
        .then(res => {
          Swal.fire(' Create Category Success')
          this.dispatch('fetchCategory')
        })
        .catch(err => {
          console.log(err)
          Swal.fire(' Add Category Failed')
        })
    },
    increaseStock (context, payload) {
      axios({
        url: `/products/${payload.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: payload.stock
        }
      })
        .then(res => {
          Swal.fire('Updated Stock Success')
        })
        .catch(err => {
          Swal.fire('Update stock Failed')
          console.log(err)
        })
    },
    decreaseStock (context, payload) {
      console.log('disini kan?', payload)
      axios({
        url: `/products/${payload.id}`,
        method: 'PATCH',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          stock: payload.stock
        }
      })
        .then(res => {
          Swal.fire('Updated Stock Success')
        })
        .catch(err => {
          Swal.fire('Update stock Failed')
          console.log(err)
        })
    },
    fetchBanner (context) {
      axios({
        url: '/banner',
        method: 'GET',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          context.commit('setBanner', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      axios({
        url: '/banner',
        method: 'POST',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(res => {
          Swal.fire(' Create Banner Success')
          this.dispatch('fetchBanner')
        })
        .catch(err => {
          Swal.fire('Create Banner Failed')
          console.log(err)
        })
    },
    editBanner (context, payload) {
      axios({
        url: `/banner/${payload.id}`,
        method: 'PUT',
        headers: {
          access_token: localStorage.access_token
        },
        data: {
          title: payload.title,
          image_url: payload.image_url,
          status: payload.status
        }
      })
        .then(res => {
          Swal.fire(' Edit Banner Success')
          this.dispatch('fetchBanner')
        })
        .catch(err => {
          Swal.fire('Edit Banner Failed')
          console.log(err)
        })
    },
    deleteBanner (context, payload) {
      axios({
        url: `/banner/${payload}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          this.dispatch('fetchBanner')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  },
  getters: {
    filteredProduct: (state) => (name) => {
      return state.products.filter(product => {
        if (!name || name === 'all') {
          return product
        } else {
          return product.Category.name === name
        }
      })
    }
  }
})
