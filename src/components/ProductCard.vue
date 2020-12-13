<template>
    <tr>
      <th scope="row">{{index+1}}</th>
      <td>
        <img :src="product.image_url" alt="image.png" class="img-thumbnail" style="max-height: 150px; max-width: 150px; min-height: 150px; min-width: 200px">
      </td>
      <td class="">{{product.name}}</td>
      <td>Rp. {{product.price}}</td>
      <td>{{product.stock}}</td>
      <td>
        <button @click="editProduct(product.id)" class="m-1 btn btn-success" style="">Edit</button>
        <button @click="deleteProduct(product.id)" class="m-1 btn btn-danger">Delete</button>
      </td>
    </tr>
</template>

<script>
export default {
  props: ['product', 'index'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct (id) {
      this.$router.push({ path: `/products/edit/${id}` })
    }
  }
}
</script>

<style>

</style>
