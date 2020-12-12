<template>
  <v-app>
  <v-main>
      <Home></Home>
  </v-main>
  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>

</template>z

<script>
import Home from './views/Home'
export default {
  components: {
    Home
  }
}
</script>

<style>
.drawer{
  height: 1100vh;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav { */
  /* padding: 30px; */
/* } */

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
