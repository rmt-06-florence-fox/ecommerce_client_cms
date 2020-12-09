<template>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <b-button href="#" class="m-2" variant="success"> Edit </b-button>
    <b-button href="#" class="m-2" variant="dark"> Delete </b-button>
    <b-button href="#" class="m-2" variant="success"> Change Stock </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ProductCard'
}
</script>

<style>

</style>