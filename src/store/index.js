import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/config'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    // context untuk manggil state/mutation/action
    adminLogin (context, payload) {
      axios({
        method: 'POST',
        url: 'admin/login',
        data: payload
      })
        .then((data) => {
          console.log(data.data.access_token)
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/admin')
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
