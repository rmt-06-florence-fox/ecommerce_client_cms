<template>
  <div class="container">
    <div class="form-signin-register bg-front">
      <div class="row justify-content-center mt-5">
        <div class="col-4 bg-light">
          <div class="shadow-lg p-5 rounded">
            <h5 class="mb-4 text-center"><b>Mr Bee Ecommerce</b></h5>
            <div>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="login-email"
                    placeholder="Your email"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="login-password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      axios({
        url: 'http://localhost:3000/login',
        method: 'POST',
        data: { email: payload.email, password: payload.password }
      })
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/products')
        })
        .catch((error) => {
          Swal.fire('Login Failed', `${error.response.data.message}`, 'error')
          console.log(error)
        })
    }
  }
}
</script>

<style></style>
