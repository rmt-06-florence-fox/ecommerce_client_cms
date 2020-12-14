<template>
  <tr>
    <td><img :src='data.image_url' class='img-table'></td>
    <td>{{ data.name }}</td>
    <td>Rp. {{ convertPrice }}</td>
    <td>{{ data.stock }}</td>
    <td>{{ data.Categories[0].category }}</td>
    <td><button @click='goEdit(data.id)' class='btn btn-success mr-1'><i class="fas fa-edit"> Edit</i></button>
    <button @click='deleteItem(data.id)' class='btn btn-danger'><i class="fas fa-trash-alt"> Delete</i></button></td>
  </tr>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    goEdit (id) {
      this.$router.push(`/edit/${id}`)
    },
    deleteItem (id) {
      this.$vToastify.prompt({
        body: 'Are you sure want to delete this product?',
        answers: { Yes: true, No: false }
      })
        .then(value => value ? this.$store.dispatch('deleteProduct', id) : console.log('cancel delete'))
    }
  },
  computed: {
    convertPrice () {
      return this.data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>
<style>
  .img-table{
    width: 100px;
  }
</style>
