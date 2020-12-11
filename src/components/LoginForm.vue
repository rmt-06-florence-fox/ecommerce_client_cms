<template>
  <div class="container">
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Log-in to your account
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address" v-model="user.email" required="required" autocomplete="current-email">
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password" v-model="user.password" required="required" autocomplete="current-password">
              </div>
            </div>
            <div class="ui fluid large teal submit button" @click="login">Login</div>
          </div>
          <div class="ui error message"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('login', payload)
    }
  }
}
</script>

<style scoped>
  body {
    background-color: #DADADA;
  }
  body > .grid {
      height: 100%;
  }
  .image {
      margin-top: -100px;
  }
  .column {
      max-width: 450px;
  }
  .container {
    align-items: center;
  }
</style>
