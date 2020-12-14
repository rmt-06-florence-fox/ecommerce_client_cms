<template>
  <div>
    <div class="container-fluid">
      <h1 class="mt-5">Please Register Your New Id</h1>
      <div class="row d-flex">
        <div class="col-lg-6 d-flex justify-content-end">
          <img class="foxImg logo align-self-center" src="https://ecs7.tokopedia.net/img/attachment/2020/4/21/26999847/26999847_15e7941c-346d-4e0b-a912-28a3dc025b5c.png" alt="Hacktiv8 Fox">
        </div>
        <div class="col-lg-6 mb-4 justify-content-start d-flex">
          <div class="col-9">
            <form id="formregister" @submit="register" class="container card-body mt-4 mr-4 mb-4">
              <div class="form-group">
                <label for="emaillog"><h3 class="text-white">New Email address</h3></label>
                <input type="email" class="form-control" placeholder="Your Email Here"  v-model="email_register_input"/>
                <small id="logpref" class="form-text text-black text-left mt-1 mb-3">*We never share your email</small>
              </div>
              <div class="form-group">
                <label class="mt-4" for="passwordlog"><h3 class="text-white">Password</h3></label>
                <input type="password" class="form-control" id="passwordlog" placeholder="Your Password Here" v-model="password_register_input"/>
              </div>
              <br>
              <button type="submit" class="shadow btn btn-success">Register</button>
              <p class="text-white mt-3"> or </p>
              <button @click="goToLogin" type="button" class="btn btn-warning">I Have an Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email_register_input: '',
      password_register_input: ''
    }
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    register () {
      const payload = {
        email: this.email_register_input,
        password: this.password_register_input
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>

<style>
</style>
