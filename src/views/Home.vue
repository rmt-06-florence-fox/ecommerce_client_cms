<template>
  <div>
    <Navbar/>
    <div>
      <v-simple-table>
        <thead>
          <tr>
            <th
              class="font-weight-bold title"
              v-for="item in headers"
              :key="item.name"
              scope="col"
            >{{item.text}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in productData" :key="data.id">
            <td>{{ data.name }}</td>
            <td>
              <v-img
                :src="data.image_url"
                :alt="data.name"
                style="width: 200px;"
              >
              </v-img>
            </td>
            <td>Rp. {{ data.price.toLocaleString() }}</td>
            <td>{{ data.stock }}</td>
            <td>
              <v-icon
                small
                class="mr-2"
                @click="editItem(data.id)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(data.id)"
              >
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-simple-table>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { mapState } from 'vuex'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export default {
  name: 'Home',
  data: () => ({
    dialogDelete: false,
    editId: -1,
    headers: [
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Image',
        value: 'image_url'
      },
      {
        text: 'Price',
        value: 'price'
      },
      {
        text: 'Stock',
        value: 'stock'
      },
      {
        text: 'Actions',
        value: 'actions'
      }
    ]
  }),
  components: {
    Navbar,
    Footer
  },
  computed: mapState(['productData']),
  created () {
    this.$store.dispatch('getData')
  },
  watch: {
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },
  methods: {
    editItem (id) {
      console.log(id)
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editId = -1
      })
    },
    deleteItem (id) {
      this.editId = id
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      axios({
        method: 'DELETE',
        url: `${baseUrl}/products/${this.editId}`,
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          this.$store.dispatch('getData')
          this.closeDelete()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
