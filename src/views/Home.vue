<template>
  <div class="home">
    <img src="../assets/mrbee.jpeg">
    <div class="hello">
      <h1>{{ Vuex }}</h1>
      <button @click="change">changeTitle</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  computed: {
    Vuex () {
      return this.$store.state.title
    }
  },
  methods: {
    change () {
      const payload = 'se'
      return this.$store.commit('change', payload)
    }
  }
}
</script>
