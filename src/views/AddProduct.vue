<template>
  <div class="container">
      <h1 class="text-center mb-4">New Product</h1>
    <div>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Name"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            required
            placeholder="Enter product name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Image URL" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.imageUrl"
            required
            placeholder="Enter image url"
          ></b-form-input>
        </b-form-group>

         <b-form-group id="input-group-3" label="Price" label-for="input-3">
          <b-form-input
            type="number"
            id="input-3"
            v-model="form.price"
            required
            placeholder="Input price"
          ></b-form-input>
        </b-form-group>
          <!-- <p>{{ form.price }}</p> -->
         <b-form-group id="input-group-4" label="Stocks" label-for="input-4">
          <b-form-input
            id="input-4"
            type="number"
            v-model="form.stock"
            required
            placeholder="Input stocks"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      form: {
        name: '',
        imageUrl: '',
        price: null,
        stock: null
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.form.name, this.form.imageUrl, this.form.price, this.form.stock)
      this.$store.dispatch('createProduct', {
        name: this.form.name,
        imageUrl: this.form.imageUrl,
        price: this.form.price,
        stock: this.form.stock
      })
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''
      this.form.imageUrl = ''
      this.form.price = null
      this.form.stock = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style>
</style>
