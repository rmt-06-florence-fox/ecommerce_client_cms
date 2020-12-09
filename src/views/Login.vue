<template>
  <div class="w-full h-screen flex">
    <img
      src="https://images.unsplash.com/photo-1598624725582-39c9f21bc565?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
      alt="background"
      class="object-cover object-center h-screen w-7/12"
    />
    <div
      class="bg-white flex flex-col justify-center items-center w-5/12 shadow-lg"
    >
      <span class="font-bold text-green-600">Welcome to Admin Page</span>
      <span
        class="bg-clip-text text-transparent bg-gradient-to-b from-green-800 to-green-600 text-5xl font-extrabold mb-10 select-none site-title"
      >
        {{siteTitle}}
      </span>
      <h1 class="text-2xl font-bold text-green-600 mb-2">Please Login</h1>
      <div class="w-1/2 text-center">
      <form @submit.prevent="login">
        <input
          type="email"
          name="email"
          placeholder="email"
          autocomplete="off"
          class="shadow-md border w-full h-10 px-3 py-2 text-green-600 focus:outline-none focus:border-green-600 mb-3 rounded"
          v-model="email"
          required />
        <input
          type="password"
          name="password"
          placeholder="password"
          autocomplete="off"
          class="shadow-md border w-full h-10 px-3 py-2 text-green-600 focus:outline-none focus:border-green-600 mb-3 rounded"
          v-model="password"
          required />
        <input type="submit" value="Login" class="bg-green-600 hover:bg-green-800 text-white px-5 py-1 rounded text-lg focus:outline-none shadow">
      </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axios'

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
      axios({
        method: 'post',
        url: '/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          this.$router.push('/')
        })
    }
  },
  computed: {
    siteTitle () {
      return this.$store.state.siteTitle
    }
  }
}
</script>
