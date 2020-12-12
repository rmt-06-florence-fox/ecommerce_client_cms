<template>
  <h3 class="text-success">{{message}}</h3>
</template>

<script>
export default {
  name: 'Success',
  computed: {
    message () {
      return this.$store.state.successMessage
    }
  }
}
</script>

<style>

</style>
