<template>
  <div>
    <b-button class="btn-warning" id="btn-edit-banner" @click="showModal">Edit</b-button>
    <form @submit.prevent="editBanner">
        <b-modal ref="my-modal" hide-footer title="Edit Banner">
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
        <b-button class="mt-2" variant="outline-warning" block @click="editBanner" >save</b-button>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
        </b-modal>
    </form>
  </div>
</template>

<script>
export default {
  name: 'addProduct',
  props: ['banner'],
  data () {
    return {
      bannerId: this.banner.id,
      title: this.banner.title,
      image_url: this.banner.image_url,
      statusSelected: this.banner.status
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
    editBanner () {
      const payload = {
        id: this.bannerId,
        title: this.title,
        image_url: this.image_url,
        status: this.statusSelected
      }

      this.$store.dispatch('editBanner', payload)
      this.hideModal()
      this.title = this.banner.title
      this.image_url = this.banner.image_url
      this.statusSelected = this.banner.status
    }
  }
}
</script>

<style>
#btn-edit-banner {
  width: 5vw;
  height: 3vw;
  font-size: 1.1vw;
}
</style>
