<template>
  <div class="home container mt-5">
    <h1>Sign In</h1>
    <div class="row justify-content-center">
      <div class="col-4 p-5 mt-5 shadow">
    <img alt="Vue logo" src="../assets/logo.png">
    <Signin/>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Signin from '@/components/Signin.vue'

export default {
  name: 'Home',
  components: {
    Signin
  }
}
</script>
