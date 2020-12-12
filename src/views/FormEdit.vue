<template>
  <div>
      <Navbar></Navbar>
      <div class="d-flex bg mx-auto mt-5">
          <div class="shadow-sm p-3 mb-5 bg-white rounded mx-auto">
            <div class="text-center">
                <h2>Form Add Item</h2>
            </div>
            <form @submit.prevent="editData">
                <div class="form-group row">
                    <div class="mx-auto mt-2">
                        <label for="nameItem" class="col-sm-2 col-form-label">Name:</label> <br>
                    </div>
                    <div class="col-sm-10 mx-auto">
                        <input v-model="name" type="text" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="mx-auto mt-2">
                        <label for="image_url" class="col-sm-2 col-form-label">Image Url:</label> <br>
                    </div>
                    <div class="col-sm-10 mx-auto">
                        <input v-model="image_url" type="text" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="mx-auto mt-2">
                        <label for="price" class="col-sm-2 col-form-label">Price:</label> <br>
                    </div>
                    <div class="col-sm-10 mx-auto">
                        <input v-model="price" type="number" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="mx-auto mt-2">
                        <label for="stock" class="col-sm-2 col-form-label">Stock:</label> <br>
                    </div>
                    <div class="col-sm-10 mx-auto">
                        <input v-model="stock" type="number" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <div class="mx-auto mt-3">
                        <button type="submit" class="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '../components/NavbarAdmin'
export default {
  name: 'FormEdit',
  data () {
    return {
      name: '',
      image_url: '',
      price: 0,
      stock: 0
    }
  },
  components: {
    Navbar
  },
  methods: {
    editData () {
      const dataObj = {
        name: this.name,
        image_url: this.name,
        price: +this.price,
        stock: +this.stock
      }
      console.log(dataObj)
    },
    cekLocalStorage () {
      this.$router.push('/home')
    }
  },
  created () {
    const accesToken = localStorage.getItem('acces_token')
    if (!accesToken) {
      this.cekLocalStorage()
    }
  }
}
</script>

<style>

</style>
