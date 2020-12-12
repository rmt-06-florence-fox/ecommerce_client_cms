<template>
  <tbody>
    <tr>
      <td>{{ i + 1 }}</td>
      <td>
        <img :src="product.image_url" class="img-fluid" style="height: 300px; width: 250px">
      </td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>
        <button @click.prevent="editForm(product.id)" class="btn btn-outline-success btn-sm me-2"><i class='far fa-edit'></i></button>
        <button @click.prevent="deleteProduct(product.id)" class="btn btn-outline-danger btn-sm"><i class='far fa-trash-alt'></i></button>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'ProductList',
  props: ['product', 'i'],
  methods: {
    editForm (id) {
      this.$router.push(`/products/${id}`)
    },
    deleteProduct (id) {
      this.$store.dispatch('delete', id)
    }
  }
}
</script>

<style>

</style>
