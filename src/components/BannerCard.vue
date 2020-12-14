<template>
  <div>
    <div class="row row justify-content-center">
      <div class="col-8">
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action mt-3">
            <div>
                <h5 class="mb-1">{{ banner.title }}</h5>
            </div>
            <div>
                <img :src="banner.image_url" style="width: 25%;">
            </div>
            <small>{{ banner.status }}</small>
            <div>
                <button class="btn btn-danger mt-3" @click="erase(banner.id)">Delete </button>
                <button class="btn btn-primary mt-3 ml-3" @click="edit(banner.id)">Edit </button>
            </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BannerCards',
  props: ['banner'],
  methods: {
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
          this.$store.dispatch('deleteBanner', id)
            .then(() => {
              this.$store.dispatch('fetchBanners')
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            })
            .catch((err) => console.log(err))
        }
      })
    },
    edit (id) {
      console.log(id)
      this.$store.dispatch('findOneBanner', id)
        .then(({ data }) => {
          console.log(data)
          const payload = {
            id: data.id,
            title: data.title,
            status: data.status,
            image_url: data.image_url
          }
          this.$store.commit('SET_EDIT_BANNER_INFO', payload)
          this.$router.push({ name: 'EditBanner', params: { id } })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>

</style>
