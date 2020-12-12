<template>
<div>
  <!-- {{editproduct}} -->
  <form @submit.prevent="submit" class="form">
    <div class="form-floating mb-3">
      <input  v-model="name" type="text" class="form-control" id="name" placeholder="Produk Name" >
      <label for="name" id="name" > {{editproduct[0].name}} </label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="image_url" type="text" class="form-control" id="image_url" placeholder="Image-Url">
      <label for="image_url">{{editproduct[0].image_url}}</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="stock" type="number" class="form-control" id="stock" placeholder="2">
      <label for="stock">{{editproduct[0].stock}}</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="price" type="text" class="form-control" id="price" placeholder="20000">
      <label for="price">{{editproduct[0].price}}</label>
      <button type="sumbit" class="btn btn-outline-success"> Submit </button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  pageName: 'EditProduct',
  data () {
    return {
      id: +this.$route.params.id,
      name: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  components: {
  },
  methods: {
    fetchProduct () {
      // const id = this.$route.params.id
      // this.$store.dispatch('fetchData', this.$route.params.id)
      this.$store.dispatch('getEdit', this.$route.params.id)
    },
    submit () {
      const data = {
        id: this.id,
        name: this.name,
        image_url: this.image_url,
        stock: this.stock,
        price: this.price
      }
      console.log(data)
      this.$store.dispatch('updateProduct', data)
    }
  },
  computed: {
    editproduct () {
      return this.$store.state.editproduct
    }
  },
  created () {
    this.fetchProduct()
  }
}
</script>

<style scoped>
.form{
  min-width: 20px;
  margin-left: 300px;
  margin-right: 300px;
  background-color: grey;
  padding: 30px;
}
.btn-outline-success{
  background-color:yellowgreen;
  color: grey;
}

</style>
