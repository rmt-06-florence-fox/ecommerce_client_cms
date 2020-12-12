<template>
  <div class="home">
    <img alt="Vue logo" src="https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Unburst/L54578000003000-00-290x290.jpg">
    <HelloWorld :msg="title"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data () {
    return {
      image_url: 'https://media.guitarcenter.com/is/image/MMGS7/Les-Paul-Standard-60s-Electric-Guitar-Unburst/L54578000003000-00-290x290.jpg'
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
