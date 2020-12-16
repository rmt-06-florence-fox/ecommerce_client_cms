<template>
  <div class="editProduct">
    <div style="height: 1rem"/>
    <div class="container  is-flex is-align-items-center is-justify-content-center" style="min-height: 100vh">
      <div class="column p-5 is-6">
          <form class="box" @submit.prevent= "editProduct(product)">
            <h5 class="subtitle is-5">Edit the product here:</h5>
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="Text input" v-model= "productName">
              </div>
            </div>
            <div class="field">
              <label class="label">Image URL</label>
              <div class="control">
                <input class="input" type="text" placeholder="Link input" v-model= "productImage">
              </div>
            </div>
            <div class="field">
              <label class="label">Category</label>
              <div class="control">
                <input class="input" type="text" placeholder="Link input" v-model= "productCategory">
              </div>
            </div>
            <div class="field">
              <label class="label">Price</label>
              <div class="control">
                <input class="input" type="number" placeholder="Number input" v-model= "productPrice">
              </div>
            </div>
            <div class="field">
              <label class="label">Stock</label>
              <div class="control">
                <input class="input" type="number" placeholder="Number input" v-model= "productStock">
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
  name: 'EditProduct',
  methods: {
    editProduct (value) {
      const obj = {
        id: this.$route.params.id,
        name: value.name,
        image_url: value.image_url,
        category: value.category,
        price: value.price,
        stock: value.stock
      }
      // console.log(obj)
      this.$store.dispatch('editProduct', obj)
        .then(res => {
          // console.log(res.data)
          this.$swal.fire({
            icon: 'success',
            title: 'Edit success',
            text: `Successing edit product "${res.data.name}"`,
            timer: 5000
          })
          this.$store.dispatch('fetchProduct')
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
          this.category = ''
          this.price = ''
          this.stock = ''
        })
    }
  },
  created () {
    const id = this.$route.params.id
    this.$store.dispatch('getProduct', id)
  },
  computed: {
    product () {
      return this.$store.state.product
    },
    productName: {
      get () {
        return this.$store.state.product.name
      },
      set (value) {
        this.$store.commit('CHANGENAME', value)
      }
    },
    productImage: {
      get () {
        return this.$store.state.product.image_url
      },
      set (value) {
        this.$store.commit('CHANGEIMAGE', value)
      }
    },
    productCategory: {
      get () {
        return this.$store.state.product.category
      },
      set (value) {
        this.$store.commit('CHANGECATEGORY', value)
      }
    },
    productPrice: {
      get () {
        return this.$store.state.product.price
      },
      set (value) {
        this.$store.commit('CHANGEPRICE', value)
      }
    },
    productStock: {
      get () {
        return this.$store.state.product.stock
      },
      set (value) {
        this.$store.commit('CHANGESTOCK', value)
      }
    }
  }
}
</script>

<style>

</style>
