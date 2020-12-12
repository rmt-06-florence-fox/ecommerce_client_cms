<template>
  <div class="container mt-5 col-md-6">
    <form @submit.prevent="doSignIn">
      <div class="form-group">
        <label>Email: </label>
        <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" placeholder="enter your email">
        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label>Password: </label>
        <input type="password" class="form-control" v-model="password" placeholder="enter your password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignInPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doSignIn () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('doSignIn', payload)
    }
  }
}
</script>

<style>

</style>
