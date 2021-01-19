<template>
  <div>
    <b-button class="btn-primary" id="myBtn" @click="showModal">Add Banner</b-button>
    <form @submit.prevent="addBanner">
        <b-modal ref="my-modal" hide-footer title="add new Banner">
        <div class="d-block text-center">
            <h3>Title</h3>
            <input class="text-center" v-model="title"  type="text" required >
            <h3>Image URL</h3>
            <input class="text-center" v-model="image_url"  type="text" required >
            <h3>status</h3>
            <select v-model="statusSelected" required >
              <option select disabled>select</option>
              <option>true</option>
              <option>false</option>
            </select>
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="addBanner" >add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      title: '',
      image_url: '',
      statusSelected: ''
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    addBanner () {
      const payload = {
        title: this.title,
        image_url: this.image_url,
        status: this.statusSelected
      }
      this.$store.dispatch('addBanner', payload)
      this.hideModal()

      this.title = ''
      this.image_url = ''
      this.statusSelected = ''
    }
  }
}
</script>

<style>
#myBtn {
  /* display: none; Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #d9534f; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */
}
</style>
