<template>
  <div id="nav" class="sidebar">
    <router-link to="/" class="fas fa-database mb-4"> List</router-link>
    <router-link to="/add" class="fas fa-plus-square"> Add</router-link>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  methods: {
  }
}
</script>

<style scoped>
li {
  list-style-type: none;
  margin-left: 0;
}
.sidebar {
  display: flex;
  flex-direction: column;
}
</style>
