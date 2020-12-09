<template>
  <div>
      <NavBar/>
      <div>
          <AddForm/>
         <ProductList/>
      </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductList from '../components/ProductList.vue'
import AddForm from '../components/AddForm.vue'


export default {
    name: 'ContentPage',
    components: {
        NavBar,
        ProductList,
        AddForm
    }
}
</script>

<style>

</style>