<template>
  <div>
    <Navbar></Navbar>
    <div class="row">
      <div class="col-2">
        <Sidebar></Sidebar>
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
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

<style>
body {
    background-color:#ebf7fa
}
.btn-center {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
</style>
