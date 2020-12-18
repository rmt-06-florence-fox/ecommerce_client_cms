import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import Axios jangan lupa

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataItems: [],
    acces_token: {},
    selectedItem: {}
  },
  mutations: {
    // showAllData (state, payload) { // params 1 untuk manggil state, params 2 value yang di terima dari actions
    //   state.collectionData = payload // ini proses ngisi data untuk state
    // },
    getProducts (state, payload) {
      state.dataItems = payload
    },
    getAccesToken (state, accesToken) {
      state.acces_token = accesToken
    },
    selectedItem (state, payload) {
      state.selectedItem = payload
    }
  },
  actions: { // ini tempat nyimpen proses async (Proses Axios taruhnya di sini (untuk ngambil data / ngembaliin data dari server))
    login ({ commit }, payload) { // ini destructuring dari context
      console.log(payload)
      return axios({
        method: 'post',
        url: 'https://bukapalak.herokuapp.com/login/admin',
        // url: 'https://bukapalak.herokuapp.com/login/admin',
        data: payload
      })
    },

    fetchData ({ commit }) {
      axios({
        method: 'get',
        url: 'https://bukapalak.herokuapp.com/products',
        // url: 'https://bukapalak.herokuapp.com/products',
        headers: {
          acces_token: localStorage.acces_token
        }
      })
        .then(({ data }) => {
          console.log(data)
          commit('getProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getDataById ({ commit }, id) {
      axios({
        method: 'get',
        url: 'https://bukapalak.herokuapp.com/products/' + id,
        // url: 'https://bukapalak.herokuapp.com/products/' + id,
        headers: {
          acces_token: localStorage.acces_token
        },
        data: id
      })
        .then(({ data }) => {
          console.log(data)
          commit('selectedItem', data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addItem ({ commit }, payload) {
      return axios({
        method: 'post',
        url: 'https://bukapalak.herokuapp.com/products',
        // url: 'https://bukapalak.herokuapp.com/products',
        headers: {
          acces_token: localStorage.acces_token
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          CategorieId: payload.CategorieId
        }
      })
    },

    updateItem ({ commit }, payload) {
      return axios({
        method: 'put',
        url: 'https://bukapalak.herokuapp.com/products/' + payload.id,
        // url: 'https://bukapalak.herokuapp.com/products/' + payload.id,
        headers: {
          acces_token: localStorage.acces_token
        },
        data: payload
      })
    },

    deleteItem ({ commit }, id) {
      return axios({
        method: 'delete',
        url: 'https://bukapalak.herokuapp.com/products/' + id,
        // url: 'https://bukapalak.herokuapp.com/products/' + id,
        headers: {
          acces_token: localStorage.acces_token
        },
        data: id
      })
    },

    addCategory ({ commit }, payload) {
      return axios({
        method: 'post',
        url: 'https://bukapalak.herokuapp.com/categorie',
        // url: 'https://bukapalak.herokuapp.com/products/' + id,
        headers: {
          acces_token: localStorage.acces_token
        },
        data: payload
      })
    }
  },
  modules: {
  }
})
