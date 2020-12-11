<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #f3a683">
      <div class="container-fluid">
        <b class="navbar-brand">WELCOME</b>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#"><i class='fas fa-home'></i>Home</a>
            <a class="nav-link active" href="#"><i class='fas fa-plus-circle'></i>Add</a>
            <a id="btn-logout" class="nav-link active text-end" href="#"><i class='fas fa-power-off'></i>Logout</a>
          </div>
        </div>
      </div>
    </nav>
  </section>
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
  .navbar {
    display: flex;
    justify-content: space-between;
  }
</style>
