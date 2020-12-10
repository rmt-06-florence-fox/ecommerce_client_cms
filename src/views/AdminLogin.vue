<template>
  <div class="container is-flex is-align-items-center is-justify-content-center" style="height: 100vh">
      <form @submit.prevent= "submit" class="box">
        <fieldset>
          <h4 class="subtitle is-4">Login here</h4>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email" v-model= "email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password" v-model= "password">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary">
                Submit
              </button>
            </p>
            <p class="control">
              <router-link class="button is-light" to="/">
                Cancel
              </router-link>
            </p>
          </div>
        </fieldset>
      </form>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit () {
      const obj = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', obj)
        .then(res => {
          localStorage.setItem('access_token', res.data.access_token)
          this.$swal.fire({
            icon: 'success',
            title: 'Welcome, admin!',
            text: 'now you can access to this site',
            timer: 5000
          })
          this.$store.commit('CHANGEISLOGIN', true)
          this.$router.push('/')
        })
        .catch(err => {
          this.$swal.fire({
            icon: 'error',
            title: `${err.response.status} ${err.response.statusText}`,
            text: `${err.response.message}`,
            timer: 5000
          })
        })
        .finally(() => {
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>

<style>

</style>
