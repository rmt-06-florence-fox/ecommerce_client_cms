<template>
    <div class="navbar" id="nav">
      <div class="left-navbar">
        <h5>CMS</h5>
      </div>
      <div class="center-navbar">
        <router-link to="/home">Home</router-link> |
        <router-link to="/banner">Banner</router-link>
      </div>
      <div class="right-navbar">
          <button class="btn-danger" @click="logout">logout</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>

<style>
.navbar {
    display: flex;
}
</style>
