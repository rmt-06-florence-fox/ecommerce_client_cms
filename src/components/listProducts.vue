<template>
  <div class="columns">
    <div class="column is-narrow">
      <div class="box" style="width: 200px">
        <img :src= "image" alt="" class="image is-fullwidth">
      </div>
    </div>
    <div class="column">
      <div class="box">
        <div class="columns">
          <div class="column is-8">
            <p class="title is-4 pb-1">{{list.name}}</p>
            <ol class="subtitle" style="list-style-type: none">
              <li class="is-size-6"><b>Category :</b> {{list.category}}</li>
              <li class="is-size-6"><b>Price :</b> {{priceRp}}</li>
              <li class="is-size-6"><b>Stock(s) :</b> {{list.stock}}</li>
            </ol>
          </div>
          <div class="column is-4 is-flex is-align-items-center is-justify-content-center">
            <p class="buttons">
              <button class="button is-large" @click.prevent= "getEdit">
                <span class="icon is-large">
                  <i class="fas fa-edit"></i>
                </span>
              </button>
              <button class="button is-large" @click.prevent= "getDelete">
                <span class="icon is-large">
                  <i class="fas fa-trash-alt"></i>
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListProducts',
  data () {
    return {
      image: `${this.list.image_url}`.replace(/'/g, '')
    }
  },
  methods: {
    getEdit () {
      const id = this.list.id
      this.$store.dispatch('getProduct', id)
      this.$router.push(`/editProduct/${id}`)
    },
    getDelete () {
      const id = this.list.id
      this.$swal.fire({
        title: 'Are you sure to delete this product?',
        text: "Once delete, you can't restore this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        confirmButtonText: 'Yes, delete'
      })
        .then((res) => {
          if (res.isConfirmed) {
            this.$store.dispatch('destroyProduct', id)
              .then(res => {
                this.$swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success'
                })
                this.$store.dispatch('fetchProduct')
              })
              .catch(err => {
                this.$swal.fire({
                  icon: 'error',
                  title: `${err.response.status} ${err.response.statusText}`,
                  text: `${err.response.message}`,
                  timer: 5000
                })
              })
          }
        })
    }
  },
  props: ['list'],
  computed: {
    priceRp: function () {
      let rupiah = ''
      const priceReverse = this.list.price.toString().split('').reverse().join('')
      for (let i = 0; i < priceReverse.length; i++) if (i % 3 === 0) rupiah += priceReverse.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  }
}
</script>

<style>

</style>
