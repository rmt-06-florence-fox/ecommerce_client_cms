<template>
  <div class="login-form container mt-5">
    <div class="row justify-content-center">
      <div class="col-4 p-3 mt-5 shadow rounded">
        <h1 class="mt-2" style="margin-bottom: 20px; font-weight: bold;">Identify Yourself!</h1>
        <img
            class="m-10"
            src="../assets/logo3.png"
        />
        <form @submit.prevent="login" id="login-form">
          <div class="form-group">
            <i class="fa fa-user icon"></i>
            <input
              v-model="payload.email"
              type="email"
              class="form-control"
              id="login-email"
              aria-describedby="emailHelp"
              placeholder="Email"
              autocomplete="false"
            />
          </div>
          <div class="form-group">
            <i class="fa fa-key icon"></i>
            <input
              v-model="payload.password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              autocomplete="false"
            />
          </div>
          <button type="submit" class="btn btn-success mt-4">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            payload: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            const payload = {
                email: this.payload.email,
                password: this.payload.password
            }
            this.$store.dispatch('login', payload);
        }
    }
};
</script>

<style>
</style>