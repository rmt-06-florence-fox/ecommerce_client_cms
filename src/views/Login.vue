<template>
  <div class="container">
    <div class="form-signin-register bg-front">
      <div class="row justify-content-center mt-5">
        <div class="col-4 bg-light">
          <div class="shadow-lg p-5 rounded">
            <img src="../assets/mrbee.jpeg">
            <h5 class="mb-4 mt-4 text-center"><b>Mr Bee Ecommerce</b></h5>
            <div>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="login-email"
                    placeholder="Your email"
                  />
                </div>
                <div class="form-group">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="login-password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style></style>
