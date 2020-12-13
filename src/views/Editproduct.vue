<template>
  <div>
    <div class="container">
      <div v-if="currentData.name" class="row">
        <div class="col-2"><img :src="currentData.image_url" alt="" srcset=""></div>
        <div class="col-10">
          <form @submit.prevent="doEdit" action="">
            <div class="form-group row mt-2">
              <label class="col-sm-2 col-form-label" for="">name</label>
              <div class="col-sm-10">
                <input v-model="currentData.name" class="form-control" type="text">
              </div>
            </div>
            <div class="form-group row mt-2">
              <label class="col-sm-2 col-form-label" for="">image url</label>
              <div class="col-sm-10">
                <input v-model="currentData.image_url" class="form-control" type="text">
              </div>
            </div>
            <div class="form-group row mt-2">
              <label class="col-sm-2 col-form-label" for="">price</label>
              <div class="col-sm-10">
                <input v-model="currentData.price" class="form-control" type="text">
              </div>
            </div>
            <div class="form-group row mt-2">
              <label class="col-sm-2 col-form-label" for="">stock</label>
              <div class="col-sm-10">
                <input v-model="currentData.stock" class="form-control" type="text">
              </div>
            </div>
            <button class="btn btn-primary mt-5">edit</button>
          </form>
        </div>
      </div>
      <div v-else>
        <h1>PRODUCT NOT FOUND</h1>
        <p><small>404</small></p>
        <router-link to="/" class="fas fa-database mb-4"> back to list</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
  methods: {
    getPopulateData () {
      const id = +this.$route.params.id
      this.$store.dispatch('findByPk', id)
    },
    doEdit () {
      this.$store.dispatch('update', this.currentData)
    }
  },
  created () {
    this.getPopulateData()
  },
  computed: {
    currentData () {
      return this.$store.state.editProduct
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
img {
  width: 200px;
}
</style>
