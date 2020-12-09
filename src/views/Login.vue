<template>
  <section class="section">
    <div class="container px-6">
      <h1 class="title">CMS Awesome</h1>
      <h1 class="title">Login</h1>
      <form action="" @submit.prevent="login">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="email" class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
          <div class="field">
          <p class="control has-icons-left">
          <input class="input" v-model="password" type="password" placeholder="Password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-link">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from '../config/axiosInstance'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('login')
      axios
        .post('/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          const accessToken = response.data.access_token
          localStorage.setItem('access_token', accessToken)
          this.$router.push({ name: 'Homepage' })
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style scoped>
.container{
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  box-shadow: 10px 10px 10px 10px gray !important
}
</style>
