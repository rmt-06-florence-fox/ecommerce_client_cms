<template>
  <div id="app">
    <div id="nav" v-if="isAuthenticated">
      <router-link to="/">Home</router-link> |
      <router-link to="/addProduct">Add Product</router-link> |
      <a @click.prevent="doSignOut" type="submit">Sign Out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAuthenticated: localStorage.getItem('access_token')
    }
  },
  methods: {
    doSignOut () {
      localStorage.clear()
      this.$router.push('/signin')
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
