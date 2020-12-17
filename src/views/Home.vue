<template>
  <div class="home">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/navbar'

export default {
  components: {
    Navbar
  }

}
</script>
