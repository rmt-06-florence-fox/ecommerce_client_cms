<template>
  <div>
    <nav class='navbar navbar-light bg-light'>
        <div class='container-fluid d-flex d-flex justify-content-start'>
            <a class='navbar-brand' href='/products'>
            <img src='../assets/Bukatelapak.com.svg' alt='' width='35' height='30' class='d-inline-block align-top'>
            Bukatelapak.com |
            <router-link to="/add">Add Product</router-link> |
            <a class="justify-content-end" href="#" @click="logout"> Logout </a>
            </a>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  pageName: 'Navbar',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    color: black;
}
</style>
