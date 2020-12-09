<template>
    <div class="card col-sm-4" style="width: 18rem;">
        <img :src="product.image_url" :alt="product.name">
        <div class="card-body">
            <h5 class="card-title">{{product.name}}</h5>
            <ul>
                <li>Harga : {{product.price}}</li>
                <li>Stock : {{product.stock}}</li>
            </ul>
            <button class="btn btn-primary">edit</button>
            <button @click="deleteProduct(product.id)" class="btn btn-danger">delete</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>
.col-3{
    max-width: 100px;
    max-height: 100px;
}
</style>
