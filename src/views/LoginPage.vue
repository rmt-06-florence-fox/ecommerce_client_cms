<template>
  <div class="login">
    <h3 class="text-center">E-Commerce Admin</h3>
    <h5 class="text-center text-muted">Login</h5>
    <form @submit.prevent="login">
      <div class="form-group">
        <label>Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email">
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { email, password } = this
      const payload = {
        email,
        password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
</style>
