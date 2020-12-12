<template>
    <div>
        <div class="navbar-custom">
            <div class="logo-navbar">
                <img src="../assets/output-onlinepngtools (1).png" alt="logo" width="170px">
            </div>
            <div>
                <ul class="right-navbar">
                    <li><button type="button" class="btn btn-danger button2"><a @click="logout" href="#">Logout</a></button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavbarAdmin',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/home')
    }
  }
}
</script>

<style>
.navbar-custom {
    display: flex;
    background-color: #dcdde1;
    justify-content: space-between;
    padding: 0px;
}
.buttonRegistrsai {
    margin: 0%;
}
.right-navbar {
    display: flex;
    list-style: none;
    margin: 0%;
    padding: 0%;
}
.right-navbar a {
    color: white;
    padding: 10px;
}
.right-navbar li {
    margin: 8px;
}
.button2 {
    padding: 4px;
    width: 90PX;
}
.color-page {
    background-color: #c8d6e5;
}
</style>
