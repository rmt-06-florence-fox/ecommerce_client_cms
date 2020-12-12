<template>
  <div class="container login-page">
    <div class="container shadow login-form-background">
      <div class="container login-form-container">
        <div class="card shadow login-form-card">
          <div class="form-content">
            <div class="container">
              <h2>E-Commerce CMS</h2>
            </div>
            <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Email"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="success">Log In</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosinstance'
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
    onSubmit (evt) {
      evt.preventDefault()
      axios
        .post('/admin/login', this.form)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('fullName', data.fullName)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
