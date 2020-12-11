<template>
    <div class="navbar" id="nav">
      <div class="left-navbar">
        <router-link to="/">Home</router-link>
      </div>
      <div class="right-navbar">
          <button class="btn-dark" @click="logout">logout</button>
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
