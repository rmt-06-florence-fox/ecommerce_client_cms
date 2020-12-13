<template>
  <div class="home">
    <img alt="Vue logo" src="https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Unburst/L54578000003000-00-290x290.jpg"><br><br>
    <div class="h1">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Unburst/L54578000003000-00-290x290.jpg'
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>

<style>

</style>
