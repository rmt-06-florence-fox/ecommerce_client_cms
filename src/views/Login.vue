<template>
  <section class="section">
    <div class="container px-6">
      <h1 class="title">Login</h1>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
        <div class="field">
        <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
        </p>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-link">
            Login
          </button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Login'
}
</script>

<style scoped>
.container{
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  box-shadow: 10px 10px 10px 10px gray !important
}
</style>
