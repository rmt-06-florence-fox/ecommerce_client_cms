<template>
  <div id="app">
      <div class="navbar-custom font-weight-bold" v-if="loggedIn">
        <div>
            <a href="#"><router-link to="/"><img class="logob" alt="Hack logo" src="./image/logo1.png" width="100px"></router-link></a>
        </div>
        <div>
          <a href="#" id="logout-btn" @click.prevent="logout"><i class="fa fa-sign-out" style="font-size:36px"></i></a>
        </div>
      </div>
      <div v-else-if="!loggedIn" class="drawing">
      </div>
    <router-view/>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#006666',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Logged Out!', 'Your have been logged out!.', 'success')
          this.$store.dispatch('logout')
          this.$router.push('/login')
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Logged out successfully'
          })
        }
      })
        .catch(console.log)
    }
  },
  computed: {
    loggedIn () {
      return this.$store.state.loggedIn
    }
  },
  created () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getCategories')
    if (localStorage.getItem('token')) {
      this.$store.commit('isLogin', true)
    } else {
      this.$store.commit('isLogin', false)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-repeat: no-repeat;
  background-position-x: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  text-align: center;
  color: #2c3e50;
}

.navbar-custom {
    background-color: #2f3640;
    color: #ced6e0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.fa {
  color: white;
}

.fa:hover {
  color: #ff793f;
}

.logob:hover {
  color:#ff793f
}

.drawing {
  background-color: #2f3640;
}
</style>
