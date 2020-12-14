<template>
  <div class="d-flex justify-content-center mt-5 col-12">
    <div class="card text-white bg-light mb-3" style="width: 35rem;">
      <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" style="width:200px">
      <div class="card-header" style="font-family: 'Russo One', sans-serif; color: #5ec0ca; font-size: xx-large;">Login</div>
        <div class="card-body">
          <form @submit.prevent="login">
            <div class="form-group">
              <label>Email address</label>
              <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" class="form-control" placeholder="Password" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
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
