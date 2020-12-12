<template>
  <table class="table table-borderless">
    <thead>
        <tr>
            <th scope="col"> </th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
    <TableProductRow v-for="(el, i) in products" :key="i" :el="el" :no="i" />
    </tbody>
  </table>
</template>

<script>
import TableProductRow from '../components/TableProductRow'
export default {
  components: {
    TableProductRow
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>
</style>
