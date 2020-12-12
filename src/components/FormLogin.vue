<template>
    
</template>

<script>
export default {
  name: 'FormLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
    //   const payload = {
    //     email: this.email,
    //     password: this.password
    //   }
      console.log('test')
    }
  }
}
</script>

<style>
body, html {
    height: 100%;
    margin: 0;
  }
.navbar-custom {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
.center-navbar {
    display: flex;
    list-style: none;
    justify-content: center;
    height: 90%;
}
.center-navbar li {
    margin: 10px;
}
.center-navbar a {
    color: white;
    text-decoration: none;
    margin: 10px;
}
.right-navbar li {
    margin: 8px;
}
.buttonRegistrsai {
    margin: 0%;
}
</style>
