<template>
  <div class="col-12">
       <div class="cart_section">
     <div class="container-fluid">
         <div class="row justify-content-center">
             <div class="col-lg-10">
                 <div class="cart_container">
                     <div class="cart_title">Etalase {{ title }}</div>
                     <div v-if="addForm === false" @click="addFormStatus" class="cart_buttons"><button type="button" class="button cart_button_checkout">Tambah Produk</button></div>
                     <div class='col-12 m-5' v-if="addForm === true">
                      <form @submit.prevent="addProduct">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Nama</label>
                          <input v-model="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nama produk">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Stock</label>
                          <input v-model="stock" type="text" class="form-control" id="exampleInputPassword1" placeholder="Jumlah produk">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Harga</label>
                          <input v-model="price" type="text" class="form-control" id="exampleInputPassword1" placeholder="Harga produk">
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Foto</label>
                          <input v-model="image_url" type="text" class="form-control" id="exampleInputPassword1" placeholder="Link gambar">
                        </div>
                        <button type="submit" class="btn btn-primary">Tambahkan</button>
                      </form>
                        <p @click="addFormStatusFalse" class="col-12 m-2">cancel</p>
                     </div>
                     <!-- benerin -->
                     <ProductRow v-for="product in allProducts" :key="product.id" :product="product"></ProductRow>
                 </div>
             </div>
         </div>
     </div>
 </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductRow from '../components/ProductRow'

export default {
  components: {
    ProductRow
  },
  data () {
    return {
      addForm: false,
      name: '',
      image_url: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    fetchData () {
      this.$store.dispatch('fetchData')
    },
    goDetail (id) {
      console.log(id)
      this.$router.push(`/products/${id}`)
    },
    addFormStatus () {
      this.addForm = true
    },
    addFormStatusFalse () {
      this.addForm = false
    },
    addProduct () {
      const obj = {
        name: this.name,
        stock: this.stock,
        price: this.price,
        image_url: this.image_url
      }
      this.$store.dispatch('addProduct', obj)
        .then(response => {
          console.log(response)
          this.fetchData()
          this.addForm = false
          this.name = ''
          this.stock = ''
          this.price = ''
          this.image_url = ''
          // console.log(this.allProducts)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchData()
    this.addForm = false
  },
  computed: {
    ...mapState(['title', 'allProducts'])
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px
}

p:hover {
  cursor: pointer;
  color: rgb(37, 89, 185);
}

.cart_list:hover {
  cursor: pointer;
  background-color: #ccc;
}
body {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: #E0E0E0;
    color: #000000
}

ul {
    list-style: none;
    margin-bottom: 0px
}

.button {
    display: inline-block;
    background: #0e8ce4;
    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease
}

.button a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px
}

.button:hover {
    opacity: 0.8
}

.cart_section {
    width: 100%;
    padding-top: 93px;
    padding-bottom: 111px
}

.cart_title {
    font-size: 30px;
    font-weight: 500
}

.cart_items {
    margin-top: 8px
}

.cart_list {
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff
}

.cart_item {
    width: 100%;
    padding: 15px;
    padding-right: 46px
}

.cart_item_image {
    width: 133px;
    height: 133px;
    float: left
}

.cart_item_image img {
    max-width: 100%
}

.cart_item_info {
    width: calc(100% - 133px);
    float: left;
    padding-top: 18px
}

.cart_item_name {
    margin-left: 7.53%
}

.cart_item_title {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5)
}

.cart_item_text {
    font-size: 18px;
    margin-top: 35px
}

.cart_item_text span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 11px;
    -webkit-transform: translateY(4px);
    -moz-transform: translateY(4px);
    -ms-transform: translateY(4px);
    -o-transform: translateY(4px);
    transform: translateY(4px)
}

.cart_item_price {
    text-align: right
}

.cart_item_total {
    text-align: right
}

.order_total {
    width: 100%;
    height: 60px;
    margin-top: 30px;
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding-right: 46px;
    padding-left: 15px;
    background-color: #fff
}

.order_total_title {
    display: inline-block;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 60px
}

.order_total_amount {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    margin-left: 26px;
    line-height: 60px
}

.cart_buttons {
    margin-top: 60px;
    text-align: right
}

.cart_button_clear {
    display: inline-block;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: rgba(0, 0, 0, 0.5);
    background: #FFFFFF;
    border: solid 1px #b2b2b2;
    padding-left: 35px;
    padding-right: 35px;
    outline: none;
    cursor: pointer;
    margin-right: 26px
}

.cart_button_clear:hover {
    border-color: #0e8ce4;
    color: #0e8ce4
}

.cart_button_checkout {
    display: inline-block;
    border: none;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px;
    outline: none;
    cursor: pointer;
    vertical-align: top
}
</style>
