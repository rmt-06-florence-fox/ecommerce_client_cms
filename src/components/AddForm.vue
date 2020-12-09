<template>
  <b-form>

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
    <b-button variant="success"> Add </b-button>

  </b-form>
</template>

<script>
export default {
  name: 'AddForm',
  data (){
    return {
      name : '',
      imageUrl : '',
      price : 0,
      stock : 0
    }
  }
}
</script>

<style>

</style>
