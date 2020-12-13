<template>
    <section>
    <div class="container">
      <div class="row" style="min-height: 700px">
        <div class="col-md d-flex justify-content-center align-items-center">
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Log In</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group text-left">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email with anyone else.</small
                  >
                </div>
                <div class="form-group text-left">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                  />
                </div>
                <div class="text-left">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </form>
              <br />
              <p class="text-left">Or continue with Google</p>
              <GoogleLogin
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
              ></GoogleLogin>
              <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
  name: 'LoginPage',
  components: {
    GoogleLogin
  },
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id:
          '1048832564850-fpn38itn9av9bci2rfeoedhnih2sqnsi.apps.googleusercontent.com'
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    onSuccess (googleUser) {
      const googleToken = googleUser.getAuthResponse().id_token
      console.log(googleToken)
      this.$store.dispatch('loginGoogle', googleToken)
        .then(response => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push({ name: 'Home' })
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    },
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
