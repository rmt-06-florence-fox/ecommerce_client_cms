<template>
  <aside class="menu">
    <h1 class="title">CMS Awesome</h1>
    <p class="menu-label has-text-weight-bold is-size-7">
      General
    </p>
    <ul class="menu-list">
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/product">Add Product</router-link></li>
      <li><a @click.prevent="logout" href="">Logout</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
  .menu {
    border-right: 2px solid green !important;
  }
</style>
