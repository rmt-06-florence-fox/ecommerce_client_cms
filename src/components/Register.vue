<template>
  <div class="container" id="registerPage">
    <div class="row" style="justify-content: center;">
      <div class=".col-12 .col-md-8" style="min-width: 640px;">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-5">
              <img src="#" class="card-img" alt="Image">
            </div>
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">Register</h5>
                <form class="form-container" id="registerForm" @submit.prevent="register">
                    <div class="form-group">
                      <label for="emailRegisterForm">Email address</label>
                      <input type="email" class="form-control" id="emailRegister" v-model="email" aria-describedby="emailHelp" required>
                      <p class="text-kecil"><small>We'll never share your email with anyone else.</small></p>
                    </div>
                    <div class="form-group">
                      <label for="passwordRegisterForm">Password</label>
                      <input type="password" class="form-control" id="passwordRegister" v-model="password" required>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                </form>
                <button @click="changeThisPage('login')" class="btn btn-primary btn-block mt-2" id="LoginAccount">Already Have Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    changeThisPage (toThisPage) {
      this.$store.dispatch('changeSign', toThisPage)
    },
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

<style>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
