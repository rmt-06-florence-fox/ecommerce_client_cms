import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axiosinstance'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {}
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    setProduct (state, payload) {
      state.product = payload
    }
  },
  actions: {
    login (context, payload) {
      axios({
        method: 'POST',
        url: '/admin/login',
        data: payload
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.setItem('access_token', data.access_token)
          Vue.toasted.show(`Welcome, ${payload.email.split('@')[0]} !!!`, {
            icon: 'check',
            position: 'top-center'
          })
          router.push('/products')
        })
        .catch(err => {
          // console.log(err.response.data)
          Vue.toasted.error(err.response.data.message, {
            icon: 'times',
            position: 'top-center'
          })
        })
    },
    fetchData (context) {
      axios({
        method: 'GET',
        url: '/products'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProducts', data.result)
        })
        .catch(err => {
          console.log(err)
        })
    },
    createProduct (context, payload) {
      axios({
        method: 'POST',
        url: '/products',
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          Vue.toasted.success('Successfully created new product !!!', {
            position: 'top-center'
          })
          router.push('/products')
        })
        .catch(err => {
          if (err.response.data.messages) {
            console.log(err.response.data.messages)
            const errMessage = err.response.data.messages
            errMessage.forEach((e) => {
              Vue.toasted.error(e.message, {
                icon: 'times',
                position: 'top-right',
                closeOnSwipe: true
              })
            })
          } else console.log(err)
        })
    },
    editProduct (context, id) {
      axios({
        method: 'GET',
        url: '/products/' + id,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('setProduct', data)
          router.push('/edit/' + id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateProduct (context, payload) {
      axios({
        method: 'PUT',
        url: '/products/' + payload.id,
        data: payload,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(data => {
          Vue.toasted.success('Successfully updated data product !!!', {
            position: 'top-center'
          })
          router.push('/products')
        })
        .catch(err => {
          const errMessage = err.response.data.messages
          errMessage.forEach((e) => {
            Vue.toasted.error(e.message, {
              icon: 'times',
              position: 'top-right',
              closeOnSwipe: true
            })
          })
        })
    },
    deleteProduct (context, id) {
      Vue.toasted.error('Are you sure ?', {
        position: 'top-center',
        action: [
          {
            text: 'Yes',
            onClick: (e, toastedObject) => {
              toastedObject.goAway(0)
              axios({
                method: 'DELETE',
                url: '/products/' + id,
                headers: {
                  access_token: localStorage.getItem('access_token')
                }
              })
                .then(_ => {
                  Vue.toasted.success('Successfully deleted this product !', {
                    position: 'top-center'
                  })
                  context.dispatch('fetchData')
                })
                .catch(err => {
                  console.log(err)
                })
            }
          },
          {
            text: 'Cancel',
            onClick: (e, toastedObject) => {
              toastedObject.goAway(0)
            }
          }
        ]
      })
    }
  },
  modules: {
  }
})
