<template>
  <tr>
    <th scope="row">{{ i }}</th>
    <td><img :src="banner.image_url" :alt="banner.name" height="50px"></td>
    <td>{{ banner.title }}</td>
    <td><span v-if="banner.status == 'active'" class="badge badge-success p-1">{{ banner.status }}</span>
        <span v-else class="badge badge-danger p-1">{{ banner.status }}</span></td>
    <td><button @click="editBanner(banner.id)" class="btn btn-secondary mr-2"><i class="fas fa-edit"></i></button>
      <button @click="delBanner(banner.id)" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
  </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BannerItem',
  props: ['banner', 'i'],
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
