<template>
  <div>
    <Navbar
    >
    </Navbar>
    <v-data-table
      class="elevation-1"
    >
      <v-card>
        <v-card-title>
          <span class="headline"> Title </span>
        </v-card-title>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-data-table>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
