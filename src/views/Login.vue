<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-8">
        <img src="../assets/hacktiv8-logo.png" alt="" width="50%" class="d-flex align-items-end">
        <h1>Hacktiv8 Ecommerce</h1>
        <h4>Looking for authentic product? We'll help you find the product you need with reasonable price!</h4>
      </div>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  }
}

</script>

<style>

</style>
