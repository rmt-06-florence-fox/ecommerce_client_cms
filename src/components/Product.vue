<template>
  <div>
      <div class="product">
        <div class="col-1">
          <div class="product-property product-num">{{ no }}</div>
        </div>
        <div class="col-3">
          <div class="product-property product-image">
            <img id="product-image" width="200px" :src="product.image_url"/>
          </div>
        </div>
        <div class="col-2">
          <div class="product-property product-name">{{ product.name }}</div>
        </div>
        <div class="col-2">
          <div class="product-property product-price" id="product-price">
              {{ priceInRupiah }}
          </div>
        </div>
        <div class="col-2">
          <div class="product-property product-stock" id="product-stock">
            {{ product.stock }}
          </div>
        </div>
        <div class="col-1">
          <button class="btn" @click="editProductForm">
            <i class="far fa-edit" style="font-size:24px"></i>
          </button>
        </div>
        <div class="col-1">
          <button class="btn" @click="deleteProduct">
            <i class="fa fa-trash-o" style="font-size:24px"></i>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Product',
  methods: {
    deleteProduct () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Are you sure?',
          showCancelButton: true,
          confirmButtonText: 'Delete'
        })
          .then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success')
              return this.$store.dispatch('deleteProduct', this.product.id)
            }
          })
          .then(() => {
            this.$store.dispatch('getProducts')
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    editProductForm () {
      if (this.$store.state.loggedIn) {
        this.$store.commit('insertEditProductValue', this.product)
        this.$router.push(`/${this.product.id}`)
      } else {
        Swal.fire('Please login first')
      }
    }
  },
  props: ['product', 'counter', 'categories'],
  computed: {
    no () {
      return this.counter + 1
    },
    priceInRupiah () {
      let rupiah = ''
      const angkatotal = this.product.price.toString().split('').reverse().join('')
      for (let i = 0; i < angkatotal.length; i++) { if (i % 3 === 0) rupiah += angkatotal.substr(i, 3) + '.' }
      return (
        'Rp. ' +
          rupiah
            .split('', rupiah.length - 1)
            .reverse()
            .join('')
      )
    }
  }
}
</script>

<style scoped>
#product-image {
  border-radius: 40px;
  width: 100%;
  height: auto;
}

.fa:hover {
  color: #f6b93b;
  transition: 300ms;
}

.far:hover {
  color: #f6b93b;
  transition: 300ms;
}

.product {
  align-items: center;
  background-color: #2f3640;
  display: flex;
  border-radius: 30px;
  font-size: 2em;
  justify-content: space-around;
  margin: 5px;
  padding: 10px;
  width: 99%;
}

.product-property {
  font-size: 20px !important;
  color: white;
}

.fa {
  color:black
}

</style>
