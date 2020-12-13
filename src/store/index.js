import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosinstance'
import formatDate from '../helpers/formatDate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    categoriesLength: 0,
    productsLength: 0
  },
  mutations: {
    setCategories (state, payload) {
      state.categories = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCategoriesLength (state, payload) {
      state.categoriesLength = payload
    },
    setProductsLength (state, payload) {
      state.productsLength = payload
    }
  },
  actions: {
    fetchCategories ({ commit }) {
      return axios
        .get('/categories', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          const objFormatted = []
          let obj = {}
          data.map((category) => {
            obj = {
              id: category.id,
              name: category.name,
              createdAt: formatDate(category.createdAt),
              updatedAt: formatDate(category.updatedAt)
            }
            objFormatted.push(obj)
          })
          commit('setCategories', objFormatted)
          commit('setCategoriesLength', objFormatted.length)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    fetchProducts ({ commit }) {
      return axios
        .get('/products', {
          headers: { access_token: localStorage.getItem('access_token') }
        })
        .then(({ data }) => {
          const objFormatted = []
          let obj = {}
          data.map((product) => {
            obj = {
              id: product.id,
              name: product.name,
              CategoryId: product.CategoryId,
              image_url: product.image_url,
              price: product.price,
              stock: product.stock,
              createdAt: formatDate(product.createdAt),
              updatedAt: formatDate(product.updatedAt)
            }
            objFormatted.push(obj)
          })
          commit('setProducts', objFormatted)
          commit('setProductsLength', objFormatted.length)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addCategory (context, payload) {
      return axios
        .post('/categories', payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    editCategory (context, payload) {
      return axios
        .put(`/categories/${payload.CategoryId}`, payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    deleteCategory (context, CategoryId) {
      return axios
        .delete(`/categories/${CategoryId}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    addProduct (context, payload) {
      return axios
        .post('/products', payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    editProduct (context, payload) {
      return axios
        .put(`/products/${payload.id}`, payload, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    },
    deleteProduct (context, ProductId) {
      return axios
        .delete(`/products/${ProductId}`, {
          headers: { access_token: localStorage.getItem('access_token') }
        })
    }
  },
  getters: {
    filteredProductsByCategory: (state) => (CategoryId) => {
      return state.products.filter((el) => {
        return el.CategoryId === CategoryId
      })
    }
  }
})
