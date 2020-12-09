<template>
  <div>
    <section class="section-login">
      <div class="container">
        <div class="row justify-content-center mx-5 p-5">
          <div class="col-4 col-sm-4 mt-5">
            <h1 class="mb-5 text-center">Login</h1>
              <form @submit.prevent="onSubmit">
                <div class=" form-group mt-2">
                  <label for="login-email">Email address</label>
                  <input type="email" v-model="email" class="mt-2 form-control" placeholder="Your email">
                </div>
                <div class=" form-group mt-2">
                  <label for="login-password">Password</label>
                  <input type="password" v-model="password" class="mt-2 form-control" placeholder="Password">
                </div>
                <div class="container-btn">
                  <button type="submit" class="mt-3 btn btn-submit btn-block">Sign In</button>
                </div>
              </form>
          </div>
          <div class="col-6 col-sm-6 m-5 mx-5">
            <div class="mb-5 container-img">
              <img src="../assets/login.svg" alt="" class="img-fluid img-login">
            </div>
          </div>
        </div>
      </div>
    </section>
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
    onSubmit () {
      // this.$router.push('/dashboard')
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
.container-btn{
  display: flex;
  justify-content: center;
}
.btn-submit{
  width: 100%;
  background-color: #1ee2c8;
}
</style>
