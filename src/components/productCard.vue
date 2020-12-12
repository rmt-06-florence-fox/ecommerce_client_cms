<template>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.image_url" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"> {{product.name}} </h5>
      <p class="card-text">{{product.description}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{product.price}}</li>
      <li class="list-group-item">{{product.stock}}</li>
    </ul>
    <div class="card-body">
      <a @click.prevent="changePage" class="card-link">Edit</a>
      <a @click.prevent="deleted" class="card-link">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    // editPage () {
    //   this.$emit('editPage', this.product.id)
    // },
    deleted () {
      this.$emit('deleted', this.product.id)
    },
    changePage () {
      console.log(`/edit/${this.product.id}`)
      this.$router.push(`/edit/${this.product.id}`)
    }
  }
}
</script>

<style>
  .card {
    color: black;
    display: flexbox;
  }
</style>
