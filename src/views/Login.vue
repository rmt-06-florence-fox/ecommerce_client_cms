<template>
  <div class="container-login">
    <form @submit.prevent="login">
      <h3>Bukatelapak.com CMS</h3>
      <hr>
      <h5>Silakan masuk ke dalam akun kamu</h5>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="yourname@example.com">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="*******">
      </div>
      <button type="submit" class="btn btn-outline-dark">Sign in</button>
    </form>
  </div>
</template>

<script>
export default {
  pageName: 'Login',
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
.container-login {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  border-radius: 10px;
  font-family: "Courier New", Courier, monospace;
}
</style>
