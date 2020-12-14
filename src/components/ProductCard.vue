<template>
  <div class="col-md-4 mt-4">
    <div class="card" style="width: 18rem;" v-if="sameId(product.id, editProductId)">
      <img class="card-img-top" src="https://cerberus-laboratories.com/images/blog/random_numbers.jpg" :alt="product.image_url">
      <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Stock: {{product.stock}}</li>
        <li class="list-group-item">Rp. {{setLabel(product.price)}}</li>
      </ul>
      <div class="card-body">
        <button
          type="button"
          class="btn btn-primary"
          @click.prevent="edit(product.id)"
        >Edit</button>
        <button
          type="button"
          class="btn btn-danger ml-2"
          @click.prevent="remove(product.id)"
        >Remove</button>
      </div>
    </div>
    <div class="card" style="width: 18rem;" v-else>
      <div class="card-body">
        <h5 class="card-title">Edit Form</h5>
      </div>
      <EditForm :product="product"></EditForm>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import EditForm from './EditForm'

export default {
  name: 'ProductCard',
  components: { EditForm },
  props: ['product'],
  computed: {
    editProductId () {
      return this.$store.state.editForm
    }
  },
  methods: {
    setLabel (price) {
      const harga = '' + price
      const label = harga.split('')
      let count = 0
      for (let i = label.length; i >= 0; i--) {
        if (i === label.length) {
          count++
          continue
        }
        if (count % 3 === 0) {
          label.splice(i, 0, '.')
        }
        count++
      }
      if (label[0] === '.') {
        label.shift()
      }
      return (label.join('') + ',00')
    },
    remove (id) {
      Swal.fire({
        icon: 'warning',
        title: 'Are you sure want to delete this product?',
        showCancelButton: true,
        confirmButtonText: 'A hundred percent sure',
        cancelButtonText: 'Actually, no',
        cancelButtonColor: 'red'
      })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.$store.dispatch('removeProduct', id)
              .then((response) => {
                Swal.fire('Deleted!', '', 'success')
                this.$store.dispatch('fetchProduct')
              })
              .catch((error) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Oppss...',
                  text: `${error.response.data.message}`
                })
              })
          } else {
            Swal.fire('Canceled!', '', 'info')
          }
        })
    },
    edit (payload) {
      this.$store.dispatch('editProduct', payload)
    },
    sameId (product, vuex) {
      if (product !== vuex) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style>

</style>
