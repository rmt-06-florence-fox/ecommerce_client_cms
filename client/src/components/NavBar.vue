<template>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow" style="justify-content: space-between;" id="nav">
    <div class="d-flex justify-content-center">
      <router-link v-show="!loggedIn" class="navbar-brand text-light" to="/">Login</router-link>
      <div>
        <router-link v-show="loggedIn" class="navbar-brand text-light" to="/dashboard">Dashboard</router-link>
        <router-link v-show="loggedIn" class="navbar-brand text-light" to="/banners">Banners</router-link>
      </div>
      <div class="nav-item dropdown">
        <a v-show="loggedIn" class="navbar-brand dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Add</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <router-link class="dropdown-item" to="/addProduct">Add Product</router-link>
          <router-link class="dropdown-item" to="/addBanner">Add Banner</router-link>
        </div>
      </div>
    </div>
    <div>
      <a v-show="loggedIn" @click.prevent="logout" href="#" class="navbar-brand text-danger"><i class="fas fa-power-off mr-2"></i>Logout</a>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
import Toast from '../config/swal'

export default {
  name: 'NavBar',
  methods: {
    logout () {
      Swal.fire({
        icon: 'warning',
        title: 'You will be logged out',
        text: 'Are you sure ?',
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonColor: '#DC3545'
      })
        .then((res) => {
          if (res.isConfirmed) {
            localStorage.clear()
            this.$router.push({ name: 'Login' })
            this.$store.commit('loggedIn', false)
            Toast.fire({
              icon: 'success',
              title: 'Logged Out.'
            })
          }
        })
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  }
}
</script>

<style>
#nav a {
  font-weight: bold;
  font-size: 18px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
