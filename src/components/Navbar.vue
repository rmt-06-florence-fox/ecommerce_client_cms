<template>
  <div class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <img src="../assets/hacktiv8-logo.png" alt="hacktiv8-logo" style="width: 5%">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="$router.push('/products')">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}

</script>

<style>

</style>
