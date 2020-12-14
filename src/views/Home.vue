<template>
  <v-container fluid secondary m-0>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
          <v-list-item class="px-100">
            <v-list-item-avatar>
              <v-icon>mdi-account-cirle</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title color-white">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>Dasboard</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title justify-center>Application</v-toolbar-title>
    </v-app-bar>
    <Dashboard></Dashboard>
  </v-container>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'
export default {
  data: () => {
    return {
      drawer: false
    }
  },
  components: {
    Dashboard
  }
}
</script>
