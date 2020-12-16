<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="dark" v-if="isLogin == true">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand>Muchsin Store</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text>| Dashboard</b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/login')
      this.$store.commit('SET_LOGIN', false)
    } else {
      this.$router.push('/').catch(err => { console.log(err) })
      this.$store.commit('SET_LOGIN', true)
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
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
