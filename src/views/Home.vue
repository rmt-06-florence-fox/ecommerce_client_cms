<template>
  <div class="home mb-3">
    <div v-if="loggedIn !== 'loggedIn'">
      <img alt="Vue logo" src="../assets/logo.png">
      <h1>FANCY E-COMMERCE</h1>
    </div>
    <div v-else>
      <button type="button"
        @click.prevent="showAddForm"
        class="btn btn-primary mt-2"
        v-if="addForm"
      >
      Add New Product
      </button>
      <AddForm v-else></AddForm>
      <FetchProduct></FetchProduct>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddForm from '../components/AddForm'
import FetchProduct from '../components/ProductFetch'

export default {
  name: 'Home',
  components: { FetchProduct, AddForm },
  computed: {
    loggedIn () {
      return this.$store.state.sign
    },
    addForm () {
      return this.$store.state.addForm
    }
  },
  methods: {
    showAddForm () {
      this.$store.commit('addFormShow')
    }
  }
}
</script>

<style>
</style>
