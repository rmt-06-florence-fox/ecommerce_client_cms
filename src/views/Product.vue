<template>
  <div>
      <h1>Welcome To E-commerce CMS App</h1>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'product',
  created () {
    this.$store.dispatch('fetchData')
  }
}
</script>
<style scoped>

h1 {
  text-align: center;
  margin: 30px;
}
</style>
