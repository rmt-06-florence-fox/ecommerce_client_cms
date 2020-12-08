<template>
  <div>
    <h1>Lets Login with Your Account</h1>
      <form
      id="formlogin"
      class="container card-body mt-4 mr-4 mb-4"
      >
        <div class="form-group">
          <label for="email-login">Email Address</label>
          <input
          type="email"
          class="form-control"
          id="emaillog"
          placeholder="Your Email Here"
          v-model="email_input"
          />
        </div>
        <button class="btn btn-primary">test</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
</style>
