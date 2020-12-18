<template>
  <div>
    <Header></Header>
    <NavbarAdmin></NavbarAdmin>
    <button @click="formAddItem" type="button" class="btn btn-info mt-3 mb-2">Add Item</button> ||
    <button @click="addCategory" type="button" class="btn btn-info mt-3 mb-2">Add Category</button>
    <ItemCards v-for='data in dataItems.data'
    :key="data.id" :data="data"></ItemCards>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavbarAdmin from '../components/NavbarAdmin'
import ItemCards from '../components/ItemCards'

export default {
  name: 'MainPageAdmin',
  components: {
    Footer,
    Header,
    NavbarAdmin,
    ItemCards
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
      this.$router.push('/additem')
    },
    addCategory () {
      this.$router.push('/category')
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
