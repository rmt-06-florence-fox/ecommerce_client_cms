<template>
  <div class="addProduct">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column p-5 is-6">
          <form class="box" @submit.prevent= "addProduct">
            <h5 class="subtitle is-5">Add the product here:</h5>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" v-model= "name">
              </div>
            </div>
            <div class="field">
              <label class="label">Image URL</label>
              <div class="control">
                <input class="input" type="text" placeholder="Link input" v-model= "image_url">
              </div>
            </div>
            <div class="field">
              <label class="label">Price</label>
              <div class="control">
                <input class="input" type="number" placeholder="Number input" v-model= "price">
              </div>
            </div>
            <div class="field">
              <label class="label">Stock</label>
              <div class="control">
                <input class="input" type="number" placeholder="Number input" v-model= "stock">
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-dark">Submit</button>
              </div>
              <div class="control">
                <router-link class="button is-light" to="/">Cancel</router-link>
              </div>
            </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image_url: '',
      price: '',
      stock: ''
    }
  },
  methods: {
    addProduct () {
      const obj = {
        name: this.name,
        image_url: this.image_url,
        price: this.price,
        stock: this.stock
      }
      this.$store.dispatch('addProduct', obj)
        .then(res => {
          // console.log(res.data)
          this.$swal.fire({
            icon: 'success',
            title: 'Add success',
            text: `Successing add product "${res.data.name}"`,
            timer: 5000
          })
          // this.$store.dispatch('fetchProduct')
          this.$router.push('/')
        })
        .catch(err => {
          const status = `${err.response.status} ${err.response.statusText}`
          const message = err.response.data.message.toString().replace(/,/g, ', ')
          this.$swal.fire({
            icon: 'error',
            title: `${status}`,
            text: `${message}`,
            footer: 'Please check again before you submit',
            timer: 3000
          })
        })
        .finally(() => {
          this.name = ''
          this.image_url = ''
          this.price = ''
          this.stock = ''
        })
    }
  }
}
</script>

<style>

</style>
