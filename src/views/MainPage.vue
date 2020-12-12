<template>
  <div>
    <Navbar></Navbar>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">{{ this.page }}</h1>
          </div>

          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'MainPage',
  components: {
    Sidebar,
    Navbar
  },
  computed: {
    page () {
      return this.$store.state.pageName
    }
  }
}
</script>

<style>
</style>
