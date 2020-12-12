<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-warning justify-content-between p-2 mb-5">
      <h3>Admin cms</h3>
      <button @click.passive="logout" class="btn btn-danger fas fa-sign-out-alt">logout</button>
    </nav>
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
