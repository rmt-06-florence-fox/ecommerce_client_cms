<template>
    <div class="col-md-2 bg-light" style="height: 92vh;">
        <ul class="nav flex-column mt-4" style="text-align: left; margin-left: 7%">
            <li class="nav-item">
                <b class="nav-link text-dark" @click="goToDashboard()"><i class="fas fa-tachometer-alt me-2"></i> Dashboard</b>
            </li>
            <li class="nav-item">
                <b class="nav-link text-dark" @click="goToProduct()"><i class="fas fa-ad me-2"></i> Product</b>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'navVertical',
  methods: {
    goToDashboard () {
      this.$router.push('/')
    },
    goToProduct () {
      this.$router.push('/products')
    }
  }
}
</script>

<style>

</style>
