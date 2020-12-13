<template>
  <div class="col-md-6">
    <div class="card shadow">
      <img
        class="card-img-top"
        :src="product.imageUrl"
        alt="Card image cap"
        style="height: 250px"
      />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Price
            <span class="badge badge-primary badge-pill"
              >Rp {{ product.price.toLocaleString("id") }}</span
            >
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Stocks
            <span class="badge badge-primary badge-pill">{{
              product.stock
            }}</span>
          </li>
        </ul>
        <a class="btn btn-primary mt-2" @click.prevent="detail(product.id)">Edit</a>
        <a class="btn btn-danger mt-2 ml-2" @click.prevent="destroyProd(product.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    detail (id) {
      this.$router.push(`products/${id}`)
    },
    destroyProd (id) {
      this.$store.dispatch('destroyProd', id)
        .then(_ => {
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
