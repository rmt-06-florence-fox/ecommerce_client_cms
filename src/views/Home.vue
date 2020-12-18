<template>
  <b-container fluid class="d-flex">
    <ProfileSection></ProfileSection>
    <ProductsSection></ProductsSection>
  </b-container>
</template>

<script>
import ProfileSection from '../components/ProfileSection'
import ProductsSection from '../components/ProductsSection'
export default {
  name: 'Home',

  components: {
    ProfileSection,
    ProductsSection
  }

}
</script>

<style>
</style>
