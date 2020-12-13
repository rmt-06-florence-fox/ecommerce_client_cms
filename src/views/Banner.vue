<template>
  <div class="container">
  <h1 v-if="bannersData.data.length === 0">Oooppps.. belum ada banner</h1>
    <table v-else class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Banner</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(banner, i) in bannersData.data" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td><img style="height: 100px; width: 100%;" :src="banner.imageUrl" alt="image"></td>
          <td>{{ banner.title }}</td>
          <td>{{ banner.status }}</td>
          <td>
            <!-- <button class="btn btn-primary">Edit</button> -->
            <ModalUpdateBanner :bannerId="banner.id"></ModalUpdateBanner>
            <button class="btn btn-danger" @click="destroyBanner(banner.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalUpdateBanner from '../components/ModalUpdateBanner'
export default {
  name: 'Banners',
  components: {
    ModalUpdateBanner
  },
  methods: {
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    },
    destroyBanner (id) {
      this.$store.dispatch('destroyBanner', id)
        .then(_ => {
          this.$store.dispatch('fetchBanners')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.fetchBanners()
  },
  computed: {
    bannersData () {
      return this.$store.state.banners
    }
  }

}
</script>

<style>

</style>
