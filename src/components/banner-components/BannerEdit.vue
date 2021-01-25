<template>
  <b-form @submit.prevent="editBanner">
    <b-form-group label="Title" label-for="title">
    <b-form-input
      name="title"
      type="text"
      v-model="title"
      placeholder="Banner' title goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Image URL" label-for="imageUrl">
    <b-form-input
      name="imageUrl"
      type="text"
      v-model="imageUrl"
      placeholder="Image URL goes here"
    ></b-form-input>
    </b-form-group>
    <b-button variant="success" type="submit"> Edit Banner </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'BannerEdit',
  data () {
    return {
      title: '',
      imageUrl: ''
    }
  },
  props: ['banner'],
  methods: {
    editBanner () {
      const { title, imageUrl } = this
      const id = this.banner.id
      this.$store.dispatch('editBanner', { id, title, imageUrl })
      this.$bvModal.hide('banner-' + this.banner.id)
    },
    populator () {
      this.title = this.banner.title
      this.imageUrl = this.banner.imageUrl
    }
  },
  created () {
    this.populator()
  }
}
</script>

<style>

</style>
