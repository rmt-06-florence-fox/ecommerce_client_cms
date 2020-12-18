<template>
    <div class="container">
        <form @click.prevent='addCategory'>
            <div class="mb-3">
                <label for="exampleInpuName1" class="form-label">Name Category:</label>
                <input v-model="name" type="text" class="form-control" id="exampleInputEmail1">
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
     </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
      return {
        name: ''
      }
  },
  methods: {
      addCategory () {
          let objCategory = {
              name: this.name
          }
         this.$store.dispatch('addCategory', objCategory)
           .then(data => {
              this.$router.push('/mainpage')
           })
           .catch(err => {
               console.log(err)
           })
      }
  }
}
</script>

<style>

</style>