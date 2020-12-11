<template>
  <div class="ui pointing menu">
    <a class="active item" @click="home">
      <i class="home icon"></i> Home
    </a>
    <a class="item" @click="banner">
      <i class="images icon"></i> Banner
    </a>
    <a class="item" @click="add">
      <i class="boxes icon"></i> Add Product
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search...">
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="item" @click="logout">
        <i class="logout icon"></i> Logout
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    home () {
      this.$router.push({ name: 'Home' })
    },
    banner () {
      this.$router.push({ name: 'Banner' })
    },
    add () {
      this.$router.push({ name: 'AddPage' })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
