<template>
  <div id="app">
    <!-- <div class="nav-client">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/create">Create Product</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-client {
  padding: 30px;
}

.nav-client a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-client a.router-link-exact-active {
  color: #42b983;
}
</style>
