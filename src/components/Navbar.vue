<template>
    <div id="nav" class="navbar navbar-light bg-light justify-content-between text-col">
      <router-link to="/products">Main Page</router-link>
      <router-link to="/products/additem">Add Item</router-link>
      <router-link to="/products/edititem">Edit Item</router-link>
      <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
