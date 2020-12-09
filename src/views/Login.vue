<template>
  <div class="home">
    <LoginPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../components/LoginPage.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    LoginPage
  }
}
</script>

<style scoped>

.home {
  background: #2f3640;
  height: 800px;
}

</style>
