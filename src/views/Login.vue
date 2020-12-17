<template>
  <div class="container p-3 my-3 bg-dark text-white" id="form">
    <h2> Login </h2>
    <form @submit.prevent="login">
        <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="email">
        </div>
        <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    </div>
</template>

<script>
// @ is an alias to /src

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
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
        })
        .catch(({ err }) => {
          console.log(err, '<err')
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>

.container {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

</style>
