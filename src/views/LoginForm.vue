<template>
  <div>
    <Navbar class="mb-5"></Navbar>
    <div class="container my-5 py-3 border border-dark rounded bg-secondary text-white" style="width: 35%;">
        <div class="container" id="login">
            <div class="container">
                <h3 class="text-center my-3">Login</h3>
            </div>
            <form id="loginForm" class="my-3">
                <div class="form-group">
                    <label for="input_email">Email address</label>
                    <input type="email" class="form-control" id="input_email" placeholder="Email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="input_password">Password</label>
                    <input type="password" class="form-control" id="input_password" placeholder="Password" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;" v-on:click.prevent="login">Login</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
    Navbar
  },
  methods: {
    login () {
      const admin = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', admin)
    }
  }
}
</script>

<style>

</style>
