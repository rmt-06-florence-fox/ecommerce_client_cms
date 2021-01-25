<template>
  <div id="nav">
      <router-link to="/dashboard">Home</router-link> |
       <router-link to="/add">Add Product</router-link> |
  <!-- <div class="sidebar">
    <router-link to="/dashboard">Home</router-link>
    <router-link to="/add">Add Product</router-link>
    <a href="#" @click="logout"> Logout </a>
  </div> -->
      <a href="#" @click="logout"> Logout </a>
      <!-- <router-link to="/register">Register</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>
export default {
  pageName: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
.sidebar a.active {
  background-color: #4CAF50;
  color: white;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
