<template>
  <div class="container login-page">
    <img class ="logo-lambang" src="../image/logo1.png" width="30%">
      <h3 class="display-6 font-weight-bold">Login</h3>
      <div class= "row">
        <div class="col-12 mt-5">
          <form action="#" @submit.prevent="login">
          <div class="form-group font-weight-bold">
            <label for="email">Email address</label>
            <input type="email" v-model="loginPayload.email" class="form-control" id="login-email" placeholder="Enter email">
          </div>
          <div class="form-group font-weight-bold">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="loginPayload.password" class="form-control" id="login-password" placeholder="Password">
          </div>
            <button type="submit" class="btn btn-warning">Login</button>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'LoginPage',
  data () {
    return {
      loginPayload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const { email, password } = this.loginPayload
      console.log('tes ah')
      this.$store
        .dispatch('login', { email, password })
        .then((result) => {
          localStorage.setItem('token', result.data.token)
          localStorage.setItem('user', result.data.email)
          this.$store.commit('isLogin', true)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          this.$router.push('/')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message + '!'
          })
        })
    }
  },
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  color: white;
  box-shadow: 1px 1px 15px 5px rgba(0, 0, 0, 0.30);
  display: flex;
  justify-content: space-around;
}

.col-12 {
  background: url(https://images.unsplash.com/photo-1577670552647-6ce12a463e7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80);
  box-shadow: 1px 1px 15px 5px rgba(226, 193, 3, 0.65);
  padding: 70px;
  width: 10px;
  border-radius: 100px;
}

.login-page {
  left: 0;
  top: 0;
  right: 0;
  height: 100vh;
}

</style>
