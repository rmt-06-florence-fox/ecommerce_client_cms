<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-form @submit.prevent="addProduct">
          <v-card>
            <v-card-title>
              <v-container justify-center>
                Add New Product
              </v-container>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-text-field
                  prepend-icon="mdi-format-title"
                  label="Name"
                  v-model="name"
                  required
                >
                </v-text-field>

                <v-text-field
                  prepend-icon="mdi-image"
                  label="Image Url"
                  name="image_url"
                  v-model="image_url"
                >
                </v-text-field>

                <v-text-field
                  prepend-icon="mdi-currency-usd"
                  label="Price"
                  name="price"
                  prefix = 'Rp.'
                  v-model="price"
                  required
                >
                </v-text-field>

                <v-text-field
                  prepend-icon="mdi-cart-plus"
                  label="Stock"
                  name="stock"
                  v-model="stock"
                  required
                >
                </v-text-field>

              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-container justify-center>
                <v-alert
                  type="error"
                  dense
                  outlined
                  v-if="alert === true"
                >
                  {{ errMessage }}

                  <div>
                    <v-btn
                      color="blue"
                      text
                      @click="changeAlert"
                    >
                      Close
                    </v-btn>
                  </div>
                </v-alert>
                <v-layout row justify-center>
                  <v-btn
                    color="blue"
                    dark
                    type="submit"
                    class="mx-4"
                  >Add</v-btn>
                  <v-btn
                    color="secondary"
                    dark
                    class="mx-4"
                    @click="home"
                  >Cancel</v-btn>
                </v-layout>
              </v-container>
            </v-card-actions>

          </v-card>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      name: '',
      image_url: '',
      price: null,
      stock: null
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }

      this.$store.dispatch('addProduct', payload)
    },
    home () {
      this.$router.push({ name: 'Home' })
    },
    changeAlert () {
      this.$store.commit('changeAlert', false)
    }
  },
  computed: mapState(['alert', 'errMessage'])
}
</script>

<style>

</style>
