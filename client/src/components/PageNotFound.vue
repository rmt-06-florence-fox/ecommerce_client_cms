<template>
  <div class="container p-5">
    <img src="../assets/404.svg" alt="">
    <h1>Sorry... Page Not Found !!!</h1>
    <button class="btn btn-back" @click.prevent="onBack">Back To Dashboard</button>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    onBack () {
      this.$router.push('/products')
    }
  }
}
</script>

<style scoped>
h1 {
 color: #16A592;
 margin-top: 30px;
}
.btn-back {
  background-color: #68e6d5;
  width: 250px;
  height: 40px;
  margin-top: 100px;
}
</style>
