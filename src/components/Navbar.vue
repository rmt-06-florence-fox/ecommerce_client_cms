<template>
  <div id="nav">
    <div>
    <b-sidebar id="sidebar-1" title="Admin CMS" shadow><router-link to="/admin">Dashboard Page</router-link>
      <div class="px-3 py-2">
      </div>
    </b-sidebar>
  </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#"></a>
        <a v-b-toggle.sidebar-1>
          <img src="../assets/logo.png" alt="icanqpedia"><i>icanqpedia</i>
        </a>
        <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <form class="form-inline my-2 my-lg-0 justify-content-end">
            <button
              class="btn btn-primary justify-content-end"
              @click.prevent="logout"
            >Logout</button>
          </form>
        </div>
      </nav>
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

<style scoped>
  img {
    width: 40px;
  }
  i {
    text-decoration: none;
  }
</style>
