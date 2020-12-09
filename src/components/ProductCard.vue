<template>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image" img-top tag="article" style="max-width: 20rem;"
    class="m-2"
    >

    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

   <b-container fluid="sm" class="card">
      <b-button href="#" class="m-1" variant="success" v-b-modal.edit> Edit </b-button>
      <b-button href="#" class="m-1" variant="dark" > Delete </b-button>
      <b-modal id="edit" hide-footer>
        <EditForm/>
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
  }
}
</script>

<style>

</style>