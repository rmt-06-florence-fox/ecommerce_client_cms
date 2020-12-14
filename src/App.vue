<template>
  <v-app>
    <Navbar v-if="this.$route.path !== '/login'"/>
    <router-view></router-view>
    <Footer
      fixed
    />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    //
  })
}
</script>
