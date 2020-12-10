<template>
  <v-footer
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      dark
      class="blue lighten-1 text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.id"
          :href="icon.link"
          class="mx-4"
          icon
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        2020 — <strong>sidsoeharto</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        id: 1,
        name: 'mdi-email',
        link: 'mailto:msidiq.15@gmail.com'
      },
      {
        id: 2,
        name: 'mdi-github',
        link: 'https://github.com/sidsoeharto'
      },
      {
        id: 3,
        name: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/mochammad-sidiq-tri-133b25103/'
      }
    ],
    padless: true,
    variant: 'fixed'
  }),
  computed: {

  }
}
</script>

<style>

</style>
