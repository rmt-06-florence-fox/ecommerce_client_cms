<template>
  <div class="login">
    <h1 class="mt-3">This is Login page</h1>
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
