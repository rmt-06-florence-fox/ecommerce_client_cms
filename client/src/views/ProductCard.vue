<template>
<div class="container">
    <div class="row">
        <div class="card" >
        <img class="card-img-top" :src="products.image_url" >
      <div class="card-body">
      <p class="card-text">
        Name : {{products.name}} <br>
        Stock : {{products.stock}} <br>
        Price : Rp. {{convertedPrice}} <br>
      </p>
      <button @click.prevent="editProduct(products.id)" type="button" class="btn btn-info">edit</button>
      <button @click.prevent="deleteData" type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  pageName: 'ProductCard',
  props: ['products'],
  data () {
    return {
      name: '',
      image_url: '',
      stock: '',
      price: '',
      modal: true
    }
  },
  methods: {
    editProduct (id) {
      this.$store.dispatch('getEdit', id)
    },
    deleteData () {
      this.$store.dispatch('deleteData', this.products.id)
    }
  },
  computed: {
    convertedPrice () {
      const numberString = this.products.price.toString()
      const left = numberString.length % 3
      var price = numberString.substr(0, left)
      const ribuan = numberString.substr(left).match(/\d{3}/g)
      if (ribuan) {
        const separator = left ? '.' : ''
        price += separator + ribuan.join('.')
      }
      return price
    }
  }
}
</script>

<style scoped>

</style>
