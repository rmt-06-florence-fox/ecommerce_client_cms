<template>
  <div class="card col-md-5 login-form mt-3">
    <div class="card-body p-0">
      <div class="input-group mb-3 mb-0">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon3">Name</span>
        </div>
        <input type="text" class="form-control" aria-describedby="basic-addon3" v-model="name" required>
      </div>
    </div>
    <div class="button-add-form">
      <button type="button" class="btn btn-primary col-5 p-1 m-2 btn-add" @click.prevent="editCategory">Edit Category</button>
      <button type="button" class="btn btn-danger col-4 p-1 m-2 btn-add" @click.prevent="cancel">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditCategory',
  data () {
    return {
      category: {},
      name: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/category')
    },
    editCategory () {
      this.$store.dispatch('editCategory', { id: this.category.id, name: this.name })
        .then(response => {
          this.$router.push('/category')
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchDetailCategory () {
      const id = this.$route.params.id
      this.$store.dispatch('fetchDetailCategory', id)
        .then(response => {
          this.category = response.data
          this.name = response.data.name
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchDetailCategory()
  }
}
</script>

<style>

</style>
