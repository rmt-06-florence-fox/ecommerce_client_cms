<template>
  <div class="container p-3 my-3 bg-dark text-white" id="form">
    <h2> Login </h2>
    <form action="/home" @submit.prevent="login">
        <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="email">
        </div>
        <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" v-model="password">
        </div>
        <button type="submit"  class="btn btn-primary">Login</button>
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
  method: {
    login () {
      const data = {
        email: this.email,
        password: this.password
      }
      localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwNzc3NDIzNn0.aGcqZXT8E7Quf8lda2HWAvbUxWk9GE6pdUjSvEpPsjU')

      console.log(data, '<dari login')
      this.$store.dispatch('login', data)
        .then(({ data }) => {
          console.log(data, 'dari login')
          // localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYwNzc3NDIzNn0.aGcqZXT8E7Quf8lda2HWAvbUxWk9GE6pdUjSvEpPsjU')
        })
        .catch(({ err }) => {
          console.log(err, '<err')
        })
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
