<template>
  <div class="d-flex justify-content-center w-100 h-100" id="login-page-container">
    <b-modal id="errors-modal" title="Ooops, error(s) happened" hide-footer>
      <ErrorPage />
    </b-modal>
    <div class="d-flex flex-column justify-content-center">
      <h3 class="mb-3 text-white">This is login page for admin</h3>
      <div id="form" class="p-sm-3 text-white font-weight-bolder">

        <b-form @submit.prevent="loginHandler">
          <b-form-group label = "Email" label-for = "email">
            <b-form-input
              type="email"
              name="email"
              v-model="email"
              required
              placeholder="your email goes here"
              ></b-form-input>
            </b-form-group>

            <b-form-group label = "Password" label-for = "password">
              <b-form-input
                type="password"
                name="password"
                v-model="password"
                required
                placeholder="your password goes here"
              ></b-form-input>
            </b-form-group>

          <b-button type = "submit" variant="success"> Login </b-button>
        </b-form>

      <div class="mt-3 text-white">
        <p class="mb-1">Note : </p>
        <p>Only admins are able to login via this page</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import ErrorPage from '../components/ErrorPage.vue'
export default {
  name: 'LoginAdmin',
  components: {
    ErrorPage
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginHandler () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('loginHandler', { email, password })
    }
  },
  computed: {
    messages () {
      return this.$store.messages
    },
    errors () {
      return this.$store.state.errors
    }
  },
  watch: {
    errors () {
      if (this.errors.length) this.$bvModal.show('errors-modal')
      else this.$bvModal.hide('errors-modal')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#form {
  background: rgba(60, 60, 60, 0.8);
}

button {
  font-weight: bold;
}

#login-page-container {
  background :url(https://cdn.wallpapersafari.com/88/32/DxfPUY.jpg) ;

}

</style>
