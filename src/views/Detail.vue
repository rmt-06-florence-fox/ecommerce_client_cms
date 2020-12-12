<template>
  <div class="detail container w-25">
    <!-- <h1>This is an detail page of {{ productsById.data }}</h1> -->
    <div class="card shadow">
      <img
        class="card-img-top"
        style="height: 250px"
        :src="productsById.data.imageUrl"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">{{ productsById.data.name }}</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Price
            <span class="badge badge-primary badge-pill"
              >Rp {{ productsById.data.price.toLocaleString("id") }}</span
            >
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Stocks
            <span class="badge badge-primary badge-pill">{{
              productsById.data.stock
            }}</span>
          </li>
        </ul>
        <!-- <a class="btn btn-primary mt-2" >Update</a> -->
          <ModalUpdate :productsById="productsById.data" class="mt-4"></ModalUpdate>
      </div>
    </div>
  </div>
</template>

<script>
import ModalUpdate from '../components/ModalUpdate'
export default {
  name: 'Detail',
  components: {
    ModalUpdate
  },
  methods: {
    fetchProductsById () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchProductsById', id)
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.fetchProductsById()
  },
  computed: {
    productsById () {
      return this.$store.state.productsById
    }
  }
}
</script>

<style>

</style>
