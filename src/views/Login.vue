<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5 pt-5">
        <div class="col-4">
          <img class="img-login mb-5" src="../assets/login.svg" alt="gambar-login">
            <div class="card p-2 shadow">
              <form @submit.prevent="login" action="">
                <div class="form-group">
                  <label class="form-label" for="">email</label>
                  <input v-model="email" class="form-control" type="text" name="" id="">
                  <label class="form-label mt-1" for="">password</label>
                  <input v-model="password" class="form-control" type="password" name="" id="">
                </div>
                <button class="btn btn-primary btn-block mt-2" type="submit">login</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    goToDashBoard () {
      this.$router.push('/dashboard')
    },
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  },
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
.img-login{
  width: 310px;
}
</style>
