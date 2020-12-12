<template>
  <div class="main-page">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default {
  name: 'MainPage',
  components: {
    NavBar,
    Footer
  }
}
</script>
<style>

</style>
