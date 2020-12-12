<template>
  <b-form @submit.prevent="editHandler">

    <b-form-group label="Name" label-for="name">
    <b-form-input
      name="name"
      type="text"
      v-model="product.name"
      placeholder="product's name goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Image URL" label-for="imageUrl">
    <b-form-input
      name="imageUrl"
      type="text"
      v-model="product.imageUrl"
      placeholder="Image URL goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Stock" label-for="stock">
    <b-form-input
      name="stock"
      type="number"
      v-model="product.stock"
      placeholder="Product's stock goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Price" label-for="price">
    <b-form-input
      name="price"
      type="number"
      v-model="product.price"
      placeholder="Product's stock goes here"
    ></b-form-input>
    </b-form-group>
    <b-button variant="success" type="submit"> Edit </b-button>

  </b-form>
</template>

<script>
export default {
  name: 'EditForm',
  props: ['product'],
  methods: {
    editHandler () {
      console.log('masuk methods edit')
      console.log(this.product)
      this.$store.dispatch('editHandler', this.product)
    }
  }
}
</script>

<style>

</style>
