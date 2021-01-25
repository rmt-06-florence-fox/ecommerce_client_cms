<template>
  <div>
      <NavBar :content="contentType" />
      <b-modal id="errors-modal" title="Ooops, error(s) happened" hide-footer>
        <ErrorPage />
      </b-modal>

      <b-modal id="success-modal" title="Yeaay!!" hide-footer>
        <Success/>
      </b-modal>
      <b-nav>
        <b-nav-item @click="changeContentType('product')">Products</b-nav-item>
        <b-nav-item @click="changeContentType('banner')">Banners</b-nav-item>
      </b-nav>
      <div v-if="contentType === 'product'">
         <ProductList/>
      </div>
      <div v-else-if="contentType === 'banner'">
        <BannerList />
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductList from '../components/ProductList.vue'
import BannerList from '../components/BannerList.vue'
import ErrorPage from '../components/ErrorPage.vue'
import Success from '../components/Success.vue'
export default {
  name: 'ContentPage',
  data () {
    return {
      contentType: 'product'
    }
  },
  components: {
    NavBar,
    ProductList,
    BannerList,
    ErrorPage,
    Success
  },
  computed: {
    errors () {
      return this.$store.state.errors
    },
    message () {
      return this.$store.state.successMessage
    }
  },
  watch: {
    errors () {
      if (this.errors.length) this.$bvModal.show('errors-modal')
      else this.$bvModal.hide('errors-modal')
    },
    message () {
      // console.log('watch kepanggil')
      if (this.message.length) this.$bvModal.show('success-modal')
      else this.$bvModal.hide('success-modal')
    }
  },
  methods: {
    changeContentType (type) {
      this.contentType = type
    }
  }
}
</script>

<style>

</style>
