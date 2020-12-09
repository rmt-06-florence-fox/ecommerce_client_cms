<template>
  <div class="row">
    <div class="col-4">
        <div class="card mt-5" style="width: 20rem;">
        <img :src="product.image" class="card-img-top mb-3" alt="image" style="width: 200px; height: 150px; margin-left:auto; margin-right: auto">
        <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Rp {{ product.price }}</p>
            <a href="#" class="btn btn-primary" @click.prevent="edit(product.id)">Edit</a>
            <a href="#" @click.prevent="erase(product.id)" class="btn btn-danger ml-3" >Delete</a>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    edit (id) {
      console.log(id)
      this.$store.dispatch('findOne', id)
        .then(({ data }) => {
          console.log(data)
          const payload = {
            id: data.id,
            name: data.name,
            price: data.price,
            description: data.description,
            image: data.image,
            stock: data.stock
          }
          this.$store.commit('SET_EDIT_INFO', payload)
          this.$router.push({ name: 'Edit', params: { id } })
        })
        .catch(err => console.log(err))
    },
    erase (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('erase', id)
            .then(() => {
              this.$store.dispatch('fetchProducts')
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch((err) => console.log(err))
        }
      })
    }
  }
}
</script>

<style>

</style>
