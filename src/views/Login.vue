<template>
  <div class="container rounded-lg text-white mt-5">
        <div class="row content d-flex justify-content-center">
            <div class="col-md-4" style="background-color: rgba(120, 212, 255, 0.8); color: black;">
                <h3 class="m-3">Login Admin</h3>
                <form @submit.prevent="login">
                    <div class="m-4">
                        <label for="">Email</label>
                        <input v-model="email" type="text" class="form-control">
                    </div>
                    <div class="m-4">
                        <label for="">Password</label>
                        <input v-model="password" type="text" class="form-control">
                    </div>
                    <button class="btn btn-outline-dark m-2">Login</button>
                </form>
            </div>
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
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', data)
    }
  }
}
</script>

<style>

</style>
