<template>
  <div class="container">
    <div id="login-page"  class="bg-light col mt-5 rounded">
        <form id="login-form" class="input-margin" @submit.prevent="login">
            <h1>Login Form</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" name="email" id="email-input" placeholder="email" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" name="password" id="password-input" placeholder="password" v-model="user.password">
            </div>
            <button class="btn btn-primary" type="submit">Submit</button>
            <button class="btn btn-danger" @click="logout">Logout</button>
        </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const user = this.user
      this.$store.dispatch('login', user)
        .then(() => this.$router.push('/products'))
        .catch(e => console.log(e))
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
