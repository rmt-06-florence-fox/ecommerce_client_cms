<template>
  <b-form  @submit.prevent="addBanner">
    <b-form-group label="Title" label-for="title">
    <b-form-input
      name="title"
      type="text"
      v-model="title"
      placeholder="Banner's title goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Image URL" label-for="imageUrl">
    <b-form-input
      name="imageUrl"
      type="text"
      v-model="imageUrl"
      placeholder="Banner's image URL goes here"
    ></b-form-input>
    </b-form-group>
    <button type="submit" class="btn btn-success">Add Banner</button>
  </b-form>
</template>

<script>
export default {
  name: 'BannerAdd',
  data () {
    return {
      title: '',
      imageUrl: ''
    }
  },
  methods: {
    addBanner () {
      this.$store.dispatch('addBanner', {
        title: this.title,
        imageUrl: this.imageUrl
      })
      this.$bvModal.hide('add-banner')
    }
  }
}
</script>

<style>

</style>
