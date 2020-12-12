<template>
  <div class="col-md-4">
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" class="form-control">
      </div>
      <div class="form-group">
        <label for="rpassword">Retype Password</label>
        <input type="password" name="rpassword" id="rpassword" v-model="rpassword" class="form-control">
      </div>
      <hr>
      <div class="form-group">
        <button class="btn btn-block btn-info" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', payload)
    }
  }
}
</script>
