<template>
  <b-card
    title="product.name"
    img-src="product.imageUrl"
    img-alt="Image" img-top tag="article" style="max-width: 20rem;"
    class="m-2"
    >

    <b-card-text class="d-flex">
     <span>price : {{product.price}}</span>
     <span>stock : {{product.stock}}</span>
    </b-card-text>

   <b-container fluid="sm" class="card">
      <b-button href="#" class="m-1" variant="success" v-b-modal.edit> Edit </b-button>
      <b-button href="#" class="m-1" variant="dark" @click="deleteHandler(product.id)" > Delete </b-button>
      <b-modal id="edit-product.id" hide-footer>
        <EditForm :product=product />
      </b-modal>
   </b-container>

  </b-card>

</template>

<script>
import EditForm from './EditForm.vue'
export default {
  name: 'ProductCard',
  components: {
    EditForm
  },
  props: ['product']
}
</script>

<style>

</style>
