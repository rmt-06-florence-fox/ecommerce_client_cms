<template>
  <div>
    <div class="card h-100">
      <img :src="product.image_url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">{{ product.name }}</h5>
      </div>
      <div class="card-footer price">
        <p class="card-text fas fa-coins"> <small>Rp</small>{{ convertRupiah }},00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  computed: {
    convertRupiah () {
      const numberString = this.product.price.toString()
      const sisa = numberString.length % 3
      var rupiah = numberString.substr(0, sisa)
      const ribuan = numberString.substr(sisa).match(/\d{3}/g)
      if (ribuan) {
        const separator = sisa ? '.' : ''
        rupiah += separator + ribuan.join('.')
      }
      return rupiah
    }
  }
}
</script>

<style scoped>
  .price{
    color: #16a592;
    font-size: small;
    display: flex;
    /* justify-content: flex-end; */
  }
  img {
    max-height: 200px;
    max-width: 250px;
  }
</style>
