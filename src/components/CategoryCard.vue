<template>
  <div class="card col-md-6">
    <div class="m-1 p-0">
      <div class="card-body">
        <h5 class="card-title">{{category.name}}</h5>
        <a href="#" class="btn btn-primary mr-1" @click.prevent="edit(category.id)">Edit</a>
        <a href="#" class="btn btn-danger ml-1" @click.prevent="destroy(category.id)">Delete</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    edit (id) {
      this.$router.push('/editCategory/' + id)
    },
    destroy (id) {
      this.$store.dispatch('deleteCategory', id)
        .then(response => {
          this.$store.dispatch('getCategory')
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  }
}
</script>

<style>

</style>
