<template>
   <tr>
        <th scope="row"> {{i+1}}</th>
        <td>{{product.name}}</td>
        <td><img :src="product.image_url" alt="gambar product" class="image-product"></td>
        <td>{{toLocalStringPrice(product)}}</td>
        <td>{{product.stock}}</td>
        <td>
            <button class="btn btn-primary mr-2" @click="goToEdit(product.id)">Edit</button>
            <button class="btn btn-danger" @click="goToDelete(product.id)">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
  name: 'product',
  props: ['product', 'i'],
  methods: {
    goToEdit (id) {
      this.$store.dispatch('findByPk', id)
    },
    goToDelete (id) {
      this.$store.dispatch('deleteProduct', id)
      // this.$store.dispatch('fetchData')
    },
    toLocalStringPrice (product) {
      const formatPrice = product.price
      const newPrice = formatPrice.toLocaleString('EN-US', { style: 'currency', currency: 'IDR' })
      return newPrice
    }
  }
}
</script>

<style>
  .image-product {
      width: 200px;
  }

  tr {
    font-size: 18px;
  }
</style>
