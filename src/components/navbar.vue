<template>
<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
  <img src="https://ecs7.tokopedia.net/img/attachment/2019/9/19/76834886/76834886_2c026a7b-4080-4804-9bbd-6d8f72534a92.png" alt="logo" height="70">
  <a class="navbar-brand" href="#">E-commerce CMS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-link active" to="/product">Home</router-link>
      <router-link class="nav-link active" to="/about">About</router-link>
      <button  type="submit" class="btn btn-danger"  @click="logout">logout</button>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      console.log('logout')
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
