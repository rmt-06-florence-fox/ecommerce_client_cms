<template>
  <b-card
    :title="product.name"
    :img-src="product.imageUrl"
    img-alt="Image"
    img-top
    style="max-width: 15rem;"
    class="m-2"
    >

    <b-card-body class="d-flex flex-column">
     <div>price : {{product.price}}</div>
     <div>stock : {{product.stock}}</div>
    </b-card-body>

   <b-card-footer fluid="sm" class="card">
      <b-button href="#" class="m-1" variant="success" v-b-modal.edit> Edit </b-button>
      <b-button href="#" class="m-1" variant="dark" @click="deleteHandler(product.id)" > Delete </b-button>
      <b-modal :id="edit-product.id" hide-footer>
        <EditForm :product=product />
      </b-modal>
   </b-card-footer>

  </b-card>

</template>

<script>
import EditForm from './EditForm.vue'
export default {
  name: 'ProductCard',
  components: {
    EditForm
  },
  props: ['product'],
  methods: {
    deleteHandler () {
      this.$store.dispatch('deleteHandler', this.product.id)
    }
  }
}
</script>

<style>

</style>
