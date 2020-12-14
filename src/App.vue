<template>
  <div id="app">
    <!-- <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">EG game</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <p class="mr-3"></p>
          <button class="btn btn-danger" type="submit">Sign out<output></output></button>
        </form>
      </div>
    </nav> -->
    <router-view/>
    <div class="text-center text-muted p-3"><small>{{ title }} © 2020 </small></div>
  </div>
</template>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
