<template>
    <div class="columns box has-background-success-light ml-2">
        <div class="level-item">
            <img v-if="!isEdit" class="image is-128x128" :src="product.image_url" alt="">
            <textarea v-else v-model="image_url" cols="14" rows="8"></textarea>
        </div>
        <div class="column ml-4 has-text-centered">
            <div class="container">
                <p class="column is-narrow title ">Nama Barang</p>
                <hr class=" has-background-grey-light">
                <p v-if="!isEdit" class="subtitle ">{{product.name}}</p>
                <textarea v-else v-model="name" cols="25" rows="3"></textarea>
            </div>
        </div>
        <div class="column has-text-centered">
            <div>
                <p class="column title">Harga</p>
                <hr class="has-background-grey-light">
                <p v-if="!isEdit" class="subtitle">{{product.price}}</p>
                <input v-else type="number" v-model="price">
            </div>
        </div>
        <div class="column has-text-centered">
            <div>
                <p class="column title">Stock</p>
                <hr class="has-background-grey-light">
                <p v-if="!isEdit" class="subtitle">{{product.stock}}</p>
                <input v-else type="number" v-model="stock">
            </div>
        </div>
        <div class="column has-text-centered">
            <div class="column">
                <!-- <p class="message-header">Action</p> -->
                <!-- <hr class="has-background-grey-light"> -->
                <div  v-if="!isEdit">
                    <button @click="editForm" class="button is-rounded is-primary is-small mr-1">Edit</button>
                    <button @click="destroy(product.id)" class="button is-rounded is-danger is-small">Delete</button><br>
                </div>
                <div v-else>
                    <a @click="submitEdit(product.id)" class="icon is-large has-text-primary mt-4 ">
                        <i class="fas fa-2x fa-check-square"></i>
                    </a>
                    <a  @click="cancelEdit" class="delete mt-5 is-large"></a>
                </div>
            </div>
        </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0,
      isEdit: false
    }
  },
  props: ['product'],
  methods: {
    editForm () {
      this.name = this.product.name
      this.image_url = this.product.image_url
      this.price = this.product.price
      this.stock = this.product.stock
      this.isEdit = true
    },
    cancelEdit () {
      this.isEdit = false
    },
    submitEdit (editId) {
      const payload = {
        name: this.name,
        image_url: this.image_url,
        price: +this.price,
        stock: +this.stock,
        id: editId
      }
      this.isEdit = false
      this.$store.dispatch('editProduct', payload)
    },
    destroy (destroyId) {
      this.$store.dispatch('destroyProduct', destroyId)
    }
  }

}
</script>

<style>

</style>
