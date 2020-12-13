<template>
    <div>
        <!-- <h1>ini halaman update {{ product }}</h1> -->
        <h1>Update Form</h1>
        <form @submit.prevent="updateProduct">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" id="name" :placeholder="product.name" v-model="name">
            </div>
            <div class="mb-3">
                <label class="form-label">Image</label>
                <input type="text" class="form-control" id="image_url" :placeholder="product.image_url" v-model="image_url">
            </div>
            <div class="mb-3">
                <label class="form-label">Price</label>
                <input type="number" class="form-control" id="price" :placeholder="product.price" v-model="price">
            </div>
            <div class="mb-3">
                <label class="form-label">Stock</label>
                <input type="number" class="form-control" id="stock" :placeholder="product.stock" v-model="stock">
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
            <a href="#" @click="backProduct" id="back" class="btn btn-warning">Back To Product</a>
        </form>
    </div>
</template>

<script>
export default {
  name: 'PostProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    updateProduct () {
      const id = this.$route.params.idProduct
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock,
        id
      }
      // console.log(id, payload)
      this.$store.dispatch('UpdateProduct', payload)
    },
    backProduct () {
      this.$router.push('/main-page/product')
    },
    dataPage () {
      const id = this.$route.params.idProduct
      this.$store.dispatch('DataProduct', id)
    }
  },
  created () {
    this.dataPage()
    console.log(this.$route.params.idProduct, 'dari update created')
  },
  computed: {
    product () {
      return this.$store.state.product
    }
  }
}
</script>

<style>
#back {
    margin-left: 10px;
}
</style>
