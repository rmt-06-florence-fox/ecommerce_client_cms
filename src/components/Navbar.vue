<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a class="navbar-brand">ECOMMERCE-CMS APP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"
                    v-on:click.prevent="home"
                    v-if="this.$route.name === 'AddForm' || this.$route.name === 'EditForm'">Home</a>
                </li>
            </ul>
        </div>
        <div>
            <button type="button" class="btn btn-warning" v-on:click.prevent="logout" v-if="this.$route.name === 'Home'">Logout</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    },
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>

</style>
