<template>
<div>
  <ProducList></ProducList>
  <AddProduct></AddProduct>
</div>
</template>

<script>
import ProducList from '../components/ProductList.vue'
import AddProduct from '../components/AddProduct.vue'

export default {
  name: 'Product',
  components: {
    ProducList,
    AddProduct
  }
}
</script>

<style>
.btn {
  color: white;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn-2 {
  background-color: blue;
}

.btn-3 {
  background-color: red;
}

</style>
