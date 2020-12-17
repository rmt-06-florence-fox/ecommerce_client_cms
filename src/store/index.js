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
    },
    updateName (state, data) {
      state.product.name = data
    },
    updateImage_url (state, data) {
      state.product.image_url = data
    },
    updateStock (state, data) {
      state.product.stock = data
    },
    updatePrice (state, data) {
      state.product.price = data
    },
    updateDescription (state, data) {
      state.product.description = data
    }
  },
  actions: {
    fetchData (context) {
      axios({
        url: 'http://localhost:3000/products',
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
    editData ({ context, state }, id) {
      console.log(state.product, id, '<<dari edit data')
      axios({
        url: 'http://localhost:3000/products',
        method: 'put',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: state.product.name,
          image_url: state.product.image_url,
          description: state.product.description,
          stock: state.product.stock,
          price: state.product.price
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProduct', data)
        })
        .catch(({ err }) => {
          console.log(err, '<err')
        })
    },
    fetchDataById (context, id) {
      axios({
        url: `http://localhost:3000/products/${id}`,
        method: 'get',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          context.commit('setProduct', data)
        })
        .catch(({ err }) => {
          console.log(err, '<err fetch data')
        })
    },
    deleted ({ context }, id) {
      axios({
        url: `http://localhost:3000/products/${id}`,
        method: 'delete',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log('data berhasil dihapus')
        })
        .catch(({ err }) => {
          console.log(err, '<err')
        })
    },
    login (context, payload) {
      console.log(payload, '<data pl')
      return axios({
        url: 'http://localhost:3000/loginadm',
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
        url: 'http://localhost:3000/products',
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
