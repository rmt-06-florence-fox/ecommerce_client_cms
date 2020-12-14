<template>
  <div>
    <nav class="navbar navbar-light bg-light" id="navbar">
        <a class="navbar-brand" href="#">
            <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/822/4281206822_be209932-fad6-4caa-8203-807240681ada.png?cb=1607775908" width="80" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        </a>
        <div class="mx-auto">
            <a @click='changePageHome' class="a-Home" style=" color: black;">Home</a> |
            <a @click="changePageCart" class="a-Cart" style=" color: black;">Cart</a> |
            <a @click="changePageAddProduct" class="a-Product" style=" color: black;">Add Product</a>
        </div>
        <button @click="logout" class="btn btn-outline-danger my-2 my-sm-0">Logout</button>
    </nav>
  </div>
</template>

<script>

export default {
  methods: {
    changePageHome () {
      this.$router.push({ path: '/' })
    },
    changePageCart () {
      this.$router.push({ path: 'Cart' })
    },
    changePageAddProduct () {
      this.$router.push({ path: 'AddProduct' })
    },
    logout () {
      this.$router.push({ path: 'Login' })
      localStorage.removeItem('access_token')
    }
  }
}
</script>

<style>
    #navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
    }
    #navbar a {
        cursor: pointer;
    }
</style>
