import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    siteTitle: 'JAM TANGEN',
    products: [],
    categories: [],
    user: ''
  },
  mutations: {
    setProducts (state, value) {
      state.products = value
    },
    setCategories (state, value) {
      state.categories = value
    },
    setUser (state, value) {
      state.user = value
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
          // router.push('/dashboard'
          context.dispatch('loadProducts')
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
    },
    loadUser (context) {
      axios({
        method: 'get',
        url: '/user',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(res => {
          context.commit('setUser', res.data)
        })
    },
    sortProducts (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return -1
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
    },
    sortCategories (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          if (a.Categories < b.Categories) {
            return -1
          }
          if (a.Categories > b.Categories) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a.Categories > b.Categories) {
            return -1
          }
          if (a.Categories < b.Categories) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
    },
    sortPrice (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a.price > b.price) {
            return -1
          }
          if (a.price < b.price) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
    },
    sortStocks (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          return a.stock - b.stock
        })
      } else {
        data.sort((a, b) => {
          if (a.stock > b.stock) {
            return -1
          }
          if (a.stock < b.stock) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
    },
    sortUpdated (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          if (a.updatedAt < b.updatedAt) {
            return -1
          }
          if (a.updatedAt > b.updatedAt) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a.updatedAt > b.updatedAt) {
            return -1
          }
          if (a.updatedAt < b.updatedAt) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
    },
    sortCreated (context, bol) {
      const data = []
      context.state.products.forEach(el => {
        data.push(el)
      })
      if (bol) {
        data.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return -1
          }
          if (a.createdAt > b.createdAt) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      } else {
        data.sort((a, b) => {
          if (a.createdAt > b.createdAt) {
            return -1
          }
          if (a.createdAt < b.createdAt) {
            return 1
          }
          // a must be equal to b
          return 0
        })
      }
      context.commit('setProducts', data)
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
    },
    countStocks: state => {
      let stock = 0
      state.products.forEach(el => {
        stock += el.stock
      })
      return stock
    }
  }
})
