<template>
  <div>
    <div slot="header" class="mt-3">
      <div class="p-5">
        <img src="../assets/avatar.png" class="img-fluid" />
      </div>
      <h3>Welcome, {{ user }}</h3>
      <b-button variant="dark" class="mb-2" size="sm" @click="logout">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
      </b-button>
      <hr />
    </div>
  </div>
  <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/main">Main</router-link>
    </div> -->
</template>

<script>
export default {
  name: 'ProfileSection',
  data () {
    return {
      user: localStorage.role
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
