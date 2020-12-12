<template>
  <div class="container">
      <h1>detail page</h1>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
    },
    created () {
      this.fetchDetailById()
    },
    computed: {
      product () {
        return this.$store.state.product
      }
    }
  }
}
</script>

<style>

</style>
