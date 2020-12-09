<template>
  <v-app-bar
    color="blue"
    flat
    dark
  >
    <v-toolbar-title>
      E-Commerce CMS
    </v-toolbar-title>

    <v-spacer>
    </v-spacer>

    <v-btn icon>
      <v-icon>
        mdi-home
      </v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>
        mdi-information
      </v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon @click="logout">
        mdi-logout
      </v-icon>
    </v-btn>

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

<style scoped>

</style>
