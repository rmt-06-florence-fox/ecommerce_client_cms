<template>
    <div id="box" class="col-md-3 col-sm-6 mt-3">
      <img :src="product.image_url" class="img-thumbnail" alt="product">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">Price: Rp.{{ product.price }}</p>
        <p class="card-text">Stock: {{ product.stock }} unit</p>
        <button @click="editProduct(product.id)" class="btn btn-light btn-sm font-weight-bold">Edit</button>
        <button @click="deleteProduct" class="btn btn-light btn-sm font-weight-bold">Delete</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['product'],
  data () {
    return {
      name: '',
      image_url: '',
      stock: 0,
      price: 0
    }
  },
  methods: {
    editProduct (id) {
      this.$router.push('/edit/' + id)
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  }
}
</script>

<style>
.img-thumbnail {
    height: 150px;
}
.card-body {
  box-shadow: 5px 5px 20px grey;
}

</style>
