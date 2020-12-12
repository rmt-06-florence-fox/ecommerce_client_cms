<template>
    <div
      class="card mb-3 col-md-2 mr-3">
      <img class="card-img-top" :src="banner.image_url" :alt="banner.name" />
      <div class="card-body">
      <h5 class="card-title">{{ banner.title }}</h5>
      <p class="card-text">
        <span v-if="banner.status == 'active'" class="badge badge-success p-1">{{ banner.status }}</span>
        <span v-else class="badge badge-danger p-1">{{ banner.status }}</span>
        </p>
      <button @click="editBanner(banner.id)" class="btn btn-secondary mr-2"><i class="fas fa-edit"></i></button>
      <button @click="delBanner(banner.id)" class="btn btn-danger"><i class="fas fa-trash"></i></button>
      </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BannerItem',
  props: ['banner'],
  methods: {
    editBanner (id) {
      this.$router.push('/banners/edit/' + id)
    },
    delBanner (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You wont be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#007bff',
        cancelButtonColor: '#af3838',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('delBanner', id)
        }
      })
    }
  }
}
</script>

<style>
</style>
