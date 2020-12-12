<template>
    <div class="login-container">
      <div class="login-form mt-2">
          <form @submit.prevent="login">
              <div class="form-group">
              <label for="login-email">Email address :</label>
              <input v-model="email" type="email" class="form-control mt-4" id="email_input_login" autocomplete="email" required>
              </div>
              <div class="form-group mt-4">
              <label for="login-password">Password :</label>
              <input v-model="password" type="password" class="form-control mt-4" id="password_input_login" autocomplete="current-password" required>
              </div>
              <button class="login-btn ">Login</button>
          </form>
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
  height: 51.5vw;
  align-items: center;
  justify-content: center;
  background-color: #525252;
}
.login-form {
  align-content: right;
  width: 30%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: white;
}
.form-control {
  width: 20vw;
  border-color: black;
  background-color: #24001e;
}
.login-btn {
  background-color: white;
  margin-top: 2rem;
  font-size: 20px;
  color: #24001e;
  width: 17vw;
  padding: 10px;
}
</style>
