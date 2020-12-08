<template>
  <b-nav tabs align="center" class="bg-secondary m-0">
    <b-nav-item to="/dashboard" :active='$route.name =="Dashboard"'>Dashboard
    </b-nav-item>
    <b-nav-item to="/products" :active='$route.name =="ListProduct"'>Products
    </b-nav-item>
    <b-nav-item to="/categories" :active='$route.name =="ListCategory"'>Categories
    </b-nav-item>
    <b-nav-item to="/banners" :active='$route.name =="ListBanner"'>Banners
    </b-nav-item>
    <b-nav-item-dropdown
      text="User"
      toggle-class="nav-link-custom"
      right
    >
      <b-dropdown-item @click.prevent="logout">Logout</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>

</style>
