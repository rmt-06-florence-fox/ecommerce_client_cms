<template>
    <div style="height:400px;">
      <img  class="mt-6" src="../img/cms-login.png" alt="">
      <!-- <h1 class="has-text-primary mt-6 mb-4 title is-family-monospace">Login Page</h1> -->
        <div class="container card mt-4">
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
      this.$store.dispatch('login', payload)
      // axios
      //   .post('/login', payload)
      //   .then(data => {
      //     localStorage.setItem('access_token', data.access_token)
      //     this.$router.push('/products')
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
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
