<template>
  <b-card
      :title="product.name"
      :img-src="product.imageUrl"
      :img-alt="product.name"
      img-height="45%"
      img-top
      style="max-width: 20rem; height: 38rem"
      class=" "
      >

      <div class="d-flex flex-column p-2">
        <h3>price : {{formattingPrice()}}</h3>
        <h3>stock : {{product.stock}}</h3>
      </div>
    <div fluid="sm" class="d-flex flex-column bg-light">
        <button class="m-1 btn-success p-1" v-b-modal="modalId"> Edit </button>
        <button class="m-1 btn-dark p-1" @click="deleteHandler(product.id)" > Delete </button>
        <b-modal :id="modalId" hide-footer title="Edit Product">
          <EditForm :product="product"/>
        </b-modal>
    </div>

  </b-card>
</template>

<script>
import EditForm from './EditForm.vue'
export default {
  name: 'ProductCard',
  data () {
    return {
      modalId: ''
    }
  },
  components: {
    EditForm
  },
  props: ['product'],
  methods: {
    deleteHandler () {
      this.$store.dispatch('deleteHandler', this.product.id)
    },
    formattingPrice () {
      const string = this.product.price + ''
      let array = string.split('').reverse()
      let counter = 0
      array = array.map(el => {
        if (counter % 3 === 0 && counter !== 0) el = el + '.'
        counter++
        return el
      })
      return 'Rp. ' + array.reverse().join('')
    },
    getEditModal () {
      this.modalId = 'edit-' + this.product.id
    }
  },
  created () {
    this.getEditModal()
  }
}
</script>

<style>

</style>
