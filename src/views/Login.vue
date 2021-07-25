<template>
  <div class="login d-flex text-left">
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '../components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style >
.login{
   align-items:center;
   height: 100vh
}
</style>
