<template>
  <!-- ONE PRODUCT  -->
  <div class="card mt-2 shadow bg-task border-danger">
    <div class="card-body p-0">
      <div class="row d-flex">
        <div class="col-2">
          <div class="card-header border-0">
            <img class="gambar-product" :src="product.image_url">
          </div>
        </div>
        <div class="col-3 align-self-center">
          <h3>{{product.name}}</h3>
        </div>
        <div class="col-3 align-self-center">
          <h3>{{product.stock}}</h3>
        </div>
        <div class="col-3 align-self-center">
          <h3>{{product.price}}</h3>
        </div>
        <div class="col-1 align-self-center justify-content-center p-0">
          <ul style="list-style-type:none" class="p-0">
            <li>
              <button @click="editProduct" class="btn-warning shadow p-0 actionbutton">
                <i class="fa fa-edit fa-fw"></i>
              </button>
            </li>
            <li>
              <button @click="updateStock" class="btn-success shadow p-0 actionbutton">
                <i class="fa fa-check-square"></i>
              </button>
            </li>
            <li>
              <button @click="deleteProduct" class="btn-danger shadow p-0 actionbutton">
                <i class="fa fa-trash-o fa-fw"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- ONE PRODUCT  -->
</template>

<script>

export default {
  name: 'ItemCard',
  props: ['product'],
  data () {
    return {
      productName: ''
    }
  },
  methods: {
    deleteProduct () {
      const id = this.product.id
      this.$store.dispatch('deleteProduct', id)
    },
    editProduct () {
      const id = this.product.id
      this.$router.push(`/editProduct/${id}`)
    },
    updateStock () {
      const id = this.product.id
      this.$store.dispatch('updateStock', id)
    }
  }
}
</script>

<style>

</style>
