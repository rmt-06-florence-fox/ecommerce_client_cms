<template>
 <b-container>
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
      <b-button href="#" class="m-1" variant="success"> Edit </b-button>
      <b-button href="#" class="m-1" variant="dark"> Delete </b-button>
   </b-container>
   
  </b-card>
  <EditForm/>

 </b-container>
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