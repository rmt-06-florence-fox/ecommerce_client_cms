<template>
<div>
  <br><br><br>
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
      <button type="button" class="btn btn-primary col-5 p-1 m-2 btn-add" @click.prevent="addCategory">Add Category</button>
      <button type="button" class="btn btn-danger col-4 p-1 m-2 btn-add" @click.prevent="cancel">Cancel</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    cancel () {
      this.$router.push('/category')
      this.name = ''
    },
    addCategory () {
      this.$store.dispatch('addCategory', this.name)
        .then(response => {
          this.name = ''
          this.$router.push('/category')
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
