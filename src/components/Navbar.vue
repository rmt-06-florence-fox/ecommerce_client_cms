<template>
    <div>
        <div class="navbar-custom">
            <div class="logo-navbar">
                <img src="../assets/output-onlinepngtools (1).png" alt="logo" width="170px">
            </div>
            <div>
                <ul class="right-navbar">
                    <li><button type="button" class="btn btn-outline-primary text-light button1"><a @click="pageLogin" href="#">Login</a></button></li>
                    <li><button type="button" class="btn btn-primary button2"><a @click="pageRegister" href="#">Register</a></button></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    pageLogin () {
      this.$router.push('/login')
    },
    pageRegister () {
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
.button1 {
    padding: 4px;
    width: 90PX;
}
.button2 {
    padding: 4px;
    width: 90PX;
}
.button1 li {
    color: black;
}
.color-page {
    background-color: #c8d6e5;
}
</style>
