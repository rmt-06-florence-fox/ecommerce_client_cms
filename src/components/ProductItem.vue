<template>
    <tr>
      <th scope="row">{{ product.id }}</th>
      <td class="w-25">
        <img :src="product.image_url" alt="" class="img-fluid img-thumbnail" />
      </td>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>
        <a class="btn btn-2 text-white" @click="editForm">Edit</a
        ><a class="btn btn-3 ml-2 text-white">Delete</a>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    editForm () {
      const id = this.$route.params.id
      this.$store.dispatch('editProduct', id)
    }
  }
}
</script>

<style></style>
