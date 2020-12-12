<template>
  <div class="banner-page">
    <navbar></navbar>
    <addBanner></addBanner>
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="(banner,i) in getBanner" :key="i">
        <tr>
          <th scope="row">{{i+1}}</th>
          <td><img class="img-top" :src="banner.image_url"></td>
          <td>{{banner.title}}</td>
          <td>{{banner.status}}</td>
          <td>
            <div class="button-action">
              <editBanner :banner="banner"></editBanner>
              <button class="btn-danger" id="btn-delete" @click="deleteBanner(banner)">delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import addBanner from '../components/addBanner'
import editBanner from '../components/editBanner'
import Swal from 'sweetalert2'

export default {
  name: 'banner',
  components: {
    navbar,
    addBanner,
    editBanner
  },
  data () {
    return {
    }
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    deleteBanner (Banner) {
      console.log(Banner)
      Swal.fire({
        title: 'Are You Sure Want To Delete?' + Banner.title,
        showDenyButton: true,
        confirmButtonText: 'Delete'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('delete success')
          this.$store.dispatch('deleteBanner', Banner.id)
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved')
        }
      })
    }
  },
  computed: {
    getBanner () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanner()
  }
}
</script>

<style>
.table {
  align-items: center;
  align-content: center;
}
.button-action {
  display: flex;
  justify-content: center;
}
#btn-delete {
  margin-left: 10px;
  width: 5vw;
  height: 3vw;
  font-size: 1.1vw;
}
.img-top {
  height: 5vw;
  width: 10vw;
}
</style>
