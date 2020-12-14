<template>
    <div id='nav'>
      <router-link to="/products">List</router-link> |
      <router-link to="/add">Add</router-link> |
      <a @click='logout' href='#'>Logout</a>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  }
}
</script>
