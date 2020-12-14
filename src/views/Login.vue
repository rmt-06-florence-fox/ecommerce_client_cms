<template>
    <div class="container justify-content-center">
        <router-view></router-view>
        <div class="row justify-content-center">
            <div class="col-5 mt-1 img">
              <img src="../assets/img/wew.gif" alt="">
            </div>
            <div class="col-5 mt-1 login">
                <div class="shadow-md p-5 mb-5 bg-black rounded">
                    <h5 class="mb-4 text-center"><strong>Ecommerce-CMS</strong></h5>
                    <form @submit.prevent="login">
                    <div class="form-group">
                        <input type="email" class="form-control rounded-pill" v-model="form.email" id="login-email" placeholder="Your email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control rounded-pill" v-model="form.password" id="login-password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-5 rounded-pill">Login</button>
                    <p class="text-muted text-center"> dont have account ? <a href="#" > Register</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('getDataUser', this.form)
    }
  },
  computed: {
    dataUser () {
      return this.$store.state.form
    }
  }
}
</script>

<style>
  .container{
    margin-top: 60px;
  }
  .login{
    background-color: rgb(222, 225, 232);
  }
</style>
