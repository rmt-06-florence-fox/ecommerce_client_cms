<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view />

    <h1>Ini Main Vue</h1>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style></style>
