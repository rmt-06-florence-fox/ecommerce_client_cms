<template>
  <section id="navbar" style="display: block">
    <div class="custom-navbar">
      <div>
        <h2 class="text"><img class="foxLogo" src="https://ecs7.tokopedia.net/img/attachment/2020/4/21/26999847/26999847_15e7941c-346d-4e0b-a912-28a3dc025b5c.png" alt="Hacktiv8 Fox"></h2>
      </div>
      <div class="d-flex title-nav-bar">
        <h1><i class="fa fa-shopping-cart fa-fw"></i> | Florence Fox E-Commerce</h1>
      </div>
      <div>
        <button class="btn btn-danger" @click="logout">Logout</button>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'NavbarDashboard',
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You can back any time to visit Us',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, i'm leaving~"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('access_token')
          this.$router.push('/')
          Swal.fire({
            icon: 'success',
            title: 'Good Bye',
            text: 'Thank you for your visit, have a nice day'
          })
        }
      })
    }
  }

}
</script>

<style>

</style>
