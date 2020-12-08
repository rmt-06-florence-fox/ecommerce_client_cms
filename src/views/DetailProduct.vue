<template>
  <div>
    <h1>Detail Product</h1>
    {{ productById }}
  </div>
</template>

<script>
export default {
  name: 'DetailProduct',
  computed: {
    productById () {
      return this.$store.state.productById
    }
  },
  methods: {
    fetchProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductById', id)
    }
  },
  created () {
    this.fetchProductById()
  }

}
</script>

<style>

</style>
