<template>
  <div class="main">
    <Login v-if="sign === 'login'"></Login>
    <Register v-else-if="sign === 'register'"></Register>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
export default {
  name: 'Sign',
  components: { Login, Register },
  computed: {
    sign () {
      return this.$store.state.sign
    }
  }
}
</script>

<style>
.main{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
