<template>
  <div id="app">
    <div class="navbar-custom font-weight-bold">
        <div class="nac-custom">
            <a href="#"><router-link to="/"><img class="logob" alt="Hack logo" src="./image/logo1.png" width="100px"></router-link></a>
        </div>
        <div>
          <a href="#" id="logout-btn" ><i class="fa fa-sign-out" style="font-size:36px"></i></a>
        </div>
      </div>
    <router-view/>
  </div>
</template>

<style>

.navbar-custom {
    background-color: #2f3640;
    color: #ced6e0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fa {
  color: white;
}
</style>
