import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    editproduct: {}
  },
  mutations: {
    setProducts (state, data) {
      state.products = data
    },
    setEditProduct (state, data) {
      state.editproduct = data
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    },
    fetchData (context) {
      console.log('difetc')
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteData (context, id) {
      axios({
        method: 'DELETE',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          context.dispatch('fetchData')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addData (context, data) {
      axios({
        method: 'POST',
        url: '/products',
        headers: {
          access_token: localStorage.getItem('access_token')
        },
        data: {
          name: data.name,
          image_url: data.image_url,
          stock: data.stock,
          price: data.price
        }
      })
        .then((data) => {
          this.dispatch('fetchData')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getEdit (context, id) {
      console.log('diget edit')
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setEditProduct', data)
          router.push(`/edit/${id}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, data) {
      console.log(data)
      axios({
        method: 'PUT',
        url: '/products/' + data.id,
        data: data,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          router.push('/dashboard')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  coba (context, id) {
    console.log('diget edit')
    // axios({
    //   method: 'GET',
    //   url: '/products/' + id,
    //   headers: {
    //     access_token: localStorage.getItem('access_token')
    //   }
    // })
    //   .then(({ data }) => {
    //     console.log(data)
    //     context.commit('setEditProduct', data)
    //     router.push(`/edit/${id}`)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  },
  modules: {
  }
})
