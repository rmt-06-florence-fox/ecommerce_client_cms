<template>
  <div class="signin">
    <form @submit.prevent="signin" id="signin">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                v-model="email"
                type="email"
                id="signin-email"
                class="form-control"
                autocomplete="email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                id="signin-password"
                class="form-control"
                autocomplete="current-password"
                required
              />
            </div>
            <br><br>
            <button type="submit" class="btn btn-outline-success btn-md btn-block">Sign In</button
            ><br /><br />
          </form>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signin', payload)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
          this.$store.commit('setStatus', true)
          this.$swal(
            'Signin Success!',
            'Welcome, Admin',
            'success'
          )
        })
        .catch(err => {
          this.$swal(
            'Error',
            `${err.response.status} ${err.response.data.error.split(',')}`,
            'error' // success,error,warning
          )
        })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
