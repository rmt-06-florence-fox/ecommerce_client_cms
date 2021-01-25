<template>
    <b-navbar sticky class="mt-0 bg-white">
      <b-navbar-brand>
        <img src="../assets/logo.png" alt="logo" height="100px" width="300px">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item >
            <div v-if="content === 'product'">
               <button class="btn btn-success" @click="showModal('add')">Add Product</button>
               <b-modal
                id="add"
                hide-footer
                title="Add Product Form">
                <AddForm/>
              </b-modal>
            </div>
            <div v-else-if="content === 'banner'">
              <button class="btn btn-success" @click="showModal('addBanner')" >Add Banner</button>
              <b-modal
                id="addBanner"
                hide-footer
                title="Add Banner Form">
                <BannerAdd/>
              </b-modal>
            </div>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form class="mr-4">
            <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
          <b-nav-item>
            <button class="btn btn-dark" @click="logout">Logout</button>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import AddForm from './AddForm.vue'
import BannerAdd from './banner-components/BannerAdd.vue'
export default {
  name: 'NavBar',
  components: {
    AddForm,
    BannerAdd
  },
  props: ['content'],
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/')
    },
    showModal (modalId) {
      this.$bvModal.show(modalId)
    }
  }
}
</script>

<style scoped>

b-navbar {
  background: black;
}

</style>
