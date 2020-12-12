<template>
  <div>
    <a class="btn btn-primary" v-b-modal.modal-prevent-closing @click="populate(productsById)">Update</a>

    <div class="mt-3">
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Update Your Product"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :state="imageUrlState"
          label="imageUrl"
          label-for="imageUrl-input"
          invalid-feedback="Image Url is required"
        >
          <b-form-input
            id="imageUrl-input"
            v-model="imageUrl"
            :state="imageUrlState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :state="priceState"
          label="Price"
          label-for="price-input"
          invalid-feedback="Price is required"
        >
          <b-form-input
            id="price-input"
            v-model="price"
            :state="priceState"
            required
          ></b-form-input>
        </b-form-group>

         <b-form-group
          :state="stockState"
          label="Stock"
          label-for="stock-input"
          invalid-feedback="Stock is required"
        >
          <b-form-input
            id="stock-input"
            v-model="stock"
            :state="stockState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ['productsById'],
  data () {
    return {
      name: '',
      nameState: null,
      imageUrl: '',
      imageUrlState: null,
      price: '',
      priceState: null,
      stock: '',
      stockState: null
    }
  },
  methods: {
    checkFormValidity () {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      this.imageUrlState = valid
      this.priceState = valid
      this.stockState = valid
      return valid
    },
    resetModal () {
      this.name = ''
      this.nameState = null
      this.imageUrl = ''
      this.imageUrlState = null
      this.price = ''
      this.priceState = null
      this.stock = ''
      this.stockState = null
    },
    handleOk (bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      this.$store.dispatch('updateProduct', {
        id: this.$route.params.id,
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        stock: this.stock
      })
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    populate (obj) {
      // console.log(obj)
      this.name = obj.name
      this.imageUrl = obj.imageUrl
      this.price = obj.price
      this.stock = obj.stock
    }
  }
}
</script>

<style>
</style>
