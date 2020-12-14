<template>
  <div id="app">
    <div v-if="signinStatus" class="sidenav shadow">
        <div id="home" style="width: 100%;">
          <h1>JWAL</h1>
        </div>
        <hr>
        <router-link to="/"><span>Home</span></router-link>
        <br/><br/><br/>
        <button class="btn btn-outline-secondary" @click="logout">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    signinStatus () {
      return this.$store.state.signinStatus
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$store.commit('setStatus', false)
      this.$router.push({ name: 'Signin' })
    }
  },
  created () {
    const token = localStorage.getItem('access_token')
    if (token) {
      this.$store.commit('setStatus', true)
    }
  }
}
</script>
<style>
#app {
  text-align: center;
}
.sidenav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 12vw;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #ffffff;
    overflow-x: hidden;
    padding: 1.5%;
  }

  .sidenav span {
    cursor: pointer;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color:black;
    display: block;
  }

  .sidenav span:hover {
    background-color: rgb(68, 147, 221);
  }
  #content{
    width: 85vw;
    margin-left: 14vw; /* Same as the width of the sidenav */
    height: 100vh;
    background-position: center;
    background-size: 100vw 130vh;
  }
</style>
