<template>
  <div class="container login">
    <div class="row my-5">
        <div class="row mt-5">
          <h1 class="text-center">Welcome to CMS Page</h1>
        </div>
        <div class="card shadow col-4 mt-5 mx-auto border border-rounded">
            <div class="card-header">
              <h1>Login</h1>
            </div>
            <div class="card-body mt-3">
              <form @submit.prevent="login">
                  <div class="form-group">
                      <label for="loginEmail">Email Address</label>
                      <input type="email" class="form-control mt-1" v-model="email" placeholder="input your email">
                  </div>
                  <div class="form-group mt-2">
                      <label for="loginPassword">Password</label>
                      <input type="password" class="form-control mt-1" v-model="password" placeholder="input your password">
                  </div>
                  <div class="row mt-4 mb-4">
                    <div class="col">
                      <button type="submit" class="btn col-3 btn-primary">Login</button>
                    </div>
                  </div>
              </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
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
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>

</style>
