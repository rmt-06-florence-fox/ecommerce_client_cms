<template>
  <div id="nav">
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/login">login</router-link> |
      <button
        class="btn btn-primary"
        @click.prevent="logout"
      >Logout</button>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      localStorage.removeItem('role')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
