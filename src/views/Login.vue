<template>
    <div class="login-container ">
        <div class="login-card">
            <div class="login-form mt-2">
                <form @submit.prevent="login">
                    <div class="form-group mt-2">
                    <label for="login-email">Email address :</label>
                    <input v-model="email" type="email" class="form-control" id="email_input_login" autocomplete="email" required>
                    </div>
                    <div class="form-group mt-2">
                    <label for="login-password">Password :</label>
                    <input v-model="password" type="password" class="form-control" id="password_input_login" autocomplete="current-password" required>
                    </div>
                    <button class="login-btn mt-2 btn-dark">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'loginPage',
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
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.login-container {
    display: flex;
    justify-content: center;
}
.login-card {
    width: 30%;
    background-color: beige;
}
</style>
