<template>
    <div>
        <div class="col-sm-4 container" style="box-shadow: 0px 0px 10px;">
            <div style="height: 30px;"></div>
            <img width="150" height="150" src="../assets/login.svg" alt="">
            <h2 class="row justify-content-md-center mt-5">Login Account</h2>
            <div class="row justify-content-md-center">
            <div class="col col-sm-8" style="margin: 10%">
        <form @submit.prevent="login">
        <div class="form-group">
            <input type="email" class="form-control" v-model="email" aria-describedby="emailHelp" required placeholder="Email">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="Password">
        </div><br>
        <button type="submit" class="btn btn-primary">Login</button><br>
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
