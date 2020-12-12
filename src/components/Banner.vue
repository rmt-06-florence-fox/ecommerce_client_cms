<template>
  <div>
    <div class="banner">
      <div class="col-1">
        <div class="banner-property banner-num">
          {{ no }}
        </div>
      </div>
      <div class="col-3">
        <div class="banner-property banner-image">
          <img id="banner-image" width="200px" :src="banner.image_url" />
        </div>
      </div>
      <div class="col-2">
        <div class="banner-property banner-name">{{ banner.title }}</div>
      </div>
      <div class="col-5">
        <div class="banner-property banner-status" id="banner-status">
          <a
            href="#">
            keaktifan banner
          </a>
        </div>
      </div>
      <div class="col-1">
        <button class="btn" @click="editBanner">
          <i class='far fa-edit' style='font-size:24px'></i>
        </button>
        <button class="btn" @click="deleteBanner">
          <i class="fa fa-trash-o"  style="font-size:24px "></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'Banner',
  data () {
    return {
      editBannerPayload: {
        id: ''
      }
    }
  },
  methods: {
    deleteBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Are you sure?',
          showCancelButton: true,
          confirmButtonText: 'Delete'
        })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Deleted!', '', 'success')
              return this.$store.dispatch('deleteBanner', this.banner.id)
            }
          })
          .then(() => {
            this.$store.dispatch('getBanners')
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    },
    editBanner () {
      if (this.$store.state.loggedIn) {
        Swal.fire({
          title: 'Enter banner title !',
          input: 'text',
          inputLabel: 'Banner title',
          inputValue: this.banner.title,
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'You need to write something!'
            }
          }
        })
          .then((result) => {
            this.editBannerPayload.title = result.value
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Enter banner image_url !',
                input: 'text',
                inputLabel: 'Banner image',
                inputValue: this.banner.image_url,
                showCancelButton: true,
                inputValidator: (value) => {
                  if (!value) {
                    return 'You need to write something!'
                  }
                }
              })
                .then((result) => {
                  if (result) {
                    this.editBannerPayload.image_url = result.value
                    this.editBannerPayload.status = this.banner.status
                  }
                  if (result.isConfirmed) {
                    return this.$store.dispatch('editBanner', this.editBannerPayload)
                  }
                })
                .then(() => {
                  this.$store.dispatch('getBanners')
                })
                .catch((err) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message + '!'
                  })
                })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        Swal.fire('Please login first')
      }
    }
  },
  props: ['banner', 'counter'],
  computed: {
    no () {
      return this.counter + 1
    }
  },
  created () {
    this.editBannerPayload.id = this.banner.id
  }
}
</script>

<style scoped>
#banner-image {
  border-radius: 40px;
  width: 100%;
  height: auto;
}
.icon:hover {
  color: black;
  transition: 300ms;
}

a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: black;
  transition: 300ms;
}

.fa {
  color: black
}

.fa:hover {
  color: #f6b93b;
}

.far:hover {
  color: #f6b93b;
}

.banner {
  align-items: center;
  background-color: #2f3640;
  display: flex;
  border-radius: 30px;
  font-size: 2em;
  justify-content: space-between;
  margin: 3px;
  padding: 10px;
  width: 99%;
}
.banner-property {
  font-size: 20px !important;
  color: white;
}

.fas:hover {
  color: #ff793f;
}
</style>
