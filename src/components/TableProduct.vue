<template>
  <div class="container justify-content-center">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#id</th>
          <th scope="col">image</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">stock</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products"
          :key="product.id"
          >
          <td>{{ product.id }}</td>
          <td> <img :src="product.image_url" alt=""> </td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button class="btn btn-info btn-sm mr-2">edit</button>
            <button
              @click.prevent="deleteProduct(product.id)"
              class="btn btn-danger btn-sm"
            >delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'TableProduct',
  props: ['products'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style scoped>
  img {
    height: 150px;
  }
</style>
