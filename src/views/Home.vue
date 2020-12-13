<template>
  <div class="home">
    <Header></Header>
    <Navbar></Navbar>
    <div class="container mt-5">
    <div class="shadow p-3 mb-3 bg-white rounded">
    <div class="jumbotron jumbotron-fluid mt-3 mb-3">
  <div class="container">
    <h1 class="display-4">Selamat Datang</h1>
    <p class="lead">Terus belanja, dan dapatkan keliptan point untuk penawaran menarik</p>
  </div>
    </div>
</div>

    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Navbar
  }
}
</script>

<style>
.padding-custom {
  padding-top: 200px;
}
</style>
