<template>
  <div class="home">
    <NavBar/>
    <img alt="Vue logo" :src="img" height="350px" class="mb-4 mt-5">
    <HelloWorld :msg="title" />
    <button class="btn btn-primary" @click="changePage">your products</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    NavBar
  },
  methods: {
    changePage () {
      this.$router.push({ name: 'Products' })
    }
  },
  data () {
    return {
      img: 'https://thumbs.dreamstime.com/b/eg-logo-monogram-triangle-shape-circle-rounded-isolated-gold-colors-style-black-background-design-template-176114635.jpg'
    }
  },
  computed: {
    ...mapState({
      title: 'title'
    })
    // title () {
    //   return this.$store.state.title
    // }
  }
}
</script>
