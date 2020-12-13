import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: [],
    banners: [],
    //banner: [],
    isLogin: false
  },
  mutations: { 
    SET_PRODUCTS(state, productsData) {
      state.products = productsData
    },
    SET_PRODUCT(state, productData) {
      state.product = productData
    },
    SET_LOGINSTATUS(state, loginStatus) {
      state.isLogin = loginStatus
    },
    ADD_NEWPRODUCT(state, newProduct) {
      state.products.push(newProduct);
    }
  },
  actions: {
    login(context, payload){
      axios({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(({data}) => {
        const access_token = data.access_token
        const role = data.role
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('role', role)
        context.commit('SET_LOGINSTATUS', true);
        router.push({ name: 'Dashboard' })
      })
      .catch(error => {
        console.log("Error From Login", error);
      })
    },
    fetchProducts(context, payload) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
      .then(({data}) => {
        console.log(data);
        context.commit('SET_PRODUCTS', data)
      })
      .catch(error => {
        console.log(error);
      })
    },
    addProduct(context, payload) {
      const access_token = localStorage.getItem('access_token')
      const role = localStorage.getItem('role')

      axios({
        method: 'POST',
        url: 'http://localhost:3000/products',
        headers: {
          access_token: access_token,
          role: role
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
      .then(({data}) => {
        console.log("New Product Added!");
        context.commit('ADD_NEWPRODUCT', data);
        router.push({ name: 'Home' });
      })
      .catch(error => {
        console.log("New Product Failed!");
        console.log(error);
      })
    },
    editProduct(context, payload) {
      const productId = payload.id;
      const access_token = localStorage.getItem('access_token');
      const role = localStorage.getItem('role');

      axios({
        method: 'PUT',
        url: `http://localhost:3000/products/${productId}`,
        headers: {
          access_token: access_token,
          role: role
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock
        }
      })
      .then(({data}) => {
        const index = context.state.products.findIndex((el) => el.id === productId);
        context.state.products[index] = data;
        router.push({ name: 'Home' })
      })
      .catch(error => {
        console.log(error);
      })
    },
    deleteProduct(context, payload) {
      const access_token = localStorage.getItem('access_token');
      const role = localStorage.getItem('role');

      axios({
        method: 'DELETE',
        url: `http://localhost:3000/products/${payload}`,
        headers: {
          access_token: access_token,
          role: role
        }
      })
      .then(() => {
        const index = context.state.products.findIndex((el) => el.id === payload);
        context.state.products.splice(index, 1);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
  modules: {
  }
})
