<template>
  <div>
    <div class="container">
      <form @submit.prevent="createProduct" action="">
        <div class="form-group row mt-2">
          <label class="col-sm-2 col-form-label" for="">name</label>
          <div class="col-sm-10">
            <input v-model="payload.name" class="form-control" type="text">
          </div>
        </div>
        <div class="form-group row mt-2">
          <label class="col-sm-2 col-form-label" for="">image url</label>
          <div class="col-sm-10">
            <input v-model="payload.image_url" class="form-control" type="text">
          </div>
        </div>
        <div class="form-group row mt-2">
          <label class="col-sm-2 col-form-label" for="">price</label>
          <div class="col-sm-10">
            <input v-model="payload.price" class="form-control" type="text">
          </div>
        </div>
        <div class="form-group row mt-2">
          <label class="col-sm-2 col-form-label" for="">stock</label>
          <div class="col-sm-10">
            <input v-model="payload.stock" class="form-control" type="text">
          </div>
        </div>
        <button class="btn btn-primary mt-5">add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddProduct',
  data () {
    return {
      payload: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    createProduct () {
      // console.log(this.payload)
      this.$store.dispatch('create', this.payload)
    }
  }
}
</script>

<style>

</style>
