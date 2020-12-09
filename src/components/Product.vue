<template>
    <tr>
      <td>{{ product.name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td><img class="product-image" :src="product.image_url" alt="" srcset=""></td>
      <td>
        <button class="btn btn-warning m-1">edit</button>
        <button class="btn btn-danger">delete</button>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'Product',
  props: ['product']
}
</script>

<style>
.product-image{
  width: 70px;
}
</style>
