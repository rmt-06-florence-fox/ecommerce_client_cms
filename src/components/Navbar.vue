<template>
  <nav class="navbar navbar-dark bg-primary">
    <div>
      <a class="navbar-brand" href="" @click.prevent="goHome">Home</a>
      <a class="navbar-brand" href="" @click.prevent="goCategory">Category</a>
    </div>
    <button class="btn-danger btn btn-logout p-1" @click.prevent="logout">Logout</button>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    goHome () {
      this.$router.push('/home').catch(() => {})
    },
    goAbout () {
      this.$router.push('/about').catch(() => {})
    },
    goProduct () {
      this.$router.push('/product').catch(() => {})
    },
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    },
    goCategory () {
      this.$router.push('/category').catch(() => {})
    }
  }
}
</script>

<style>

</style>
