<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #f3a683">
      <div class="container-fluid">
        <b class="navbar-brand">WELCOME ADMIN</b>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#"><i class='fas fa-home'></i>Home</a>
            <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-whatever="@mdo" class="nav-link active" href="#"><i class='fas fa-plus-circle'></i>Add</a>
          </div>
        </div>
        <div class="d-flex ms-auto navbar-nav">
          <a @click.prevent="logout" class="nav-link active text-start" href="#"><i class='fas fa-power-off' style='color:red'></i>Logout</a>
        </div>
      </div>
    </nav>
    <AddProduct />
  </section>
</template>

<script>
import AddProduct from '../components/AddProduct'

export default {
  name: 'Navbar',
  components: {
    AddProduct
  },
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
