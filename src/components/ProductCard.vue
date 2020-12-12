<template>
  <b-card
      :title="product.name"
      :img-src="product.imageUrl"
      :img-alt="product.name"
      img-height="40%"
      img-top
      style="max-width: 20rem;"
      class="m-2"
      >

      <b-card-body class="d-flex flex-column">
      <div>price : {{formattingPrice()}}</div>
      <div>stock : {{product.stock}}</div>
      </b-card-body>
    <b-card-footer fluid="sm" class="d-flex flex-column">
        <button class="m-1 btn-success" v-b-modal="modalId"> Edit </button>
        <button class="m-1 btn-dark" @click="deleteHandler(product.id)" > Delete </button>
    </b-card-footer>
    <b-card-footer>
       <b-modal :id="modalId" hide-footer title="Edit Product">
          <EditForm :product="product"/>
      </b-modal>
    </b-card-footer>
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
