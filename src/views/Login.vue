<template>
  <div class="container-fluid bg-dark" style="height: 100vh">
    <div class="row justify-content-center h-100 align-items-center">
      <div class="col-3">
        <h3 class="text-danger align-self-start text-center mb-5">E-COMMERCE CMS</h3>
        <div class="card bg-dark">
          <form @submit.prevent="login">
            <div class="form">
              <div class="p-3">
                <input v-model="email" type="text" class="form-control bg-dark text-white" placeholder="email">
              </div>
              <div class="p-3">
                <input v-model="password" type="password" class="form-control bg-dark text-white" placeholder="password">
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-4 bg-danger rounded justify-content-center mb-3">
                <button class="w-100 btn" type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        url: 'login',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router('/home')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
