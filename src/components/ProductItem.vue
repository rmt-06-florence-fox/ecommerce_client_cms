<template>
  <div class="container mt-5 px-5">
    <div class="row">
      <div class="col-md-3">
        <img
          :src="product.image_url"
          alt="" class="w-100">
      </div>
      <div class="col-md-9">
        <table class="table text-left table-borderless">
          <tr>
            <th>Product Name</th>
            <td colspan="3">{{ product.name }}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td colspan="3">$ {{ product.price }}</td>
          </tr>
          <tr>
            <th>Stock</th>
            <td colspan="3">{{ product.stock }}</td>
          </tr>
          <tr>
            <th>Action</th>
            <td>
              <button class="btn btn-success btn-block" @click="addStock(product.id)">Add Stock</button>
            </td>
            <td>
              <button class="btn btn-primary btn-block" @click="getProductId(product.id)">Edit</button>
            </td>
            <td>
              <button class="btn btn-danger btn-block" @click="deleteById(product.id)">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    getProductId (id) {
      this.$router.push(`/products/edit/${id}`)
    },

    deleteById (id) {
      Swal.fire({
        title: 'Delete Confirmation',
        text: 'Are you sure want to delete this product?',
        icon: 'warning',
        confirmButtonText: 'Yes I\'m sure',
        showDenyButton: true,
        denyButtonText: 'No, cancel it'
      })
        .then(result => {
          if (result.value) {
            // console.log('Confirm clicked')
            this.$store.dispatch('deleteProduct', id)
          }
        })
    },

    addStock (id) {
      Swal.fire({
        title: 'Add Stock',
        input: 'number',
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return 'Stock cannot be empty!'
          } else if (value < 0) {
            return 'Stock cannot be negative!'
          }
        }
      })
        .then(result => {
          if (result.value) {
            const payload = {
              idProduct: id,
              stock: result.value
            }
            this.$store.dispatch('addStock', payload)
          }
        })
    }
  }
}
</script>

<style>

</style>
