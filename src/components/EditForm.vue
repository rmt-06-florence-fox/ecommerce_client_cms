<template>
  <b-form @submit.prevent="editHandler">

    <b-form-group label="Name" label-for="name">
    <b-form-input
      name="name"
      type="text"
      v-model="name"
      placeholder="product's name goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Image URL" label-for="imageUrl">
    <b-form-input
      name="imageUrl"
      type="text"
      v-model="imageUrl"
      placeholder="Image URL goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Stock" label-for="stock">
    <b-form-input
      name="stock"
      type="number"
      v-model="stock"
      placeholder="Product's stock goes here"
    ></b-form-input>
    </b-form-group>

    <b-form-group label="Price" label-for="price">
    <b-form-input
      name="price"
      type="number"
      v-model="price"
      placeholder="Product's stock goes here"
    ></b-form-input>
    </b-form-group>
    <b-button variant="success" type="submit"> Edit </b-button>

  </b-form>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      name: '',
      imageUrl: '',
      stock: 0,
      price: 0
    }
  },
  props: ['product'],
  methods: {
    editHandler () {
      const { name, imageUrl, stock, price } = this
      const payload = { id: this.product.id, name, imageUrl, stock, price }
      this.$store.dispatch('editHandler', payload)
      this.$bvModal.hide('edit-' + this.product.id)
    },
    initialState () {
      const { name, imageUrl, stock, price } = this.product
      this.name = name
      this.imageUrl = imageUrl
      this.stock = stock
      this.price = price
    }
  },
  created () {
    this.initialState()
  }
}
</script>

<style>

</style>
