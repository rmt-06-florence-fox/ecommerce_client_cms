<template>
    <div>
        <Header></Header>
        <NavbarAdmin></NavbarAdmin>
        <PageFetchData></PageFetchData>
        <button @click="formAddItem" type="button" class="btn btn-info mt-3">Add Items</button>
        <router-view/>
        <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavbarAdmin from '../components/NavbarAdmin'
import PageFetchData from '../views/PageFetchData'
export default {
  name: 'Product',
  components: {
    Footer,
    Header,
    NavbarAdmin,
    PageFetchData
  },
  methods: {
    fetchData () {
      // dispatch cara untuk memanggil actions di store
      this.$store.dispatch('fetchData') // param nya nama dari actions di store
    },
    cekLocalStorage () {
      this.$router.push('/login')
    },
    formAddItem () {
      this.$router.push('/mainpage/additem')
    }
  },
  created () {
    this.fetchData()
    const accesToken = localStorage.getItem('acces_token')
    if (!accesToken) {
      this.cekLocalStorage()
    }
  },
  computed: {
    dataItems () {
      return this.$store.state.dataItems // ini untuk mengambil dataItems yang ada di store
    }
  }
}
</script>

<style>

</style>
