<template>
  <tr>
    <th scope="row">{{ i }}</th>
    <td>{{ product.name }}</td>
    <td><img :src="product.image_url" :alt="product.name" height="50px"></td>
    <td>{{ price }}</td>
    <td>{{ product.stock }}</td>
    <td><button @click="editProduct(product.id)" class="btn btn-secondary mr-2"><i class="fas fa-edit"></i></button>
      <button @click="delProduct(product.id)" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductItem',
  props: ['product', 'i'],
  methods: {
    editProduct (id) {
      this.$router.push('/edit/' + id)
    },
    delProduct (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#af3838',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('delProduct', id)
        }
      })
    }
  },
  computed: {
    price () {
      return 'Rp. ' + this.product.price.toFixed().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
    }
  }
}
</script>

<style>
</style>
