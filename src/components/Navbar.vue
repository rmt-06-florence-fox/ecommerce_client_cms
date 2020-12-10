<template>
  <nav class="navbar navbar-dark bg-primary">
    <div>
      <a class="navbar-brand" href="" @click.prevent="goHome">Home</a>
      <a class="navbar-brand" href="" @click.prevent="goAbout">About</a>
      <a class="navbar-brand" href="" @click.prevent="goProduct">Product</a>
    </div>
    <button class="btn-danger btn btn-logout p-1" @click.prevent="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goHome () {
      this.$router.push('/home')
    },
    goAbout () {
      this.$router.push('/about')
    },
    goProduct () {
      this.$router.push('/product')
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
