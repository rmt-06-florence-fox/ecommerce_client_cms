<template>
  <div class="loginPage">
    <div class="col-4 border border-transparent mx-auto shadow-lg p-3 mb-5 bg-white rounded">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/822/4281206822_be209932-fad6-4caa-8203-807240681ada.png?cb=1607775908" class="img2">
      <form style="margin-top: 80px;" @submit.prevent="login">
        <div class="form-group">
          <label for="InputEmail">Email address</label>
          <input v-model="email" placeholder="email" type="email" class="form-control" id="InputEmail1" required>
          <small id="emailHelp" class="form-text text-muted">example: email@google.com</small>
        </div>
        <div class="form-group">
          <label for="InputPassword">Password</label>
          <input v-model="password" placeholder="password" type="password" class="form-control" id="InputPassword" required>
        </div>
        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  components: {
  },
  methods: {
    login () {
      this.$router.push('/')
    }
  }

}
</script>

<style>
  .loginPage {
    margin-top: 10%;
  }
  .img2 {
    width: 200px;
    margin-top: 10px;
    margin-bottom: -50px;
  }
  .btn-login {
    width: 100px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #e5e5e5;
  }
  .btn-login:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: rgb(231, 228, 228);
  }
  .btn-login:focus {
    outline: none;
  }
</style>
