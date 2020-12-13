<template>
  <div class="container-fluid p-0">
      <Nav/>
      <div class="container-fluid bg-secondary p-0 d-flex justify-content-center" style="min-height:94vh;">
        <router-view/>
      </div>
      <div class="footer">
        <small>powered with vue</small>
      </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'
export default {
  components: {
    Nav
  },
  created () {
    this.$store.dispatch('getProducts')
  }
}
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  margin-bottom: 0;
}
</style>
