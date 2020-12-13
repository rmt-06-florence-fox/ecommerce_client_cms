<template>
    <div class="width-c mx-auto mt-3">
        <div class="container-sm">
            <div class="card">
                <img :src="data.image_url" class="rounded mx-auto d-block center-img" alt="imageProduct" width="400px" image>
                <div class="card-body pad-1">
                    <h5 class="card-title">{{ data.name }}</h5>
                    <p class="card-text m-1">Rp {{ data.price }}</p>
                    <p class="card-text mb-3">Stock: {{ data.stock }}</p>
                        <button class="button2" @click="getId(data.id)">Edit</button> ||
                        <button class="btn btn-danger button1" @click="deleteItem(data.id)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Product',
  props: ['data'],
  methods: {
    getId (id) {
      this.$router.push('/edititem/' + id)
    },
    deleteItem (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('deleteItem', id)
              .then(({ data }) => {
                this.$store.dispatch('fetchData')
                this.$router.push('/mainpage')
                Swal.fire(
                  'Deleted!',
                  'Your file has been deleted.',
                  'success'
                )
              })
              .catch(err => {
                console.log(err)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.button1 {
  border: 0px;
  padding-right: 0px;
  padding-left: 0px;
  width: 60px;
}
.button2 {
    width: 58px;
    height: 33px;
    padding: 0px;
}
.center-img {
    margin: 0px;
}
.width-c {
    width: 440px;
}
.pad-1 {
    padding: 4px;
}
</style>
