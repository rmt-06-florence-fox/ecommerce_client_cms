<template>
  <div class="addProductPage">
    <h1>ADD PRODUCT</h1>
    <div class="col-4 border border-transparent mx-auto shadow-lg p-3 mb-5 bg-white rounded">
        <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/822/4281206822_be209932-fad6-4caa-8203-807240681ada.png?cb=1607775908" class="img2">
      <form style="margin-top: 80px;">
        <div class="form-group">
          <label for="InputName">name product</label>
          <input v-model="name"  placeholder="product name" type="text" class="form-control" id="InputproductName" required>
          <small id="productNameHelp" class="form-text text-muted">example: baju hermes</small>
        </div>
        <div class="form-group">
          <label for="InputImageUrl">Image Url</label>
          <input v-model="imageUrl" placeholder="Image Url" type="text" class="form-control" id="InputImageUrl" required>
          <small id="productNameHelp" class="form-text text-muted">example: http://...</small>
        </div>
        <div class="form-group">
          <label for="InputPrice">price</label>
          <input v-model="price" placeholder="price" type="text" class="form-control" id="Inputprice" required>
        </div>
        <div class="form-group">
          <label for="InputStock">Stock</label>
          <input v-model="stock" placeholder="Stock" type="text" class="form-control" id="InputStock" required>
        </div>
        <button type="button" @click="addProduct" class="btn-login">Add</button>
        <button @click="cancel" class="btn-cancel">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: '',
      imageUrl: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const payload = {
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', payload)
        .then(({ data }) => {
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          this.$router.push({ path: '/' })
          console.log(error)
        })
    },
    cancel () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
  h1 {
    text-decoration: underline;
  }
  .addProductPage {
    margin-top: 10%;
  }
  .img2 {
    width: 200px;
    margin-top: 10px;
    margin-bottom: -50px;
  }
  .btn-login {
    width: 100px;
    border-radius: 10px;
    background-color: white;
    border: 1px solid #e5e5e5;
  }
  .btn-login:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: rgb(231, 228, 228);
  }
  .btn-login:focus {
    outline: none;
  }
  .btn-cancel {
    margin-left: 10px;
    width: 100px;
    border-radius: 10px;
    background-color: rgb(168, 167, 167);
    border: 1px solid #e5e5e5;
  }
  .btn-cancel:hover {
    transition: 0.24s;
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.726);
  }
  .btn-cancel:focus {
    outline: none;
  }
</style>
