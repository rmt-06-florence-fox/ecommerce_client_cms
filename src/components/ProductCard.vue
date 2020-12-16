<template>
  <b-card class="rounded-0">
    <b-row no-gutters>
      <b-col class="col-5 d-flex align-items-center">
        <b-img
          rounded
           height="100px"
            width="100px"
          :src=product.image_url
          alt="Image 1"
        ></b-img>
        <h6 class="pl-3 text-left">{{product.name}}</h6>
      </b-col>
      <b-col class="col-7 d-flex align-center">
        <b-form inline class="justify-content-around">
          <b-input-group size="sm" class="col-4 m-0 p-0" prepend="IDR">
            <b-form-input
              rounded
              size="sm"
              v-model="updateData.price"
              :placeholder="formatPrice(product.price)"

            ></b-form-input>
          </b-input-group>
          <b-input-group size="sm" class="col-3 m-0 p-0" append="QTY">
            <b-form-input
              rounded
              size="sm"
              v-model='updateData.stock'
              :placeholder="product.stock.toString()"

            ></b-form-input>
          </b-input-group>

          <mdb-btn size="sm"  class="col-2 pr-1 pl-1 m-0" color="indigo" @click='updateProduct'>Update</mdb-btn>
          <b-icon type="button" icon="trash-fill" aria-hidden="true" @click.prevent='deleteProduct'></b-icon>
        </b-form>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mdbBtn } from 'mdbvue'
export default {
  name: 'ProductCard',
  props: ['product'],
  data () {
    return {
      updateData: {
        id: this.product.id,
        name: this.product.name,
        image_url: this.product.image_url,
        price: '' || this.product.price,
        stock: '' || this.product.stock
      }
    }
  },
  methods: {
    formatPrice (value) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    updateProduct () {
      this.$store.dispatch('updateProduct', this.updateData)
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', this.product.id)
    }
  },
  components: {

    mdbBtn
  }

}
</script>

<style>
</style>
