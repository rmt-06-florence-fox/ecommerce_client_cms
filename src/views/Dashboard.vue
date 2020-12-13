<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <div class="card sidebar">
            <div class="card-title"><Sidebar></Sidebar></div>
          </div>
        </div>
        <div class="col-10">
          <div class="content-cms">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'
export default {
  components: { Sidebar, Navbar },
  name: 'DashBoard',
  created () {
    this.$store.dispatch('fetch')
  }
}
</script>

<style>
.sidebar{
  height: 500px;
  background-color: orange !important;
}
.content-cms{
  height: 500px;
  overflow: scroll;
}
</style>
