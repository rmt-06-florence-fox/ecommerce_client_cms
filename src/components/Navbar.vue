<template>
    <div id="nav" class="navbar navbar-secondary bg-secondary justify-content-between text-col">
      <router-link class="link" to="/products"><h5>TokoTokoan</h5></router-link>
      <button class="btn btn-primary"><router-link class="link" to="/additem">Add Item</router-link></button>
      <button class="btn btn-danger"><a href="#" class="link" @click="logout">Logout</a></button>
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
  .link {
    text-decoration: none;
  }
  .image {
    width: 50px;
    height: 50px;
  }
  h5 {
    color: aliceblue;
  }
</style>
