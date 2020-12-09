<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-form>
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
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    prepend-icon="mdi-lock"
                    label="Password"
                    type="password"
                    name="password"
                    required
                  >
                  </v-text-field>

                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-container justify-center>
                  <v-layout row justify-center>
                    <v-btn color="blue" dark>Login</v-btn>
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
export default {

}
</script>

<style>

</style>
