<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-form @submit.prevent="login">
            <v-card>
              <v-card-title>
                <v-container justify-center>
                  Login to Ecommerce CMS
                </v-container>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-text-field
                    prepend-icon="mdi-account"
                    label="Username"
                    v-model="email"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Password"
                    type="password"
                    name="password"
                    v-model="password"
                    required
                  >
                  </v-text-field>

                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-container justify-center>
                  <v-layout row justify-center>
                    <v-btn
                      color="blue"
                      dark
                      type="submit">Login</v-btn>
                  </v-layout>
                </v-container>
              </v-card-actions>

            </v-card>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import axios from 'axios'
// import { mapState } from 'vuex'

const baseUrl = 'http://localhost:3000'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const payload = {
        email: this.email,
        password: this.password
      }

      axios({
        method: 'POST',
        url: `${baseUrl}/login`,
        data: payload
      })
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
