<template>
  <div class="customNavbar" id="nav">
    <ul class="customNavbar-nav">
      <li class="customNavbar-item" v-if="loggedIn !== 'loggedIn'">
        <router-link class="customNavbar-link" to="/sign">
          <span class="link-text">Login</span>
        </router-link>
      </li>
      <li class="customNavbar-item" v-else>
        <a href="#" @click.prevent="logout" class="customNavbar-link">
          <span class="link-text">Logout</span>
        </a>
      </li>
      <li class="customNavbar-item">
        <router-link class="customNavbar-link" to="/">
          <span class="link-text">Home</span>
        </router-link>
      </li>
      <li class="customNavbar-item">
        <router-link class="customNavbar-link" to="/about">
          <span class="link-text">About</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Navbar',
  computed: {
    loggedIn () {
      return this.$store.state.sign
    }
  },
  methods: {
    logout () {
      Swal.fire({
        icon: 'success',
        title: 'Goodbye!',
        text: 'See you next time.'
      })
      localStorage.clear()
      this.$store.commit('changeSign', 'login')
    }
  }
}
</script>

<style>
.customNavbar{
  position: fixed;
  background-color: pink;
  transition: 200ms ease;
}

.customNavbar-nav{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.customNavbar-link{
  display: flex;
  align-items: center;
  height: 5rem;
  color: white;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 200ms ease;
}

@media only screen and (max-width: 700px) {
  .customNavbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }
  .customNavbar-nav {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
  .customNavbar-link {
    justify-content: space-around;
    align-items: flex-start;
  }
}

@media only screen and (min-width:700px) {
  .customNavbar{
    top: 0;
    width: 5rem;
    height: 100vh;
  }
  .customNavbar:hover {
    width: 16rem;
  }
  .customNavbar:hover .link-text {
    display:inline;
    transition: opacity 200ms
  }
}
</style>
