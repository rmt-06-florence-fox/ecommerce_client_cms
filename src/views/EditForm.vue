<template>
   <div>
     <img src="../assets/pattern-bg.jpg" alt="" id="bg">
      <form @submit.prevent="updateData">
        <div class="form-group">
            <label for="exampleInputEmail1">Name :</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="name">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Image Url :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="image_url">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Price :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="price">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Stock :</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="stock">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
    //   id: this.$store.state.editedProduct.id,
      name: this.$store.state.editedProduct.name,
      image_url: this.$store.state.editedProduct.image_url,
      price: this.$store.state.editedProduct.price,
      stock: this.$store.state.editedProduct.stock
    }
  },
  methods: {
    updateData () {
      const payload = {
        id: this.$store.state.editedProduct.id,
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('updateProduct', payload)
    }
  }
}
</script>

<style>

</style>
