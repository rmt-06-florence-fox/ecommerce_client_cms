<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand :to="{ name: 'Home' }">
      <img src="../assets/ECommerce-logo.svg"  width="30" height="30" alt="shopping bag">
       E-Commerce CMS
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
        <b-nav-item :to="{ name: 'Categories' }">Categories</b-nav-item>
        <b-nav-item :to="{ name: 'Banners' }">Banners</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>{{ fullName }}</em>
          </template>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return {
      fullName: localStorage.getItem('fullName')
    }
  },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style>

</style>
