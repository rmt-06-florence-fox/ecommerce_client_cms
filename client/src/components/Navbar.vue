<template>
    <div class="navbar-container container-fluid">
        <div class="left-item">
            <router-link to="/"><h3>Home</h3></router-link>
        </div>
        <div class="right-item">
            <router-link to='/add'><button class="btn btn-info">Add New Item</button></router-link>
            <button @click="logout" class="btn btn-danger">logout</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }

}
</script>

<style>

</style>
