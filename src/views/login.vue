<template>
    <div style="height:400px">
      <h1 class="has-text-primary mb-4 title">Login Page</h1>
        <div class="container card mt-6">
            <div class="field ml-4 mr-4 mt-4">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field ml-4 mr-4">
            <p class="control has-icons-left">
                <input v-model="password" class="input" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
                </span>
            </p>
            </div>
            <div class="field mb-5">
                <p class="control">
                    <button @click="login" class="button is-success">
                    Login
                    </button>
                </p>
            </div>
        </div>
        <img class="img1" src="../img/login.png" alt="">

    </div>
</template>

<script>
import axios from '../../config/axios'
export default {
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
      axios
        .post('/login', payload)
        .then(data => {
          console.log(data)
          this.$router.push({ name: 'Products' })
        })
        .catch(err => {
          console.log(err)
          console.log('EROR BOSSS')
        })
    }
  }

}
</script>

<style>
    .container {
        width: 400px;
    }
    .img1 {
        position: relative;
        z-index: 1;
        top: -170px;
        left: -250px;
    }
</style>
