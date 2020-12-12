<template>
  <nav
    id="sidebarMenu"
    class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse show"
    style=""
  >
    <div class="position-sticky sb-list">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link active" to="/"><i class="fas fa-home mr-3"></i>Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/add"><i class="fas fa-plus-square mr-3"></i>Add Product</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/banners"><i class="fas fa-image mr-3"></i>Banners</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/banners/add"><i class="fas fa-plus-circle mr-3"></i>Add Banner</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout" class="nav-link active" href="#"><i class="fas fa-sign-out-alt mr-3"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Sidebar',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#af3838',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>

<style>
</style>
