import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import Axios jangan lupa

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    acces_token: {}
  },
  mutations: {
    // showAllData(state, payload) { // params 1 untuk manggil state, params 2 value yang di terima dari actions
    //   state.collectionData = payload // ini proses ngisi data untuk state
    // }
  },
  actions: { // ini tempat nyimpen proses async (Proses Axios taruhnya di sini (untuk ngambil data / ngembaliin data dari server))
    login ({ commit }, payload) { // ini destructuring dari context
      console.log(payload)
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: payload
      })
        .then(({ data }) => {
          // console.log(data)
          localStorage.setItem('acces_token', data.acces_token)
          // commit('showAllData', data) // showAll data ini nanti dipakai untuk nama function di mutations, parameter 2 data yang didapat dr server
        })
    }
  },
  modules: {
  }
})
