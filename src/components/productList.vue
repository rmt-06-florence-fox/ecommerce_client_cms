<template>
  <tr>
      <td><img class="product-image" :src="product.image_url" alt="image"></td>
      <td>{{ product.name }}</td>
      <td>Rp {{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>
          <button @click.prevent="editPage(product.id)" class="btn btn-primary">Edit</button>
          <button @click.prevent="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
      </td>
  </tr>
</template>

<script>
export default {
  props: ['product'],
  methods: {
    editPage (id) {
      this.$router.push(`edit/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>
.product-image {
  width: 235px;
  height: 150px;
}
</style>
