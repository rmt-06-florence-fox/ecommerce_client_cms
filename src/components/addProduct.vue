<template>
    <div>
        <p class="subtitle has-text-success-dark has-text-weight-bold">Add New Product</p>
        <div class="box container">
            <div class="field">
                <label class="label has-text-left">Name</label>
                <div class="control">
                    <input v-model="name" class="input" type="text" placeholder="e.g celana superman">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Image Url</label>
                <div class="control">
                    <input v-model="image_url" class="input" type="text" placeholder="e.g. https://p.ipricegroup.com/3c2.jpg ">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Price</label>
                <div class="control">
                    <input v-model="price" class="input" type="number">
                </div>
            </div>
            <div class="field">
                <label class="label has-text-left">Stock</label>
                <div class="control">
                    <input v-model="stock" class="input" type="number">
                </div>
            </div>
            <button @click="addProduct" class="button is-success is-outlined">Submit</button>
        </div>
        <img class="add-img" src="../img/path126.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock
      }
      this.$store.dispatch('addProduct', payload)
    }
  }
}
</script>

<style>
    .add-img {
        position: relative;
        z-index: 100;
        height: 100px;
        top: -122px;
        left: -90px;
    }
</style>
