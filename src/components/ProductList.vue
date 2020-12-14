<template>
    <tbody>
      <tr>
        <th scope="row">{{ product.id }}</th>
        <td>p-{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>
          <div class="text-center">
            <img :src="product.image_url" class="img-fluid" style="width: 120px; height: 70px">
          </div>
        </td>
        <td>{{ product.price }}</td>
        <td>{{ product.stock }}</td>
        <td>
          <button type="button" class="btn btn-outline-info btn-sm me-2" @click="goDetailProduct(product.id)"><i class="fas fa-search-plus"></i></button>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteId(product.id)"><i class='far fa-trash-alt'></i></button>
        </td>
      </tr>
    </tbody>
</template>

<script>

export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    goDetailProduct (id) {
      this.$router.push(`/products/${id}`)
    },
    deleteId (id) {
      this.$store.dispatch('deleteId', id)
    }
  }
}
</script>

<style>

</style>
