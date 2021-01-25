<template>
  <v-app-bar
    color="blue"
    flat
    dark
    max-height=64px
  >
    <v-toolbar-title>
      E-Commerce CMS
    </v-toolbar-title>

    <v-spacer>
    </v-spacer>

    <router-link to="/">
      <v-btn icon>
        <v-icon>
          mdi-home
        </v-icon>
      </v-btn>
    </router-link>

    <router-link to="/about">
      <v-btn icon>
        <v-icon>
          mdi-information
        </v-icon>
      </v-btn>
    </router-link>

    <v-btn icon @click="logout">
      <v-icon>
        mdi-logout
      </v-icon>
    </v-btn>

    <router-link to='/addproduct'>
      <v-btn
        class="ma-2 white--text"
        color="secondary"
      >
        Add Product
        <v-icon
          right
          dark
        >
          mdi-plus
        </v-icon>
      </v-btn>
    </router-link>

    <router-link to='/addcategory'>
      <v-btn
        class="ma-2 white--text"
        color="secondary"
      >
        Add Category
        <v-icon
          right
          dark
        >
          mdi-plus
        </v-icon>
      </v-btn>
    </router-link>

  </v-app-bar>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style>
  a { text-decoration: none;}
</style>
