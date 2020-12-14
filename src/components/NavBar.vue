<template>
  <div id="app">
    <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">EG game</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/banners" class="nav-link">Banners</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add new product</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <p class="mr-3"></p>
          <button @click="logOut" class="btn btn-danger" type="submit">Sign out<output></output></button>
        </form>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    logOut () {
      localStorage.removeItem('access_token')
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
