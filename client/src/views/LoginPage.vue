<template>
  <form
    @submit.prevent="loginAdmin"
    class="form-signin bg-light rounded shadow-lg text-center"
    style="margin-top: 6em"
  >
    <h3><b>LOGIN</b></h3>
    <img src="../assets/auth.png" alt="auth" width="100%">
    <div class="form-group">
      <label for="login_email"><i class="fas fa-user-shield mr-2"></i>Email</label>
      <input
        v-model="admin.email"
        type="email"
        id="login_email"
        placeholder="email here"
        class="form-control"
        required
      >
    </div>
    <div class="form-group">
      <label for="login_password"><i class="fas fa-unlock-alt mr-2"></i>Password</label>
      <input
        v-model="admin.password"
        type="password"
        id="login_password"
        placeholder="password here"
        class="form-control"
        required
      >
    </div>
    <button class="btn btn-outline-success" type="submit">Login</button>
  </form>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'LoginPage',
  data () {
    return {
      admin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginAdmin () {
      const payload = this.admin
      this.$store.dispatch('loginAdmin', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Dashboard' })
          Toast.fire({
            icon: 'success',
            title: 'Welcome admin!'
          })
          this.$store.commit('loggedIn', true)
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.data.msg
          })
        })
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.name !== 'Login' && !localStorage.access_token) {
      next()
    } else if (localStorage.access_token) {
      Swal.fire({
        icon: 'info',
        title: 'Please logout first'
      })
      next('/dashboard')
    }
  }
}

</script>

<style scoped>

</style>
