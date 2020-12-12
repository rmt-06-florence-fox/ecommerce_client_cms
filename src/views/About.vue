<template>
  <div>
    <Navbar/>
    <v-main>
      <v-container>
        <h2 class="display-1">
          Welcome to Ecommerce-CMS for Buka Toko
        </h2>
        <p class="text-justify">
          Developed in 2020 and based in Indoneisa, Bukatoko is a trusted gaming marketplace
          for people to satisfy their gaming needs.
        </p>
      </v-container>
    </v-main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
