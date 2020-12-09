<template>
  <div>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <!-- <Home></Home>
    <Product></Product> -->
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
// import Home from './Home'
// import Product from './Product'

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
