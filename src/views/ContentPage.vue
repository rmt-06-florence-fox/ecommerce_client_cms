<template>
  <div>
      <NavBar/>
      <div>
         <ProductList/>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductList from '../components/ProductList.vue'

export default {
    name: 'ContentPage',
    components: {
        NavBar,
        ProductList
    }
}
</script>

<style>

</style>