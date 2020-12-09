<template>
  <div id="nav">
    <router-link to="/">Dash Board</router-link> |
    <router-link to="/add">Add Product</router-link> |
    <router-link to="/about">About</router-link> |
    <a href="#" @click.prevent="logout">log out</a>
  </div>
</template>

<script>
export default {
  name: 'navbar',
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
