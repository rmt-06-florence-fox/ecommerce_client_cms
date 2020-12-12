<template>
  <div class="container">
    <Navbar/>
    <div class="ui middle aligned center aligned grid">
      <div class="column">
        <h2 class="ui teal image header">
          <div class="content">
            Edit Banner
          </div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <label for="">Banner title</label>
              <input v-model="banner.title" type="text" name="title" placeholder="Banner title" required="required" autocomplete="current-title">
            </div>
            <div class="field">
              <label for="">Banner status</label>
              <select v-model="banner.status" name="status" placeholder="Banner status" required="required" autocomplete="current-status">
                <option value="On">On</option>
                <option value="Off">Off</option>
              </select>
            </div>
            <div class="field">
              <label for="">Image Link</label>
              <input v-model="banner.image_url" type="text" name="image_url" placeholder="Banner image link" required="required" autocomplete="current-link">
            </div>
            <div class="ui fluid large teal submit button" @click="editBanner" >Edit Banner</div>
          </div>
          <div class="ui error message"></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'EditFormBanner',
  components: {
    Navbar
  },
  data () {
    return {
      banner: {}
    }
  },
  methods: {
    getBanner () {
      const id = +this.$route.params.id
      this.$store.dispatch('fetchBannersById', id)
        .then(({ data }) => {
          this.banner = data
        }).catch((err) => {
          console.log(err)
        })
    },
    editBanner () {
      this.$store.dispatch('editBanner', this.banner)
    }
  },
  created () {
    this.getBanner()
  }
}
</script>

<style scoped>
  body {
    background-color: #DADADA;
  }
  body > .grid {
      height: 100%;
  }
  .image {
      margin-top: -100px;
  }
  .column {
      max-width: 450px;
  }
  .container {
    align-items: center;
  }
</style>
