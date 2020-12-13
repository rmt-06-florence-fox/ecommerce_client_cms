<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">E-Commerce</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li>
            <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li>
            <router-link to="/products/add" class="nav-link">Add Product</router-link>
        </li>
         <li>
            <router-link to="/banner" class="nav-link">Banner</router-link>
        </li>
         <li>
            <router-link to="/banner/add" class="nav-link">Add Banner</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li>
          <a href="#" @click="logout" style="text-decoration: none"
           ><GoogleLogin
              :params="params"
              :logoutButton="true"
              class="nav-link btn btn-danger p-1 w"
              style="color: black"
              >Logout</GoogleLogin
            ><span class="sr-only">(current)</span></a>
          <!-- <button class="btn btn-danger" @click="logout">Logout</button> -->
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  name: 'Navbar',
  components: {
    GoogleLogin
  },
  data () {
    return {
      params: {
        client_id:
            '1048832564850-fpn38itn9av9bci2rfeoedhnih2sqnsi.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>
