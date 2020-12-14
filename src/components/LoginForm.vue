<template>
  <div class="col-md-4">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" class="form-control">
      </div>
      <hr>
      <div class="form-group">
        <button class="btn btn-block btn-success">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
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
