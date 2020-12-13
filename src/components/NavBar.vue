<template>
    <div>
        <div id="nav">
            <router-link :to="{name: 'Main Page'}">CMS</router-link>
            <router-link to="/main-page/product">Product</router-link>
            <a href="#" @click="logout">Logout</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  padding: 10px 80px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
