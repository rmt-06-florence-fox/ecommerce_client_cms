<template>
    <div class="container-login card">
        <div class="card-header">
            <h1>Login</h1>
        </div>
        <div class="card-body">
            <form @submit.prevent="login">
                <div class="email mb-3">
                    <h5>email adrress</h5>
                    <input v-model="email" type="text" name="email" class="container-fluid">
                </div>
                <div class="password mt-2">
                    <h5>Password</h5>
                    <input v-model="password" type="password" name="password" class="container-fluid">
                </div>
                <div class="button-login row">
                    <button  class="btn btn-primary mt-3">Login</button>
                    <div id="emailHelp" class="form-text">
                </div>
                </div>
            </form>
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
