import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteTitle: 'JAM TANGEN',
    products: [],
    categories: []
  },
  mutations: {
    setProducts (state, value) {
      state.products = value
    },
    setCategories (state, value) {
      state.categories = value
    }
  },
  actions: {
    loadProducts (context) {
      axios({
        method: 'get',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          const sorted = res.data.products.sort((a, b) => a.createdAt - b.createdAt)
          context.commit('setProducts', sorted)
          return axios({
            method: 'get',
            url: '/categories',
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        })
        .then(res => {
          context.commit('setCategories', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postProduct (context, data) {
      axios({
        method: 'post',
        url: '/product',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data.name,
          image_url: data.image_url,
          price: data.price,
          stock: data.stock
        }
      })
        .then(res => {
          console.log(res.data)
          const bulkCat = []
          data.catSelected.forEach(el => {
            bulkCat.push({
              ProductId: res.data.id,
              CategoryId: el
            })
          })
          console.log(bulkCat)
          return axios({
            method: 'post',
            url: '/categories/bulk',
            headers: {
              access_token: localStorage.getItem('access_token')
            },
            data: bulkCat
          })
        })
        .then(res => {
          router.push('dashboard')
        })
    },
    updateProduct (context, data) {
      axios({
        method: 'put',
        url: `/product/${data.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data.name,
          image_url: data.image_url,
          price: data.price,
          stock: data.stock
        }
      })
        .then(res => {
          return axios({
            method: 'delete',
            url: `/categories/bulk/${data.id}`,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
          })
        })
        .then(res => {
          const bulkCat = []
          data.catSelected.forEach(el => {
            bulkCat.push({
              ProductId: data.id,
              CategoryId: el
            })
          })
          console.log(bulkCat)
          return axios({
            method: 'post',
            url: '/categories/bulk',
            headers: {
              access_token: localStorage.getItem('access_token')
            },
            data: bulkCat
          })
        })
        .then(res => {
          router.push('/dashboard')
        })
    },
    deleteProduct (context, id) {
      axios({
        method: 'delete',
        url: `/product/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          router.push('/dashboard')
        })
    },
    addCat (context, data) {
      axios({
        method: 'post',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data
        }
      })
        .then(res => {
          context.dispatch('loadCategories')
        })
    },
    postUpdatCat (context, data) {
      axios({
        method: 'put',
        url: `/categories/${data.id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data.name
        }
      })
        .then(res => {
          // context.commit('setCategories', [])
          context.dispatch('loadCategories')
        })
    },
    loadCategories (context) {
      axios({
        method: 'get',
        url: '/categories',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setCategories', res.data)
        })
    },
    deleteCat (context, id) {
      axios({
        method: 'delete',
        url: `/categories/${id}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          // context.commit('setCategories', [])
          context.dispatch('loadCategories')
        })
    }
  },
  modules: {
  },
  getters: {
    getOneToEdit: state => id => {
      return state.products.find(el => el.id === id)
    },
    countProducts: state => {
      return state.products.length
    },
    countCategories: state => {
      return state.categories.length
    }
  }
})
