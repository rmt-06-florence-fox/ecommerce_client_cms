<template>
  <div>
    <div class="container-fluid">
      <h1 class="">Please Input Your Id Here</h1>
      <div class="row d-flex">
        <div class="col-lg-6 d-flex justify-content-end">
          <img class="foxImg logo align-self-center" src="https://ecs7.tokopedia.net/img/attachment/2020/4/21/26999847/26999847_15e7941c-346d-4e0b-a912-28a3dc025b5c.png" alt="Hacktiv8 Fox">
        </div>
        <div class="col-lg-6 mt-4 mb-4 justify-content-start d-flex">
          <div class="col-9">
            <form @submit="login" id="formlogin" class="container card-body mt-4 mr-4 mb-4">
              <div class="form-group">
                <label for="emaillog"><h3 class="text-white">Email address</h3></label>
                <input type="email" class="form-control" placeholder="Your Email Here"  v-model="email_input"/>
                <small id="logpref" class="form-text text-black text-left mt-1 mb-3">*We never share your email</small>
              </div>
              <div class="form-group">
                <label class="mt-4" for="passwordlog"><h3 class="text-white">Password</h3></label>
                <input type="password" class="form-control" id="passwordlog" placeholder="Your Password Here" v-model="password_input"/>
              </div>
              <br>
              <button type="submit" class="shadow btn btn-success">Login</button>
              <p class="text-white mt-3"> or </p>
              <button @click="goToRegister" type="button" class="shadow btn btn-danger" id="slog">I Don't Have an Account</button>
            </form>
          </div>
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
      email_input: '',
      password_input: ''
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/register')
    },
    login () {
      const payload = {
        email: this.email_input,
        password: this.password_input
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style>
</style>
