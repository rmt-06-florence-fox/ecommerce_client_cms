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
    <a class="item" @click="addBanner">
      <i class="boxes icon"></i> Add Banner
    </a>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input v-model="searchQuery" type="text" placeholder="Search by Category">
          <i class="search link icon" @click="search"></i>
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
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search () {
      const route = `/search-results/${this.searchQuery}`
      this.$router.push(route)
      this.searchQuery = ''
    },
    home () {
      this.$router.push({ name: 'Home' })
    },
    banner () {
      this.$router.push({ name: 'Banner' })
    },
    add () {
      this.$router.push({ name: 'AddPage' })
    },
    addBanner () {
      this.$router.push({ name: 'AddPageBanner' })
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
