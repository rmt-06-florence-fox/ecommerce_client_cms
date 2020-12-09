<template>
  <div>
      <h1>Ini Halaman Detail {{ $route.params.id }}</h1>
      <p>{{ Detail }}</p>
      <button class="btn btn-primary" @click="goEdit(Detail.id)">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    filterId () {
      const id = this.$route.params.id
      this.$store.dispatch('filterId', id)
    },
    goEdit (id) {
      this.$router.push(`/edit/${id}`)
    }
  },
  computed: {
    Detail () {
      return this.$store.state.filteredData
    }
  },
  created () {
    this.filterId()
  }
}
</script>

<style>

</style>
