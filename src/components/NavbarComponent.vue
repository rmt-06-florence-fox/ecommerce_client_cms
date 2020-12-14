<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" alt="logo" style="width:60px;">
      </a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
