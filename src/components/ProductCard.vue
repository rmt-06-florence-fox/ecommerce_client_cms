<template>
  <div class="product-card">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="card" style="width: 18rem">
            <img :src="products.image_url" class="product-image card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                <strong>{{ products.name }}</strong>
              </h5>
              <p class="card-text">Price : Rp. {{ products.price }}</p>
              <p class="card-text">Stock : {{ products.stock }}</p>
              <p class="card-text">ID : {{ products.id }}</p>
            </div>
            <div class="card-body">
              <button @click="jumpToEditProduct(products.id)">
                Edit
              </button>
              <button
                @click.prevent="deleteProduct(products.id)"
                class="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['products'],
    methods: {
      jumpToEditProduct(payload) {
        this.$store.commit('SET_PRODUCT', this.products)
        this.$router.push({ name: 'EditProduct', params: {id: payload} })
      },
      deleteProduct(payload) {
        this.$store.dispatch('deleteProduct', payload)
      }
    }
};
</script>

<style>
.product-card{
  margin: 10px;
}

.product-image{
  padding: 10px;
}
</style>