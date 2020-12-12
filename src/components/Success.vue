<template>
  <h3 class="text-success">{{message}}</h3>
</template>

<script>
export default {
  name: 'Success',
  computed: {
    message () {
      const message = this.$store.state.successMessage
      // console.log('masuk ke success', message)
      return message
    }
  }
}
</script>

<style>

</style>
