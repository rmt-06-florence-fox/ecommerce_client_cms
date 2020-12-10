<template>
  <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item">
          <h4 class="navbar-item title is-4 has-text-white">Dhil-Commerce CMS</h4>
        </div>

        <a role="button" @click.prevent= "active" :class= "class1" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" :class= "class2">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/addProduct">
            Add Product
          </router-link>

          <a class="navbar-item">
            Documentation
          </a>
        </div>

        <div class="navbar-end">
          <h6 class="navbar-item is-italic has-text-centered" v-if="isLogin">"Welcome admin, you can work from now. Enjoy!"</h6>
          <div class="navbar-item">
            <div class="buttons">
              <button class="navbar-item button is-danger" v-if="isLogin" @click.prevent="logout">log out</button>
              <router-link class="navbar-item button is-light" to="/adminLogin" v-else>Log in as Admin</router-link>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      hidden: true,
      class1: 'navbar-burger burger',
      class2: 'navbar-menu'
    }
  },
  methods: {
    active () {
      if (this.class1 === 'navbar-burger burger') {
        this.class1 = 'navbar-burger burger is-active'
        this.class2 = 'navbar-menu is-active'
      } else {
        this.class1 = 'navbar-burger burger'
        this.class2 = 'navbar-menu'
      }
    },
    logout () {
      this.$swal.fire({
        title: 'Are you sure?',
        text: "After this, you won't allowed to access this site!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal.fire(
            'logging out',
            'Thank you admin, have a nice day',
            'success'
          )
          this.$store.commit('CHANGEISLOGIN', false)
          localStorage.clear()
        }
      })
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>

</style>
