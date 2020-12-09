<template>
  <div>
        <h1 class="text-center mt-5">Add Product</h1>
        <form @submit.prevent="add">
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="product.name"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="product.image_url"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="product.price"
                ></div>
            <div class="form-group">
                <input
                type="text"
                class="form-control col-3 btn-center"
                placeholder="Title"
                v-model="product.stock"
                ></div>
            <button type="submit" class="btn btn-primary btn-center">Add</button>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data () {
      return {
          product: {
              name: '',
              image_url: '',
              price: '',
              stock: '',
          }
      }
  }
//   methods: {
//       addProduct () {
//           axios({
//               url: '/products',
//               method: 'post',
//               data: {
//                 name: '',
//                 image_url: '',
//                 price: '',
//                 stock: ''  
//               }
//           })
//       }
//   }
}
</script>

<style>

</style>
