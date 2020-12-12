<template>
  <div class="container border vh-100">
    <div class="row justify-content-center mt-5 pt-5">
      <h1>Customer Registration</h1>
    </div>
    <div class="row justify-content-center pt-5">
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" class="form-control">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" class="form-control">
        </div>
        <div class="form-group">
          <label for="rpassword">Retype Password</label>
          <input type="password" name="rpassword" id="rpassword" class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-success" @click="$router.push('/users/register')">Register</button>
        </div>
        <div class="form-group">
          <button class="btn btn-block btn-danger" @click="$router.push('/users/login')">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm'
}

</script>

<style>

</style>
