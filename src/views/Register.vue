<template>
  <div class="card col-md-5 login-form mt-3">
    <img src="https://image.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg" class="card-img-top" alt="Cart Logo" height="200px" width="1500px">
    <div class="card-body p-0">
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Email</span>
        </div>
        <input type="email" class="form-control" aria-describedby="basic-addon3" required>
      </div>
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Password</span>
        </div>
        <input type="password" class="form-control" aria-describedby="basic-addon3" required>
      </div>
    </div>
    <button type="button" class="btn btn-primary col-3 p-1 mb-2 btn-login">Register</button>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style>

</style>
