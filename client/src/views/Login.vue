<template>
<div>
  <div class="login">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box" @submit.prevent="login">
                    <h2> Ecommerce Login</h2>
                    <input  v-model="email" type="text" name="" placeholder="Username">
                    <input v-model="password" type="password" name="" placeholder="Password">
                    <button type="submit" name="" value="Login"> Login </button>
                    <router-link to="/register"> <button type="button" name="" value="Register"> Register </button> </router-link>
                    <div class="col-md-12">
                        <ul class="social-network social-circle">
                            <!-- <li><a href="#" class="ico" title="Facebook"><i style="color: black" class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a></li> -->
                            <li><a href="#" class="icoGoogle" title="Google +"><i class="fa fa-google"></i></a></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</div>

</template>

<script>
export default {
  pageName: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
    //   this.$router.push('./home')
    }
  }
}
</script>

<style scoped>

.box {
    min-width: 200px;
    min-height: 200px;
    padding: 40px;
    position: fixed;;
    top: 40%;
    left: 50%;
    background: #fcdddd;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: 0.25s;
    margin-top: 100px;
    justify-content: center;
    border-radius: 25px;
}

.box input[type="text"],
.box input[type="password"] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #3498db;
    padding: 10px 10px;
    width: 250px;
    outline: none;
    color: black;
    border-radius: 24px;
    transition: 0.25s
}

.box h1 {
    color: black;
    text-transform: uppercase;
    font-weight: 500
}

.box input[type="text"]:focus,
.box input[type="password"]:focus {
    width: 300px;
    border-color: #cc2e8f
}

.box button {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #d35d6e;
    padding: 14px 40px;
    outline: none;
    color: black;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer
}

.box button:hover {
    background: #efb08c
}

.forgot {
    text-decoration: underline
}

ul.social-network {
    list-style: none;
    display: inline;
    margin-left: 0 !important;
    padding: 0;
    color: black;
}

ul.social-network li {
    display: inline;
    margin: 0 5px
}

.social-network a.icoFacebook:hover {
    background-color: #3B5998
}

.social-network a.icoTwitter:hover {
    background-color: #33ccff
}

.social-network a.icoGoogle:hover {
    background-color: #BD3518
}

.social-network a.icoFacebook:hover i,
.social-network a.icoTwitter:hover i,
.social-network a.icoGoogle:hover i {
    color: #fff
}

a.socialIcon:hover,
.socialHoverClass {
    color: #44BCDD
}

.social-circle li a {
    display: inline-block;
    position: relative;
    margin: 0 auto 0 auto;
    border-radius: 50%;
    text-align: center;
    width: 50px;
    height: 50px;
    font-size: 20px
}

.social-circle li i {
    margin: 0;
    line-height: 50px;
    text-align: center
}

.social-circle li a:hover i,
.triggeredHover {
    transform: rotate(360deg);
    transition: all 0.2s
}

.social-circle i {
    color: black;
    transition: all 0.8s;
    transition: all 0.8s
}
</style>
