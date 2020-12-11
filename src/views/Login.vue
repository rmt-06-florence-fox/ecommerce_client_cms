<template>
  <div class="container row mx-auto justify-content-center align-items-center">
    <b-jumbotron
      header-level="5"
      bg-variant="transparent"
      class="col-12 d-flex text-center pb-0 mb-0"
      id="landing-page"
      fluid
    >
      <template v-slot:header>Sign In</template>
    </b-jumbotron>
    <b-form
      class="col-12 col-md-8 col-lg-6 col-xl-5 align-self-start"
      @submit.prevent="login"
      novalidate
    >
      <b-form-group label-for="inputEmail">
        <b-form-input
          id="inputEmail"
          type="text"
          placeholder="Email"
          autocomplete="off"
          v-model="inputEmail"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label-for="inputPassword">
        <b-form-input
          id="inputPassword"
          type="password"
          placeholder="Password"
          autocomplete="off"
          v-model="inputPassword"
          required
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-center align-items-center flex-wrap">
        <b-button type="submit" variant="primary">Sign In</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      inputEmail: '',
      inputPassword: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.inputEmail,
        password: this.inputPassword
      }
      console.log(payload)
      // mengirim data ke action yang ada di vuex namanya adminLogin dengan data adalah payload
      this.$store.dispatch('adminLogin', payload)
    }
  }
}
</script>

<style>

</style>
