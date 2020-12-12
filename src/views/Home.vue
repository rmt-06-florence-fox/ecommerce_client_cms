<template>
  <section>
    <Navbar />
    <Dashboard />
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

export default {
  name: 'Home',
  components: {
    Navbar,
    Dashboard
  }
}
</script>

<style>

</style>
