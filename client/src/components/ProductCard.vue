<template>
    <div class="col-3">
        <div class="card">
            <img src="product.image_url" alt="product.category" class="card-img-top">
            <div class="card-body">
               <h5 class="card-title">{{ product.name }}</h5>
            </div>
            <div class="card-body">
               <h5 class="card-title">{{ product.price }}</h5>
            </div>
            <div class="card-body">
               <h5 class="card-title">{{ product.stock }}</h5>
            </div>
            <div class="card-body">
               <h5 class="card-title">{{ product.category }}</h5>
            </div>
            <div @click.prevent="editBtn(product.id)" class="btn btn-info">Edit</div>
            <div @click.prevent="deleteBtn(product.id)" class="btn btn-danger">Delete</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: Object
  },
  // toEdit (id) {
  //   console.log(id)
  //   this.$router.push(`/products/${id}`) // programmatic navigation -> mirip redirect tapi gak ngerefresh
  // },
  methods: {
    editBtn (id) {
      this.$store.dispatch('editProduct', id)
    },
    deleteBtn (id) {
      this.$store.dispatch('deleteProduct', id)
    }
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
