<template>
  <section>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="box-shadow: 0px 0px 10px;">
        <div class="container-fluid">
            <a class="navbar-brand" href="">Welcome, <i class='fas fa-user-tie'></i> {{ userLoggedIn }} | <b><i class="fab fa-cuttlefish"></i>emSky Administrator</b></a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex ms-auto">
                    sign out
                </form>
            </div>
            <div class="icon ms-2 mt-2">
                <h4>
                    <i type="submit" class="fas fa-sign-out-alt" id="logout" style="font-size: 40px" @click="logout()"></i>
                </h4>
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
  },
  computed: {
    userLoggedIn () {
      return this.$store.state.loggedInUser.email
    }
  }
}
</script>

<style>
#logout:hover {
    background-color: #f5054dc4;
    padding-right: 15%;
    padding-left: 15%;
    border-radius: 10%;
}
.nav-link:hover {
    background-color: rgb(108, 204, 236);
    border-radius: 15px;
}
</style>
