<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" style="width:60px;">
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <button class="btn btn-success" style="color: white;" @click='logout'>Logout</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarMain',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
