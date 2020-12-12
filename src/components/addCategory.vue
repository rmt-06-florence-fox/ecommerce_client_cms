<template>
  <div>
    <b-button class="btn-primary" id="btn-category" @click="showModal"><i class="fas fa-list"></i></b-button>
    <form @submit.prevent="addCategory">
        <b-modal ref="my-modal" hide-footer title="add new category">
        <div class="d-block text-center">
            <h3>Category Name</h3>
            <input class="text-center" v-model="name"  type="text" required >
        </div>
        <b-button class="mt-2" variant="outline-warning" block @click="addCategory" >add</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addCategory',
  data () {
    return {
      name: ''
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
    addCategory () {
      const payload = {
        name: this.name
      }
      this.$store.dispatch('addCategory', payload.name)
      this.hideModal()
    }
  }
}
</script>

<style>
#btn-category {
  /* display: none; Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 100px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #d9534f; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 100%; /* Rounded corners */
  width: 5vw;
  height: 5vw;
  font-size: 1.5rem; /* Increase font size */
}
</style>
